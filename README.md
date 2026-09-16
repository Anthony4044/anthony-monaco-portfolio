# Anthony Monaco — Portfolio

Vite + React portfolio driven by [src/data/resume.js](src/data/resume.js). Monochrome design
system (pure black/white + a near-gray accent) built on Tailwind CSS v4 with HSL CSS-variable
tokens, animated primarily with Framer Motion (`fadeUp` fades, scroll-linked word reveals) plus
GSAP + ScrollTrigger + Lenis for two pinned/scrubbed set-pieces (Experience's rail, Projects'
horizontal gallery).

## Setup

Requires Node.js (LTS) and npm on PATH.

```
npm install
npm run dev
```

Then open the local URL Vite prints (typically http://localhost:5173).

## Build

```
npm run build
npm run preview
```

## Structure

- `src/data/resume.js` — all resume-derived content (edit here, not in components)
- `src/components/` — one file per section (Hero, HowIWork, Mission, Experience, Projects,
  Skills, Contact, Footer) plus shared primitives (`Button`, `Logo`, `WordRevealText`,
  `VideoBackground`, `HeroVideo`)
- `src/lib/lenis.js` — smooth-scroll + GSAP ticker wiring
- `src/lib/fadeUp.js` — the standard Framer Motion fade-up animation preset
- `.claude/skills/portfolio-design/` — design/animation conventions for future edits

## Video backgrounds

`Hero.jsx` and `Contact.jsx` both support a background video but ship with empty source
constants (`HERO_VIDEO_SRC`, `CTA_VIDEO_SRC`) — no video plays until you set one to a URL you
actually own the rights to. Never point these at a third party's hosted stream.
