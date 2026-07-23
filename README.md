# KCS — Krystal Clear Service

Local SEO website for **KCS (Krystal Clear Service)** — commercial janitorial & floor care serving the Bay Area, Sacramento, and the Central Valley. Built with [Astro](https://astro.build) + Tailwind CSS v4, statically generated (~330 pages), deployable on Netlify.

## Commands

```sh
npm install        # install dependencies
npm run dev        # dev server at localhost:4321
npm run build      # static build to ./dist
npm run preview    # preview the production build
```

## Architecture

Everything is data-driven. Page copy lives in `src/data/`, page templates in `src/pages/`.

| Path | What it is |
| --- | --- |
| `src/config/site.ts` | NAP (name/address/phone), domain, hours — single source of truth |
| `src/data/services.ts` | 11 services (5 "core" services get a page in every city) |
| `src/data/industries.ts` | 8 industry verticals |
| `src/data/cities/` | 49 cities with real local data, split by region |
| `src/data/regions.ts` | 7 region hubs |
| `src/pages/locations/[city]/` | City pages (49) |
| `src/pages/locations/[city]/[service]/` | Service-in-city pages (49 × 5 = 245) |
| `src/pages/services/[service]/` | Service detail pages (11) |
| `src/pages/industries/[industry]/` | Industry pages (8) |
| `src/pages/service-areas/[region]/` | Region hub pages (7) |

SEO: per-page meta + canonical, LocalBusiness/Service/FAQPage/BreadcrumbList JSON-LD, auto sitemap (`@astrojs/sitemap`), `robots.txt`.

Forms: the quote form is wired for **Netlify Forms** (`name="quote"`), redirecting to `/thank-you/`.

## Before launch

- [ ] Confirm final domain (the "no s" domain) → update `site` in `astro.config.mjs`, `src/config/site.ts`, `public/robots.txt`
- [ ] Confirm business email in `src/config/site.ts`
- [ ] Swap in real photos from the client (hero, services, about)
- [ ] Review logo direction with client — three concepts live at `/brand/` (noindex, internal)
- [ ] Point domain DNS at Netlify and enable form notifications
