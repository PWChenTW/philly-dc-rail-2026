# Five Itinerary Trips · Design Spec

**Date:** 2026-05-23
**Owner:** Powen Chen
**Status:** Draft (awaiting user approval)

## Overview

Build five themed itinerary pages for the 2026 Autumn Boston wedding trip. Each
itinerary is rendered in **two design styles** — `精修版` (refined editorial)
and `海報版` (1930s WPA railroad poster) — yielding **10 content pages**.
Add a **hub page** at `/trips/` that lists all five trips with thumbnails.

Total new files: **11 HTML pages**.

All five trips anchor on the **Boston wedding 2026-09-27 (Sun)**. Geographic
scope: NYC ↔ Boston ↔ Philadelphia ↔ Washington D.C. region (with
inland/coastal extensions per theme).

## File Layout

```
site-philly-dc/
├── trips/
│   ├── index.html                  # Hub: lists all 5 trips
│   ├── 01-classic/
│   │   ├── index.html              # 精修版
│   │   └── poster.html             # 海報版
│   ├── 02-history/
│   │   ├── index.html
│   │   └── poster.html
│   ├── 03-foliage/
│   │   ├── index.html
│   │   └── poster.html
│   ├── 04-niagara-finger/
│   │   ├── index.html
│   │   └── poster.html
│   └── 05-foodie/
│       ├── index.html
│       └── poster.html
```

URL examples after deploy:
- `https://pwchentw.github.io/philly-dc-rail-2026/trips/`
- `https://pwchentw.github.io/philly-dc-rail-2026/trips/02-history/`
- `https://pwchentw.github.io/philly-dc-rail-2026/trips/02-history/poster.html`

## Reference Templates (DO NOT BREAK)

Both styles already exist and are proven. Agents MUST copy structure, CSS,
fonts, color palette, and animations from these files unchanged:

- **Refined template:** `site-philly-dc/refined/index.html`
  - Brand: Field Notes editorial brochure
  - Fonts: Cormorant Garamond + Noto Sans TC + Noto Serif TC
  - Palette: cream paper + brass + ink navy + brick + moss
  - Features: paper grain SVG noise overlay, scroll-reveal IntersectionObserver,
    SVG rail-track arrows in hero `<h1>`, parallax on hero background

- **Poster template:** `site-philly-dc/poster/index.html`
  - Brand: 1930s WPA railroad pictorial bulletin
  - Fonts: Limelight (Art Deco display) + Big Shoulders Display + Crimson Pro
    + Special Elite (typewriter) + Noto Serif TC
  - Palette: aged paper + mustard + terracotta + teal + ink black
  - Features: massive slow-spinning sunburst behind hero, SVG duotone filters
    per city, halftone dot screen-print overlay, ticket-stub day cards with
    rotated stamps, vintage timetable train interludes, route map SVG

Content reference (rich descriptions, captions, anchors):
- `site-philly-dc/explore/index.html` — has all the data on each region/city
  via the `data` and `photos` consts. Agents should read this and lift
  descriptions verbatim when applicable.

## Image Library

All images come from Wikimedia Commons via `Special:FilePath` endpoint:

```
https://commons.wikimedia.org/wiki/Special:FilePath/<filename>?width=<n>
```

The `photos` object in `explore/index.html` (lines ~1314+) contains 26
pre-verified image filenames keyed by region ID. Reuse these.

Additional images for new locations (verify before use via curl HEAD check):
- **NYC**: For Trip 05 foodie / Trip 02 history starting points.
  Candidates: `Manhattan from Top of the Rock.jpg`,
  `Grand Central Terminal Main Concourse Jan 2006.jpg`,
  `Brooklyn Bridge Manhattan.jpg`
- **Battlefield day trips**: `Antietam National Battlefield Maryland.jpg`,
  `Manassas Battlefield.jpg`
- **Mount Vernon**: `Mount Vernon estate.jpg`

Each agent verifies their image URLs (curl 200 OK) before committing.

## Trip Themes

### Trip 01 · Classic Corridor (10 days)

The original BOS → PHL → DC itinerary. Already exists in production at
`/refined/` and `/poster/`. **The agent should copy and adapt these** to the
`/trips/01-classic/` paths with these minimal changes:

- Update topbar nav to link to `../` (trips hub) and other 4 trips
- Update title to `Classic Corridor · 10 天直達`
- Add a small "ALSO AVAILABLE" callout linking to the other 4 themes

**Skeleton:**
- 9/24 Thu: TPE → BOS Logan, evening settle
- 9/25 Fri: Freedom Trail + State House + North End
- 9/26 Sat: Cambridge + MFA + Gardner + rehearsal dinner
- 9/27 Sun: 婚禮
- 9/28 Mon: Boston seafood day (Neptune Oyster + Eventide)
- 9/29 Tue: BOS → New Haven (Pepe's pizza stop) → PHL
- 9/30 Wed: PHL Independence Hall + Reading Terminal + Mütter
- 10/1 Thu: PHL Art Museum + Cheesesteak duel + Italian Market
- 10/2 Fri: Acela → DC; Air & Space + Lincoln Memorial sunset
- 10/3 Sat: NMAAHC + LOC + IAD departure → 10/4 arrive TPE

### Trip 02 · Founding History Deep (13 days)

Time-ordered narrative: colonial → revolution → founding → Civil War.
Pre-wedding loop through Hudson Valley.

**Phases:**
- **Pre (4 days)**: Land NYC → Hudson Valley (FDR Home, West Point)
- **Wedding (3 days)**: BOS — Freedom Trail + JFK Library, then wedding day, recovery
- **South (5 days)**: BOS → New Haven (Yale lunch) → PHL (Independence NHP +
  Museum of American Revolution + Valley Forge day trip) → DC (Capitol +
  National Archives + Mount Vernon + Arlington)
- **Optional (1 day)**: Antietam battlefield day trip from DC

**Day skeleton:**
- 9/22 Tue: TPE → JFK arrival
- 9/23 Wed: NYC walk + Metro-North to Cold Spring/Hudson Valley
- 9/24 Thu: FDR Home + Vanderbilt Mansion (Hyde Park)
- 9/25 Fri: West Point tour
- 9/26 Sat: Hudson Valley → BOS Amtrak
- 9/27 Sun: 婚禮
- 9/28 Mon: BOS recovery + JFK Library + Freedom Trail
- 9/29 Tue: BOS → New Haven (Yale + Pepe's) → PHL evening
- 9/30 Wed: PHL Independence Hall + Museum of American Revolution
- 10/1 Thu: PHL → Valley Forge NHP day trip (back to PHL evening)
- 10/2 Fri: PHL → DC Acela; afternoon National Archives + Capitol Hill
- 10/3 Sat: Mount Vernon + Arlington National Cemetery
- 10/3 evening: IAD departure → 10/4 arrive TPE

### Trip 03 · Foliage Chaser (14 days)

Chase peak 9月底~10月初 fall foliage in Adirondacks + Vermont highlands before
婚禮, then south for cultural finale.

**Phases:**
- **Pre (5 days)**: NYC → Adirondacks (Lake Placid, Whiteface, 1000 Islands)
  → Vermont (Stowe, Mt Mansfield)
- **Wedding (3 days)**: BOS — pre-wedding Cambridge day, wedding, recovery
- **South (5 days)**: PHL → DC + Shenandoah day trip
- **Depart (1 day)**

**Calendar truth (2026):**
9/20 Sun · 9/21 Mon · 9/22 Tue · 9/23 Wed · 9/24 Thu · 9/25 Fri · 9/26 Sat ·
**9/27 SUN = wedding** · 9/28 Mon · 9/29 Tue · 9/30 Wed · 10/1 Thu ·
10/2 Fri · 10/3 Sat · 10/4 Sun · 10/5 Mon

**Day skeleton:**
- 9/20 Sun: TPE → JFK arrival
- 9/21 Mon: NYC half-day + drive to Hudson Valley overnight
- 9/22 Tue: Drive to Lake Placid (3h via I-87)
- 9/23 Wed: Adirondacks — Whiteface Mountain road + Mirror Lake
- 9/24 Thu: 1000 Islands + Boldt Castle boat tour
- 9/25 Fri: Drive to Stowe Vermont (3.5h via Burlington)
- 9/26 Sat: Stowe — Mt Mansfield Toll Road + Shelburne Museum; **evening
  drive to BOS** (4h via I-89) to be safely in town before wedding day
- 9/27 Sun: Wedding (rest morning + ceremony evening)
- 9/28 Mon: BOS Cambridge + brunch
- 9/29 Tue: BOS → PHL Amtrak
- 9/30 Wed: PHL Independence + Magic Gardens
- 10/1 Thu: PHL → DC Acela; afternoon Lincoln + Vietnam Wall sunset
- 10/2 Fri: DC Shenandoah day trip (Skyline Drive — peak foliage starting)
- 10/3 Sat: DC National Mall + Smithsonian + IAD evening
- 10/4 Sun: Arrive TPE

### Trip 04 · Niagara + Finger Lakes Loop (13 days)

Western New York natural wonders before flying east to BOS for wedding, then
classic south route.

**Phases:**
- **Pre (5 days)**: Fly NYC → drive west to Niagara → Finger Lakes
  → fly BUF → BOS
- **Wedding (3 days)**: BOS
- **South (4 days)**: PHL → DC
- **Depart**

**Day skeleton (resolved for wedding safety — fly BUF first, BOS by Saturday):**
- 9/21 Mon: TPE → JFK; evening to NYC hotel
- 9/22 Tue: NYC half day + fly LGA → BUF afternoon (1h flight)
- 9/23 Wed: Niagara — US side (Cave of the Winds, Maid of the Mist,
  Goat Island, Underground Railroad Heritage Center)
- 9/24 Thu: Niagara — Canadian side (Horseshoe Falls Journey Behind,
  Skylon, Whirlpool Aero Car)
- 9/25 Fri: Drive Niagara → Finger Lakes (3h) — Watkins Glen Gorge afternoon
- 9/26 Sat morning: Taughannock Falls + Cornell quick visit; afternoon
  fly SYR → BOS (or drive 6h) — **in BOS by Saturday night** to ensure
  wedding-day safety
- 9/27 Sun: Wedding
- 9/28 Mon: BOS recovery + North End
- 9/29 Tue: BOS Freedom Trail + JFK Library
- 9/30 Wed: BOS → PHL Amtrak (via New Haven optional)
- 10/1 Thu: PHL Independence + Magic Gardens
- 10/2 Fri: PHL → DC Acela; afternoon Mall
- 10/3 Sat: DC NMAAHC + Capitol Hill + IAD evening
- 10/4 Sun: Arrive TPE

### Trip 05 · Foodie's Northeast (12 days)

Food-axis itinerary. NYC immigrant cuisine + Boston seafood/Italian + Philly
cheesesteak + DC international.

**Phases:**
- **Pre (3 days)**: NYC — Manhattan Chinatown + Flushing dim sum + Brooklyn
  pizza tour
- **Wedding (3 days)**: BOS — North End Cannoli duel + Neptune Oyster +
  Daily Catch + Eventide
- **South (5 days)**: PHL Cheesesteak三派對決 + Reading Terminal + Italian
  Market + Zahav → DC Ben's Chili Bowl + Old Ebbitt + Le Diplomate + Eden
  Center Vietnamese + 9th St Ethiopian
- **Depart**

**Day skeleton:**
- 9/24 Thu: TPE → JFK; evening Joe's Pizza (West Village)
- 9/25 Fri: NYC — Chinatown dim sum + Russ & Daughters appetizing + Katz's
  Deli pastrami
- 9/26 Sat: NYC — Flushing food crawl OR Brooklyn pizza tour
  (Lucali / Di Fara / L&B Spumoni)
- 9/27 Sun: NYC → BOS morning Acela; wedding evening
  (or 9/26 night transfer to ensure safety)
- 9/28 Mon: BOS North End food crawl (Modern vs Mike's + Daily Catch +
  Neptune)
- 9/29 Tue: BOS Cambridge — Toscanini's + Mei Mei + Flour Bakery
- 9/30 Wed: BOS → PHL Amtrak
- 10/1 Thu: PHL — Cheesesteak三派對決 (Pat's / Geno's / John's) +
  Reading Terminal + Italian Market
- 10/2 Fri: PHL → DC Acela; lunch Old Ebbitt; dinner Le Diplomate
- 10/3 Sat: DC — Eden Center Vietnamese morning + 9th St Ethiopian +
  Eastern Market brunch; IAD evening → 10/4 arrive TPE

## Hub Page (`/trips/index.html`)

Layout: 5 large themed cards arranged in a grid (2 columns desktop, 1 column
mobile). Each card shows:
- Theme hero image (full-width within card, ~200px tall, duotone tinted)
- Trip number + title (Chinese + English)
- Days badge
- Route skeleton (one-line: "BOS → PHL → DC" with rail arrow icons)
- Top 3 attractions teased
- Two CTAs: `精修版 →` and `海報版 →`

Brand follows the **refined** editorial style (cream paper, Cormorant + Noto
Serif TC). Add a hero header explaining "為 9/27 Boston 婚禮設計的五條主題行程".

Update the topbar nav on **all four existing pages** (`/`, `/refined/`,
`/poster/`, `/explore/`) to add a link to `/trips/`.

## Style Discipline (Refined Pages)

Each `index.html` (refined) must include:
- Topbar: `FIELD NOTES · 個人行旅` + nav links to all 5 trips + hub + other
  views
- Hero: Cormorant `h1` with SVG rail-track arrows between city names; warm
  Capitol/Acela bg with radial-gradient dark vignette behind title;
  `text-shadow` for legibility
- Body grain via SVG noise overlay (multiply blend)
- Section rhythm: pillars → city sections (alternating left/right) →
  train interludes (dark panel) → 10/12/13-day grid → food map → logistics
- Scroll-reveal animations with staggered delays
- All Wikimedia images via `Special:FilePath`

## Style Discipline (Poster Pages)

Each `poster.html` must include:
- Masthead: ink black bar + mustard rule + Special Elite all-caps
- Hero "cover" section: dark bg, massive Limelight title with terracotta
  drop-shadow, slow-spinning sunburst behind, train silhouette, vintage
  stamp stats
- Route map SVG strip showing trip-specific stops (Niagara trip shows
  Niagara/Buffalo; Foliage shows Adirondacks/Vermont; etc.)
- City posters with image-col (duotone via SVG filter) + text-col
- Train interludes as timetable-strip panels
- 10/12/13-day schedule as ticket-stub cards with rotated stamps
- "Dining Car · Bill of Fare" food section
- "Reservations Required" logistics
- "Printer" footer

## Hub Card Hover/Interaction

- On hover: card lifts (translateY -3px) + shadow deepens
- The two CTAs use small chip buttons inline
- Cards link to refined by default; CTA chips open variants

## Parallel Execution Plan

Six agents, all dispatched concurrently:

| Agent | Output | Source data |
|---|---|---|
| **A1** | `/trips/01-classic/{index,poster}.html` | Copy from `/refined/` and `/poster/`, adjust nav |
| **A2** | `/trips/02-history/{index,poster}.html` | Spec section + explore content + new Hudson Valley/Valley Forge/Mt Vernon imagery |
| **A3** | `/trips/03-foliage/{index,poster}.html` | Spec section + explore (Adirondacks, Vermont) |
| **A4** | `/trips/04-niagara-finger/{index,poster}.html` | Spec section + explore (Niagara, Finger Lakes) |
| **A5** | `/trips/05-foodie/{index,poster}.html` | Spec section + explore food data + NYC imagery |
| **A6** | `/trips/index.html` (hub) + topbar nav updates on 4 existing pages | This spec |

Agent brief template (each agent receives):
1. Path to this spec
2. Path to refined template `site-philly-dc/refined/index.html`
3. Path to poster template `site-philly-dc/poster/index.html`
4. Path to content source `site-philly-dc/explore/index.html`
5. Specific trip ID and theme they own
6. Acceptance criteria (listed below)

## Acceptance Criteria

Per trip (both styles):
- File written to spec path
- HTML validates (no broken tags, missing closing braces, JS syntax errors)
- All `<img>` / `background-image` URLs return 200 (agent must curl-verify
  any URL not already in `photos` const)
- Topbar nav links to: hub, other 4 trips, both views of current trip
- Mobile responsive (test viewport 375px and 1280px)
- Loads within 3 seconds on first paint

For hub page:
- 5 cards rendered with hero images
- Each card has correct title, days, route, links
- 4 existing pages have updated topbar with `/trips/` link

System-level:
- After all 6 agents complete, `git status` shows 11 new files + 4 modified
  files
- Commit all in one batch with descriptive message
- Push and confirm GitHub Pages builds successfully (all URLs 200)

## Out of Scope (DO NOT BUILD)

- Server-side rendering or build pipeline (stays pure static HTML)
- React/Vue/framework migration
- New CSS framework (no Tailwind, no Bootstrap)
- Different design directions (only refined + poster)
- Booking/checkout/pricing CTAs (this is a personal planning doc, not sales)
- Different language versions

## Risk & Mitigation

- **Risk**: Agents produce slightly inconsistent styling.
  **Mitigation**: Strict directive to copy CSS verbatim from refined/poster
  templates. No new styles unless trip-specific data requires it.
- **Risk**: Image URLs 404.
  **Mitigation**: Every new URL agents add must be curl-verified before
  committing. Existing `photos` const URLs are pre-verified.
- **Risk**: Wedding-day logistics in Foliage/Niagara trips are too tight.
  **Mitigation**: Agents reconcile so wedding always falls on Sun 9/27 and
  there's at least one buffer day in Boston before wedding evening.
- **Risk**: 11 new files in one commit obscures review.
  **Mitigation**: Each agent commits its own files separately. Hub-page
  agent commits last with nav updates.
