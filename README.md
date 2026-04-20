# data-sandbox.github.io

Personal website built using HTML, CSS, and JavaScript.

## Setup

Install [Node.js and npm](https://nodejs.org/), then install dependencies:

```bash
npm install
```

## Local Development

Start the webpack dev server with hot reloading:

```bash
npm start
```

This opens the site at `http://localhost:8080` and watches for changes automatically.

Alternatively, to just watch and rebuild without the dev server:

```bash
npm run watch
```

## Deployment to GitHub Pages

The site is served from the `gh-pages` branch (configured in GitHub repo Settings → Pages).

The `dist/` folder is what gets deployed — only the contents of `dist/` are pushed to `gh-pages`, not the full repo.

### Deployment steps

The updated `dist/` build must be committed to `main` before pushing to `gh-pages`.

**Step 1: Build**

```bash
npm run build
```

**Step 2: Commit the build to `main`**

```bash
git add dist/ && git commit -m "Build"
```

**Step 3: Push `dist/` to `gh-pages`**

```bash
git subtree push --prefix dist origin gh-pages
```

### If the subtree push is rejected

The `gh-pages` branch can diverge from `main`'s subtree history (e.g. after a force-push or amended commit on `main`). When `git subtree push` is rejected, force-push instead:

```bash
git push origin $(git subtree split --prefix dist main):gh-pages --force
```

### Typical workflow

1. Make changes in `src/`
2. Preview locally with `npm start`
3. Commit source changes to `main`: `git add src/ && git commit -m "Some message"`
4. Build: `npm run build -- --mode production`
5. Commit the build: `git add dist/ && git commit -m "Build"`
6. Deploy to `gh-pages`: `git subtree push --prefix dist origin gh-pages` (force-push if rejected)
7. Push `main`: `git push origin main`
