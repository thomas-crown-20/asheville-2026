# Smokies & Blue Ridge 2026 — Trip PWA

A mobile-first, installable, offline-capable trip plan for our Gatlinburg + Asheville trip, Jul 18-25, 2026.

## What's in this folder

```
index.html      ← the entire UI (HTML + CSS)
app.js          ← all trip data + render logic (TRIP_DATA object at top)
manifest.json   ← PWA manifest (name, icons, theme color)
sw.js           ← service worker (offline cache — bumped to v2)
icon-192.png    ← PWA icon (small)
icon-512.png    ← PWA icon (large / maskable)
```

## Deploy to GitHub Pages (updating your existing repo)

If you already have the previous PWA on GitHub Pages, just replace the same 6 files in your repo:

1. Open your repo on github.com
2. For each file: click the file → pencil icon (edit) → paste new contents → **Commit**
   - Or drag-and-drop all 6 files at once via "Add file → Upload files"
3. Pages will rebuild automatically. Give it 30-60 sec.
4. **Important:** because the service worker changed (`avl-2026-v2`), phones with the old version installed will pick up the new content automatically on next open — but tell everyone to close the app once and reopen it. Or hard-refresh in the browser.

## Fresh Netlify Drop deploy (no account, 10 seconds)

If GitHub is being tricky: https://app.netlify.com/drop — drag the whole folder onto the page and you get a live URL instantly.

## What's new since the last version

- **New dates:** Jul 18–25, 2026 (was late June)
- **8 travelers** (was 4) — 6 adults + 2 teens
- **Route:** Home → Gatlinburg (Sat 18) → West Asheville Airbnb (Sun 19 – Sat 25)
- **Airbnb confirmed:** 129 Climbing Aster Way, West Asheville (booking `HMEQTT4FZM`)
- **Confirmed picks:** Biltmore Tue, Pack's Tavern, Hole Doughnuts, Mad Dog's Creamery (Gatlinburg)
- **New activities added** for teens: Sliding Rock, French Broad tubing, Chimney Rock, Ober Mountain, Gatlinburg SkyLift
- **Removed:** Alzheimer's-aware tips section (no longer needed)
- **Fixed:** hero now respects the phone status bar; tab switches now scroll to visible content
- **Grill night** (Wed) and **sandwich lunches** (Thu) built into the plan

## Reuse for the next trip

Everything you'd change is in `app.js`, inside the `TRIP_DATA` object at the top. Swap `trip`, `drive`, `lodging`, `itinerary`, `restaurants`, `treats`, `activities`, `budget`, `packing`, `contacts` and you have a new trip.

Design tokens (colors, fonts) live in the `:root` block at the top of `index.html`.

---

Built for Nick · Jul 2026
