# mustafacanpalaz.com

Personal website built with [Arwes](https://arwes.dev) (`@arwes/react` 1.0.0-next), React 18 and Vite.

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve dist/ on http://localhost:4173
```

- All copy lives in `src/content.ts`.
- Add `?motion=off` to any URL to preview the reduced-motion version.
- The click sound is synthesized by `node scripts/gen-sounds.mjs` into `public/sounds/`.
