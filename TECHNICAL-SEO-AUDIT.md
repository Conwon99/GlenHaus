# Technical SEO Audit — Glenhaus Garden Rooms

**Website:** https://glenhausgardenroom.com/  
**Business:** Garden Room Installation  
**Primary service area:** Scotland Central Belt  
**Audit date:** February 2025

---

## Executive summary

This audit identifies technical SEO issues that limit crawlability, indexation, and rankings. **Quick-win fixes have been implemented** where indicated below. Remaining items are prioritised by impact (High / Medium / Low) with exact fix instructions.

**Expected outcome:** Improved crawl efficiency, clean canonical structure, valid schema, fewer broken links, and better Core Web Vitals within 30–60 days.

---

## Phase 1: Crawlability & Indexation

### Issues found

| Issue | Severity | Why it harms rankings | Status |
|-------|----------|------------------------|--------|
| **robots.txt `Disallow: /*?*`** | Medium | Blocked all URLs with query strings (e.g. `?utm_source=`), which can prevent indexing of tracked links and cause inconsistent crawl coverage. | **FIXED** – Rule removed. |
| **Sitemap missing `/service/garden-rooms`** | Low | That URL was a duplicate of `/garden-rooms`; consolidating via redirect is better than listing both. | **FIXED** – 301 to `/garden-rooms` added. |
| **Duplicate content: `/garden-rooms` vs `/service/garden-rooms`** | High | Two similar pages compete for the same queries; Google may split signals or ignore one. | **FIXED** – 301 from `/service/garden-rooms` → `/garden-rooms`. |
| **Crawl-delay in robots.txt** | Low | `Crawl-delay` is ignored by Googlebot; for Bing/Yahoo it can slow discovery. | Optional – remove if you want faster Bing discovery. |
| **Static `/sitemap.xml` in `/static`** | Low | If both static file and `sitemap.xml.ts` exist, ensure the dynamic sitemap is the one served (Astro build overwrites). | Verify live: `https://glenhausgardenroom.com/sitemap.xml` shows 6 URLs. |

### Crawlability verdict

- **robots.txt:** Present and correct; allows `/`, main pages, and sitemap.  
- **Sitemap:** Exists at `/sitemap.xml`, lists 6 key pages.  
- **HTTPS / www:** Netlify 301s send http and www to `https://glenhausgardenroom.com`.  
- **No noindex** on key pages.

**No remaining high-priority crawlability barriers.**

---

## Phase 2: Canonicalization & URL structure

### Current state

- **Canonical base:** `https://glenhausgardenroom.com` (no trailing slash for path URLs).  
- **Trailing slash:** `astro.config.mjs` has `trailingSlash: 'never'`; canonicals match.  
- **Homepage canonical:** `https://glenhausgardenroom.com/` (correct).  
- **Duplicate URL:** `/service/garden-rooms` → 301 to `/garden-rooms` (implemented).

### Canonical strategy

- Each page passes a `canonical` prop to `BaseLayout`; otherwise layout builds from `siteUrl + pathname`.  
- **Recommendation:** Keep explicit canonicals on every page. No parameter-based duplicates found.

### Correct canonical examples (reference)

```html
<!-- Home -->
<link rel="canonical" href="https://glenhausgardenroom.com/" />

<!-- About -->
<link rel="canonical" href="https://glenhausgardenroom.com/about" />

<!-- Garden rooms (main service) -->
<link rel="canonical" href="https://glenhausgardenroom.com/garden-rooms" />
```

**Redirect logic:** Use 301 for permanent moves (e.g. service/garden-rooms → garden-rooms). Canonical is for same-site duplicates (e.g. same content on two paths); here we used 301 to consolidate.

---

## Phase 3: On-Page Technical (Meta & headings)

### Meta titles & descriptions

| Page | Title length | Description length | Duplicate? |
|------|--------------|--------------------|------------|
| Home | 58 chars | ~155 chars | No |
| About | 58 chars | ~155 chars | No |
| Contact | 48 chars | ~125 chars | No |
| Garden rooms | 62 chars | ~155 chars | No |
| Decking | 62 chars | ~130 chars | No |
| Projects | 52 chars | ~115 chars | No |

**Recommendation:** Keep titles under 60 characters where possible; current set is acceptable. Descriptions 120–160 chars are ideal; Contact and Projects are slightly short – optional to extend with a CTA or location.

### Heading hierarchy

- **Home:** One H1 in HomeHero; sections use H2. OK.  
- **About:** One H1 in AboutHero (“About Glenhaus Garden Rooms”); AboutStory uses H2 “Our Story”. OK.  
- **Garden rooms / Decking / Contact:** Single H1 in hero; rest H2. OK.

**No multiple H1s or broken hierarchy found.**

### Template suggestions

- **Service pages:** `[Service] | [Location] | Glenhaus Garden Rooms` (e.g. “Garden Rooms Central Belt | Custom Garden Room Installation | Glenhaus Garden Rooms”).  
- **Supporting pages:** `[Page topic] | Glenhaus Garden Rooms` (e.g. “Contact Us | Get Your Free Quote | Glenhaus Garden Rooms”).

---

## Phase 4: Schema & Structured Data

### Existing schema (BaseLayout)

- **LocalBusiness** (with HomeAndConstructionBusiness, ProfessionalService): name, description, telephone, address, geo, areaServed, serviceType, hasOfferCatalog (services), aggregateRating, review, openingHoursSpecification, url, priceRange.  
- **Organization:** name, url, logo, description, telephone, address, sameAs, foundingDate.  
- **WebSite:** name, url, publisher, potentialAction (SearchAction).  
- **BreadcrumbList:** Single item “Home” only.

### Issues & improvements

| Issue | Impact | Fix |
|-------|--------|-----|
| **BreadcrumbList is homepage-only** | Medium | Pass `breadcrumbs` into BaseLayout and render position/name/item per page (e.g. Home > Garden Rooms, Home > Contact). |
| **Address missing streetAddress & postalCode** | Low | Add if you’re happy to show full address; improves local trust. |
| **sameAs empty** | Low | Add official Facebook, Instagram, Trustpilot, etc. for stronger entity signals. |
| **aggregateRating vs review count** | Low | You have `reviewCount: "24"` and one `Review` in JSON-LD. Either add more `Review` objects or set `reviewCount` to match the number of reviews you include (Google can be strict on mismatch). |
| **Opening hours** | OK | Mon–Sat 08:00–17:00 is valid; Sunday omitted = closed. |

### Improved BreadcrumbList (per-page)

In `BaseLayout.astro`, add optional prop `breadcrumbs?: { name: string; url: string }[]` and output:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glenhausgardenroom.com/" },
    { "@type": "ListItem", "position": 2, "name": "Garden Rooms", "item": "https://glenhausgardenroom.com/garden-rooms" }
  ]
}
```

Generate this from the current path (e.g. `/garden-rooms` → Home + Garden Rooms).

### Validation checklist

- [ ] Test all JSON-LD at [Google Rich Results Test](https://search.google.com/test/rich-results).  
- [ ] Confirm LocalBusiness + Organization appear in Search Console “Enhancements”.  
- [ ] Add `sameAs` and optional full address when ready.

---

## Phase 5: Performance & Core Web Vitals

### Issues & fixes

| Issue | Impact | Status / Fix |
|-------|--------|--------------|
| **Render-blocking Google Fonts** | High (LCP) | **FIXED** – Fonts loaded with `rel="preload"` + onload swap so they don’t block first paint. |
| **Images not always WebP** | Medium | Many references use `.jpeg`/`.jpg`. Prefer WebP with fallback; static already has some `.webp`. Ensure components use WebP where available. |
| **Lazy loading** | OK | Many images use `loading="lazy"`; keep for below-the-fold images. |
| **Third-party scripts** | Medium | gtag.js is async; monitor impact. Consider moving to GTM and loading after LCP if needed. |
| **Critical CSS** | Low | Tailwind is likely in one bundle; consider purging and inlining above-the-fold CSS if LCP is still high. |

### Image checklist

- Use `<picture>` or serve WebP with JPEG fallback for key images (hero, gallery).  
- Ensure `width`/`height` or aspect-ratio to reduce CLS.  
- Keep `alt` descriptive (already in place in audited components).

### Core Web Vitals plan

1. **LCP:** Fonts non-blocking (done); optimize hero image (WebP, dimensions, preload if needed).  
2. **INP/FID:** Minimize main-thread work; keep React islands small.  
3. **CLS:** Reserve space for images and avoid inserting content above existing content.

---

## Phase 6: Mobile & UX Technical Compliance

- **Viewport:** Present and correct (`width=device-width, initial-scale=1.0`).  
- **Tap targets:** Nav and CTA links are large enough; no obvious &lt;12px tap areas found.  
- **Font sizes:** Body and headings scale; no obvious &lt;16px body text.  
- **Intrusive interstitials:** None observed.  
- **CLS:** Set explicit dimensions or aspect-ratio on images to avoid layout shift.

**Recommendation:** Run [PageSpeed Insights](https://pagespeed.web.dev/) (mobile) and fix any reported tap target or font size issues.

---

## Phase 7: Internal Architecture & Link Equity

### Issues found

| Issue | Severity | Fix |
|-------|----------|-----|
| **Footer link to `/privacy-policy`** | High (404) | **FIXED** – Replaced with link to `/garden-rooms` (no privacy page yet). When you add a privacy page, restore the link. |
| **ProjectsSection: “View all fencing/decking projects”** | High (404) | **FIXED** – Both buttons now point to `/projects`. |
| **Project cards link to `/project/:slug`** | High (404 in static build) | **FIXED (interim)** – Project cards now link to `/projects` so no 404s. For full SEO value and per-project indexing, add `src/pages/project/[slug].astro` later and restore card links to `/project/${slug}`. |
| **Navbar (unused) has broken links** | Low | Navbar component has `/home-2`, `/service-static`, `/pricing`, `/blog`, `/privacy-policy`. Not used on live pages (Header is used). Optional: clean Navbar for future use or remove. |
| **ServicesDropdown (Navbar) href="/services"** | Low | `/services` doesn’t exist. Only relevant if Navbar is used; Header uses different nav. |

### Internal link hierarchy (recommended)

- **Homepage** → Garden Rooms, Decking, About, Contact, Projects.  
- **Services (Garden Rooms / Decking)** → Contact, Projects, About.  
- **About** → Garden Rooms, Decking, Contact.  
- **Contact** → Garden Rooms, Decking.  
- **Projects** → Single hub; project detail pages (when added) ← Projects.

### Priority pages for link equity

1. Home  
2. `/garden-rooms`  
3. `/decking`  
4. `/contact`  
5. `/about`  
6. `/projects`

Ensure each of these is linked from the main nav and footer (already largely in place after fixes).

---

## Phase 8: Automated-style checks (thin content, alt, meta, links)

### Thin pages (&lt;500 words)

- **Contact:** Mostly form + short copy – acceptable for a contact page.  
- **Projects:** Content is project cards + CTAs; consider adding an intro paragraph (50–100 words) for context and keywords.  
- Other main pages have sufficient content.

### Image alt attributes

- Audited components use descriptive alt text (e.g. “Garden room installation project in Scotland – Custom garden room by Glenhaus Garden Rooms”).  
- **Action:** Run a crawl (Screaming Frog or similar) and fix any remaining images with missing or generic alt.

### Duplicate meta

- No duplicate titles or descriptions across the 6 main pages.  
- **Service/garden-rooms:** Page removed from index via 301; no duplicate meta issue.

### Broken links & redirects

- **Fixed:** Footer privacy-policy → garden-rooms; ProjectsSection fencing/decking-projects → projects.  
- **Remaining:** `/project/:slug` links from project cards will 404 until static project pages exist.  
- **Optional:** Add `/privacy-policy` page and link from footer when ready.

---

## Prioritised technical SEO issue list

### High impact (do first)

| # | Issue | Fix | Est. impact |
|---|--------|-----|-------------|
| 1 | Duplicate URL `/service/garden-rooms` | 301 to `/garden-rooms` | **DONE** – Consolidates signals, avoids duplicate content. |
| 2 | Broken footer link (privacy-policy) | Point to existing page or remove | **DONE** – Stops 404 and poor UX. |
| 3 | Broken “View all” links on Projects | Point to `/projects` | **DONE** – Stops 404s. |
| 4 | Project detail URLs 404 | Project cards now link to `/projects` (done). Optional: add `src/pages/project/[slug].astro` for per-project pages. | **DONE** (interim) – No 404s; optional static project pages for deeper SEO. |
| 5 | Render-blocking fonts | Load fonts async | **DONE** – Better LCP. |

### Medium impact

| # | Issue | Fix | Est. impact |
|---|--------|-----|-------------|
| 6 | BreadcrumbList only “Home” | Per-page breadcrumbs in BaseLayout | Better SERP breadcrumbs and structure. |
| 7 | robots.txt blocked query strings | Removed `Disallow: /*?*` | **DONE** – Safer crawl coverage. |
| 8 | Schema: sameAs, address | Add social URLs and full address | Stronger entity and local signals. |
| 9 | More images to WebP | Prefer WebP in components | Better LCP and bandwidth. |

### Low impact

| # | Issue | Fix |
|---|--------|-----|
| 10 | Meta description length on Contact/Projects | Optional longer, CTA-focused descriptions. |
| 11 | Navbar broken links | Clean or remove if unused. |
| 12 | Crawl-delay in robots.txt | Remove for Bing if desired. |
| 13 | aggregateRating vs number of Review objects | Align reviewCount with Review array or add more reviews. |

---

## Quick-win vs structural fixes

### Already done (quick wins)

- robots.txt: removed `Disallow: /*?*`.  
- 301: `/service/garden-rooms` → `/garden-rooms`.  
- Footer: privacy-policy link replaced with garden-rooms.  
- ProjectsSection: “View all fencing/decking projects” → `/projects`.  
- Fonts: non-render-blocking load.

### Structural (recommended next)

1. **Project detail pages:** Add `src/pages/project/[slug].astro` using `getStaticPaths` from `src/data/projects.ts`, with unique title/description and canonical per project.  
2. **BreadcrumbList:** Extend BaseLayout to accept breadcrumbs and output correct BreadcrumbList per page.  
3. **Privacy page:** Add `src/pages/privacy-policy.astro` and link from footer.  
4. **Schema:** Add `sameAs`, optional full address, and align review count with Review objects.

---

## Execution checklist

- [x] Remove robots.txt query-string block  
- [x] Add 301 for `/service/garden-rooms`  
- [x] Fix footer link (privacy → garden-rooms)  
- [x] Fix ProjectsSection “View all” links  
- [x] Make Google Fonts non-render-blocking  
- [x] Link project cards to `/projects` (no 404s); optional later: add `src/pages/project/[slug].astro`  
- [ ] Add per-page BreadcrumbList to BaseLayout  
- [ ] Add Privacy Policy page and footer link (optional)  
- [ ] Add schema sameAs and optional address  
- [ ] Verify sitemap and robots.txt live  
- [ ] Submit sitemap in Google Search Console and request indexing for key URLs  
- [ ] Run Rich Results Test and PageSpeed Insights (mobile)

---

## Success criteria (recap)

- Site is fully crawlable and indexable.  
- No duplicate or competing URLs for main services.  
- Clean canonical structure (one canonical per page).  
- Valid, specific schema (LocalBusiness, Organization, WebSite, BreadcrumbList).  
- Core Web Vitals improved (fonts non-blocking; images optimized).  
- Logical internal architecture and no critical broken links.  
- Technical barriers to ranking reduced.

**Estimated timeline for impact:** 30–60 days after deployment and re-crawl, assuming GSC sitemap submission and indexing requests are done.
