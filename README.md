# Senior Portfolio (CPRE 4910)

React + Vite portfolio for the Iowa State Cybersecurity Engineering senior portfolio.
Uses hash navigation (`#projects`, `#resume`, ...) so it works on GitHub Pages without server routing.

## Edit your content

**All text lives in `src/content.js`.** You should not need to touch `App.jsx` or `index.css`.

Anything written as `[[like this]]` appears on the site as a yellow dashed highlight. That's a
placeholder. Search the file for `[[` and replace every one before you submit.

PDFs (resume, reflections, ethics paper, senior design docs) go in `public/documents/`.
See the README in that folder for the exact filenames.

## Run locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Put it on GitHub Pages

1. Create a new **public** repository on GitHub (any name, e.g. `senior-portfolio`).
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/senior-portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
   Your site will be at `https://YOUR-USERNAME.github.io/senior-portfolio/`.

After that, every `git push` updates the live site within a minute or two.

## Requirements checklist coverage

| Requirement | Where |
|---|---|
| Name & contact info | Sidebar, Contact page |
| Welcoming front page | Home |
| Career objective | Home, "Where I'm headed" |
| Senior design (description, role, skills, documents, big picture) | Senior Design |
| 3+ other projects (description, role, skills, resources) | Projects (4 included) |
| Internship / co-op (duties, skills, evaluations, presentations) | Experience (set `show: false` if N/A) |
| Resume with papers, awards, activities | Resume |
| Gen Ed reflection, Cumulative reflection, Ethics paper | Reflections |
