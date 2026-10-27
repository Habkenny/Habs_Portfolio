# Habs_Portfolio
Habs_Portfolio
# Modern Minimalist Portfolio

A light, responsive React + TypeScript + Vite portfolio with a white/grey/teal palette, keyboard focus styles, reduced-motion support, and subtle scroll-reveal effects.

## Requirements

- Node.js 20.19+ or 22.12+ recommended for current Vite tooling.
- npm

## Run locally

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```powershell
npm run build
npm run preview
```

## Project structure

- `src/components/` — page sections and reusable reveal/heading components
- `src/index.css` — layout, theme, responsive rules and animations
- `public/` — static assets such as your real CV and verified certificates

## Before publishing

1. Confirm all project descriptions, stack labels and links match the current project state.
2. Add a real CV PDF before creating a download link.
3. Add your university name and graduation year to `Education.tsx`.
4. Replace the certificate placeholder with verified credentials, or temporarily remove the Certificates section.
5. The first two project cards link to your GitHub profile where a direct repository URL was not verified. Replace these with exact repository links when confirmed.
6. Project thumbnails are illustrative CSS mock-ups, not screenshots of the live applications. Replace them with your own screenshots when available.
7. The external Google Fonts import requires internet; system fonts are used as a fallback.

## Tailwind note

Tailwind CSS v4 is configured through `@tailwindcss/vite` and imported in `src/index.css`. Most page layout is written in CSS for predictable styling; Tailwind is available if you want to add utility classes.
