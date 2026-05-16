# Hunter Tap & Gas Co. , Plumber Demo Site

**Designed by Steel Cap Digital** as the Professional tier ($1,800) demo. Static HTML, hand-coded, Cloudflare Pages ready.

---

## What this is

A fictional plumber's website intended for Steel Cap Digital's Facebook lead magnet. The persona is "Hunter Tap & Gas Co." (Dean Walker) covering Newcastle, Hunter Valley, Maitland, Port Stephens. Every page is real, working, and demo-ready.

**Banner on every page** says "Designed by Steel Cap Digital , this could be yours" so people know it's a sample.

## Stack

- Static HTML, no build step, no framework
- Single stylesheet (`/assets/style.css`)
- Two JS files (`/assets/nav.js`, `/assets/a11y.js`)
- Self-hosted Big Shoulders Display + Inter (woff2, preloaded)
- Schema.org JSON-LD on every page (LocalBusiness/Plumber)
- WCAG 2.2 Level AA target

## Pages (30 total)

- Home, about, contact, pricing, recent-jobs, services overview
- 4 service detail pages
- 10 suburb landing pages (each with real local plumbing context)
- Blog index + 5 long-form posts
- 2 interactive tools (hot water sizing, find-your-stop-tap)
- Privacy, accessibility, sitemap.html, thank-you, 404
- sitemap.xml, robots.txt, _headers

## Accessibility features (beyond Steel Cap baseline)

- **Plain English toggle**: swaps trade jargon for plain words across the site
- **Text size**: 3 levels, persists across pages
- **High contrast**: black/white/yellow, persists across pages
- All controls live in a floating accessibility panel (bottom-right desktop, above sticky-call on mobile)
- Sticky "Call Now" bar on mobile

## To make this real (find-and-replace placeholders)

Search and replace these in all `.html` files:

| Placeholder | What to replace with |
|---|---|
| `Hunter Tap & Gas Co.` | Real business name |
| `Dean Walker` / `Dean` | Real plumber name |
| `0455 092 178` | Real mobile (10 digits, no spaces in the tel: links: `+61455092178`) |
| `dean@huntertapandgas.com.au` | Real email |
| `L.247831C` | Real plumbing licence |
| `GF.18024` | Real gas licence |
| `98 765 432 100` | Real ABN |
| `plumber-demo.steelcapdigital.com.au` | Real domain |

Suburb pages, blog posts and recent-jobs entries are written specifically for the Hunter region. Adapt or rewrite for other regions.

## Photos

Every page has placeholder photo blocks that say "Your photo here" with notes on what kind of photo to use. Replace with real images:

- Home hero: photo of tradesperson at work in branded shirt
- About page: friendly headshot
- (Optional) Service pages, suburb pages: can add real job photos

## To deploy (Cloudflare Pages)

**Not recommended to deploy yet** , Shannon's stored preference is to fully audit the site package before live config changes. Once you've reviewed:

1. Push the contents of this folder to a new GitHub repo
2. Connect Cloudflare Pages to the repo
3. Build settings: leave blank (no build step required)
4. Output directory: `/` (the repo root)
5. Add a custom subdomain (e.g. `plumber-demo.steelcapdigital.com.au`)

The `_headers` file is Cloudflare Pages compatible and handles security headers + caching.

## Folder structure

```
plumber-demo-v1-full-build/
├── index.html
├── about.html
├── services.html
├── pricing.html
├── recent-jobs.html
├── contact.html
├── blog.html
├── thank-you.html
├── 404.html
├── privacy.html
├── accessibility.html
├── sitemap.html
├── sitemap.xml
├── robots.txt
├── _headers
├── README.md
├── services/
│   ├── general-plumbing.html
│   ├── hot-water-systems.html
│   ├── blocked-drains.html
│   └── gas-fitting.html
├── areas/
│   ├── newcastle.html
│   ├── hamilton.html
│   ├── charlestown.html
│   ├── mayfield.html
│   ├── maitland.html
│   ├── east-maitland.html
│   ├── cessnock.html
│   ├── singleton.html
│   ├── raymond-terrace.html
│   └── nelson-bay.html
├── blog/
│   ├── find-your-water-stop-tap.html
│   ├── what-size-hot-water-system.html
│   ├── why-hot-water-runs-out-faster.html
│   ├── bathroom-smells-like-rotten-eggs.html
│   └── gas-appliance-servicing-nsw.html
├── tools/
│   ├── hot-water-sizing.html
│   └── find-your-stop-tap.html
└── assets/
    ├── style.css
    ├── nav.js
    ├── a11y.js
    └── fonts/
        ├── big-shoulders-display-latin-700.woff2
        ├── big-shoulders-display-latin-800.woff2
        ├── inter-latin-regular.woff2
        └── inter-latin-600.woff2
```

## Forms

The contact form is **visual only**. Submit handler shows a polite "Demo site" message rather than emailing. In production, swap the `data-demo` attribute and the form will work as normal. Recommended: Formspree, Cloudflare Workers, or a simple Pages Function endpoint.

## Notes for Shannon

- No em dashes anywhere (per your preferences)
- Folder name matches zip name (no status suffixes)
- All copy in Dean's first-person voice, casual but direct
- Pricing strip on home + full pricing page use real Hunter-region ranges, not generic numbers
- Recent jobs page is a unique-content engine: rewrite weekly and it gives Google rolling fresh content
