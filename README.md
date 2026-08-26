# Exchange Chess Academy

Marketing website for **Exchange Chess Academy**, Mumbai — personalised 1-to-1 chess coaching (home and online) led by **Amar Ravindra More**, a FIDE-rated coach with 25+ years of teaching experience.

The site's primary goal is to convert visitors into **WhatsApp enquiries**.

---

## Tech stack

| | |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Routing | React Router 6 |
| Styling | Plain CSS (custom design system, no UI library) |
| Deploy target | Any static host (Netlify / Vercel / GitHub Pages) |

No CSS framework, no component library — the design system lives in a single stylesheet with CSS custom properties.

---

## Getting started

```bash
cd app
npm install
npm run dev      # http://localhost:5173
```

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build → `app/dist` |
| `npm run preview` | Serve the production build locally |

---

## Project structure

```
exchange_chess/
├── app/                        ← the React application
│   ├── index.html              ← base HTML: title, meta, Open Graph, JSON-LD
│   ├── public/
│   │   ├── assets/             ← logo, favicon, hero + coach photos
│   │   ├── gallery/            ← gallery photos by category
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   └── src/
│       ├── App.jsx             ← routes
│       ├── index.css           ← full design system + all component styles
│       ├── layouts/            ← RootLayout (header / footer / sticky CTAs)
│       ├── pages/              ← Home, About, Programs, Achievements, Gallery, Blog, 404
│       ├── components/         ← section + UI components
│       ├── hooks/              ← scroll reveal, hash scrolling, caption editor
│       └── data/
│           ├── content.js      ← ALL site copy, pricing, programs, FAQs, gallery
│           └── blogPosts.js    ← per-locality blog content
├── brand-assets-source/        ← original client-supplied logo & photo files
└── legacy-static/              ← the original pre-React static build (archived)
```

### Editing content

Almost all copy lives in **`app/src/data/content.js`** — programs, FAQs, pricing, gallery captions, nav links, credentials. You can update the site's text without touching any JSX.

Locality blog posts live in **`app/src/data/blogPosts.js`**.

---

## Routes

| Path | Page |
|---|---|
| `/` | Home (hero, about teaser, programs, home & online coaching, pricing, why us, achievements, gallery teaser, FAQ, contact) |
| `/about` | Full coach profile — "Know Your Coach", credentials, approach |
| `/programs` | All five coaching programmes + progression path |
| `/achievements` | Achievements, teaching milestones, trophy gallery |
| `/gallery` | Full photo gallery, grouped by category |
| `/blog` | Index of Mumbai locality pages |
| `/blog/:slug` | One page per locality (Bandra & BKC, Andheri, Juhu, Powai, Malad, Borivali, Chembur, Thane, Dadar & South Mumbai) |

---

## Content policy

The client's brief explicitly forbids invented content. **Everything on this site is factual and client-supplied.** There are no fabricated testimonials, student names, ratings, awards, certifications, or statistics.

Verified facts used across the site:

- FIDE ID **46637966**, Standard rating **1603**, born **1967**
- **25+ years** teaching experience, **1,500+ students** taught
- Schools taught at: Sharda Mandir (Gamdevi), Arya Vidya Mandir (BKC), Euro School (Airoli), Universal School (Tardeo)
- 3rd Prize — Entrants Chess Tournament, 2008 (presented by Suresh Kadam Sir)
- 4th Prize — Anand Chess Festival, 13 April 2025 (Dahisar Sports Foundation & Chanakya Chess Academy)
- Teacher Award — Pravinya Chess Academy, 23 June 2024
- Chess team captain, B.H. Somani College, 1987–88
- Rate: **₹1,200 / hour**

> **Pricing note:** ₹1,200/hour is the only rate the coach has confirmed, and it is the only figure shown. Small-group pricing has **not** been supplied, so it is listed as *"On request"* rather than inventing an amount. If the coach confirms a group rate, update `pricingPlans` in `app/src/data/content.js`.

---

## Gallery caption editor (temporary tool)

A built-in editor lets the client correct photo labels and captions without touching code. It is **hidden from normal visitors** and only activates behind a URL parameter:

```
http://localhost:5173/gallery?edit=1
http://localhost:5173/achievements?edit=1
```

Edit the fields under each photo, then click **Copy JSON** in the bottom bar and hand the JSON back to the developer to apply permanently. Edits are stored in the browser's `localStorage` only — they are never uploaded and never shown to other visitors.

**This tool is intended to be removed** once captions are finalised. To remove it, delete `useCaptionEdits.js`, `EditableCaption.jsx`, `CaptionExportPanel.jsx` and their usages in `GalleryPage.jsx` / `AchievementsPage.jsx`.

---

## SEO

- Per-page `<title>`, meta description and canonical URL (`src/components/Seo.jsx`)
- Open Graph + Twitter Card tags
- JSON-LD structured data: `EducationalOrganization`, `FAQPage`, and per-locality `Service`
- Semantic HTML with a single `<h1>` per page and a proper heading hierarchy
- Descriptive `alt` text on every image
- `robots.txt` and `sitemap.xml`
- Local-SEO locality pages, each with genuinely distinct content (not duplicated boilerplate)

### Before going live

1. Replace the placeholder domain `https://www.exchangechessacademy.com` with the real domain in:
   - `app/index.html` (canonical, `og:url`, `og:image`, JSON-LD)
   - `app/src/components/Seo.jsx` (`SITE_URL`)
   - `app/public/sitemap.xml` and `app/public/robots.txt`
2. Add a dedicated 1200×630 social share image and point `og:image` at it.
3. Connect Google Search Console and Google Business Profile.

---

## Deployment

Build output is a fully static site in `app/dist`.

```bash
cd app
npm run build
```

Because the site uses client-side routing, the host must rewrite all paths to `index.html` or deep links (e.g. `/blog/juhu`) will 404 on refresh. Config files for this are already included:

- **Netlify** — `app/public/_redirects`
- **Vercel** — `app/vercel.json`

---

## Contact

**Amar Ravindra More** — Exchange Chess Academy, Mumbai
Phone / WhatsApp / GPay: **+91 98928 65594**
