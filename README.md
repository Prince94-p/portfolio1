# Prince Patel — Portfolio

A React + Vite + Tailwind CSS + Framer Motion portfolio for a 2nd-year B.Tech
Computer Engineering student. Premium dark theme, glassmorphism, green/cyan
accents, scroll-reveal animations, typing hero, custom 404, and more.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The build output goes to `dist/` — deploy that folder to Vercel, Netlify,
GitHub Pages, or any static host.

## Before you publish this — things to finish

This was built to represent you **honestly**, not to oversell anything. A few
things are placeholders on purpose:

1. **Four projects have no real detail yet** — Lost & Found Portal, Smart
   Traffic System, Smart Link Hub Generator, and RFID Attendance System are
   shown with a "coming soon" badge in `src/data/projects.js`. Fill in the
   `description`, `myRole`, `tech`, and `github` fields (and flip
   `isPlaceholder` to `false`) once each project is actually built and
   documented — otherwise leave them out of the deployed site.
2. **Contact form doesn't send anything yet.** It's fully styled but
   client-side only (see the note in `src/sections/Contact.jsx`). Wire it up
   to [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/)
   — both have free tiers and take about 10 minutes to connect.
3. **GitHub stats cards** (`src/sections/GithubStats.jsx`) pull live from
   github-readme-stats.vercel.app using your username. They'll look sparse
   until your GitHub has more public activity/commits — that's accurate, not
   a bug.
4. **Second certification card** is a placeholder — add your next one to
   `src/data/certifications.js` when you complete it.
5. **Resume**: `public/resume.pdf` is your current resume. Swap the file
   whenever you update it (keep the filename the same, or update the path in
   `src/sections/Resume.jsx`).

## Project structure

```
src/
 ├── assets/       → your photo
 ├── components/   → reusable UI (Navbar, ProjectCard, SkillCard, etc.)
 ├── sections/     → one file per homepage section
 ├── data/         → all editable content (skills, projects, timeline, certs)
 ├── hooks/        → useActiveSection (navbar scroll-spy)
 ├── utils/        → scrollTo helper
 └── pages/        → Home.jsx and NotFound.jsx (404)
```

To add a new project, add an object to `src/data/projects.js` — the card UI
handles the rest automatically, including the "coming soon" state.
