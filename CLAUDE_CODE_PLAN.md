# Asheville '26 — Rebuild Plan

A staged rebuild of the seed PWA from a hand-authored itinerary into a real
interactive planner. Each phase is independently shippable: the app keeps
working after every phase, never half-broken.

## Guiding constraints

- **No build step.** Stay vanilla JS, deploy by pushing 7 files to GitHub Pages.
- **Preserve the seed.** Visual design, copy, TRIP_DATA research, PWA install,
  offline service worker, bottom tab nav — none of this changes shape.
- **Plan state is layered on top.** The existing catalog (hotels, restaurants,
  activities, treats) becomes the read-only library. A new `plan` object holds
  user selections. Render functions resolve refs at draw time.
- **Share by URL hash, not backend.** One person formulates; everyone opens
  the same link.

---

## Phase 0 — Small fixes (no rebuild)

Land these first so they ship even if the rebuild stalls.

1. Hero "Vol. 01 · Trip Journal" / "Est. 2026" — wrap `.hero-top` with
   `padding-top: env(safe-area-inset-top)` so it clears the iPhone notch.
2. Change party copy "Four travelers / One SUV" → "Four travelers / One minivan"
   in both `index.html` (hero meta) and `app.js` (`TRIP_DATA.trip.party`,
   `renderDrive` references, budget gas note).
3. Tab switches feel inert — `switchTab` only scrolls the window. Add:
   - A short fade-in is already wired via `.section.active` animation; make
     sure the body actually scrolls past the hero on first tab tap (currently
     hero is the first 100svh; switching tabs while at the top doesn't visibly
     move). Scroll to the `<main>` offset instead of `0`.
   - Brief active-state visual (the tab pill already does this; verify on iOS).
4. Bump `sw.js` cache version so the fixes actually reach installed devices.

**Done when:** safe-area inset is respected, copy reads "minivan", tapping a
tab visibly transitions you into the section and out of the hero.

---

## Phase 1 — Catalog refactor (IDs + neighborhoods + meal types)

Make every catalog record referenceable.

1. Add stable `id` to every hotel, restaurant, activity, treat. (Hotels already
   have ids; restaurants/activities/treats need them — kebab-case from name.)
2. Add `neighborhood` to every restaurant, activity, treat, and hotel:
   `biltmore-village`, `downtown`, `west-asheville`, `south-asheville`,
   `east-asheville`, `river-arts`, `south-slope`, `north-asheville`,
   `arden`, `black-mountain`, `parkway`, `on-biltmore-grounds`.
3. Add `mealTypes: ['breakfast'|'lunch'|'dinner'|'brunch'|'dessert']` to every
   restaurant + treat.
4. Build a `NEIGHBORHOOD_GRAPH` constant — for each hotel, list:
   - `walkableTo: [neighborhoods]`
   - `driveMinutesTo: { [neighborhood]: minutes }`
   This is small (~5 hotels × ~11 neighborhoods) and hand-authored.
5. Add helper `proximity(hotelId, item)` → `{ kind: 'walk'|'drive', minutes }`.
   Used everywhere we currently say "5-minute walk to dinner" or "10 min drive".

**Done when:** the existing render functions still produce identical output,
but every catalog record has an id, every restaurant has meal types, and
`proximity()` returns sensible values for the AC vs. Homewood vs. cabin.

---

## Phase 2 — Reactive store

Introduce the state management layer without changing any rendered output yet.

1. Add a `Store` module: holds `state`, exposes `get(path)`, `set(path, value)`,
   `subscribe(section, fn)`. ~60 lines.
2. Migrate existing `STATE.favs` and `STATE.checks` into the store. Persistence
   hook calls `localStorage.setItem` on any mutation, debounced.
3. Add `state.plan = { hotelId, slots: [] }`. Seed `hotelId` from
   `lodging.find(h => h.featured).id` (currently `ac-biltmore`).
4. Add `state.ui = { activeTab, modal: null }`. Migrate `STATE.current` and
   modal flags here so we have one source of truth.
5. Re-wire `switchTab`, fav toggle, and check toggle to go through the store.

**Done when:** behavior is unchanged but DevTools shows a single store object,
mutations are visible there, and re-renders are explicit.

---

## Phase 3 — Itinerary becomes dynamic slots

Convert hand-written `itinerary[].items[]` into typed slots that reference
catalog records.

1. Define slot shape:
   ```js
   {
     id: 'd2-0800',          // stable id, day-time based
     day: 2,                 // 1..4
     time: '8:00 AM',        // editable
     durationMin: 60,        // soft hint, used for cascade
     locked: false,          // anchors
     kind: 'meal' | 'activity' | 'drive' | 'rest' | 'fixed',
     // for 'meal' / 'activity':
     mealType?: 'breakfast'|'lunch'|'dinner',
     ref?: 'restaurant:biscuit-head',   // canonical ref
     // for 'fixed' / 'drive' / 'rest':
     title?: string,
     detail?: string,
     note?: string
   }
   ```
2. Seed `state.plan.slots` by transcribing the existing 4-day itinerary —
   every meal becomes `{kind:'meal', ref:'restaurant:…'}`, every Biltmore /
   Parkway / Arboretum / Black Mountain item becomes `{kind:'activity'}`, the
   drive segments and "back to the hotel · rest" items become `fixed`/`rest`.
3. Set `locked: true` on the small list of true anchors:
   Sun 11:30 Church, Sun 12:00 Depart, Sun 5:30 Arrive, Tue 9:00 Biltmore
   check-in, Wed 10:30 Depart for Hilton Head. Everything else flexible.
4. Rewrite `renderPlan()`:
   - Resolve each slot's ref against the catalog.
   - Show `time` as a tappable button (opens time picker).
   - Show a lock toggle next to time (🔒 / 🔓).
   - For `kind:'meal'`, show "Tap to change restaurant" affordance.
   - For `kind:'activity'`, same with activity swap.
   - Compose the detail line dynamically: pull `restaurant.desc` or
     `restaurant.tagline`, then append proximity context
     ("·  Walk from your hotel" or "· 10 min drive").
5. Implement the cascade: editing an unlocked slot's time shifts later
   unlocked same-day slots by the delta. Locked slots anchor. Flag conflicts.

**Done when:** the Plan tab renders identical content to before, but every
time is tappable, every meal/activity is swappable, and locks work.

---

## Phase 4 — Restaurant + activity swap UI (two-way)

Assignment works in both directions: pulling a restaurant *into* a meal
slot from the Plan tab, and pushing a restaurant *out to* a slot from the
Eat tab.

### Pull flow (Plan → Eat)

When you're in the Plan tab and want to fill or change a meal:

1. Build a `<dialog>`-based bottom-sheet modal. Picks up the seed's design
   system (Fraunces / accent / line tokens) so it doesn't feel grafted on.
2. On tap of a `meal` slot:
   - Filter `restaurants + treats` by `mealType` matching the slot.
   - Sort by `proximity(state.plan.hotelId, item)` — walk first, then drive
     ascending.
   - Show each as a compact card with name, neighborhood badge, proximity
     chip ("4 min walk" / "10 min drive"), tags, price.
3. Tap a card → updates `slot.ref` → closes modal → re-renders Plan tab.
4. Same pattern for `activity` slots, filtered by activity catalog.
5. Add an "Unset" option to revert to the seeded default.

### Push flow (Eat → Plan)

When you're browsing the Eat tab and a restaurant catches your eye:

1. Each restaurant/treat/activity card gains a small **"+ Add to plan"**
   action button (alongside ★ Map / Call / Site). On unstarred cards this
   reads "Add to plan"; on cards already assigned to a slot it reads
   "Assigned: Mon lunch" with a chevron to change/remove.
2. Tap "+ Add to plan" → bottom-sheet modal opens showing the *open*
   meal/activity slots that match the item:
   - For a restaurant tagged `mealTypes: ['lunch']`, show only lunch slots.
   - For a multi-meal restaurant (e.g. Tupelo Honey), show all matching
     slots across all days.
   - For an activity, show activity slots and any flexible blocks the
     user could repurpose.
3. Modal entries look like: "Mon · 12:30 PM · Lunch  *(currently: Pisgah
   Inn)*" — so the user sees what they'd be replacing.
4. Tap a slot → updates `slot.ref` → closes modal → toast "Added to Mon
   lunch" with an "Undo" button.
5. Visual feedback in the Eat tab: assigned items get a subtle accent
   underline + a small chip "→ Mon lunch" so you can see at a glance
   which restaurants are already in the plan.

### Shared

- ★ favorite is independent from "assigned to a slot" — favorites are
  personal bookmarks, assignments are plan slots.
- A single restaurant can fill multiple slots (e.g. Biscuit Head for both
  Mon and Tue breakfast). Slot-side is canonical: each slot has one ref,
  but a ref can appear in many slots.
- Removing an assignment from a slot reverts that slot to its seeded
  default (or "Tap to choose" if no default).

**Done when:** I can browse the Eat tab, tap "Add to plan" on Buxton Hall,
pick "Mon dinner," and see it appear in the Plan tab with the proximity
context updated. *And* I can go to Plan, tap "Tue 12:30 lunch," swap from
Stable Café to a different lunch spot, and see it update.

---

## Phase 5 — Hotel selection drives the plan

Make "select this hotel" the keystone action that reflows everything.

1. On `.lodging-card`, repurpose the existing ★ button as a *single-select*
   for hotels only (one star at a time = the chosen hotel). Tapping a
   different hotel's ★ moves the selection. Visually distinguish the
   selected hotel (already styled via `.recommended` — reuse that treatment
   for whichever hotel is currently selected, dropping it from the seed
   default once the user picks).
   - Restaurants / activities keep multi-select ★ for bookmarking — separate
     store path (`state.bookmarks`), separate visual no change.
2. **Custom hotels.** Add a "+ Custom hotel" card at the bottom of the Stay
   tab. Form fields: name (required), address (optional, populates Maps
   link), neighborhood (dropdown of the same set used in Phase 1, with
   "Other" → uses a generic 10-min-drive proximity fallback), notes.
   - Persists to `state.plan.customHotels[]` so it ships in the share link.
   - Custom hotels appear in the same list as seeded ones, ★-selectable
     the same way.
   - Edit and delete affordances on the custom card only.
3. Setting `state.plan.hotelId`:
   - Re-renders Plan (proximity strings change).
   - Re-renders Overview (the "we're staying at *X*" line changes).
   - Re-renders Info (emergency contacts: front desk number updates if a
     hotel phone is known; custom hotels with no phone just omit it).
   - Re-renders restaurant picker filters next time it opens.
4. Hotel-driven scheduling tweaks:
   - **AC / Courtyard / Residence Inn / Homewood**: Day 1 arrival 5:30–6:00 PM,
     dinner at Corner Kitchen feels right.
   - **VRBO cabin (Arden)**: add ~20 min to Day 1 arrival and Day 4 departure
     drive times; suggest cabin dinner-in for Day 1 with a deli stop on the
     way; Tue Biltmore breakfast happens at the cabin not the hotel buffet.
   - **Custom (unknown neighborhood)**: no scheduling tweaks; default to the
     seeded times and "drive" proximity labels.
   - Express these as a small `HOTEL_RULES` table, not hardcoded everywhere.
5. Update the "Why this works" callouts on Overview to reference the actual
   selected hotel's amenities (pool, breakfast, kitchen, etc.) when known.

**Done when:** clicking between AC / Homewood / Cabin / a custom-added hotel
visibly changes the Plan tab text, the restaurant picker order, and the
Overview prose.

---

## Phase 6a — Share by URL hash (zero-infra, manual)

Ship a working share story before standing up any backend. Anyone who taps
this version's link sees the plan as it was the moment Nick shared.

1. Serialization: `serializePlan(state.plan) → minimal JSON → base64url`.
   Strip defaults (don't serialize fields equal to the seed values) to keep
   URLs short. Target: under 2KB for a fully-customized 4-day plan.
2. Add a **Share Plan** action in the header (next to theme toggle) or as a
   tile on Overview. On tap:
   - Builds URL: `location.origin + location.pathname + '#p=' + encoded`.
   - Calls `navigator.share({ url })` on iOS / Android.
   - Falls back to `navigator.clipboard.writeText(url)` + a toast.
3. On page load: if `location.hash` starts with `#p=`, decode → validate →
   `state.plan = decoded`. Show a small banner: "Viewing Nick's shared plan ·
   *Make a copy*" — "Make a copy" clears the hash and writes to localStorage.
4. Versioning: include `v: 1` in the serialized payload so future schema
   changes can migrate or refuse old links.

**Done when:** building a plan on phone A, tapping Share, opening the link on
phone B shows the same plan; B can favorite their own items locally without
affecting A. (Phase 6b will make the *same* link auto-update when A edits.)

---

## Phase 6b — Auto-syncing via GitHub Gist (deferred)

**Deferred by default.** Ship through Phase 6a (URL-hash + manual re-share)
and use it for a week or two. Only build this if the manual re-share
friction becomes real. Everything below can be added without touching
phases 0–5.

Goal: same view-only-via-link UX as 6a, but the *same link* keeps showing
the latest plan after Nick edits. No second platform — everything stays in
the GitHub ecosystem you already use for hosting.

### One-time owner setup (a guided wizard in the app)

1. App shows a "Connect auto-sync" panel in settings/Info tab. The wizard:
2. Walks owner through generating a **fine-grained PAT** at
   github.com/settings/personal-access-tokens/new:
   - Name: `Asheville trip planner`
   - Expiration: *No expiration* (or 1 year — fine-grained PATs allow both)
   - Account permissions → **Gists: Read and write** (this is the only
     permission needed; no repo access)
3. Walks owner through creating a public gist at gist.github.com with a
   single file `plan.json` containing `{}`. They copy the gist id from the
   URL.
4. Owner pastes both into the app. PAT stored only on this device, in
   localStorage. Gist id ships in the share URL.
5. App immediately does a PATCH to verify it works, then a GET to verify
   the raw URL is reachable.

### Frontend changes (in the PWA)

1. `state.sync = { gistId, pat, mode: 'owner'|'viewer', lastSavedAt }`.
   PAT presence is what makes you an owner; viewers never see it.
2. **Share URL** becomes `…/#g=<gistId>` (~32-char short form).
3. **Loading on viewer device:**
   - On load, if `#g=<id>` present and no PAT in localStorage → `mode:
     'viewer'`.
   - Fetch the raw gist URL with a cache-buster:
     `https://gist.githubusercontent.com/<user>/<id>/raw/plan.json?_=<ts>`.
     The query string defeats the gist CDN's ~few-minute cache.
   - Cache result locally for offline. Show a small "Last updated 2 min
     ago" tag near the header.
4. **Auto-refresh (viewer):** on `visibilitychange → visible` and `online`
   events, refetch (debounced to once per 30s). Pull-to-refresh on the
   Plan tab also refetches.
5. **Editing (owner):** every plan mutation triggers a debounced PATCH to
   `https://api.github.com/gists/<id>` (~2s after last edit), payload
   `{ files: { 'plan.json': { content: JSON.stringify(plan) } } }`,
   `Authorization: Bearer <PAT>`. Tiny "Saving… / Saved" indicator.
6. **Offline (owner):** queue mutations locally; flush on `online`.
   Conflict model: PAT-holder is canonical, last write wins. (Realistically
   only one person has the PAT, so no real conflicts.)
7. **Backward compat with 6a:** `#p=<base64>` keeps working as embedded
   plan. `#g=<id>` triggers the gist path. Different prefix, same URL
   shape.

### Why this over Cloudflare Worker + KV

- Zero new platforms — you're already on GitHub.
- Owner-vs-viewer asymmetry maps onto a real auth boundary (the PAT)
  instead of an invented edit token.
- Fine-grained PAT scoped only to `gists:write` is a known-safe artifact.
- Free tier is effectively unlimited (5K GitHub API req/hr authenticated
  is way past anything four people on a trip would generate).

### Known caveats

- Gist raw URLs are CDN-cached for a few minutes. Cache-busting via query
  string is reliable but worth verifying empirically before relying on it.
- The PAT setup wizard is uglier UX than a one-click signup. We can soften
  this with screenshots in the wizard.
- If GitHub ever revokes/changes the gist API, falling back to 6a-style
  hash share is a one-flag change.

**Done when:** Nick edits a meal. Wife pulls to refresh and sees the
change within seconds. Both go offline; both still see the last synced
version. Everyone shares one URL forever; only Nick can change what it
points at.

---

## Phase 7 — Polish, test, ship

1. **Service worker cache bump.** Every phase that lands should bump the
   version constant in `sw.js`. Confirm installed devices pick up updates.
2. **Offline test.** Airplane mode after first load: every tab still renders,
   share link still produces a URL, hotel switches still reflow.
3. **iMessage path.** Send the share URL to yourself; verify it opens
   correctly from Messages on iOS (Safari and Chrome both — different PWA
   behavior).
4. **Accessibility pass.** All swap targets are real buttons. Time picker
   uses `<input type="time">` so iOS / VoiceOver get native controls. Lock
   toggle is announced as a switch.
5. **Reduced motion.** Modal animation honors `prefers-reduced-motion`.
6. **Edge cases:**
   - Cascade past a locked item → conflict banner, don't silently overrun.
   - User picks a restaurant that's only open for lunch into a dinner slot
     → either filter prevents it, or warn.
   - Share link with unknown ref (deleted catalog item) → graceful fallback
     to "Tap to choose".

**Done when:** a clean run-through from the home screen icon — pick hotel,
tweak three meals, lock arrival, share to wife — completes without bugs,
offline.

---

## Optional enhancements (recommended, ordered by leverage)

Not part of the core rebuild, but each is small and adds real value. Pick
off after the must-haves are stable.

### High-value, low-effort

1. **"Now / Next" awareness during the actual trip.** When the device clock
   is inside the trip window, the Plan tab default-scrolls to today's day
   card and highlights the slot closest to *now* (and the next upcoming
   one). Slots in the past dim slightly. Two reasons this is worth it:
   it makes the app *useful* on the trip itself, not just for planning;
   and it's ~30 lines once we have slot times in state.

2. **Live weather via Open-Meteo.** The current weather strip is hardcoded
   "late June averages." Replace with a real fetch to
   `api.open-meteo.com/v1/forecast?latitude=35.59&longitude=-82.55&...`.
   Free, no API key, no auth. Cache the result for a day in localStorage.
   In the week before the trip the strip becomes a real forecast; outside
   that window, falls back to the hardcoded average. Tiny win, big
   credibility boost on first open.

3. **Reservation status chips on meal slots.** Add `reservation: 'needed' |
   'confirmed' | 'walk-in'` to each meal slot. Render as a small chip:
   "🟡 Need to book" / "🟢 Confirmed" / "Walk-in." Tap to cycle. Nick can
   sweep through the dinner slots and know at a glance what still needs a
   phone call. Persists in plan state, ships in the share link.

4. **Travel-time chip between consecutive slots.** Between two slots in
   the same day, show a small "↓ 8 min drive" or "↓ 4 min walk" derived
   from `proximity(slotA.ref.neighborhood, slotB.ref.neighborhood)`. This
   is the real reflow signal — switching the hotel from AC to the cabin
   makes those chips visibly change, which sells the whole dynamic-plan
   concept on first interaction.

5. **OpenGraph meta tags for iMessage previews.** When you paste the share
   URL into iMessage / WhatsApp / Slack, it should show a rich card with
   the trip name, dates, and a thumbnail (we can repurpose `icon-512.png`).
   ~5 lines in `<head>`. Makes the link feel like a real product to family
   members opening it cold.

### Medium-value

6. **Print stylesheet / printable plan.** A `@media print` block that
   renders all 4 days on 1–2 sheets, no nav, no buttons, large legible
   type. Useful for mom-in-law if she'd rather hold paper; useful for
   tucking into the dashboard. Maybe 60 lines of CSS.

7. **"Add to Calendar" .ics export.** A button on each day that generates
   a downloadable `.ics` file with that day's slots as calendar events.
   Family can import into iCal/Google Cal so the day appears in their
   normal "today" view. The PWA is the source of truth; calendar is a
   one-way mirror.

8. **Viewer-mode banner + "Last updated."** When loaded as a viewer (no
   PAT), show a slim banner: "Viewing Nick's plan · last updated 12 min
   ago · pull to refresh." Removes the "wait, is this current?" anxiety.
   Free once 6b ships.

### Maybe-later

9. **Cross-linking across tabs.** Tap a restaurant name in the Plan tab
   → jumps to its full card in the Eat tab. Tap the hotel name in
   Overview → jumps to its Stay card. Improves discoverability of the
   detail content we already have. ~40 lines.

10. **"Push everything back 30 minutes" button.** During the trip itself,
    one tap shifts all remaining unlocked slots in the current day by a
    fixed delta. Useful when running late from breakfast and don't want
    to manually edit five times.

11. **Photo per meal/activity (single-image).** A small thumbnail in each
    card makes the plan more emotionally resonant — and helps mom-in-law
    recognize where she's going. Big content lift (sourcing usage rights,
    hosting), so I'd defer unless you want to invest.

### Skip — not worth it for this trip

- Native iOS share target (capturing shared URLs into the app). Complex
  for marginal value.
- Push notifications when the plan changes. Adds a service-worker dance
  and an opt-in flow for a 4-person trip.
- Live receipt/budget tracking. The static budget estimate is fine.
- Map view with real geo (Mapbox / Leaflet). The mini-map SVG carries
  enough vibe; we don't need real routing.

---

## Out of scope (parking lot)

- Multi-trip support / templating for next year's trip. The README already
  documents how to re-seed `TRIP_DATA`; we'll preserve that.
- Editing the *seeded* catalog from the UI (adding a restaurant on the fly
  the way we do for custom hotels). Restaurants/activities stay code-edited.
- Write-token permissioning on the Worker (only escalate if a clobber
  actually happens).
- Live collaboration / WebSockets / real-time merge. Phase 6b's
  refresh-on-focus model is plenty for a family of four.
- Map view (actual Mapbox/Leaflet). The mini-map SVG suffices.

---

## Phase ordering rationale

- Phase 0 lands user-visible wins immediately, before any architectural risk.
- Phases 1–2 are infrastructure with zero visible change; if I get them wrong,
  the app keeps looking right while the rebuild stalls.
- Phase 3 is the biggest single jump; everything after is additive.
- Phase 5 (hotel-drives-plan) intentionally comes *after* 4 (swap UI) because
  hotel rules are easier to verify once swapping already works.
- Phase 6a (share) last among features because the serialization format
  shouldn't be locked in until the schema is stable.
- Phase 6b (Gist sync) is *deferred* by default, not just last. 6a is the
  bottom-up share story; 6b only gets built if manual re-share friction
  proves real. Building 6b later doesn't invalidate anything from 0–6a.
- Optional enhancements are ordered by leverage, not chronology. Pick
  whichever calls to you after the core is stable. The "Now / Next"
  awareness and live weather are the two I'd grab first — they turn the
  app from a planning tool into a *trip-day companion* with almost no
  added complexity.
