# CLAUDE.md

## Project Overview

Personal landing page for Andrea Faccani (physical therapist). A fully static, single-page site built with Astro, deployed to GitHub Pages.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 5 (SSG, static output) |
| UI components | Svelte 5 |
| Styling | Tailwind CSS 4 + Skeleton UI v3 |
| Icons | Lucide Svelte |
| Deploy | GitHub Pages via GitHub Actions |

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server (localhost:4321)
npm run build     # build static site → dist/
npm run preview   # preview the built site locally
```

No testing infrastructure exists in this project.

## Project Structure

```
src/
├── pages/index.astro           # Single page entry point
├── layouts/
│   ├── LayoutRoot.astro        # HTML shell: theme/mode scripts, global CSS
│   └── Layout.astro            # Page layout: Header + slot + Footer
├── components/
│   ├── generic/                # Reusable UI (Header, Footer, Card, Drawer, Logo, Lightswitch)
│   └── *.astro                 # Page sections (Hero, Services, FAQ, Contact, etc.)
├── styles/global.css           # Tailwind imports + custom utility classes
└── assets/                     # SVG/image assets imported by components
public/                         # Static assets served as-is (JPEG, PNG, SVG photos)
.github/workflows/deploy.yml    # Auto-deploy to GitHub Pages on push to main
```

## Conventions

**Components**
- One component per `.astro` file, PascalCase filenames.
- Generic/reusable components go in `src/components/generic/`, page sections at the `components/` root.
- Import using path aliases: `@components/`, `@layouts/`, `@styles/`, `@assets/`.

**Styling**
- Tailwind utility classes for layout and spacing.
- Custom classes in `global.css` for design tokens: `section-shell`, `feature-card`, `eyebrow`, etc.
- Skeleton UI CSS variables for colors: `--color-primary-500`, `--color-surface-50`, etc.
- Dark mode via `data-mode="dark"` attribute on `<html>`.
- Standard container: `container mx-auto px-4 md:px-8 max-w-screen-2xl`.
- Responsive grids: `grid-cols-1 md:grid-cols-2 xl:grid-cols-3`.

**JavaScript**
- Vanilla JS only, written in `<script>` tags inside `.astro` files.
- No runtime framework needed — Svelte is used statically at build time (icons only).
- Interactive patterns: carousel uses CSS scroll-snap + event listeners; FAQ uses native `<details>`.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds and deploys the static site to GitHub Pages at:

```
https://mistahuman.github.io/landpage-andreafaccani
```

The Astro config sets `base: "/"` in production and `/landpage-andreafaccani/` in dev — this is handled automatically via the `site` field in `astro.config.mjs`.
