# Handoff: Sigmaward Marketing Website

## Overview
The public marketing website for **Sigmaward** — a commercial SIEM/SOAR/SOC platform built on Wazuh, positioned as a lighter, more modern and more affordable alternative to Splunk, IBM QRadar and Microsoft Sentinel. Audience: SOC analysts, security teams, blue teams, risk managers, and MSSPs.

Scope of this handoff: **two pages** — **Home** (landing) and **Platform** — bilingual (**pt-BR default + en**), dark-first, "big-tech security" aesthetic (references: SentinelOne, Vanta, Microsoft Sentinel).

## About the design files
The files in this bundle are **design references created as HTML** — a high-fidelity prototype showing the intended look, layout, copy and behavior. **They are not production code to ship.** Your task is to **recreate these designs in a real codebase** using its idiomatic patterns and component library.

- `Sigmaward Site.dc.html` — the website (both pages + the PT/EN toggle). Open it in a browser to see the target pixel-for-pixel. It's a single self-rendering file; ignore the `<x-dc>` / DCLogic wrapper — that is a prototyping runtime, **not** the architecture you should ship.
- `Sigmaward Brand.dc.html` — the brand identity board (logo construction, palette, type, do's & don'ts). Reference for any brand decision.
- `content/i18n.json` — **all site copy**, both locales, structured. This is your source of truth for text.
- `assets/` — logo SVGs (mark, mono mark, favicon).

## Fidelity
**High-fidelity.** Final colors, typography, spacing and interactions are intentional — recreate them faithfully. Where a value isn't listed below, measure it from `Sigmaward Site.dc.html`.

## Recommended stack
No existing codebase was provided, so build a new one:
- **Next.js (App Router) + TypeScript + Tailwind CSS**
- i18n: `/pt` and `/en` segments (or `next-intl`), **pt-BR default**. Pull every string from `content/i18n.json`.
- Pages → routes: Home = `/`, Platform = `/platform`.
- Fonts via `next/font/google`: Space Grotesk, Manrope, JetBrains Mono.
- Deploy target: static/SSG is fine (no server data on these pages).

---

## Design tokens

### Color
```
/* Brand */
--brand:        #20DDC9   /* Signal Cyan — primary actions, links, focus, eyebrows, active states */
--brand-hover:  #3DE9D6
--brand-ink:    #062019   /* text/icon ON a cyan fill */
--violet:       #8C7BFF   /* Sentinel Violet — secondary "intelligence" accent, MSSP eyebrow, accents */
/* Signature gradient ("scan sweep") — use sparingly: logo, one hero glow, the architecture highlight */
--grad: linear-gradient(135deg, #34F0DA 0%, #8C7BFF 100%);

/* Dark-first neutrals */
--bg:          #0A0F1A   /* page base */
--bg-alt:      #0B111C   /* alternating section bg */
--bg-footer:   #080C14
--surface:     #101826   /* cards */
--surface-mock:#0B111E   /* product screenshot frames */
--surface-2:   #16202F
--border:      #243049   /* default card border */
--border-soft: #161E2C   /* section dividers */
--border-strong:#283650  /* mock frames */
--hairline:    rgba(255,255,255,0.07)  /* nav border */

/* Text */
--text-bright: #F2F6FC   /* headings */
--text:        #C7D0E2
--text-body:   #A6B3CA   /* paragraph copy */
--text-muted:  #8392AD
--text-faint:  #76849E
--text-faintest:#5E6B84
--disclaimer:  #3F4A60

/* Severity / semantic (alert classification) */
--sev-critical:#FF3B5C   (soft text: #FF6B82)
--sev-high:    #FF8A3D
--sev-medium:  #FFC53D
--sev-low:     #4D8DF7
--sev-info:    #8094B0
--status-ok:   #34D27A   /* healthy / resolved */
```
Rule: brand cyan is reserved for the brand/primary UI — **never** used to signal severity.

### Typography
- **Display** — `Space Grotesk`. Weights 500/600/700. Used for the wordmark, all headings, stat numbers, card titles.
- **Text / UI** — `Manrope`. Weights 400/500/600/700. Body copy, labels, nav.
- **Mono** — `JetBrains Mono`. Weights 400/500/600. Eyebrows (uppercase, tracked), code/rule snippets, IOCs/hashes, badges, stat labels, pricing/tech micro-labels.

Scale (from the design):
| Role | Font | Size / line-height / tracking / weight |
|---|---|---|
| Hero H1 | Space Grotesk | 50–55px / 1.04 / -0.025em / 600 |
| Section H2 | Space Grotesk | 36–39px / 1.1 / -0.02em / 600 |
| Card / pillar title | Space Grotesk | 17–18px / 600 |
| Lead paragraph | Manrope | 17–18px / 1.6 / 400 |
| Body | Manrope | 16.5px / 1.62 / 400 |
| Card body | Manrope | 14px / 1.55 / 400 (color: --text-muted) |
| Eyebrow | JetBrains Mono | 11.5px / uppercase / 0.22em / 500 (color: --brand) |
| Stat number | Space Grotesk | 30px / 600 |
| Badge / chip | JetBrains Mono | 9–11px / 700 / uppercase |

### Spacing, radii, shadows
- Content max-width: **1180–1240px**, centered, 32px side padding.
- Section vertical rhythm: **~90px** (88–94). Sections alternate `--bg` / `--bg-alt`, separated by a `--border-soft` top border.
- Radii: cards **16px**; large panels/CTA band **18–24px**; mock frames **14px**; buttons **9–11px**; pills/badges **999px**; small chips **5–8px**.
- Buttons: padding ~13–14px × 24–26px; primary = cyan fill + `--brand-ink` text + shadow `0 10px 30px -10px rgba(32,221,201,.7)`; secondary = `rgba(255,255,255,.04)` fill + `1px var(--border-strong)` + light text.
- Card glow shadow (mock frames): `0 30px 70px -36px rgba(0,0,0,.85)`.
- Ambient section glows: large soft `radial-gradient` of cyan (8–16% alpha) and violet, plus a 52px faint grid overlay on hero/CTA backgrounds.

### Logo
Use `assets/sigmaward-mark.svg` (gradient) on dark; `sigmaward-mark-mono.svg` (currentColor) for single-color contexts; `favicon.svg` for the tab/app icon. Wordmark = "Sigmaward" set in **Space Grotesk 600, -0.02em**, paired with the mark at ~`mark-height : wordmark-cap-height` ≈ equal. Full rules in `Sigmaward Brand.dc.html`.

---

## Pages & sections

### Shared chrome
- **Nav** (sticky, h=66px): translucent `rgba(10,15,26,.82)` + `backdrop-blur(14px)`, bottom `--hairline`. Left: logo (→ `/`) + links [Platform, Solutions, Pricing, Resources, Company]. Right: **PT|EN toggle** (segmented, active = cyan fill / ink text), "Log in" (text), primary CTA "See the product" (→ `/platform`). Only **Platform** is a real route; the others can be placeholders for now.
- **Footer**: 5-col (brand blurb + social icons | Product | Solutions | Resources | Company), bottom row = copyright + "built on Wazuh" tagline. Bg `--bg-footer`. Copy in `footer.*`.

### Home (`/`)
1. **Hero** — eyebrow pill (`hero.badge`), H1 (`hero.title`), lead (`hero.sub`), primary+secondary CTA, micro-note (`hero.note`). Right: a **dark product dashboard mock** in a browser frame (sidebar + "Threat Overview" stats + 3 severity alert rows). Background: layered cyan/violet radial glows + faint grid + one slow diagonal "sweep" beam.
2. **Trust strip** — label (`trust.label`), 6 placeholder wordmark logos (`trust.logos`), 4 stats (`trust.stats`), italic disclaimer.
3. **Problem** — eyebrow (orange), H2, lead, 3 pain cards (`problem.points`) each with an alert-triangle icon.
4. **Pillars ×4** (`pillars[]`) — alternating two-column feature blocks (text + a distinct product mock): (1) Detection → Sigma-rule + match card; (2) Automation → vertical playbook flow (Trigger→Enrich→Decide→Contain); (3) Cases → case header + status timeline; (4) Threat Intel → extracted-IOC table. Each: eyebrow, H2, body, 3 check-bullets.
5. **Capabilities** (`capsHead` + `caps[]`) — centered heading + 3×2 card grid, each card = icon tile + title + body.
6. **Comparison** (`compare`) — centered heading + table; **Sigmaward column highlighted** (cyan tint + side borders, Σ mark in header). Booleans render a cyan check (Sigmaward) / muted ✕ (legacy); strings render as text. Rows in `compare.rows` (`a` = Sigmaward, `b` = legacy; value is `true|false|string`).
7. **MSSP** (`mssp`) — two-column: text+bullets (violet eyebrow) + a "Tenants" panel mock (client rows with health dots).
8. **Compliance** (`compliance`) — centered heading + 4 badge pills (`compliance.badges`) with a shield-check icon.
9. **Quote** (`quote`) — centered testimonial, author/role, italic "illustrative" note.
10. **Final CTA** (`cta`) — rounded band with cyan+violet radial glows + grid, H2, sub, primary (→ `/platform`) + secondary.

### Platform (`/platform`)
1. **Hero** (`platform.badge/heroTitle/heroSub/ctaPrimary/ctaSecondary`) — centered, glow + grid bg.
2. **Pipeline** (`platform.pipelineHead` + `platform.pipeline[]`) — 6 numbered steps in a row joined by a horizontal connector line behind circular number badges.
3. **Modules** (`platform.modulesHead` + `platform.modules[]`) — 3×2 cards, each = check chip + title + body.
4. **Integrations** (`platform.integrationsHead` + `platform.integrations[]`) — 4-col grid of logo chips (gradient dot + name); italic disclaimer.
5. **Architecture** (`platform.arch`) — two-column: text + bullets, and a stacked layer diagram (Sources → Open core/Wazuh → **Sigmaward** [highlighted] → Response) joined by down-arrows.
6. **Final CTA** — same band as Home.

Product-UI text *inside* the mock screenshots (e.g. "Threat Overview", "Sigma Rule", "Playbook · Auto-respond", node labels, "CASE-1042") is intentionally **English in both locales** — these read as the real product UI. Do not translate them.

---

## Interactions & behavior
- **Routing/page switch**: Home ↔ Platform. Logo and footer logo → `/`. Nav "Platform", hero/CTA primary buttons → `/platform`. On navigation, scroll to top.
- **Language toggle (PT|EN)**: segmented control in nav; default **pt-BR**. Switches every string from `i18n.json`. Persist choice (cookie/localStorage) and reflect in the URL locale segment.
- **Hover states**: nav links → text lightens + faint bg; buttons → `--brand-hover` (primary) / lighter fill (secondary); cards → border `#2E6E66` + bg lifts to `#121C2C`.
- **Ambient motion**: a single slow diagonal sweep beam in the hero; a pulsing "LIVE" dot in the dashboard mock. Keep it subtle; respect `prefers-reduced-motion`.
- **Responsive**: design is desktop-first at ~1240px. For ≤900px, collapse two-column sections to single column, the 6-step pipeline to a vertical list, grids to 1–2 cols, and the nav links into a hamburger. (Mobile layouts are not in the prototype — apply standard responsive patterns.)

## State
Minimal: `locale` ('pt' | 'en') and the current route. No data fetching on these pages. Forms (login, "talk to sales") are out of scope here — wire CTAs to placeholder routes.

## Assets
- `assets/sigmaward-mark.svg` — gradient Σ mark (primary, on dark).
- `assets/sigmaward-mark-mono.svg` — single-color Σ (uses `currentColor`).
- `assets/favicon.svg` — app/tab icon (Σ on dark squircle).
- Customer logos in the trust strip are **placeholder wordmarks** (`trust.logos`) — replace with real partner logos when available.
- No raster images are required; all product "screenshots" are built with HTML/CSS in the prototype — rebuild them as components (or replace with real screenshots later).

## Files in this bundle
- `README.md` — this spec.
- `PROMPT.md` — a ready-to-paste prompt for Claude Code.
- `content/i18n.json` — all copy (pt + en).
- `assets/*.svg` — logos/favicon.
- `Sigmaward Site.dc.html` — website pixel reference (open in browser).
- `Sigmaward Brand.dc.html` — brand identity board (logo/palette/type/usage).
