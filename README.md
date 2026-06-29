# Sarvagya Dwivedi Portfolio

[![Live](https://img.shields.io/badge/Live-121212?style=flat-square&logo=github&logoColor=white)](https://sdshaggy.github.io/Sarvagya-Dwivedi/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A production-ready personal portfolio built with **Vite + React + TypeScript + Tailwind CSS**.

---


## 📦 Build for Production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

`npm run build` outputs a static `dist/` folder - deploy it as-is to GitHub Pages, Vercel, Netlify, or any static host. No server or backend required.

---

## ✏️ Where to Make Changes

| Where to change | File |
|---|---|
| Any text content - projects, skills, certs, bio, links | `src/data/content.ts` |
| Colors / palette | `tailwind.config.js` → `colors` block |
| Fonts | `index.html` (Google Fonts link) + `tailwind.config.js` → `fontFamily` |
| Section layout / structure | `src/components/*.tsx` (one file per section) |
| Resume link | `PROFILE.resumeHref` in `src/data/content.ts` |
| Certificate / project links | `href` field on each item in `src/data/content.ts` |

> You generally never need to touch anything outside `src/data/content.ts` and `tailwind.config.js` unless you want to restructure a section.

---

## 🛠️ Stack

- **Vite 5**
- **React 18** + TypeScript
- **Tailwind CSS 3**
- **lucide-react** - icons

---

## 📱 Responsive Status
 
> Currently optimized for **laptop/desktop screens**. Mobile and tablet optimization is a work in progress.

---

## 📝 Notes

- No backend, analytics, or tracking included — add your own if needed.
- The dot-grid background, fonts, and accent color are all defined once in `tailwind.config.js` and `index.html`, so a full re-theme only takes editing those two files.
- Deployed via GitHub Actions → GitHub Pages automatically on every push to `main`.
