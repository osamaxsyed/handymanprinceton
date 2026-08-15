# PRINCETON SITE REBUILD — SPEC

Derived from Google Search Console data pulled 2026-08-15
(property `sc-domain:handymanprinceton.com`, windows 90d and 365d ending 2026-08-15).

Modeled on the EBH rebuild spec (`~/code/logo-handy-makeover/REBUILD_SPEC.md`) but
**re-derived, not copied**. Princeton's data is a different shape and several EBH
decisions do not transfer. Differences from EBH are marked **[DIFFERS FROM EBH]**.

---

## Context

Site for a handyman operation in the Princeton area. Legal entity: Central Jersey
Home Services LLC, NJ HIC #13VH13918800 (same entity as East Brunswick Handyman).
Google Business Profile will be service-area (no storefront address).

**Positioning change:** this is no longer a rank-and-rent asset. It is being built
as an owned operating business, a local competitor to Ace Handyman Services.
Delivery capacity confirmed by owner 2026-08-15.

The site's two jobs are unchanged: rank for service+town searches around Princeton,
and convert visitors into calls, texts, and booked jobs.

---

## Baseline data (measured, do not re-derive)

Totals: **41 clicks / 10,270 impressions over 12 months; 39 clicks / 9,848 over 90 days.**
Average position 23.9. Effectively all traffic is recent: 90d ≈ 365d, and 21 of 39
clicks landed in the last 28 days. The site is young and accelerating.

Clicks by page type, 12 months:

| Type | Pages | Clicks | Impressions | Share of clicks |
|---|---|---|---|---|
| Combo `/service/town` | 102 | 20 | 4,521 | 49% |
| Location `/service-areas/*` | 11 | 8 | 4,291 | 20% |
| Homepage | 1 | 7 | 1,319 | 17% |
| Other static | 14 | 6 | 2,067 | 15% |

**105 of 128 pages with data earned zero clicks.**

Top pages: `/` (7), `/about` (4), `/handyman-services/west-windsor` (3),
`/home-repairs/princeton` (3), `/deck-staining/east-windsor` (2),
`/handyman-services/east-windsor` (2), `/service-areas/princeton` (2),
`/service-areas/south-brunswick` (2), `/service-areas/west-windsor` (2).

Town demand by impressions (90d, query-level): Princeton 3,060 / West Windsor 1,167 /
Robbinsville 754 / Lawrence 116 / Plainsboro 89 / South Brunswick 89 /
East Windsor 34 / Pennington 23 / Cranbury 22 / Montgomery 13.

Device: desktop 5,863 impr at pos 27.0, mobile 3,944 at pos 18.6. **Mobile ranks
9 positions better than desktop.**

### The three facts that drive everything below

1. **There is no homepage anchor.** The homepage has 7 clicks and sits at position
   25.5. **[DIFFERS FROM EBH]** — EBH's homepage held 62% of clicks at position 1.2,
   and its entire spec was built around not disturbing that. Princeton has no such
   asset to protect. Nothing here is fragile; this is a build, not a preservation job.

2. **The money term is stranded.** "princeton handyman" has **617 impressions at
   position 31.2 with zero clicks**. "handyman princeton" 364 impr at 19.3 with 1 click.
   Google is already showing the site for exactly the right query, on page 2-4, where
   nobody clicks. Position is the entire problem.

3. **Combo pages are the top earner, not a liability.** 49% of clicks at 4,521
   impressions across 102 pages. **[DIFFERS FROM EBH]** — EBH noindexed ~200 zero-click
   combos because 202 of 253 pages were dead weight against a dominant homepage.
   Princeton's combos are its best-performing page type. **Do not port EBH's noindex
   sweep.** The winners are narrow service+town pages exactly as the EBH spec predicted
   ("`/deck-staining/edison` earns more than `/bathroom-remodel`").

---

## Hard rules (carried over from EBH, all still correct)

- NEVER invent reviews, testimonials, job photos, or town-specific claims. Where real
  content is required, insert a visible `<!-- TODO: OSAMA -->` block describing exactly
  what to supply.
- Pages whose town-specific TODOs are unfilled ship `noindex` until filled.
- No stock photography anywhere.
- No standalone plumbing page and no plumbing service claims (NJ licensing). Faucet,
  toilet, and caulk work is described only inside handyman scope as minor repairs.
- Design for 60-80 year old readers: 18px+ body text, high contrast, large tap targets.
- Phone is tap-to-call everywhere. Sticky Call/Text bar on mobile.
- Every page gets a unique title tag and meta description.
- No em dashes in site copy.
- License and NAP must be accurate: Central Jersey Home Services LLC, NJ HIC
  #13VH13918800. Nothing invented, nothing borrowed from EBH's review counts.

---

## Strategy — REVISED 2026-08-15 (owner decision)

**Princeton replicates EBH outright: same look and feel, same service catalog,
same flat URL architecture.** The business model is a scalable multi-town
operation under one LLC (the Ace Handyman pattern): one standardized service
catalog, one design system, one pricing ladder, replicated per town domain.
Earlier drafts of this spec preserved Princeton's combo-page architecture; that
is superseded by this decision.

The duplicate-content rule from the factory doctrine applies in full: same
slugs and page structure across brands, but ALL prose rewritten through the
Princeton/Mercer County market lens. Never ship swapped-town copy. Cross-site
shingle overlap must stay under 15% per same-slug page.

### Target architecture (mirrors EBH's shipped sitemap, 45 URLs)

Flat service pages off the root:
`/handyman` `/drywall-repair` `/carpentry` `/commercial-handyman`
`/property-managers` `/bathroom-remodel` `/bathroom-refresh`
`/tub-to-shower-conversion` `/walk-in-showers` `/grab-bar-installation`
`/shower-doors` `/backsplash` `/aging-in-place` `/storage-sheds`
plus `/book` `/get-estimate` `/about` `/portfolio` `/faq` `/careers`
`/privacy` `/terms` `/service-areas`

Town pages (demand order from GSC): princeton, west-windsor, robbinsville,
lawrence-township, plainsboro, south-brunswick. Existing extra towns stay live
but demoted.

Combos: keep ONLY the click earners, exactly as EBH retained its 9 survivors:
`/handyman-services/west-windsor` (3 clicks), `/home-repairs/princeton` (3),
`/handyman-services/east-windsor` (2), `/deck-staining/east-windsor` (2), and
the seven single-click combos. Everything else redirects to its flat service
page. Sequence rule: redirects ship in the SAME deploy as the flat pages that
replace them, never before.

### Migration map (old Princeton URL -> new)

- `/handyman-services` -> `/` (already done)
- `/:service/:town` thin tail -> flat `/{service}` page (301)
- `/home-repairs/*` -> `/handyman` except `/home-repairs/princeton` (kept, earner)
- `/remodels` -> `/bathroom-remodel`
- `/kitchen-remodeling` -> retained but demoted (EBH dropped kitchen; Princeton
  keeps the page live off-nav until 90-day data says otherwise)

### Design port

- EBH red primary (`--primary: 358 73% 38%`) replaces Princeton's green primary.
  All other tokens already identical.
- Components to port: HomeOffers, GoogleReview, LocalTestimonials, TodoBlock,
  FaqSchema, Header/Footer nav structure ($295 Visit as a nav item), Book page.
- StickyCallBar: done.
- Logo: same red-truck wordmark treatment, "Princeton Handyman" lockup.

### Pricing (confirmed by owner)

$295 Visit / $525 Half Day / $995 Full Day, flat, no hourly rate. Identical to
EBH by design: one price sheet for the whole operation.

### Reviews (owner decision 2026-08-15)

EBH reviews shown with honest attribution (same LLC, East Brunswick service
area). No EBH GBP link. Princeton customers will review the Princeton GBP once
it exists.

### What stays measured, not assumed

The eight stranded high-impression pages (title/meta rewrites) and the
striking-distance terms (home repair services pos 7.2, cabinet repair pos 12.4)
still get their fixes inside the new architecture: cabinet work lives on
`/carpentry` (EBH pattern: carpentry-cabinets merged), home repairs on
`/handyman`.

## Order of work — REVISED

1. Design tokens: red primary. DONE items: sticky bar, site.ts, head-term merge.
2. Port page shells from EBH with Princeton-lens copy: /handyman first (it is
   the head-term support page), then money pages (tub-to-shower, grab-bars,
   walk-in-showers, shower-doors, backsplash), then feeders (drywall-repair,
   carpentry, commercial-handyman, property-managers).
3. Routes + nav + footer to EBH structure.
4. Redirect map for the combo tail, shipped WITH the flat pages.
5. Sitemap regeneration; verify ~45 URLs; earned combos preserved.
6. Book page + booking engine port (own calendar).
7. Pressure test per factory P7, including cross-site shingle scan vs EBH.
8. Deploy on approval; measure at 6 weeks.
