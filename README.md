# Jose Almanza — Personal Portfolio

This is a dependency-free personal portfolio for Jose Emilio Almanza Carrizo. It turns his resume and verified project artifacts into a recruiter-friendly portfolio focused on business analytics, finance, lending, marketing, and leadership.

## Purpose

The site was built for the Module 2: AI-Assisted Personal Portfolio Design assignment. The design is intentionally editorial and analytical: a dark navy foundation, coral decision points, aqua data accents, and a clear path from professional identity to evidence of work. It is designed to feel like a personal point of view rather than a resume pasted into a template.

## Technology

- Semantic HTML
- Modern CSS with responsive layouts, accessible focus states, reduced-motion support, and no UI framework
- Small vanilla JavaScript layer for navigation, scroll reveals, and case-study dialogs
- Node.js scripts for copying the static site to `dist/` and serving it locally
- Local PDF, DOCX, SVG, and JPG assets; no API keys or runtime services

## Pages and routes

- `/` — main portfolio with hero, About, Experience, Education, Skills, Work & Reports, leadership, and Contact
- `/links/` — mobile-first Linktree-style page for QR/NFC sharing
- `assets/projects/` — four real report artifacts linked from the Work & Reports section

## Project structure

```text
src/
  index.html          Main portfolio page
  links/index.html    Mobile-first quick-links page
  main.js             Navigation, dialogs, and progressive reveals
  styles.css          Shared design system and responsive styles
public/
  assets/             Photo, current resume, and project reports
  favicon.svg
  site.webmanifest
scripts/
  build.mjs           Copies src + public into dist/
  serve.mjs           Dependency-free local static server
```

## Run locally

Requires Node.js 20+.

```bash
npm run build
npm run serve
```

Open <http://localhost:4173> and <http://localhost:4173/links/>.

For a single command:

```bash
npm run dev
```

## AI-assisted design process

AI was used as a creative collaborator to:

1. Extract and organize the resume into a content model without adding unsupported claims.
2. Review the existing local portfolio scaffold and identify mismatches, placeholders, and missing assignment requirements.
3. Shape a visual direction around the recurring idea of “signal → decision,” connecting Jose’s work in analytics, lending, finance, and communication.
4. Draft concise section copy and case-study summaries from the resume and the included reports.
5. Review the first implementation for generic sections, weak project evidence, inaccurate experience, mobile usability, accessibility, and missing `/links` functionality, then revise it.

The resume remains the source of truth for professional background. Project summaries are limited to the included reports and local artifacts.

## GitHub

The project is configured for the repository:

<https://github.com/Jalmanza12/jose-almanza-personal-portfolio>

To publish future changes:

```bash
git add .
git commit -m "Update Jose Almanza portfolio"
git push origin main
```

GitHub Pages can serve the generated `dist/` directory using an appropriate Pages workflow or deployment action. The repository itself does not contain secrets.

## Known limitation

The original Wix URL is preserved as a link because it appears in the resume, but it was not reachable from the build environment. The new portfolio therefore uses verified local artifacts rather than guessing at Wix-only pages or download URLs.
