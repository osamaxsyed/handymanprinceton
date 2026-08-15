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

## Strategy

EBH's problem was 200 dead pages diluting a strong homepage. **Princeton's problem is
the opposite: the pages work, the domain has no authority to lift them off page 3.**

Everything below serves one goal: move "princeton handyman" and its variants from
position ~31 to page 1. Depth and internal linking around the head term, not more
page count.

### 1. Fix the head term first **[HIGHEST PRIORITY]**

`/` at position 25.5 and `/handyman-services` (583 impressions, ZERO clicks, position
38.7) are competing for the same intent. Google is splitting signals between them.

- Make the homepage the definitive "Princeton handyman" page. H1: "Licensed Handyman
  in Princeton, NJ". Full service scope, pricing anchor, trust row, real reviews once
  supplied.
- Merge `/handyman-services` into `/` with a 301. It has 583 impressions it cannot
  convert and it cannibalizes the homepage.
- Point every combo and location page's brand anchor at `/` in sentence one.

Expected effect is consolidation of ~1,900 impressions of head-term signal onto one URL.

### 2. Title and meta rewrite on stranded high-impression pages **[CHEAPEST WIN]**

These have impressions and zero clicks. Rewrite titles and metas before building
anything new. Same reasoning as EBH's `/bathroom-remodel` fix.

| Page | Impr | Pos |
|---|---|---|
| `/service-areas/robbinsville` | 719 | 26.1 |
| `/handyman-services` | 583 | 38.7 (merging to `/`) |
| `/flooring-installation/east-windsor` | 576 | 24.9 |
| `/door-installation/princeton` | 445 | 23.7 |
| `/service-areas` | 397 | 50.1 |
| `/fence-repair/princeton` | 253 | 25.2 |
| `/bathroom-renovation/robbinsville` | 223 | 14.2 |
| `/deck-staining/princeton` | 215 | 23.0 |

### 3. Town pages in demand order **[DIFFERS FROM EBH]**

EBH ordered towns by *clicks earned*. Princeton has too few clicks for that to be
meaningful, so order by **impression demand**, which is the available signal:

1. `/service-areas/princeton` — 3,060 impr (1,838 on the page itself)
2. `/service-areas/west-windsor` — 1,167
3. `/service-areas/robbinsville` — 754
4. `/service-areas/lawrence-township` — 116
5. `/service-areas/plainsboro` — 89
6. `/service-areas/south-brunswick` — 89

Demote, keep live, do not invest: East Windsor, Pennington, Cranbury, Montgomery,
Skillman, Hopewell.

Robbinsville is the surprise: 754 impressions and it also owns the two best
bathroom-remodeling positions on the site (16.9 and 13.1). Treat it as a real
secondary market, not a filler town.

### 4. Striking-distance service pages

Queries at position 5-25 with real impressions. These are one authority push from
page 1, and several have no dedicated page:

| Query | Impr | Pos | Has page? |
|---|---|---|---|
| handyman near me | 423 | 22.5 | homepage |
| drywall repair near me | 187 | 23.2 | thin |
| local handyman | 169 | 13.3 | homepage |
| home repair services | 100 | **7.2** | no — build |
| cabinet repair near me | 104 | 12.4 | no — build |
| fence repair near me | 86 | 9.7 | thin |
| door installation | 60 | 9.2 | thin |
| cabinet repair | 54 | 10.2 | no — build |

Build `/cabinet-repair` and strengthen `/drywall-repair`, `/fence-repair`,
`/door-installation`. "home repair services" at **position 7.2** is the single closest
term to page 1 on the whole site.

Also note a real West Windsor wood-floor cluster (84 + 65 + 61 impressions across
"wood floor repair / installation west windsor nj") and a Robbinsville stair-refinishing
term (66 impr, pos 24.8). One consolidated flooring page for West Windsor is justified
by demand under the query-mining rule (>=30 impr, >=4 variants, zero clicks).

### 5. Combo pages — keep and deepen **[DIFFERS FROM EBH]**

Do not run EBH's noindex sweep. Combos are the top click earner here. Instead:

- Keep all 102 live.
- Deepen only the ones with demonstrated impressions (the table in §2).
- Any combo still at zero clicks after 90 days from this rebuild gets noindexed,
  per the standing query-mining policy. Measure, then cut.

### 6. Booking engine

Port `~/code/ebh-booking` (request-then-confirm slots on Google Calendar, nodemailer).
Needs its own calendar and credentials for the Princeton operation. Add `/book` route
mirroring EBH's `Book.tsx`.

---

## Pricing

EBH's live pricing (verified in code 2026-08-15, NOT the figures in EBH's own
REBUILD_SPEC.md which are stale) is a flat three-tier ladder with no hourly rate:

| Tier | Price | Scope |
|---|---|---|
| Handyman Visit | **$295** | Up to 2 hours of skilled work |
| Half Day | **$525** | |
| Full Day | **$995** | |

Positioning copy: "Flat packages, agreed before work starts. No hourly meters, no
surprise line items. Materials at cost, shown on your invoice." Bathroom projects
get one fixed written price at a free in-home estimate.

Note: EBH's spec document still says "$275 visit, $125/hr after". That model was
replaced. Do not reintroduce an hourly rate anywhere; the current FAQ explicitly
sells against hourly billing.

**[NEEDS OWNER INPUT]** Whether Princeton uses the same three figures or a
higher ladder for the wealthier market. Do not write pricing copy until confirmed.

---

## Tech SEO

- Stack is already correct: Vite + React + react-router with SSR prerender
  (`npm run build` runs `build:ssr` then `prerender.js`). Every route ships static HTML.
  Do not rebuild the stack.
- Data is driven by `src/data/services.json`, `locations.json`,
  `unique-city-content.json`, consumed by `scripts/prerender.js` and
  `scripts/generate-sitemap.js`. Most changes are data edits plus new page components.
- HomeAndConstructionBusiness JSON-LD sitewide with correct NAP and license.
  Service schema per service page. FAQPage on FAQ only.
- Verify www 308 and self-canonicals (the network-wide www audit found a silently
  missing redirect on Middletown; confirm Princeton's is set).
- Mobile ranks better than desktop here. Mobile CWV is the priority.

---

## Order of work

1. Confirm pricing with owner. Confirm www 308 on the domain.
2. Merge `/handyman-services` into `/` with 301. Rebuild the homepage as the
   definitive Princeton handyman page.
3. Title and meta rewrite across the eight stranded pages in §2.
4. Town pages in demand order: Princeton, West Windsor, Robbinsville.
5. New service pages: `/cabinet-repair`, `/home-repair-services`; strengthen
   drywall, fence, door.
6. West Windsor flooring cluster page.
7. Booking engine port with its own calendar.
8. Schema, sitemap, mobile CWV pass.
9. Measure at 6 weeks. Decide combo noindex with evidence, not assumption.

Commit per page. Finish by outputting one consolidated TODO list of everything
the owner must supply (photos, reviews, pricing confirmation, GBP setup).

---

## Out of scope for the code

Google Business Profile (service-area). Manual. Caution: multiple service-area
businesses under one LLC in the same category need genuinely distinct, minimally
overlapping service areas or Google may suppress them.
