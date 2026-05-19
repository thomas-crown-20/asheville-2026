# Asheville 2026 — Interactive Trip Planner (PWA)

A mobile-first, installable, offline-capable trip planner. Started as a static
itinerary; rebuilt into a dynamic planner where choosing a hotel and assigning
restaurants/activities reflows the whole plan. Still a no-build, vanilla-JS app
you deploy by dropping files on a static host.

## What's in this folder

```
index.html          ← UI shell, design system (CSS), the picker <dialog>, tab bar
app.js              ← TRIP_DATA catalog + reactive store + slot model + renderers
manifest.json       ← PWA manifest (name, icons, theme color)
sw.js               ← service worker (offline cache — bump CACHE on every change)
icon-192/512.png    ← PWA icons
CLAUDE_CODE_PLAN.md ← the phased rebuild plan (history + remaining/optional work)
.claude/launch.json ← local preview server config (python http.server on :8765)
```

## Quick local test

```bash
cd /path/to/this/folder
python3 -m http.server 8000
# open http://localhost:8000 on your phone or browser
```

⚠️ PWAs need HTTP — opening `index.html` from the filesystem won't register the
service worker. On your phone, hit `http://<your-computer-IP>:8000` over the same
WiFi to test install + the native time picker + the share sheet.

> Service-worker gotcha: after editing files, the old SW serves cached copies.
> **Bump the `CACHE` constant in `sw.js`** (e.g. `avl-2026-v9` → `v10`) so
> installed devices pick up changes. In a desktop browser, DevTools →
> Application → Service Workers → Unregister, then hard-reload.

## Deploy to GitHub Pages

1. Create a repo, drop all files in the root.
2. Settings → Pages → Source → Deploy from branch → `main` / root → Save.
3. Open `https://YOUR-USER.github.io/REPO/` on your phone → Add to Home Screen
   (Safari) or Install (Chrome). Works offline after first load.

---

## How the dynamic planner works

### Two layers: catalog vs. plan

- **Catalog** (`TRIP_DATA` in `app.js`) — the read-only library: `lodging`,
  `restaurants`, `treats`, `activities`, plus drive/budget/packing/contacts.
  Every restaurant/treat/activity/hotel has a stable `id`, a `neighborhood`,
  and (for food) `mealTypes`.
- **Plan** (`STORE.state.plan`) — the user's choices, layered on top:
  ```js
  plan = {
    hotelId: 'ac-biltmore',           // single selected hotel
    slots: [ /* the itinerary, see below */ ],
    customHotels: [ /* user-added */ ]
  }
  ```

### Slots — the itinerary is data, not prose

`SEED_SLOTS` defines the starting itinerary. Each slot:

```js
{
  id: 'd2-1830', day: 2, time: '6:30 PM', durationMin: 90, locked: false,
  kind: 'meal',                 // meal | activity | drive | rest | fixed
  mealType: 'dinner',           // for meals: breakfast|brunch|lunch|dinner|dessert
  ref: 'restaurant:bears-smokehouse', // catalog reference (or null = "Tap to choose")
  reservation: 'needed',        // optional: needed|confirmed|walkin
  note: '...'                   // optional callout
}
```

Renderers resolve `ref` against the catalog at draw time, so changing a pick or
the hotel updates the displayed detail, proximity ("walk vs. drive"), etc.

### Reactive store

`STORE` is a tiny pub/sub state container (`get`/`set`/`update`/`subscribe`).
Mutations auto-persist to `localStorage` (key `avl_state_v2`) and notify
subscribers, which re-render only the affected sections. First load migrates
the old `avl_favs` / `avl_checks` / `avl_theme` keys.

### What drives what

- **Pick a hotel** (★ on the Stay tab) → sets `plan.hotelId` → every slot's
  "walk vs. N-min drive" recomputes (via `proximity()` + `NEIGHBORHOOD_GRAPH`),
  the restaurant picker re-sorts (closest first), an advisory note appears on
  the Plan tab (`HOTEL_RULES`), and the Info front-desk contact updates.
- **Assign a restaurant/activity** — two ways:
  - *Pull:* tap a slot on the Plan tab → bottom-sheet picker, filtered by meal
    type, sorted by proximity.
  - *Push:* "＋ Add to plan" on an Eat/Do card → pick which slot. Assigned cards
    show a "→ Mon Lunch" chip that jumps back to the slot.
- **Edit a time** — tap it → native time picker. Unlocked, later, same-day
  slots cascade by the delta. **Lock** (🔒) a slot to anchor it.
- **Reservations** — tap the chip on lunch/dinner slots to cycle
  need-to-book → booked → walk-in.
- **Now/Next** — during the trip dates, the Plan tab dims past slots,
  badges the current/next one, and auto-scrolls to today.

### Sharing (no backend)

The Share button (header) serializes the plan to a compact, version-tagged
base64url payload in the URL hash (`#p=...`), via `navigator.share` or
clipboard. Opening such a link merges the shared choices onto the recipient's
own `SEED_SLOTS` and saves them locally. One editor, everyone views — see
`CLAUDE_CODE_PLAN.md` Phase 6b for the optional auto-syncing (GitHub Gist)
upgrade if you want a single link that updates without re-sharing.

---

## Reuse for the next trip

Everything is data-driven. To re-seed:

1. `TRIP_DATA.trip` — name, dates, party, origin/destination.
2. `TRIP_DATA.lodging / restaurants / treats / activities` — keep the shape
   (`id`, `neighborhood`, `mealTypes` for food). Add neighborhoods to
   `NEIGHBORHOOD_GRAPH` and a line to `HOTEL_RULES` for each hotel base.
3. `SEED_SLOTS` — the day-by-day itinerary referencing catalog ids.
4. `TRIP_DAY_DATES` — map day numbers to real dates (powers Now/Next).
5. `TRIP_DATA.drive / budget / packing / alzTips / contacts` — supporting data.
6. `index.html` hero copy + `<meta>`/OG tags; `manifest.json` name; icons.
7. Bump `sw.js` `CACHE`.

Design system is untouched: edit the CSS variables in `:root` (the four colors
re-theme everything) and the Google Fonts (Fraunces / Inter Tight / JetBrains
Mono).

## Accessibility notes

- Native `<input type="time">` for time edits (good VoiceOver support).
- Picker uses `<dialog>` (focus trap + Escape built in).
- Active tab carries `aria-current`; `prefers-reduced-motion` disables
  animations and smooth scroll.

## Trip-specific reminders baked in

- Cincinnati Zoo membership → ask about the reciprocal discount at the WNC
  Nature Center gate (no longer advertised online — verify).
- Biltmore 65+ discount is Tue/Wed — verify current-year terms.
- Some seed picks were corrected after a 2024–2025 closure audit (Buxton Hall
  closed; Rhubarb closed Tue; 12 Bones now Arden-only). See `CLAUDE_CODE_PLAN.md`.
- Built around an Alzheimer's-aware rhythm: mornings for main events, afternoon
  rest, early evenings. Full tips on the Info tab.

---

Built for Nick · 2026
