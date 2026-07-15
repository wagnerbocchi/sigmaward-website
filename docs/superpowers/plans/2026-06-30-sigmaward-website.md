# Sigmaward Marketing Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the bilingual (pt-BR default + en) Sigmaward marketing website — Home + Platform pages plus menu placeholders — faithfully recreating `design_handoff_sigmaward_website/Sigmaward Site.dc.html` as clean Next.js code, exported static for Hostinger.

**Architecture:** Next.js 15 App Router + TypeScript + Tailwind CSS v4, static export (`output: 'export'`). Portuguese is unprefixed at the site root; English lives under `/en`. Pages are data-driven: thin route files render shared page components (`HomePage`, `PlatformPage`) fed by a typed dictionary from `content/i18n.json`. All visual markup is recreated from the prototype; the `.dc.html` prototype runtime is NOT shipped.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, next/font (Space Grotesk / Manrope / JetBrains Mono), Vitest (i18n logic tests).

## Global Constraints

- **Design source of truth (pixel):** `design_handoff_sigmaward_website/Sigmaward Site.dc.html`. Measure/copy exact values from it. Line ranges cited per task are 1-indexed into this file.
- **Copy source of truth:** `content/i18n.json` (copied from the handoff). NEVER hardcode user-facing copy; read from the dictionary. Keys mirror 1:1 between `pt` and `en`.
- **Product-UI text inside mock components** ("Threat Overview", "Sigma Rule", "Playbook · Auto-respond", "CASE-1042", node labels, IOCs, "app.sigmaward.io", stat values like "4.2M/318/7") stays **English in both locales** — it is NOT in `i18n.json`, hardcode it in the mock components.
- **Brand color rule:** cyan `--brand` (#20DDC9) is reserved for brand/primary UI — NEVER used to signal severity. Severity uses the `--sev-*` tokens.
- **No raw hex in components:** use Tailwind theme tokens / CSS variables defined in `app/globals.css`. (Exception: one-off gradient/glow values may use CSS vars or arbitrary values referencing tokens.)
- **Routing:** pt unprefixed (`/`, `/platform/`), en under `/en` (`/en/`, `/en/platform/`). `trailingSlash: true`.
- **Static export:** must `npm run build` to `out/` with NO server features (no middleware, no server actions, no dynamic server functions). `images.unoptimized: true`.
- **Motion:** subtle; ALL animation gated behind `prefers-reduced-motion: no-preference`.
- **Node:** v24 (installed). Package manager: **npm**.
- **Commit cadence:** one commit per task (end of task). Branch: `feat/marketing-site` (already checked out).

---

## File Structure

```
next.config.ts            # static export config
postcss.config.mjs        # tailwind v4 postcss plugin
tsconfig.json             # paths: @/* -> ./
package.json
vitest.config.ts
.gitignore
app/
  layout.tsx              # <html lang="pt">, fonts, metadata base, favicon
  globals.css            # @import tailwindcss + @theme tokens + keyframes + base
  page.tsx                # Home (pt)              -> /
  platform/page.tsx       # Platform (pt)          -> /platform/
  solutions/page.tsx      # ComingSoon (pt)        -> /solutions/
  pricing/page.tsx        # ComingSoon (pt)
  resources/page.tsx      # ComingSoon (pt)
  company/page.tsx        # ComingSoon (pt)
  login/page.tsx          # ComingSoon (pt)
  sitemap.ts robots.ts
  en/
    layout.tsx            # nested layout: mounts <SetHtmlLang lang="en"/>
    page.tsx              # Home (en)              -> /en/
    platform/page.tsx     # Platform (en)          -> /en/platform/
    solutions|pricing|resources|company|login/page.tsx
content/
  i18n.json               # copied from handoff
lib/
  i18n.ts                 # Locale, Dictionary, getDictionary, localizePath, getLocaleFromPath
  i18n.test.ts            # vitest unit tests
components/
  SetHtmlLang.tsx         # client: sets document.documentElement.lang
  layout/
    Nav.tsx LocaleToggle.tsx Footer.tsx MobileMenu.tsx
  pages/
    HomePage.tsx PlatformPage.tsx ComingSoonPage.tsx
  sections/
    Hero.tsx TrustStrip.tsx Problem.tsx Pillar.tsx Capabilities.tsx
    Comparison.tsx Mssp.tsx Compliance.tsx Quote.tsx FinalCta.tsx
    PlatformHero.tsx Pipeline.tsx Modules.tsx Integrations.tsx Architecture.tsx
  mocks/
    DashboardMock.tsx SigmaRuleCard.tsx PlaybookFlow.tsx CaseTimeline.tsx
    IocTable.tsx TenantsPanel.tsx ArchStack.tsx
  ui/
    Logo.tsx Button.tsx EyebrowLabel.tsx SectionShell.tsx CheckBullet.tsx
    Card.tsx GlowBackdrop.tsx GridOverlay.tsx SeverityBadge.tsx Icon.tsx
public/
  favicon.svg sigmaward-mark.svg sigmaward-mark-mono.svg
README.md                 # run + Hostinger deploy steps
```

---

### Task 1: Project scaffold + static-export config

**Files:**
- Create: `package.json`, `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `.gitignore`, `next-env.d.ts` (auto), `app/layout.tsx`, `app/globals.css`, `app/page.tsx` (temporary placeholder)

**Interfaces:**
- Produces: a runnable Next 15 app; `npm run dev`, `npm run build` (→ `out/`), `npm run typecheck`.

- [ ] **Step 1: Initialize package.json and install deps**

Run (in repo root):
```bash
npm init -y
npm install next@15 react@19 react-dom@19
npm install -D typescript @types/react @types/react-dom @types/node tailwindcss@4 @tailwindcss/postcss postcss
```

- [ ] **Step 2: Set package.json scripts**

Replace the `scripts` block in `package.json`:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "typecheck": "tsc --noEmit"
}
```

- [ ] **Step 3: Create `next.config.ts`**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
```

- [ ] **Step 4: Create `postcss.config.mjs`**

```js
const config = {
  plugins: { "@tailwindcss/postcss": {} },
};
export default config;
```

- [ ] **Step 5: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "ES2022"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "out", "design_handoff_sigmaward_website"]
}
```

- [ ] **Step 6: Create `.gitignore`**

```
node_modules/
.next/
out/
*.tsbuildinfo
next-env.d.ts
.DS_Store
```

- [ ] **Step 7: Create minimal `app/globals.css`**

```css
@import "tailwindcss";

body { background: #0A0F1A; color: #C7D0E2; }
```

- [ ] **Step 8: Create `app/layout.tsx` (minimal, fonts added in Task 2)**

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sigmaward",
  description: "SIEM · SOAR · SOC — built on Wazuh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 9: Create temporary `app/page.tsx`**

```tsx
export default function Home() {
  return <main style={{ padding: 40 }}>Sigmaward — scaffold OK</main>;
}
```

- [ ] **Step 10: Verify dev + build**

Run: `npm run build`
Expected: build succeeds; `out/index.html` exists. Then `npm run typecheck` → no errors.

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next 15 + Tailwind v4 static-export project"
```

---

### Task 2: Design tokens, fonts, global styles

**Files:**
- Modify: `app/globals.css`, `app/layout.tsx`

**Interfaces:**
- Produces: Tailwind theme tokens usable as utilities (`bg-bg`, `text-text-bright`, `border-border`, `font-display`, etc.) and CSS vars (`--color-*`, `--font-*`, `--hairline`, `--grad`); keyframes `sw-sweep`, `sw-blink`, `sw-pulse`, `sw-float`; reduced-motion guard. Font CSS vars `--font-space-grotesk`, `--font-manrope`, `--font-jetbrains` on `<html>`.

- [ ] **Step 1: Configure fonts in `app/layout.tsx`**

Replace the imports/section to load fonts with CSS variables and attach to `<html>`:
```tsx
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500","600","700"], variable: "--font-space-grotesk", display: "swap" });
const sans = Manrope({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-manrope", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-jetbrains", display: "swap" });
```
Set `<html lang="pt" className={`${display.variable} ${sans.variable} ${mono.variable}`}>`.

- [ ] **Step 2: Write full `app/globals.css`**

Replace the file with tokens + base + keyframes. Source values from spec §4 / README tokens:
```css
@import "tailwindcss";

@theme {
  /* brand */
  --color-brand: #20DDC9;
  --color-brand-hover: #3DE9D6;
  --color-brand-ink: #062019;
  --color-violet: #8C7BFF;
  /* neutrals */
  --color-bg: #0A0F1A;
  --color-bg-alt: #0B111C;
  --color-bg-footer: #080C14;
  --color-surface: #101826;
  --color-surface-mock: #0B111E;
  --color-surface-2: #16202F;
  --color-border: #243049;
  --color-border-soft: #161E2C;
  --color-border-strong: #283650;
  /* text */
  --color-text-bright: #F2F6FC;
  --color-text: #C7D0E2;
  --color-text-body: #A6B3CA;
  --color-text-muted: #8392AD;
  --color-text-faint: #76849E;
  --color-text-faintest: #5E6B84;
  --color-disclaimer: #3F4A60;
  /* severity / status */
  --color-sev-critical: #FF3B5C;
  --color-sev-critical-soft: #FF6B82;
  --color-sev-high: #FF8A3D;
  --color-sev-medium: #FFC53D;
  --color-sev-low: #4D8DF7;
  --color-sev-info: #8094B0;
  --color-status-ok: #34D27A;
  /* fonts (next/font vars with fallbacks) */
  --font-display: var(--font-space-grotesk), sans-serif;
  --font-sans: var(--font-manrope), sans-serif;
  --font-mono: var(--font-jetbrains), monospace;
}

:root {
  --hairline: rgba(255,255,255,0.07);
  --grad: linear-gradient(135deg, #34F0DA 0%, #8C7BFF 100%);
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
::selection { background: rgba(32,221,201,0.28); color: #F2F6FC; }

@keyframes sw-sweep { 0% { transform: translateX(-130%);} 100% { transform: translateX(360%);} }
@keyframes sw-blink { 0%,100% { opacity: 1;} 50% { opacity: .3;} }
@keyframes sw-pulse { 0% { transform: scale(.5); opacity:.7;} 100% { transform: scale(2.6); opacity:0;} }
@keyframes sw-float { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-7px);} }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```

- [ ] **Step 3: Verify**

Run: `npm run dev`, open `/`. Confirm dark bg + Manrope rendering. Run `npm run build` → success.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: design tokens, fonts, global styles"
```

---

### Task 3: i18n foundation (content, types, helpers) — TDD

**Files:**
- Create: `content/i18n.json` (copy from handoff), `lib/i18n.ts`, `lib/i18n.test.ts`, `vitest.config.ts`, `public/favicon.svg`, `public/sigmaward-mark.svg`, `public/sigmaward-mark-mono.svg`
- Modify: `package.json` (add vitest dep + `test` script)

**Interfaces:**
- Produces:
  - `type Locale = 'pt' | 'en'`; `const LOCALES`, `const DEFAULT_LOCALE`
  - `type Dictionary = (typeof i18n)['pt']`
  - `getDictionary(locale: Locale): Dictionary`
  - `getLocaleFromPath(pathname: string): Locale`
  - `localizePath(pathname: string, target: Locale): string`

- [ ] **Step 1: Copy content + assets**

```bash
cp "design_handoff_sigmaward_website/content/i18n.json" content/i18n.json
cp design_handoff_sigmaward_website/assets/favicon.svg design_handoff_sigmaward_website/assets/sigmaward-mark.svg design_handoff_sigmaward_website/assets/sigmaward-mark-mono.svg public/
```

- [ ] **Step 2: Install vitest, add script**

```bash
npm install -D vitest
```
Add to `package.json` scripts: `"test": "vitest run"`.

- [ ] **Step 3: Create `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
  test: { environment: "node" },
});
```

- [ ] **Step 4: Write failing tests `lib/i18n.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import { getDictionary, getLocaleFromPath, localizePath } from "@/lib/i18n";

describe("getDictionary", () => {
  it("returns pt and en dictionaries with mirrored nav keys", () => {
    expect(getDictionary("pt").nav.platform).toBe("Plataforma");
    expect(getDictionary("en").nav.platform).toBe("Platform");
  });
});

describe("getLocaleFromPath", () => {
  it("detects en under /en", () => {
    expect(getLocaleFromPath("/en/")).toBe("en");
    expect(getLocaleFromPath("/en/platform/")).toBe("en");
  });
  it("defaults to pt at root", () => {
    expect(getLocaleFromPath("/")).toBe("pt");
    expect(getLocaleFromPath("/platform/")).toBe("pt");
  });
});

describe("localizePath", () => {
  it("pt -> en", () => {
    expect(localizePath("/", "en")).toBe("/en/");
    expect(localizePath("/platform/", "en")).toBe("/en/platform/");
  });
  it("en -> pt", () => {
    expect(localizePath("/en/", "pt")).toBe("/");
    expect(localizePath("/en/platform/", "pt")).toBe("/platform/");
  });
  it("same locale is idempotent", () => {
    expect(localizePath("/platform/", "pt")).toBe("/platform/");
    expect(localizePath("/en/platform/", "en")).toBe("/en/platform/");
  });
});
```

- [ ] **Step 5: Run tests → fail**

Run: `npm test`
Expected: FAIL (module `@/lib/i18n` not found / exports missing).

- [ ] **Step 6: Implement `lib/i18n.ts`**

```ts
import i18n from "@/content/i18n.json";

export type Locale = "pt" | "en";
export const LOCALES: Locale[] = ["pt", "en"];
export const DEFAULT_LOCALE: Locale = "pt";

export type Dictionary = (typeof i18n)["pt"];

export function getDictionary(locale: Locale): Dictionary {
  return i18n[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
}

export function localizePath(pathname: string, target: Locale): string {
  let base = pathname;
  if (base === "/en" || base === "/en/") base = "/";
  else if (base.startsWith("/en/")) base = base.slice(3); // "/en/platform/" -> "/platform/"
  if (target === "en") return base === "/" ? "/en/" : `/en${base}`;
  return base;
}
```

- [ ] **Step 7: Run tests → pass**

Run: `npm test`
Expected: PASS (all i18n tests green).

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: i18n dictionary, locale path helpers (TDD), assets"
```

---

### Task 4: UI primitives

**Files:**
- Create: `components/ui/Logo.tsx`, `Button.tsx`, `EyebrowLabel.tsx`, `SectionShell.tsx`, `CheckBullet.tsx`, `Card.tsx`, `GlowBackdrop.tsx`, `GridOverlay.tsx`, `SeverityBadge.tsx`, `Icon.tsx`

**Interfaces:**
- Produces (exact signatures consumed by later tasks):
  - `Logo({ size?: number, mono?: boolean })` — inline SVG Σ (gradient by default; `mono` uses `currentColor`). Markup from prototype L31 / `public/sigmaward-mark.svg`.
  - `Button({ href, variant: "primary" | "secondary", children, withArrow?: boolean })` — renders `next/link`. primary = cyan fill + `--brand-ink` + glow shadow; secondary = translucent + border. Styles from prototype L70-71.
  - `EyebrowLabel({ children, color?: "brand" | "violet" | "orange" })` — JetBrains Mono 11.5px uppercase tracked; default brand cyan. (orange = `--sev-high`.)
  - `SectionShell({ children, bg?: "bg" | "bg-alt", topBorder?: boolean, className?, label? })` — `<section>` with `padding: 90px 32px`, max-width inner 1180px, optional `border-top` `--border-soft`.
  - `CheckBullet({ children, color?: "brand" | "violet" })` — check icon chip + text. Markup from prototype L168-171.
  - `Card({ children, hover?: boolean, className? })` — surface card: `bg-surface`, `border-border`, radius 16px; hover → border `#2E6E66`, bg `#121C2C`.
  - `GlowBackdrop({ color: "brand" | "violet", className? })` — absolutely-positioned blurred radial glow.
  - `GridOverlay({ size?: number })` — absolute faint grid (52px default), `pointer-events:none`.
  - `SeverityBadge({ level: "crit" | "high" | "med" | "low" | "info", children })` — mono uppercase chip; bg uses `--sev-*`, text `--brand-ink` for crit/high/med. From prototype L103-105.
  - `Icon({ name, size?, strokeWidth? })` — thin wrapper rendering inline lucide-style SVG paths (stroke `currentColor`). Provide a `paths` map for icons used: `alert-triangle, grid, target, folder, dot-circle, zap, search, git-branch, shield-check, layers, box, bar-chart, sliders, trending-up, check, arrow-down, arrow-right`. Path data copied from the matching SVGs in the prototype (see per-use line refs in later tasks).

- [ ] **Step 1: Implement `Logo.tsx`**

Inline SVG, viewBox `0 0 100 100`, polyline `points="75,24 27,24 53,50 27,76 75,76"`, `stroke-width="12.5"`, `stroke-linejoin="miter"`, `stroke-linecap="square"`. Gradient id `sw-grad` (#34F0DA→#8C7BFF, see `public/sigmaward-mark.svg`); `mono` → `stroke="currentColor"`. `aria-label="Sigmaward"`.

- [ ] **Step 2: Implement `Button.tsx`**

Use `next/link`. primary styles (prototype L70): `bg-brand text-[--color-brand-ink] font-bold rounded-[11px] px-6 py-[13px] shadow-[0_10px_30px_-10px_rgba(32,221,201,0.7)] hover:bg-brand-hover`; optional trailing `→`. secondary (L71): `bg-white/[0.04] border border-border-strong text-text-bright hover:bg-white/[0.08]`.

- [ ] **Step 3: Implement remaining primitives**

`EyebrowLabel`, `SectionShell`, `CheckBullet`, `Card`, `GlowBackdrop`, `GridOverlay`, `SeverityBadge`, `Icon` per the Interfaces above. For `Icon`, copy each path `d` from the prototype SVG at first use.

- [ ] **Step 4: Smoke-render via a temporary harness**

Temporarily render each primitive in `app/page.tsx`. Run `npm run dev`, confirm each renders without console errors; `npm run typecheck` clean. Revert `app/page.tsx` to the temporary placeholder afterward.

- [ ] **Step 5: Verify build + commit**

Run: `npm run build` → success.
```bash
git add -A
git commit -m "feat: UI primitives (Logo, Button, eyebrow, card, icons, etc.)"
```

---

### Task 5: Layout chrome — Nav, LocaleToggle, Footer, MobileMenu

**Files:**
- Create: `components/layout/Nav.tsx`, `LocaleToggle.tsx`, `Footer.tsx`, `MobileMenu.tsx`, `components/SetHtmlLang.tsx`

**Interfaces:**
- Consumes: `Logo`, `Button` (Task 4); `getDictionary`, `localizePath`, `getLocaleFromPath`, `Locale` (Task 3).
- Produces:
  - `Nav({ locale }: { locale: Locale })` — sticky translucent blurred header (prototype L26-51). Left: `Logo` → home of locale + nav links (Plataforma→`/platform/`, others→placeholder routes, all locale-aware via `localizePath`). Right: `LocaleToggle`, "Entrar"/"Log in" link → `/login/`, primary `Button` "Ver o produto"/"See the product" → `/platform/`. Hamburger (`MobileMenu`) shown ≤900px.
  - `LocaleToggle()` — **client component**: segmented PT|EN (prototype L43-46). Reads `usePathname`; on click navigates (`useRouter().push`) to `localizePath(pathname, target)` and writes `localStorage["sw-locale"]`. Active = `bg-brand text-[--color-brand-ink]`.
  - `Footer({ locale }: { locale: Locale })` — 5-col footer (prototype L620-652): brand blurb + social SVGs (X/LinkedIn/GitHub paths from L631-633), 4 link columns from `footer.cols`, bottom row "© 2026 Sigmaward — {rights}" + `footer.built`.
  - `MobileMenu({ locale }: { locale: Locale })` — client; hamburger button toggling a drawer with the nav links + toggle (mobile not in prototype; standard pattern).
  - `SetHtmlLang({ lang }: { lang: string })` — client; `useEffect(() => { document.documentElement.lang = lang; }, [lang])`, renders nothing.

- [ ] **Step 1: Implement `LocaleToggle.tsx`** (client) per interface; persist + navigate.
- [ ] **Step 2: Implement `Nav.tsx`** per interface; links via `localizePath(pathname-base, locale)` using static hrefs (e.g. `localizePath("/platform/", locale)`).
- [ ] **Step 3: Implement `Footer.tsx`** per interface; link hrefs locale-aware where a route exists, else `#`.
- [ ] **Step 4: Implement `MobileMenu.tsx`** + wire into `Nav` (hidden ≥900px via `max-[900px]:` / `min-[901px]:` utilities).
- [ ] **Step 5: Implement `SetHtmlLang.tsx`.**
- [ ] **Step 6: Verify** — temporarily render `<Nav locale="pt"/>` + `<Footer locale="pt"/>` in `app/page.tsx`. `npm run dev`: toggle PT|EN swaps URL, links resolve. `npm run typecheck` + `npm run build` clean. Revert `app/page.tsx`.
- [ ] **Step 7: Commit**
```bash
git add -A
git commit -m "feat: Nav, LocaleToggle, Footer, MobileMenu, SetHtmlLang"
```

---

### Task 6: Product mock components

**Files:**
- Create: `components/mocks/DashboardMock.tsx`, `SigmaRuleCard.tsx`, `PlaybookFlow.tsx`, `CaseTimeline.tsx`, `IocTable.tsx`, `TenantsPanel.tsx`, `ArchStack.tsx`

**Interfaces:**
- Consumes: `Icon`, `SeverityBadge`, `GlowBackdrop` (Task 4).
- Produces: each is a self-contained, prop-less component (all internal text English/hardcoded per Global Constraints). Recreate exact markup/styles from these prototype line ranges:
  - `DashboardMock` → L77-110 (browser frame, sidebar, Threat Overview, 3 stat cards 4.2M/318/7, 3 alert rows CRIT/HIGH/MED, LIVE pulse dot via `sw-pulse`).
  - `SigmaRuleCard` → L177-196 (header "Sigma Rule"/active, YAML body with syntax colors, HIGH match footer T1059.001).
  - `PlaybookFlow` → L204-233 (header "Playbook · Auto-respond"/running; Trigger→Enrich→Decide→Contain nodes + down arrows).
  - `CaseTimeline` → L266-298 (CASE-1042 header HIGH + avatar; title; 4-step timeline with colored nodes/connectors).
  - `IocTable` → L307-320 (Extracted IOCs header "128 total"; column head; 4 rows hash/ip/domain/url with type+status chips).
  - `TenantsPanel` → L430-440 (Tenants header "6 active"; 4 client rows NORTHWIND/VERTEX/MERIDIAN/QUANTLY with evt counts + health dots; MERIDIAN critical red).
  - `ArchStack` → L591-599 (Sources → Open core/Wazuh → Sigmaward[highlighted] → Response, down arrows).

- [ ] **Step 1:** Implement `DashboardMock.tsx` from L77-110. Use `sw-pulse` keyframe for LIVE dot (gated by reduced-motion globally).
- [ ] **Step 2:** Implement `SigmaRuleCard.tsx` from L177-196.
- [ ] **Step 3:** Implement `PlaybookFlow.tsx` from L204-233.
- [ ] **Step 4:** Implement `CaseTimeline.tsx` from L266-298.
- [ ] **Step 5:** Implement `IocTable.tsx` from L307-320.
- [ ] **Step 6:** Implement `TenantsPanel.tsx` from L430-440.
- [ ] **Step 7:** Implement `ArchStack.tsx` from L591-599.
- [ ] **Step 8: Verify** — temporarily render all 7 mocks in `app/page.tsx`, `npm run dev`, visually compare against the prototype open in a browser. `npm run typecheck` + `npm run build` clean. Revert `app/page.tsx`.
- [ ] **Step 9: Commit**
```bash
git add -A
git commit -m "feat: product mock components (dashboard, sigma rule, playbook, case, IOC, tenants, arch)"
```

---

### Task 7: Home sections A — Hero, TrustStrip, Problem

**Files:**
- Create: `components/sections/Hero.tsx`, `TrustStrip.tsx`, `Problem.tsx`

**Interfaces:**
- Consumes: `Dictionary` (Task 3), `Button`, `EyebrowLabel`, `SectionShell`, `Icon`, `GlowBackdrop`, `GridOverlay` (Task 4), `DashboardMock` (Task 6).
- Produces:
  - `Hero({ dict, locale }: { dict: Dictionary; locale: Locale })` — prototype L57-112. Two-col grid; left = badge pill (`dict.hero.badge`), H1 (`dict.hero.title`), lead (`dict.hero.sub`), primary Button → `/platform/` (locale-aware) + secondary, note (`dict.hero.note`); right = `<DashboardMock/>`. Background glows + `GridOverlay` + sweep beam (`sw-sweep`).
  - `TrustStrip({ dict })` — prototype L114-136. `dict.trust.label`, 6 wordmarks `dict.trust.logos`, 4 stats `dict.trust.stats` (v/l), disclaimer `dict.trust.disclaimer`.
  - `Problem({ dict })` — prototype L139-157. orange `EyebrowLabel` `dict.problem.eyebrow`, H2 `dict.problem.title`, lead `dict.problem.body`, 3 cards `dict.problem.points` (t/d) with alert-triangle icon (path from L150).

- [ ] **Step 1:** Implement `Hero.tsx` (locale-aware CTA via `localizePath("/platform/", locale)`).
- [ ] **Step 2:** Implement `TrustStrip.tsx`.
- [ ] **Step 3:** Implement `Problem.tsx`.
- [ ] **Step 4: Verify** — render the three in `app/page.tsx` (pass `getDictionary("pt")`), `npm run dev`, compare to prototype hero/trust/problem. typecheck + build clean.
- [ ] **Step 5: Commit**
```bash
git add -A
git commit -m "feat: Home sections — Hero, TrustStrip, Problem"
```

---

### Task 8: Home sections B — Pillar (×4) + Capabilities

**Files:**
- Create: `components/sections/Pillar.tsx`, `Capabilities.tsx`

**Interfaces:**
- Consumes: `Dictionary`, `EyebrowLabel`, `CheckBullet`, `SectionShell`, `Card`, `Icon`, `GlowBackdrop`; mocks `SigmaRuleCard`, `PlaybookFlow`, `CaseTimeline`, `IocTable` (Task 6).
- Produces:
  - `Pillar({ data, mock, mockSide, glow, bg }: { data: { eyebrow: string; title: string; body: string; bullets: string[] }; mock: React.ReactNode; mockSide: "left" | "right"; glow: "brand" | "violet"; bg: "bg" | "bg-alt" })` — alternating two-col block (prototype L159-335). Text col: eyebrow, H2, body, check bullets. Mock col: glow backdrop + `mock`.
  - `Capabilities({ dict })` — prototype L337-378. Centered head (`dict.capsHead.eyebrow/title/sub`), 3×2 `Card` grid from `dict.caps` (t/d) each with a distinct icon tile. Icons (in order) from L347/L352/L357/L362/L367/L372: `layers, box, bar-chart, shield-check, sliders, trending-up`.

- [ ] **Step 1:** Implement `Pillar.tsx` (use `mockSide` to order columns; map `glow` to `GlowBackdrop` color).
- [ ] **Step 2:** Implement `Capabilities.tsx` with the 6 distinct icons.
- [ ] **Step 3: Verify** — in `app/page.tsx` render the 4 pillars: `dict.pillars[0]`+SigmaRuleCard (right, brand, bg), `[1]`+PlaybookFlow (left, violet, bg-alt), `[2]`+CaseTimeline (right, brand, bg), `[3]`+IocTable (left, violet, bg-alt); then Capabilities. `npm run dev`, compare. typecheck + build clean.
- [ ] **Step 4: Commit**
```bash
git add -A
git commit -m "feat: Home sections — Pillar (x4) + Capabilities"
```

---

### Task 9: Home sections C — Comparison, MSSP, Compliance, Quote, FinalCta

**Files:**
- Create: `components/sections/Comparison.tsx`, `Mssp.tsx`, `Compliance.tsx`, `Quote.tsx`, `FinalCta.tsx`

**Interfaces:**
- Consumes: `Dictionary`, `Locale`, `EyebrowLabel`, `CheckBullet`, `Button`, `Icon`, `Logo`, `GlowBackdrop`, `GridOverlay`; `TenantsPanel` (Task 6); `localizePath` (Task 3).
- Produces:
  - `Comparison({ dict })` — prototype L380-410. Centered head; table with 3 cols (feature / Sigmaward highlighted / legacy). For each `dict.compare.rows[i]`: render `a`/`b` as **cyan check** when `=== true`, **muted ✕** when `=== false`, else the string. Sigmaward column = cyan tint + side borders + Σ `Logo` in header (`dict.compare.colA`); legacy header = `dict.compare.colB`.
  - `Mssp({ dict })` — prototype L412-442. Two-col: violet eyebrow + title/body/bullets (`dict.mssp`) + `<TenantsPanel/>`.
  - `Compliance({ dict })` — prototype L444-459. Centered head + 4 badge pills `dict.compliance.badges` with shield-check icon.
  - `Quote({ dict })` — prototype L461-472. Big cyan quote glyph, `dict.quote.text`, author/role, italic note.
  - `FinalCta({ dict, locale }: { dict: Dictionary; locale: Locale })` — prototype L474-487. Rounded band with cyan+violet radial glows + `GridOverlay`, H2 `dict.cta.title`, sub, primary Button → `/platform/` (locale-aware) + secondary. (Reused by Platform page.)

- [ ] **Step 1:** Implement `Comparison.tsx` (boolean vs string rendering logic; brand check uses cyan, ✕ uses `#56627B`).
- [ ] **Step 2:** Implement `Mssp.tsx`.
- [ ] **Step 3:** Implement `Compliance.tsx`.
- [ ] **Step 4:** Implement `Quote.tsx`.
- [ ] **Step 5:** Implement `FinalCta.tsx`.
- [ ] **Step 6: Verify** — render all five in `app/page.tsx` with `getDictionary("pt")`; `npm run dev`, compare to prototype. typecheck + build clean.
- [ ] **Step 7: Commit**
```bash
git add -A
git commit -m "feat: Home sections — Comparison, MSSP, Compliance, Quote, FinalCta"
```

---

### Task 10: HomePage assembly + pt/en home routes

**Files:**
- Create: `components/pages/HomePage.tsx`, `app/en/layout.tsx`, `app/en/page.tsx`
- Modify: `app/page.tsx` (final)

**Interfaces:**
- Consumes: all Home sections (Tasks 7-9), `Nav`, `Footer` (Task 5), `getDictionary`, `Locale` (Task 3), `SetHtmlLang` (Task 5).
- Produces: `HomePage({ locale }: { locale: Locale })` rendering `Nav` + all 10 Home sections in order + `Footer`.

- [ ] **Step 1: Implement `HomePage.tsx`**

Order (spec §6): Nav → Hero → TrustStrip → Problem → Pillar(Detection, SigmaRuleCard, right, brand, bg) → Pillar(Automation, PlaybookFlow, left, violet, bg-alt) → Pillar(Cases, CaseTimeline, right, brand, bg) → Pillar(ThreatIntel, IocTable, left, violet, bg-alt) → Capabilities → Comparison → Mssp → Compliance → Quote → FinalCta → Footer. Pull `const dict = getDictionary(locale)`.

- [ ] **Step 2:** `app/page.tsx` → `export default () => <HomePage locale="pt" />;` + `export const metadata` (pt title/description).
- [ ] **Step 3:** `app/en/layout.tsx` → nested layout rendering `<SetHtmlLang lang="en" />` + `{children}`.
- [ ] **Step 4:** `app/en/page.tsx` → `<HomePage locale="en" />` + en metadata.
- [ ] **Step 5: Verify** — `npm run dev`: `/` (pt) and `/en/` (en) both render full Home; toggle swaps between them preserving page. `npm run build` → `out/index.html` + `out/en/index.html`. typecheck clean.
- [ ] **Step 6: Visual check** — open the prototype and the dev site side by side at ~1280px; confirm fidelity of all Home sections, both locales.
- [ ] **Step 7: Commit**
```bash
git add -A
git commit -m "feat: assemble HomePage + pt/en home routes"
```

---

### Task 11: Platform page — sections, assembly, routes

**Files:**
- Create: `components/sections/PlatformHero.tsx`, `Pipeline.tsx`, `Modules.tsx`, `Integrations.tsx`, `Architecture.tsx`, `components/pages/PlatformPage.tsx`, `app/platform/page.tsx`, `app/en/platform/page.tsx`

**Interfaces:**
- Consumes: `Dictionary`, `Locale`, primitives, `ArchStack` (Task 6), `FinalCta` (Task 9), `Nav`, `Footer` (Task 5).
- Produces:
  - `PlatformHero({ dict })` — prototype L497-509 (centered badge/H1/sub/CTAs, glow + grid). Uses `dict.platform.badge/heroTitle/heroSub/ctaPrimary/ctaSecondary`.
  - `Pipeline({ dict })` — prototype L511-532. 6 numbered steps `dict.platform.pipeline` with horizontal connector line behind circular badges.
  - `Modules({ dict })` — prototype L534-553. 3×2 cards `dict.platform.modules` (check chip + title + body).
  - `Integrations({ dict })` — prototype L555-573. 4-col chips `dict.platform.integrations` (gradient dot + name) + italic disclaimer.
  - `Architecture({ dict })` — prototype L575-601. Two-col: text/bullets `dict.platform.arch` + `<ArchStack/>`.
  - `PlatformPage({ locale })` — Nav → PlatformHero → Pipeline → Modules → Integrations → Architecture → FinalCta → Footer.

- [ ] **Step 1-5:** Implement `PlatformHero`, `Pipeline`, `Modules`, `Integrations`, `Architecture` per refs.
- [ ] **Step 6:** Implement `PlatformPage.tsx` in section order above.
- [ ] **Step 7:** `app/platform/page.tsx` → `<PlatformPage locale="pt" />` + metadata; `app/en/platform/page.tsx` → `<PlatformPage locale="en" />` + en metadata.
- [ ] **Step 8: Verify** — `npm run dev`: `/platform/` and `/en/platform/` render; nav CTA from Home reaches `/platform/`. `npm run build` emits `out/platform/index.html` + `out/en/platform/index.html`. typecheck clean. Visual compare to prototype Platform (both locales).
- [ ] **Step 9: Commit**
```bash
git add -A
git commit -m "feat: Platform page sections, assembly, pt/en routes"
```

---

### Task 12: Placeholder pages (menu links)

**Files:**
- Create: `components/pages/ComingSoonPage.tsx`, and route files for `solutions, pricing, resources, company, login` under both `app/<route>/page.tsx` (pt) and `app/en/<route>/page.tsx` (en) — 10 route files.

**Interfaces:**
- Consumes: `Nav`, `Footer`, `Locale`, `GlowBackdrop`, `GridOverlay`, `Button`.
- Produces: `ComingSoonPage({ locale, titleKey }: { locale: Locale; titleKey: "solutions" | "pricing" | "resources" | "company" | "login" })` — Nav + short centered hero ("Em breve" / "Coming soon" + the nav label for `titleKey` from `dict.nav`) with glow/grid + a Button back to home + Footer.

- [ ] **Step 1:** Implement `ComingSoonPage.tsx` (bilingual heading: pt "Em breve" / en "Coming soon").
- [ ] **Step 2:** Create the 10 route files (each ~3 lines: render `ComingSoonPage` with the right `locale` + `titleKey`, plus metadata).
- [ ] **Step 3: Verify** — `npm run dev`: every nav/footer link resolves (no 404); `npm run build` emits all `out/<route>/index.html` + `out/en/<route>/index.html`. typecheck clean.
- [ ] **Step 4: Commit**
```bash
git add -A
git commit -m "feat: coming-soon placeholder pages for menu links (pt/en)"
```

---

### Task 13: Responsive + motion + a11y pass

**Files:**
- Modify: section/layout components as needed (add responsive utilities), `app/globals.css` if needed.

**Interfaces:** no new exports; refines existing components.

- [ ] **Step 1: Breakpoints (≤900px)** — for each two-col section (`Hero`, `Pillar`, `Mssp`, `Architecture`) collapse to single column (`max-[900px]:grid-cols-1`); stack mock below text. `Capabilities`/`Modules` grids 3→1/2 cols; `TrustStrip` stats 4→2 cols; `Comparison` allow horizontal scroll wrapper. `Pipeline` 6-col → vertical list (`max-[900px]:grid-cols-1`, connector hidden).
- [ ] **Step 2: Nav mobile** — hide desktop links ≤900px, show `MobileMenu` hamburger; verify drawer opens/closes and links work.
- [ ] **Step 3: Motion guard** — confirm `sw-sweep`/`sw-pulse` only run with motion allowed (global reduced-motion media query already disables; verify in devtools "reduce motion").
- [ ] **Step 4: Focus states** — ensure interactive elements (links, buttons, toggle, hamburger) have a visible cyan focus ring (`focus-visible:outline` / ring utility).
- [ ] **Step 5: Verify** — resize dev browser 360px→1440px across both pages/locales; check no overflow, hamburger works, reduced-motion stops animation. typecheck + build clean.
- [ ] **Step 6: Commit**
```bash
git add -A
git commit -m "feat: responsive breakpoints, mobile nav, motion + focus a11y"
```

---

### Task 14: SEO, metadata, favicon, sitemap, robots

**Files:**
- Modify: `app/layout.tsx` (metadataBase, icons, default OG)
- Create: `app/sitemap.ts`, `app/robots.ts`

**Interfaces:** none consumed by other tasks.

- [ ] **Step 1: Root metadata** — in `app/layout.tsx` set `metadataBase` (placeholder prod URL, e.g. `https://sigmaward.io`), `icons: { icon: "/favicon.svg" }`, default OpenGraph (title/description/siteName), `alternates.languages` pt/en. Per-page `metadata` already set in Tasks 10-12 (localized title/description).
- [ ] **Step 2: `app/sitemap.ts`** — export a function returning entries for all routes (pt + en): `/`, `/platform/`, `/solutions/`, `/pricing/`, `/resources/`, `/company/`, `/login/` and their `/en/...` variants. (Static-export compatible — `MetadataRoute.Sitemap`.)
- [ ] **Step 3: `app/robots.ts`** — allow all, reference sitemap URL.
- [ ] **Step 4: Verify** — `npm run build` emits `out/sitemap.xml` + `out/robots.txt`; favicon referenced in `out/index.html` head. typecheck clean.
- [ ] **Step 5: Commit**
```bash
git add -A
git commit -m "feat: SEO metadata, favicon, sitemap, robots"
```

---

### Task 15: Final verification + Hostinger deploy README

**Files:**
- Create: `README.md`

**Interfaces:** none.

- [ ] **Step 1: Full check** — run `npm run typecheck`, `npm test`, `npm run build`. All green; `out/` contains: `index.html`, `en/index.html`, `platform/index.html`, `en/platform/index.html`, the 5 placeholder routes × 2 locales, `sitemap.xml`, `robots.txt`, `_next/` assets, `favicon.svg`.
- [ ] **Step 2: Serve `out/` locally to confirm static integrity**

```bash
npx serve out
```
Open the served URL: verify `/`, `/en/`, `/platform/`, `/en/platform/`, a placeholder route, the PT|EN toggle, and that no asset 404s (relative paths work under a static host).

- [ ] **Step 3: Write `README.md`** — project overview; `npm run dev` / `npm run build`; **Hostinger deploy**: build, then upload the **contents of `out/`** into `public_html/` (File Manager or FTP); note pt at `/`, en at `/en/`, and that `trailingSlash` yields folder/`index.html` (no rewrite rules needed).
- [ ] **Step 4: Commit**
```bash
git add -A
git commit -m "docs: README with run + Hostinger static-deploy steps"
```

---

## Self-Review

**Spec coverage (spec §→task):** §2 stack/build → T1; §4 tokens/fonts → T2; §3 i18n/routing → T3,T5,T10,T11; §5 components → T4,T5,T6; §6 Home → T7,T8,T9,T10; §6 Platform → T11; §6 placeholders → T12; §7 interactions/motion → T5,T13; §8 responsive → T13; §9 a11y → T13; §10 SEO → T14; §11 assets → T3; §12 deploy → T15; §14 done → T15. All covered.

**Placeholder scan:** Visual markup intentionally references exact prototype line ranges (the pixel source of truth) instead of duplicating ~840 lines of markup — this is a deliberate DRY reference, not a "TODO". All config, logic, types, and component prop signatures are spelled out. No "TBD"/"add error handling"/"similar to Task N" placeholders.

**Type consistency:** `Locale`, `Dictionary`, `getDictionary`, `localizePath`, `getLocaleFromPath` defined in T3 and consumed verbatim in T5/T7-T12. `Pillar` props (`data/mock/mockSide/glow/bg`) defined in T8, consumed in T10. `FinalCta({dict, locale})` defined T9, reused T11. `ComingSoonPage({locale, titleKey})` defined and used in T12. Mocks are prop-less, consumed in T7-T11. Consistent.

**Verification model note:** This is a visual-fidelity static site; per-task verification is `typecheck` + `build` + visual comparison against the prototype, plus real Vitest unit tests for the only non-trivial logic (i18n path helpers, T3). That is the appropriate test strategy here rather than per-component unit tests.
