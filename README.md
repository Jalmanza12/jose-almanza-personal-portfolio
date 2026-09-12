# Jose Almanza — Personal Portfolio

A new, from-scratch personal portfolio for Jose Emilio Almanza Carrizo, focused on business analytics, finance, banking, data-driven decision making, leadership, and education.

## Project structure

- `src/` — semantic page markup, styling, and interaction code
- `public/assets/` — professional photo and current resume
- `scripts/` — dependency-free build and local preview scripts
- `dist/` — generated production output (created by `npm run build`)

## Run locally

This project has no runtime dependencies. Use Node.js 20+:

```bash
npm run build
npm run serve
```

Then open <http://localhost:4173>.

For a single command that builds and serves:

```bash
npm run dev
```

## Build

```bash
npm run build
```

The build copies the source site and public assets into `dist/`, ready for static hosting.
