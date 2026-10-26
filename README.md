# Maathesvaaran S: Portfolio (React + Vite)

## Run locally
1. Install Node.js 18+ from https://nodejs.org
2. In this folder run: `npm install`, then `npm run dev`
3. Open the address shown (usually http://localhost:5173)

## Edit your details (everything is in `src/data.js`)
- `CONTACT.email`, `CONTACT.github`, `CONTACT.linkedin`: paste your real values. Empty values show as "Not added yet".
- `PROJECTS[i].repo` and `PROJECTS[i].demo`: paste your GitHub and live demo URLs. The Live demo button only appears when `demo` is set.
- Resume: copy your PDF to `public/resume.pdf`, then set `resumeFile: "resume.pdf"`.
- Contact form: create a free form at https://formspree.io, copy its URL into `CONTACT.formEndpoint`. Until then the form shows a "not connected" message.

## Deploy
**Vercel (easiest):** push to GitHub, go to vercel.com, Import Project, pick the repo, Deploy. Defaults work.

**GitHub Pages:**
1. Push the project to a GitHub repo.
2. `npm run build` creates the `dist` folder (the build uses relative paths, so no extra config).
3. Publish `dist` with the `gh-pages` package (`npm i -D gh-pages`, add `"deploy": "gh-pages -d dist"` to scripts, run `npm run deploy`), then set Settings > Pages > Branch `gh-pages`.

## Checklist before publishing
- [ ] Email address
- [ ] GitHub profile URL
- [ ] LinkedIn URL
- [ ] resume.pdf in `public/` and `resumeFile` set
- [ ] Repo link for both projects (and live demo links only if they really exist)
- [ ] Confirm project 1 features that are actually completed
- [ ] Formspree (or similar) endpoint for the contact form
- [ ] Re-check skill levels in `SKILLS` so they match what you can honestly discuss in an interview
