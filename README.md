# Habeeb Kehinde — Portfolio

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
- `public/` — static assets such as your CV PDF and certificate files

## Before publishing

1. Add `public/Habeeb-Kehinde-CV.pdf` so the hero **Download CV** link works.
2. Add certificate PDFs and images under `public/certificates/` (paths are listed in `src/components/Certificates.tsx`).
3. Replace illustrative project visuals with screenshots when you have them.
4. Google Fonts load from the network; system fonts are used as a fallback.

## Tailwind note

Tailwind CSS v4 is configured through `@tailwindcss/vite` and imported in `src/index.css`. Most page layout is written in CSS for predictable styling; Tailwind is available if you want to add utility classes.
