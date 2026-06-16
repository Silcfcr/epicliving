# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

No test suite is configured.

## Architecture

React 18 SPA with React Router v6 and CSS Modules, bundled by Vite. Deployed to GitHub Pages at `/<base>/epicliving/` — every push to `main` redeploys automatically via `.github/workflows/deploy.yml`.

**Routing** — `App.jsx` wraps everything in `<BrowserRouter basename={import.meta.env.BASE_URL}>`. The base is `/epicliving/` (set in `vite.config.js`). A `<ScrollToTop>` component inside the router resets scroll position on every navigation.

**Routes:**
- `/` → `Home`
- `/expeditions` → `Expeditions`
- `/expeditions/:slug` → `ExpeditionDetail` (slug matched against `expeditions` array)
- `*` → `NotFound`

**All content** lives in `src/data/expeditions.js`, which exports two arrays:
- `expeditions` — each entry has `slug`, `year`, `title`, `subtitle`, `distance`, `duration`, `country`, `support`, `image`, `significance`, `body` (multi-paragraph string), and `tags`
- `disciplines` — each entry has `name`, `label`, `image`, `credential`, `detail`

**Static assets** — images and videos live in `public/pictures/`. Always reference them through the `asset()` helper (`src/utils/asset.js`), which prepends `import.meta.env.BASE_URL` so paths work both in dev and on the `/epicliving/` subdirectory in production.

**Scroll animations** — `Home.jsx` implements a local `useInView` hook (Intersection Observer) that adds a `.visible` CSS class when a section enters the viewport. No external animation library is used. Each page component has a co-located `.module.css` file.

## Adding content

**New expedition:** add an object to the `expeditions` array in `src/data/expeditions.js` with a unique `slug`, and drop the hero image in `public/pictures/`. The slug becomes the URL path automatically.

**New discipline:** add an object to the `disciplines` array in the same file.
