# Paste this into Claude Code

You're building the **marketing website for Sigmaward**, a commercial SIEM/SOAR/SOC platform built on Wazuh — positioned as a lighter, more modern, more affordable alternative to Splunk, IBM QRadar and Microsoft Sentinel. The look is premium, dark-first "big-tech security" (think SentinelOne × Vanta × Microsoft Sentinel).

Everything you need is in this folder. **Read these first, in order:**
1. `README.md` — full spec: design tokens (colors, type, spacing, radii, shadows), every page and section, interactions, and the i18n approach. This is the source of truth.
2. `content/i18n.json` — ALL site copy, both locales (`pt` default, `en`). Never hardcode copy; read it from here.
3. Open `Sigmaward Site.dc.html` in a browser — this is the **pixel target** for both pages and the PT/EN toggle. Use the nav "Platform" link and the PT|EN switch to see every state.
4. `assets/` — logo SVGs and favicon. `Sigmaward Brand.dc.html` — brand rules if you need them.

**Important:** the `.dc.html` files are **design references**, not code to ship. They use a prototyping runtime (`<x-dc>` / a `DCLogic` class) — ignore that wrapper entirely and **rebuild the UI cleanly** in the stack below.

## Build
- **Next.js (App Router) + TypeScript + Tailwind CSS.**
- Fonts via `next/font/google`: **Space Grotesk** (display), **Manrope** (body/UI), **JetBrains Mono** (mono).
- **i18n:** locale segments `/pt` (default) and `/en`, sourced from `content/i18n.json`. A `PT|EN` segmented toggle in the nav switches locale, persists the choice, and updates the URL.
- **Routes:** Home = `/`, Platform = `/platform`. Other nav items can be placeholder routes for now.
- First, translate the README's token block into your `tailwind.config` theme (colors, fonts, radii) + a few CSS variables — don't scatter raw hex values.

## Order of work
1. Tailwind theme from the README tokens + global dark background + font setup.
2. i18n plumbing (load `i18n.json`, locale routing, the PT|EN toggle).
3. Shared **Nav** (sticky, blurred) and **Footer**.
4. **Home** sections in order: Hero (+ dashboard mock), Trust strip, Problem, the 4 alternating Pillars (each with its product mock), Capabilities grid, Comparison table, MSSP, Compliance, Quote, Final CTA.
5. **Platform** sections: Hero, Pipeline, Modules, Integrations, Architecture diagram, Final CTA.
6. Componentize the repeated product "mocks" (dashboard, Sigma-rule card, playbook flow, case timeline, IOC table, tenants panel, architecture stack) as their own components. Their internal labels stay in English (they represent the product UI) — see README.
7. Make it responsive (desktop-first ~1240px; collapse to 1–2 columns and a hamburger nav on mobile — mobile isn't in the prototype, apply sensible patterns).

## Bar for "done"
Pixel-faithful to `Sigmaward Site.dc.html` on desktop, in dark theme, both locales, with the tokens exactly as specified. Subtle hover states and the hero sweep/LIVE-dot motion included (respect `prefers-reduced-motion`). Clean, typed, reusable components — no leftover prototype runtime.
