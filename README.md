# Epic Living Adventures

Personal portfolio and expedition journal for Silvia Castro Fernandez — adventure athlete, expedition cyclist, paraglider pilot, and open water swimmer.

## Live site

*Deploy URL — update this once the site is live.*

## About the project

A single-page React application showcasing expeditions, disciplines, and credentials. Built with a focus on storytelling and visual impact.

**Stack:** React 18 · React Router v6 · CSS Modules · Vite

**Key features:**
- Intersection Observer–based scroll animations (no external animation library)
- CSS Modules for fully scoped styles
- Lazy-loaded images and responsive layout
- Full expedition journal with prev/next navigation

## Getting started

```bash
npm install
npm run dev       # development server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/   Nav
  pages/        Home · Expeditions · ExpeditionDetail
  data/         expeditions.js  (all content lives here)
  index.css     global reset and CSS variables
public/
  pictures/     static images and videos
```

## Adding a new expedition

Open [src/data/expeditions.js](src/data/expeditions.js) and add an entry to the `expeditions` array. Add the corresponding hero image to `public/pictures/`.

## Deployment

The site is statically built and can be deployed anywhere that serves a SPA (Netlify, Vercel, GitHub Pages with `--history-api-fallback`).

For **GitHub Pages**, set the `base` option in [vite.config.js](vite.config.js) to your repo name:

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-github-repo-name/',
})
```

---

© 2026 Silvia Castro Fernandez
