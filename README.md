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

### Option 1: `deploy-demo` script

```bash
npm run deploy-demo
```

This runs `npm run build` (development mode) then pushes `dist/` to `gh-pages` via git subtree. Convenient but ships an unminified build.

### Option 2: Production build

```bash
npm run build -- --mode production && git subtree push --prefix dist origin gh-pages
```

Same as above but minifies output before deploying.

### If the subtree push is rejected

This can happen if the `gh-pages` branch has diverged. Force-push with:

```bash
git push origin `git subtree split --prefix dist main`:gh-pages --force
```

### Typical workflow

1. Make changes in `src/`
2. Preview locally with `npm start`
3. Commit changes to `main`: `git add . && git commit -m "your message"`
4. Deploy: `npm run build -- --mode production && git subtree push --prefix dist origin gh-pages`
5. Push `main` as well: `git push origin main`
