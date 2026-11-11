# Mriganka Debnath | Engineering Portfolio

A personal portfolio for my backend, cloud, geospatial, and developer-tooling work. Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Features

- Project catalog with category filters, repository links, live demos, and detail dialogs.
- Experience cards with certificate image popups.
- Education timeline, skills matrix, and responsive layout.
- Interactive terminal command simulator that never executes shell commands.
- Sitemap, robots rules, Open Graph image, and `/llms.txt` profile endpoint.

## Run locally

Requires Node.js 20.9 or later and npm.

```sh
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to the canonical production origin before deployment so canonical metadata and the sitemap use the deployed URL.

## Validation

```sh
npm run lint
npm run typecheck
npm run build
```
