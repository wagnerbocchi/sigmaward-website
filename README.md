# Sigmaward Website

Marketing website for **Sigmaward**, a commercial SIEM/SOAR/SOC platform with its own multi-OS agents. This is a bilingual (pt-BR default + English) [Next.js 15](https://nextjs.org/) static site — Home, Platform, Solutions, Pricing, Resources, Company and Login — built to a pixel-accurate dark "big-tech security" aesthetic from a Claude Design handoff, and exported as static HTML for deployment on Hostinger shared hosting.

## Tech stack

- **Next.js 15** (App Router), static export (`output: "export"`)
- **TypeScript** (strict)
- **Tailwind CSS v4** (`@theme` tokens in `app/globals.css`)
- **next/font** — Space Grotesk (display), Manrope (body), JetBrains Mono (mono/code)
- **Vitest** for unit tests (i18n path helpers)

## Requirements

- Node.js ≥ 20
- npm

## Local development

```bash
npm install

npm run dev          # http://localhost:3000

npm run build         # static export to out/
npm run typecheck     # tsc --noEmit
npm test              # vitest run (i18n unit tests)
```

## Routing / i18n

- **Portuguese (pt-BR)** is the default locale, served unprefixed: `/`, `/platform/`, `/solutions/`, `/pricing/`, `/resources/`, `/company/`, `/login/`.
- **English** is served under `/en/`: `/en/`, `/en/platform/`, `/en/solutions/`, `/en/pricing/`, `/en/resources/`, `/en/company/`, `/en/login/`.
- All user-facing copy lives in `content/i18n.json`, keyed identically for `pt` and `en`. Components read strings from this dictionary via `lib/i18n.ts` — copy is never hardcoded in components (the one exception is English-only product-UI text inside mock components, e.g. `"Sigma Rule"`, `"CASE-1042"`, which represents the product itself, not marketing copy).
- The **PT | EN** toggle in the nav (`components/layout/LocaleToggle.tsx`) switches locale while preserving the current page.

## Before deploying — set the production domain

`lib/site.ts` exports `SITE_URL`, which feeds `metadataBase`, Open Graph tags, `sitemap.xml`, and `robots.txt`. It currently holds a placeholder domain. Before shipping:

1. Edit `SITE_URL` in `lib/site.ts` to the real production domain.
2. Rebuild: `npm run build`.

## Deploy to Hostinger

The site is a static export (no server, no middleware, no server actions) — it can be hosted on any static file server, including Hostinger shared hosting.

1. Build the site:
   ```bash
   npm run build
   ```
   This produces the static site in the `out/` folder.
2. Upload the **contents of `out/`** (not the `out` folder itself) into `public_html/` on Hostinger, via hPanel's File Manager or FTP/SFTP. `public_html/index.html` should end up being `out/index.html`, `public_html/en/index.html` should be `out/en/index.html`, and so on.
3. Because the build uses `trailingSlash: true`, every route is exported as a folder with its own `index.html` (e.g. `platform/index.html`, `en/platform/index.html`). This means clean URLs like `/platform/` and `/en/platform/` work out of the box on Apache/LiteSpeed with **no rewrite rules required**. Portuguese pages are served at the root (`/`), English pages under `/en/`.
4. (Optional) Configure a custom 404 mapping in hPanel if desired — the export already includes `404.html`, so this is not required for the built pages to work correctly.

## Project structure

```
app/                    # Next.js App Router routes
  page.tsx              # pt Home
  platform/page.tsx     # pt Platform
  solutions|pricing|resources|company|login/page.tsx  # pt coming-soon placeholders
  en/                    # English routes, mirrors the above
  layout.tsx, globals.css, sitemap.ts, robots.ts

components/
  layout/                # Nav, Footer, MobileMenu, LocaleToggle
  sections/               # Page sections (Hero, Problem, Pillar, Capabilities, Architecture, ...)
  pages/                  # Top-level page compositions (HomePage, PlatformPage, ComingSoonPage)
  mocks/                  # Product-UI mock components (dashboard, Sigma rule, playbook, case, IOC, tenants, arch)
  ui/                     # Reusable primitives (Button, Card, Icon, Logo, SectionShell, ...)

lib/
  i18n.ts                 # getDictionary, localizePath, getLocaleFromPath
  i18n.test.ts             # Vitest unit tests for the above
  site.ts                  # SITE_URL and other site-wide constants

content/
  i18n.json                # Bilingual copy dictionary (pt + en), single source of truth

public/                    # Static assets (favicon, logo marks, etc.)
```
