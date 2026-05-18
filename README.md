# Asheville 2026 — Trip PWA

A mobile-first, installable, offline-capable trip plan. Built as a single-file template so you can reuse it for future trips.

## What's in this folder

```
index.html      ← the entire UI (HTML + CSS)
app.js          ← all trip data + render logic
manifest.json   ← PWA manifest (name, icons, theme color)
sw.js           ← service worker (offline cache)
icon-192.png    ← PWA icon (small)
icon-512.png    ← PWA icon (large, also used for "maskable" mode)
```

## Quick local test

```bash
cd /path/to/this/folder
python3 -m http.server 8000
# open http://localhost:8000 in your phone or browser
```

⚠️  PWAs need to be served over HTTP — opening `index.html` directly from the file system will not register the service worker.

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g., `asheville-2026`).
2. Drop all six files in the root.
3. **Settings → Pages → Source → Deploy from branch → main / root → Save.**
4. After ~30 seconds, your URL will be `https://YOUR-USER.github.io/asheville-2026/`.
5. Open that URL on your phone, then tap **"Add to Home Screen"** (Safari) or **"Install app"** (Chrome).

Once installed, it works fully offline.

## Reuse for the next trip

Everything you'd change is in `app.js`, inside the `TRIP_DATA` object at the top. Swap:

- `TRIP_DATA.trip` — name, dates, party
- `TRIP_DATA.drive.steps` — route legs
- `TRIP_DATA.lodging` — hotels (set `featured: true` on your top pick)
- `TRIP_DATA.itinerary` — day-by-day timeline
- `TRIP_DATA.restaurants` and `TRIP_DATA.treats` — food
- `TRIP_DATA.activities` — things to do
- `TRIP_DATA.budget` — line items
- `TRIP_DATA.packing` — checklist
- `TRIP_DATA.contacts` — emergency numbers
- Any of the prose copy in the render functions below

In `index.html`, you'd also want to update:

- The hero title (`Asheville` → your destination, `by ridge & river` → your tagline)
- `<meta>` tags (title, description, theme-color)
- `manifest.json` (name + short_name)
- The icons (regenerate with same colors or new)

That's it — keep the design system, layout, tabs, and interactions; just swap the data.

## How it works (the key interactions)

- **Tabs** swap which `<section>` is visible (single-page, no routing)
- **Favorites** (★ buttons) toggle and save to `localStorage`
- **Packing checks** save to `localStorage` — your progress persists across sessions
- **Theme toggle** (top right) flips light/dark, saves preference
- **Map links** auto-open Google/Apple Maps using the device default
- **Phone numbers** use `tel:` links for one-tap calling
- **Service worker** caches everything on first load — works offline thereafter
- **PWA install prompt** appears 4 seconds after first load if the browser supports it

## Browser support

- iOS Safari 14+ (PWA install via "Add to Home Screen")
- Chrome / Edge / Brave / Samsung Internet (full PWA support, native install prompt)
- Firefox (works but no install prompt on iOS; works as installable PWA on Android)

## Customizing the design

Almost all the visual choices live in CSS variables at the top of `index.html` (the `:root` block):

```css
--accent: #b8541c;  /* clay / sunset — the main accent */
--moss: #2d4a3e;    /* deep moss — secondary accent */
--bg: #f5f1e8;      /* warm paper background */
--ink: #1c2820;     /* primary text */
```

Change those four colors and the whole app re-themes.

Fonts are loaded from Google Fonts at the top of `<head>`:

- **Fraunces** (display serif, with italic + variable axes)
- **Inter Tight** (body sans)
- **JetBrains Mono** (small caps labels and badges)

---

Built for Nick · May 2026
