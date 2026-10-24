# Ayush Dev | Portfolio

A little corner of my life on the internet. Built with [Astro](https://astro.build), plain CSS, and a Markdown journal.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + static build into dist/
npm run preview
```

## Structure

- `src/data/` site info and project list
- `src/content/journal/` journal posts (Markdown)
- `src/pages/` home, projects, journal, 404, RSS

## Deploy

Static output in `dist/`. Configured for Vercel (`vercel.json`) and Cloudflare (`wrangler.jsonc`).
