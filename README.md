# Sarvagya Dwivedi — Portfolio

A production-ready personal portfolio built with **Vite + React + TypeScript + Tailwind CSS**.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. Hot reload is on, so edits show instantly.

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

`npm run build` outputs a static `dist/` folder — deploy it as-is to Vercel, Netlify, GitHub Pages,
or any static host. No server/backend required.

## Where to make changes

| What you want to change                              | File                                  |
|--------------------------------------------------------|----------------------------------------|
| Any text content — projects, skills, certs, bio, links  | `src/data/content.ts`                 |
| Colors / palette                                       | `tailwind.config.js` (`colors` block) |
| Fonts                                                   | `index.html` (Google Fonts link) + `tailwind.config.js` (`fontFamily`) |
| Section layout / structure                              | `src/components/*.tsx` (one file per section) |
| Add your photo                                          | `src/components/About.tsx` — see the comment above the placeholder `<div>` |
| Resume link                                             | `PROFILE.resumeHref` in `src/data/content.ts` |
| Certificate / project links                              | `href` field on each item in `src/data/content.ts` |

You generally never need to touch anything outside `src/data/content.ts` and `tailwind.config.js`
unless you want to restructure a section.

## Stack

- Vite 5
- React 18 + TypeScript
- Tailwind CSS 3
- lucide-react (icons)

## Notes

- No backend, analytics, or tracking included — add your own if needed.
- The dot-grid background, fonts, and accent color are all defined once in `tailwind.config.js`
  and `index.html`, so a full re-theme only takes editing those two files.
