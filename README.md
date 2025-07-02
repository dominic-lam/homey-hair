# Homey - Haircare User Guide App

A simple, responsive React web app that helps users pick the best haircare products for their scalp and needs.  
Built for people who don’t want to read a 20-page PDF just to figure out which shampoo to use.

## Features

- Guided survey (3 questions, 27 outcomes) for scalp/product matching
- Product recommendation cards with images, usage, and descriptions
- Lists for all shampoos and advanced care products
- Step-by-step washing instructions
- Fully responsive (works on desktop & mobile)
- Copy product names to clipboard with one click
- Ready for static deployment (e.g. GitHub Pages)

## Project Structure

See the [project structure doc](./docs/structure.md) for a full breakdown (or just scroll the code—everything is under `/src`).

## Getting Started

### Prerequisites

- Node.js (>=18.x recommended)
- npm

### Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/homey-hair.git
cd homey-hair
npm install
```

### Development

Start the local dev server (with hot reload):

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

To build for production (outputs to `/dist`):

```bash
npm run build
```

### Deploy

To deploy to GitHub Pages (assumes repo is already set up for GH Pages):

```bash
npm run deploy
```
- Images must be loaded from `/images/...` via `import.meta.env.BASE_URL` for proper asset paths on GitHub Pages.
- If you change the repo name or deploy location, check your `vite.config.js` for correct `base` setting.

---

## Status

- MVP is up and working: core flows are complete, products and survey are all in.
- Still a work in progress—UI tweaks and more products/features coming soon.
- Not for public use or open contributions (yet).

## License

MIT — see [LICENSE](LICENSE) for details.

---

## FAQ

**Q:** I don’t see my product/feature!  
**A:** Open an issue or, better yet, fork it and build your own. This isn’t a SaaS company.

**Q:** Why Vite instead of Create React App?  
**A:** Because it’s 2025, not 2018.

