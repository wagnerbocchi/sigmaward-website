---
name: Sigmaward
description: Dark security operation flows with illustrative interactions and real product evidence.
colors:
  brand: '#9ac2ff'
  brand-hover: '#bdd6ff'
  brand-ink: '#101114'
  bg: '#101419'
  bg-alt: '#14191f'
  bg-footer: '#0c1014'
  surface: '#1c1f24'
  border: '#303a47'
  border-soft: '#242c36'
  border-strong: '#647080'
  text-bright: '#f0f2f5'
  text: '#cbd1db'
  text-body: '#bfc7d2'
  text-muted: '#adb6c4'
  text-faint: '#a5afbe'
  connection: '#3f93ff'
  operation-border: '#456383'
  diagram-border: '#34516c'
  operation-active: '#0876ee'
  operation-panel: '#101923'
  operation-divider: '#263a4d'
  event-selected: '#1a314d'
  event-hover: '#172a3e'
typography:
  display:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: clamp(44px, 4.4vw, 68px)
    fontWeight: 750
    lineHeight: 1.04
    letterSpacing: -0.04em
  headline:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: clamp(30px, 3.2vw, 44px)
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: -0.035em
  title:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: 21px
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: -0.02em
  body:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.75
  button:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: 14px
    fontWeight: 700
  navigation:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: 14px
  caption:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: 12px
    lineHeight: 1.6
rounded:
  control: 7px
  panel: 12px
  operation-node: 50%
  operation-panel: 14px
  event-row: 8px
spacing:
  detail-gap: 12px
  action-gap: 14px
  mobile-gutter: 20px
  content-gap: 24px
  compact-gap: 30px
  split-gap: 64px
  section-gap: 72px
components:
  button-primary:
    backgroundColor: '{colors.brand}'
    textColor: '{colors.brand-ink}'
    typography: '{typography.button}'
    rounded: '{rounded.control}'
    padding: 13px 24px
  button-primary-hover:
    backgroundColor: '{colors.brand-hover}'
  button-secondary:
    textColor: '{colors.text-bright}'
    typography: '{typography.button}'
    rounded: '{rounded.control}'
    padding: 13px 24px
  button-secondary-hover:
    backgroundColor: '{colors.surface}'
  navigation:
    backgroundColor: '{colors.bg}'
    textColor: '{colors.text}'
    typography: '{typography.navigation}'
    height: 72px
  content-panel:
    backgroundColor: '{colors.bg-alt}'
    textColor: '{colors.text}'
    rounded: '{rounded.panel}'
    padding: 26px
  operation-node:
    backgroundColor: '{colors.bg}'
    textColor: '{colors.text-bright}'
    rounded: '{rounded.operation-node}'
    width: 57px
    height: 57px
  operation-node-selected:
    backgroundColor: '{colors.operation-active}'
    textColor: '{colors.text-bright}'
  operation-panel:
    backgroundColor: '{colors.operation-panel}'
    rounded: '{rounded.operation-panel}'
  event-row-selected:
    backgroundColor: '{colors.event-selected}'
    rounded: '{rounded.event-row}'
  event-row-hover:
    backgroundColor: '{colors.event-hover}'
---

# Design System: Sigmaward

## Overview

**Creative North Star: "Observatorio de seguranca"**

The security operation becomes an inspectable path: endpoint telemetry, detection, investigation, and response share a dark graphite field. Pale blue actions, functional blue connections, Manrope typography, and quiet borders carry the official application identity into the marketing website.

The owner approved the dark operation-flow reference in `.impeccable/mocks/flow-dark/approved.png`, replacing the centered homepage. The new surface pairs a left-aligned headline with selectable operation stages, an illustrative event-and-evidence panel, and a conceptual laptop illustration. The durable system keeps interactions explicit and distinguishes explanatory illustrations from real product evidence on Platform.

**Key Characteristics:**

- Dark graphite with pale blue actions and brighter functional connections.
- Manrope for headings, narrative, navigation, and controls.
- Semantic diagrams and selectable examples with visible state.
- Official logo, conceptual illustration, and real anonymized captures with distinct provenance.

This record follows current `Hero.tsx`, `AgentBridge.tsx`, shared components, and the effective rules in `app/globals.css`. Surface composition remains in `.impeccable/surfaces/components-pages-homepage-tsx.md`. Retained, unused hero/workflow declarations are not design authority.

## Colors

### Primary

**Pale application blue** (`brand`) identifies marketing actions, links, and focus. `brand-hover` lightens filled actions; `brand-ink` supplies dark labels. **Operation blue** (`operation-active`) fills the selected stage with bright icon ink. **Connection blue** (`connection`) traces active endpoint paths and the selected-stage connection. These operation colors are named from literal component CSS; they are not additional root custom properties.

### Neutral

**Graphite** (`bg`) is the page and header foundation. `bg-alt` separates broad regions, `bg-footer` closes the page, and `surface` fills secondary-button hover. Text roles distinguish headings, narrative, support, and captions. Ordinary, soft, and strong borders establish site-wide separation. The operation panel uses its own blue-black fill, blue-gray outlines, and dividers. Event selection and hover have distinct tonal fills.

**The Application Identity Rule.** Use pale blue for calls to action, saturated blue for operation selection and connections, and preserve the supplied logo colors.

The owner authorized the original application's full logo from `https://app.sigmaward.com/logo-full.svg`, stored at `public/sigmaward-logo.svg`. Its turquoise and violet remain intrinsic asset colors. Its canvas was widened to prevent wordmark clipping without changing logo geometry. Product screenshots retain their original colors; their contents do not define website tokens.

## Typography

**Display and Body Font:** self-hosted Manrope Variable with sans-serif fallback. JetBrains Mono remains available in source but is not a defining role on current marketing surfaces.

The display role is the left-aligned homepage headline, with explicit line breaks. At 1250px and below it is 52px; at 1000px and below it uses `clamp(42px, 6vw, 62px)`; at 600px and below it uses `clamp(35px, 9.4vw, 52px)` with tracking -0.035em. Internal-page titles retain `clamp(38px, 4.5vw, 64px)`, weight 650, and line-height 1.12, becoming 38px on narrow screens.

Section headings retain the headline role. The agent bridge uses `clamp(34px, 3.3vw, 50px)`, weight 700, and line-height 1.08, becoming 34px on narrow screens. Hero prose scales from 17-21px with line-height 1.5, uses 19px at 1000px, and 17px at 600px. Narrative text generally uses 14-18px and 60-75ch limits.

Stage labels use 15px with 12px descriptions; narrow layouts use 11px labels and omit descriptions. The illustrative panel uses compact 10-12px event/evidence text on desktop, increasing event titles to 12px and supporting text to 11px on mobile. These are local simulation dimensions, not a new body-text scale. Time values use tabular numerals. No uppercase editorial eyebrow tier is canonical.

## Layout

The shared content container remains `min(1248px, calc(100% - 96px))`, with 32px gutters at 1100px and 20px gutters at 600px. The operation hero, agent bridge, and header use the wider `min(1440px, calc(100% - 96px))`, changing to 32px gutters at 1250px and 20px at 600px. The sticky header remains at least 72px high; anchor scroll padding is 100px. Desktop navigation switches to a menu at 900px.

The desktop operation layout uses 37%/63% columns, a 255px first row, and minimum height 638px; at 1250px it uses 39%/61% and a 275px first row. The headline sits left, four stages sit upper right, the endpoint diagram occupies the lower left, and the example panel aligns lower right. The panel is capped at 610px and divides timeline/evidence 55%/45%.

At 1000px the headline, stages, and panel become successive rows; the panel occupies 78% width beside the simplified endpoint diagram. At 600px the panel fills the width, timeline and evidence stack, actions become full-width, and the endpoint diagram is hidden. Four stage tabs remain available across the row. The dynamic stage-to-panel connector is omitted at 1000px and below.

The agent bridge uses 46%/54% columns with 24px gap and 36px/44px vertical padding. The laptop uses 65% of the visual region and -9% vertical margins on desktop; those are reference-specific composition values, not general image rules. Its width becomes 69% at 1250px, 70% at 1000px, and 100% at 600px. At 1000px the bridge stacks. At 600px its four capability links form two columns below the laptop and decorative connections disappear.

Deeper sections retain divided capability lists, text-and-capture splits, audience links, and architecture panels. They stack at their existing 900px and 600px breakpoints. Desktop content spacing commonly uses 64px or 72px; narrow sections commonly use 48px.

## Elevation & Depth

**The Flat Surface Rule.** Separate content with tonal backgrounds, spacing, and thin borders; the current interface has no drop shadows.

The opaque header, blue-black example panel, outlined diagram nodes, and selected-node outline establish hierarchy. Functional connections are narrow strokes, not ambient glows. The generated laptop can carry illustrative lighting inside its raster; that is not an interface shadow token.

## Shapes

Marketing controls use the control radius; real capture frames and architecture containers use the panel radius. Operation nodes are circular, example panels use the operation-panel radius, and event rows and agent links use the event-row radius. Endpoint and alert tiles have local 9px corners. The processing node is a double-outline hexagon drawn with SVG paths. Keep this semantic diagram geometry distinct from the supplied logo geometry.

## Components

### Buttons and text links

Shared actions retain minimum height 48px, 20px label/icon gap, and 13px/24px padding. The homepage uses 21px horizontal padding, reducing to 14px with 12px labels at 1250px and returning to 24px/14px at 1000px. Primary actions use pale blue and dark ink. Secondary actions use bright text, a strong outline, and a surface fill/blue border on hover. Text links retain minimum height 44px, 16px arrow gap, and an underline on hover. Icons are inline SVG, not text glyphs.

Keyboard focus remains a 2px blue outline with 5px offset. Color, background, and border transitions use 180ms ease. Reduced-motion preferences disable transitions and animations and replace smooth scrolling with automatic scrolling.

### Navigation and content panels

Desktop links retain 30px gaps, reducing to 20px at the compact breakpoint. At 1300px and above the desktop navigation has a 12% left margin within the wider header. Locale controls underline the current language. Preserve the skip link, 44px minimum menu trigger, and viewport-bounded scrolling menu. Current-page link styling exists, but the desktop component does not assign page-link `aria-current`.

Architecture cells retain alternate backgrounds, 26px padding, and shared dividers. Login panels retain 36px padding, becoming 24px on narrow screens. Capability lists remain open divided rows; detail lists retain 16px SVG checks, 12px gaps and row padding, soft dividers, and 14px text. No reusable form-input or chip pattern is established.

### Operation stages and diagram

Four tabs represent agent, detection, investigation, and response; investigation is selected initially. Nodes are 57px circles with 24px SVG icons, reducing to 45px/20px on narrow screens. The active node uses operation blue, a pale border, and a 3px dark-blue outline. Hover changes its border to the action accent. Arrow keys, Home, and End move tab selection; only the selected tab enters the tab order. Previous/next controls cycle the same scenes.

Endpoint/device tiles, double-hexagon processing, and alert output form a semantic diagram with an accessible description. SVG connections and visible labels are implemented UI, not a flattened screenshot. On wide layouts a continuous SVG path is measured from the actual selected node to the actual example panel. `ResizeObserver` updates its geometry when the layout or panel changes; selection recalculates the path. Preserve this relationship rather than drawing a fixed approximation.

### Illustrative event and evidence panel

The panel is explicitly labeled illustrative and uses documentation-only network addresses. It never operates real endpoints. Five event buttons expose selected state with `aria-pressed`; choosing an event updates evidence announced through a polite, atomic live region. Changing stage resets the selected event to that scene's configured default. The source link follows the active stage to its localized Platform section.

Event rows are at least 44px tall on desktop and 55px on narrow screens. Selection adds a blue fill and outline; hover uses its own tonal fill. Evidence uses a definition list and safely wraps long values. Scene changes use a 240ms `cubic-bezier(0.16, 1, 0.3, 1)` reveal from 0.7 opacity and a 6% lower clip. Reduced motion removes that animation. Compact panel values are illustrative examples, not live operational evidence.

### Agent bridge and product evidence

The transparent `public/illustrations/agent-laptop.png` raster is a generated conceptual illustration, displayed with descriptive alternative text. Four adjacent capability links remain real semantic links with SVG icons, 48px minimum height, 7px/12px desktop padding, 8px vertical gaps, quiet outlines, and blue hover borders. Narrow layouts use 10px padding and gaps. Their connecting strokes are decorative SVG and disappear on narrow screens. Preserve image provenance and transparency.

Real anonymized product captures remain on Platform in rounded outlined frames with full-size links. Preserve their proportions and provenance. Their metrics are dated examples, not live measurements or performance guarantees. The illustrative homepage panel and conceptual laptop do not replace that evidence.

## Do's and Don'ts

### Do:

- Do use current website tokens and self-hosted Manrope.
- Do preserve the official application logo geometry and uncropped wordmark.
- Do label illustrative scenarios and retain their links to real Platform evidence.
- Do preserve real anonymized captures, their proportions, and full-size access.
- Do retain visible focus, keyboard tab navigation, selectable events, live evidence announcements, and reduced-motion support.
- Do keep Portuguese and English routes and layouts equally usable.

### Don't:

- Don't describe illustrative event data as live telemetry or operate real endpoints from the marketing example.
- Don't turn screenshot metrics into guarantees or invent customers, performance, or certification claims.
- Don't replace real product captures with generated dashboards; the generated laptop is a conceptual illustration.
- Don't inherit unused centered-hero, old workflow, uppercase eyebrow, or legacy card styles.
- Don't promote compact example-panel text sizes into general body typography.
