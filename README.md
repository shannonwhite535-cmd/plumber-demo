# Crack Plumbing & Gas (v2)

**Designed by Steel Cap Digital** as the Professional tier ($1,800) demo. Static HTML, hand-coded, Cloudflare Pages ready.

---

## What this is

A fictional plumber's website intended for Steel Cap Digital's Facebook lead magnet. The persona is "Crack Plumbing & Gas" (Barry Faucet) covering Newcastle, Hunter Valley, Maitland, Port Stephens. Every page is real, working, and demo-ready.

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
- **High contrast**: pure black on white, persists across pages
- All controls live in a floating accessibility panel (bottom-right desktop, above sticky-call on mobile)
- Sticky "Call Now" bar on mobile

## To make this real (find-and-replace placeholders)

Search and replace these in all `.html` files:

| Placeholder | What to replace with |
|---|---|
| `Crack Plumbing & Gas` | Real business name |
| `Barry Faucet` / `Barry` | Real plumber name |
| `0455 092 178` | Real mobile (10 digits, no spaces in the tel: links: `+61455092178`) |
| `barry@crackplumbing.com.au` | Real email |
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
plumber-demo-v3-crack-plumbing/
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
├── favicon.svg
├── favicon.ico
├── apple-touch-icon.png
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
    ├── og-default.jpg
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
- All copy in Barry's first-person voice, casual but direct
- Pricing strip on home + full pricing page use real Hunter-region ranges, not generic numbers
- Recent jobs page is a unique-content engine: rewrite weekly and it gives Google rolling fresh content


---

## v2 changelog (May 2026)

**Rebrand**
- Business renamed from Hunter Tap & Gas Co. to Crack Plumbing & Gas (per Shannon's preference for something funny but credible)
- Owner renamed: Dean Walker → Barry Faucet
- Email: dean@huntertapandgas.com.au → barry@crackplumbing.com.au
- New logo: two stylised cheeks with a visible gap (the crack) plus water drop above for plumbing context. Done in copper on the existing navy mark box. Brand colours unchanged.

**Bug fixes (Shannon-reported)**
- **Text size toggle now actually scales the page.** v1 used a CSS variable that didn't propagate because most elements had hard-coded px values. v2 uses CSS `zoom` on body classes (`.text-large`, `.text-xl`) for proper full-page scaling. Includes a Firefox fallback using transform/scale.
- **High contrast mode no longer has bright yellow buttons or fields.** v1 set --card-alt and --copper-tint to #ffff00. v2 sets them to white, and explicitly styles all interactive elements (cards, forms, buttons, hover states, accessibility panel, nav, footer) to pure black-on-white or white-on-black with 2px black borders. No yellow anywhere.
- **Demo banner no longer overflows on mobile.** Banner now has fixed height (32px desktop, 28px mobile), overflow:hidden, white-space:nowrap. Mobile copy aggressively shortened so it fits in one line at narrow widths. Nav top offset matches.

**Files changed**
- Every HTML file (rebrand text, new SVG logo, simplified demo banner markup)
- assets/style.css (demo banner fix, full HC mode rewrite, text-size scaling)
- assets/a11y.js (text-size logic now uses body classes not CSS var)
- README.md (this changelog)

---

## v3 changelog (May 2026)

**Audit findings addressed**

Shannon's full audit of v2 caught three blockers for the Facebook ad use case and a handful of smaller issues. All fixed below.

**Critical: Facebook share preview**
- Bundled `assets/og-default.jpg` (1200x630, Steel Cap Digital branded card).
- Added the full og:image stack to every page head: `og:image`, `og:image:width`, `og:image:height`, `og:image:alt`, plus `og:site_name`, `og:locale`. Image URL is absolute (Facebook will not accept relative).
- Added Twitter card meta (`twitter:card=summary_large_image`, plus title/description/image) so LinkedIn and Twitter shares also get a preview.

**Critical: Browser identity**
- Added `favicon.svg` (vector, navy + copper brand mark), `favicon.ico` (multi-res 16/32/48 for legacy browsers), and `apple-touch-icon.png` (180x180 for iOS home-screen bookmarks). Referenced on every page.

**High: Accessibility**
- Added `aria-hidden="true"` to every decorative inline SVG across all 33 pages. Screen readers no longer announce ~30 stray icons per page navigation. Brings the site genuinely in line with the README's WCAG 2.2 AA claim.
- Deleted the broken `@-moz-document url-prefix()` Firefox text-size fallback. The block was using a universal `*{font-size:1.15em}` rule which compounds through nested elements (a paragraph inside `<article>` inside `<section>` got 1.15 cubed = 1.52x scaling instead of 1.15x). Modern Firefox (126+) supports `zoom` natively now, so the override was actively breaking what already worked. The new rule is just `body.text-large{zoom:1.15}` / `body.text-xl{zoom:1.3}` and works in Chrome, Edge, Safari and Firefox.

**Medium: Form safety**
- Added `action="javascript:void(0)" onsubmit="return false"` to the contact form. Defense in depth in case `nav.js` ever fails to load: a JS-disabled browser would otherwise GET-submit the form to the current URL and dump the user's name and message into the address bar.

**Low: Doc drift**
- README description of high-contrast mode said "black/white/yellow". The actual implementation is pure black on white (which is correct, since v2's bug was *yellow buttons*). Updated the README line to match the code.
- Folder structure listing updated to reflect v3 filenames.

**Indexing**
- Per Shannon's call: leaving `robots.txt: Allow /` open. The demo subdomain is intended to pull organic Hunter-region traffic in addition to being a Facebook ad destination.

**Files changed**
- Every HTML file (added 13 meta/link tags to head, added aria-hidden to all decorative SVGs)
- contact.html (form safety attributes)
- assets/style.css (removed broken @-moz-document block)
- README.md (this changelog, HC description fix, folder list)

**Files added**
- favicon.svg
- favicon.ico
- apple-touch-icon.png
- assets/og-default.jpg
