# Ashok Balasubramaniam — Portfolio

A personal developer portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Build for production with `npm run build`; output goes to `dist/`.

## Updating content

All editable content lives in `src/data/`:

- `profile.js` — name, title, summary, social links, stats
- `skills.js` — skill categories and proficiency levels
- `experience.js` — work experience timeline
- `education.js` — education entries and certifications
- `projects.js` — project cards and the featured project
- `navigation.js` — navbar links

To add a certification, add an object to the `certifications` array in `src/data/education.js`.

To add a real project screenshot, drop the image in `src/assets/`, import it, and set it as a project's `image` field in `src/data/projects.js`.

## Resume / CV

The "Download CV" button points at `public/Ashok_Balasubramaniam_Resume.pdf`. Replace that file to update the downloadable resume.

## Contact form

The contact form posts to the URL in the `VITE_CONTACT_API_URL` env variable. Until a backend is wired up, submissions fall back to opening the visitor's email client instead.
