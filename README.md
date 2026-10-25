# Maison Aurelia — Architecture & Spatial Monograph

A responsive, editorial portfolio built with Next.js App Router, TypeScript, Tailwind CSS, GSAP, and Lucide icons. Designed from the supplied Maison Aurelia specification.

## Getting started

**Requirements:** Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run typecheck
npm run build
npm start
```

## Deploy to Vercel

1. Create a new GitHub repository and upload the contents of this folder (not the ZIP itself).
2. Import the repository in [Vercel](https://vercel.com/new).
3. Keep the framework preset as **Next.js** and deploy. No environment variables are required.

## Included

- Editorial hero, selected monographs, critical text, archive, inquiries, and colophon
- Responsive layouts for mobile, tablet, desktop, and wide screens
- Light/dark theme toggle persisted in `localStorage`
- Magnetic primary CTA, GSAP scroll reveals, and scroll-progress coordinate watermark
- Reduced-motion support and visible keyboard focus states
- PWA manifest, service worker, and maskable 192/512 PNG icons
- Custom CSS design tokens and locally defined layout / interaction components

## Image assets

Architectural photography is loaded from curated `images.unsplash.com` image URLs, with explicit dimensions and descriptive alt text. The site needs an internet connection for these photographs. Replace the URLs in `lib/content.ts` with licensed project photography before a commercial launch.

## Contact form

The inquiry form is a front-end demo and validates fields locally; it does not send email yet. Connect it to your preferred email/API service before publishing.

## Notes

- The specification calls for a 95+ Lighthouse target. That is a target, not a verified result: run Lighthouse against the deployed site and tune against actual measurements.
- Service-worker caching is intentionally conservative and uses network-first navigation plus cache-first same-origin static assets.
