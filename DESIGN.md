---
name: Sigmaward
description: Editorial security marketing grounded in real product evidence.
colors:
  brand: "#40c6c3"
  brand-hover: "#73dad4"
  brand-ink: "#071c1d"
  violet: "#9fcac6"
  bg: "#101719"
  bg-alt: "#141e21"
  bg-footer: "#0d1416"
  surface: "#172125"
  border: "#334246"
  border-soft: "#27363a"
  border-strong: "#52666c"
  text-bright: "#f3f5f4"
  text: "#c6d0d2"
  text-body: "#b7c2c5"
  text-muted: "#a8b7bb"
  text-faint: "#a0b0b5"
typography:
  display:
    fontFamily: '"Manrope Variable", sans-serif'
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.06em"
  headline:
    fontFamily: '"Manrope Variable", sans-serif'
    fontWeight: 650
    lineHeight: 1.13
    letterSpacing: "-0.045em"
  title:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "22px"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  eyebrow:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.17em"
  technical-label:
    fontFamily: '"JetBrains Mono Variable", monospace'
    fontSize: "11.5px"
    letterSpacing: "0.22em"
  button:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "15px"
    fontWeight: 700
rounded:
  control: "6px"
  capture: "10px"
  card: "16px"
spacing:
  action-gap: "16px"
  content-gap: "24px"
  mobile-gutter: "20px"
  section-gap: "64px"
  wide-gap: "80px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.brand-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
    textColor: "{colors.brand-ink}"
  button-secondary:
    textColor: "{colors.text-bright}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "16px 28px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
  navigation:
    textColor: "{colors.text}"
    height: "80px"
  technical-label:
    textColor: "{colors.brand}"
    typography: "{typography.technical-label}"
---

# Design System: Sigmaward

## Overview

**Creative North Star: "Observatorio de seguranca"**

Editorial, precise, and restrained: the real product leads the presentation.
Large typography, open spacing, quiet dark surfaces, and authentic interface
captures give the security platform a clear and inspectable presence.

Components are precise and restrained, with softened corners and clear actions.
Depth comes primarily from tonal surfaces and dividing lines, with isolated
shadows on internal pages. These descriptions were confirmed by the owner on
2026-10-30; they describe the existing website rather than a replacement design.

**Key Characteristics:**
- Dark graphite surfaces with a restrained signal accent.
- Manrope for narrative and JetBrains Mono for technical labels.
- Generous editorial spacing and strong typographic hierarchy.
- Real product imagery with visible provenance captions.

This record is based on the effective declarations in `app/globals.css`, shared
components, and computed styles from the rendered homepage. The second theme
block overrides earlier legacy colors and the old display-font declaration.

## Colors

### Primary

**Turquesa de sinal** (`brand`) marks primary actions, links on hover, focus
indicators, and capability labels. `brand-hover` lightens an action on hover;
`brand-ink` provides dark text on filled actions.

### Secondary

The retained `violet` token now contains muted pale teal. It is an existing
secondary label color, not evidence that the website uses a violet accent.

### Neutral

**Grafite esverdeado** (`bg`) is the page foundation. `bg-alt` and `surface`
separate content regions; `bg-footer` recedes beneath the closing navigation.
Borders use three strengths for quiet dividers, ordinary separation, and
interactive outlines. **Branco nevoa** (`text-bright`) carries headings, while
the text/body/muted/faint roles distinguish prose and supporting metadata.

**The Effective Token Rule.** Use the final theme values recorded above, not
the superseded neon turquoise and navy definitions earlier in the stylesheet.

The owner also authorized the application's palette as an optional source for
future variants. Its dark theme uses blue `#7FB2F0`, hover blue `#9EC5F8`, base
graphite `#0E141B`, surface `#16202B`, and foreground `#ECF2F8`. These are reference
values, not the current website tokens. Source: [application theme at ab81b5d](https://github.com/wagnerbocchi/sigmaward/blob/ab81b5dfb4b03da2ccab40f8e8943050ce702d95/apps/web/src/theme/tokens.css).
When a variant adopts this authorized palette, use coherent semantic roles and
verify contrast; do not replace colors inside real product screenshots.

## Typography

Manrope Variable is self-hosted for display and body. JetBrains Mono Variable
is self-hosted for technical labels. Do not infer Space Grotesk from the obsolete
declaration: the active display token resolves to Manrope.

The homepage display scales from `clamp(48px, 5.7vw, 82px)` on wide screens to
70px below 1100px, 64px below 900px, and `clamp(38px, 10.3vw, 58px)` below 600px.
Section headings use `clamp(30px, 4.6vw, 52px)`. Internal-page headings use
`clamp(40px, 5vw, 68px)`, weight 700, line-height 1.08, and tracking -0.05em.

Body defaults are recorded in the frontmatter; narrative sections commonly use
15-18px text with line-heights of 1.7-1.8. Captions use 12px and line-height 1.6.
Eyebrows are uppercase; editorial labels use Manrope and the shared technical
label component uses JetBrains Mono. Preserve that distinction.

## Layout

The shared container is `min(1320px, calc(100% - 104px))`. Below 1100px its width
becomes `calc(100% - 80px)`; below 600px it becomes `calc(100% - 40px)`.
Section spacing commonly spans 64-110px on desktop and 44-64px on mobile.

The existing homepage combines asymmetric two-column introductions, two-column
capability lists, and three-column supporting facts. These are observed reusable
patterns, not a requirement that every page copy the homepage composition.
At 900px navigation becomes a menu and large feature splits stack. At 600px
capability lists, supporting facts, and footer groups stack into one column.
Some internal card grids retain local 640px, 720px, 800px, and 900px breakpoints.

The header remains sticky and 80px tall. Anchor offsets account for it; preserve
the skip link and mobile menu's scrolling space when refining navigation.

## Elevation & Depth

Surfaces are discrete, separated by tones and lines. The shared primary button,
capture frame, and homepage sections have no drop shadow. The sticky header uses
an almost opaque base background. Isolated contact and login actions retain
`0 10px 30px -10px rgba(32,221,201,0.7)` shadows. Record these as local exceptions,
not a reason to add glow throughout the system.

## Shapes

Controls have gently softened corners, screenshots use wider rounding, and
shared cards use the largest of the recorded radii. Thin borders and straight
section dividers provide most structure. The mobile menu trigger uses 4px corners;
contact/login actions retain local 11px corners. Preserve the original Sigmaward
mark and do not redraw it to match incidental component geometry.

## Components

### Buttons

Primary actions use the signal fill and dark ink; secondary actions use bright
text, a strong outline, and a surface fill on hover. Shared actions have a minimum
height of 54px, a 24px label/arrow gap, and the padding in the frontmatter. On
activation they move down 1px. Color transitions use 0.18s ease.

Keyboard focus uses a 2px signal-colored outline with a 2px offset. Reduced-motion
preferences disable transitions and animations and turn off smooth scrolling.

### Cards

The shared card uses a surface fill, ordinary border, and the card radius.
Padding belongs to the consuming page, commonly 24-32px. The optional hover
variant retains local border `#2E6E66` and fill `#121C2C`; this is observed
implementation, not a new global color pair.

### Labels

Editorial eyebrows are quiet uppercase annotations. The reusable technical
label supports signal, pale teal, and severity-orange variants. These are labels,
not interactive chips. The site has no shared form-input component to document.

### Navigation

Desktop links use 15px text and open spacing. Language controls underline the
current locale. Below 900px, a minimum 44px menu trigger opens a scrollable panel
below the header. Preserve visible keyboard focus and the existing skip link.

### Product captures and capability links

Captures sit within an outlined frame, preserve their intrinsic proportions, and
link to the full-size image. A short caption identifies the anonymized interface.
Capability links use a top divider, numbered accent label, heading, prose, and
arrow; they form a readable list without a filled card around every item.

## Do's and Don'ts

### Do:
- Do use the effective theme tokens and the self-hosted font families.
- Do preserve real captures, their proportions, captions, and full-size access.
- Do use typography, spacing, and quiet dividers to establish hierarchy.
- Do preserve keyboard focus, reduced-motion support, and mobile navigation.

### Don't:
- Don't revive superseded theme values by extracting only the first CSS block.
- Don't treat colors inside product screenshots as website tokens.
- Don't spread local glow or legacy hover colors across unrelated components.
- Don't invent input, chip, or modal patterns that the website does not contain.
