---
name: Sigmaward
description: Dark product-led security marketing with the official application identity.
colors:
  brand: "#9ac2ff"
  brand-hover: "#bdd6ff"
  brand-ink: "#101114"
  bg: "#101419"
  bg-alt: "#14191f"
  bg-footer: "#0c1014"
  surface: "#1c1f24"
  border: "#303a47"
  border-soft: "#242c36"
  border-strong: "#647080"
  text-bright: "#f0f2f5"
  text: "#cbd1db"
  text-body: "#bfc7d2"
  text-muted: "#adb6c4"
  text-faint: "#a5afbe"
typography:
  display:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "clamp(42px, 4.5vw, 68px)"
    fontWeight: 750
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "clamp(30px, 3.2vw, 44px)"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "21px"
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  button:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "14px"
    fontWeight: 700
  navigation:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "14px"
  caption:
    fontFamily: '"Manrope Variable", sans-serif'
    fontSize: "12px"
    lineHeight: 1.6
rounded:
  control: "7px"
  panel: "12px"
  workflow-node: "50%"
spacing:
  detail-gap: "12px"
  action-gap: "14px"
  mobile-gutter: "20px"
  content-gap: "24px"
  compact-gap: "30px"
  split-gap: "64px"
  section-gap: "72px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.brand-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "13px 24px"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
  button-secondary:
    textColor: "{colors.text-bright}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "13px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.surface}"
  navigation:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    typography: "{typography.navigation}"
    height: "72px"
  content-panel:
    backgroundColor: "{colors.bg-alt}"
    textColor: "{colors.text}"
    rounded: "{rounded.panel}"
    padding: "26px"
  workflow-node:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.workflow-node}"
    width: "49px"
    height: "49px"
  workflow-node-selected:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.brand-ink}"
---

# Design System: Sigmaward

## Overview

**Creative North Star: "Observatorio de seguranca"**

The real security product leads a precise, restrained presentation. Dark graphite surfaces, pale blue actions, Manrope typography, and quiet dividers carry the approved application identity into the marketing website.

The owner approved this replacement world on 2026-11-01: a dark centered homepage combined with the agent-to-response flow. The centered composition belongs to that surface; the durable system is readable hierarchy, authentic product evidence, and clear access to deeper evaluation pages. Components are flat, softly rounded, and explicit about their interactive state.

**Key Characteristics:**

- Dark graphite with pale blue actions and visible focus.
- Manrope for headings, narrative, navigation, and controls.
- Thin dividers and tonal surfaces instead of decorative elevation.
- Official application logo and real anonymized product captures.

This record describes the approved implementation in `app/globals.css`, current shared controls and navigation, and current homepage and internal-page patterns. It replaces the previous visual-system record. The composition contract remains in `.impeccable/surfaces/components-pages-homepage-tsx.md`.

## Colors

### Primary

**Pale application blue** (`brand`) identifies primary actions, links, keyboard focus, and selected workflow nodes. `brand-hover` lightens filled actions on hover; **dark action ink** (`brand-ink`) keeps labels legible.

### Neutral

**Graphite** (`bg`) is the page and sticky-header foundation. `bg-alt` separates broad content regions; `bg-footer` recedes beneath closing navigation. `surface` provides the secondary action's hover fill. Ordinary, soft, and strong borders distinguish section rules, subordinate dividers, and interactive outlines. Bright text carries headings; text/body/muted/faint roles distinguish narrative, explanations, and captions.

**The Application Identity Rule.** Use pale blue for website actions and selection; preserve the official logo colors inside the supplied asset.

The owner authorized the original application's full logo, sourced from `https://app.sigmaward.com/logo-full.svg` and stored at `public/sigmaward-logo.svg`. Its turquoise and violet remain intrinsic asset colors, not competing website action colors. The canvas was widened to prevent fallback-font clipping without changing logo geometry. Screenshot colors are product evidence, not additional website tokens.

## Typography

**Display and Body Font:** self-hosted Manrope Variable, with sans-serif fallback. The ramp in the frontmatter is normative. JetBrains Mono remains available in the source but is not a defining type role on the current marketing surfaces.

The display role is the homepage headline. At 900px and below it becomes `clamp(38px, 6vw, 56px)`; at 600px and below it becomes `clamp(34px, 8.8vw, 48px)` and stops preserving explicit line breaks. Internal-page titles use `clamp(38px, 4.5vw, 64px)`, weight 650, and line-height 1.12; their narrow-screen size is 38px.

Section headings use the headline role. Titles have local size variants for capability links (19px), workflow explanations (22px), and architecture panels (18px). Body prose usually spans 14-18px; the hero introduction scales from 17-21px with line-height 1.5 and becomes 16px on narrow screens. Long explanations are generally limited to 60-75ch. Labels use ordinary sentence case; there is no editorial eyebrow tier to inherit.

## Layout

The shared container is `min(1248px, calc(100% - 96px))`. At 1100px and below it uses 32px side gutters; at 600px and below it uses 20px side gutters. The sticky header has a minimum height of 72px, with anchor scroll padding of 100px.

Reusable layouts include two-column text-and-capture splits, three-column divided capability lists, two-column audience links, and bordered architecture panels. At 900px and below navigation becomes a menu and major text-and-capture splits stack. At 600px and below capability lists, audience links, architecture panels, resource rows, and footer groups stack. Desktop sections commonly use 64px or 72px vertical padding; many sections reduce to 48px on narrow screens.

The approved homepage is centered above one broad product exhibit. Its introduction uses a 6px top margin, the action row has a 13px bottom margin, and the following workflow starts with 30px top padding on desktop. These are tuned composition values for this surface, not general spacing tokens. The hero exhibit clips its frame at aspect ratios 2.63, 1.9, and 1.45 across desktop, 900px, and 600px layouts; the image itself is not distorted and always links to the complete capture.

The workflow holds four equal-width steps on every layout. Its explanation uses three columns on desktop, two at 1100px, and one at 600px. Preserve readable labels and equal keyboard/touch access.

## Elevation & Depth

**The Flat Surface Rule.** Separate content with tonal backgrounds, spacing, and thin borders; the current system has no drop shadows.

The header is opaque. Product exhibits and architecture panels use subtle outlines; selected workflow nodes use solid accent fill. There is no glass, glow, or raised-card treatment to inherit.

## Shapes

Controls and menu triggers use the control radius; captures and bordered content panels use the panel radius. Workflow nodes are circles. Section boundaries and list separators are straight, one-pixel rules. Use the official logo as supplied rather than adapting its geometry to surrounding shapes.

## Components

### Buttons and text links

Primary and secondary actions share a minimum height of 48px and a 20px label-to-icon gap. Primary actions use pale blue with dark ink; secondary actions use bright text and a strong border, adding a surface fill and blue border on hover. Text links use blue, a minimum height of 44px, a 16px arrow gap, and an underline on hover. Icons are inline SVG paths, not text glyphs.

All interactive elements retain a 2px blue focus outline with a 5px offset. Color, background-color, and border-color transitions take 180ms with ease timing. There is no button press translation. Reduced-motion preferences disable transitions and animations and replace smooth scrolling with automatic scrolling.

### Navigation

Desktop navigation uses its named type role and 30px link gaps, reducing to 20px at the compact desktop breakpoint. Locale controls underline the current language. The menu trigger is at least 44px tall; its scrollable panel starts below the header and fits within the available viewport. Preserve the skip link. The stylesheet supports a current-page link state, but the current desktop navigation does not assign `aria-current` to page links.

### Content panels and lists

Architecture content uses a shared bordered wrapper, the panel radius, alternate background, 26px cell padding, and dividing lines between cells. Login content uses a bordered panel with 36px padding, reduced to 24px on narrow screens. These are functional containers, not a blanket card treatment for every content item.

Capability links are open rows with a top divider, heading, SVG arrow, and muted explanation. Their heading turns blue on hover. Detail lists use 16px check SVGs, the detail gap, 12px vertical row padding, soft bottom dividers, and 14px text with line-height 1.65. The current surfaces have no reusable form-input or chip component to record.

### Product exhibits

Real anonymized captures sit in rounded outlined frames and link to the full image in a new tab. The hero adds a provenance caption and explicit full-capture link. Metrics inside the images are dated examples, never live measurements or performance claims. Preserve original image proportions even when the homepage intentionally clips its exhibit window.

### Agent-to-response workflow

Four circular SVG nodes are connected by a thin line. The selected node uses blue fill and dark ink, with a blue rule below its label. Desktop nodes are 49px, reducing to 42px on narrow screens. The active explanation and contextual Platform link follow the row. Arrow keys, Home, and End move selection through the tabs; inactive tabs leave the tab order. A selection reveals its explanation with a 260ms `cubic-bezier(0.16, 1, 0.3, 1)` animation from 5px below and a 12% lower clip. Reduced motion removes the animation.

## Do's and Don'ts

### Do:

- Do use the current website tokens and self-hosted Manrope.
- Do preserve the official application logo geometry and its uncropped wordmark.
- Do use real anonymized captures, honest captions, and full-size access.
- Do retain visible focus, keyboard-operable tabs, reduced-motion support, and mobile navigation.
- Do keep Portuguese and English layouts equally readable.

### Don't:

- Don't turn screenshot metrics into live measurements, guarantees, or invented performance claims.
- Don't recolor real product captures or replace them with fabricated dashboards.
- Don't revive the previous teal action palette, uppercase eyebrows, glow effects, or obsolete card styling.
- Don't invent input, chip, or modal patterns that the current website does not contain.
