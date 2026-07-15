# Spec — Site de marketing Sigmaward

**Data:** 2026-06-30
**Status:** aprovado para planejamento
**Fonte de verdade do design:** `design_handoff_sigmaward_website/` (README.md, PROMPT.md, content/i18n.json, Sigmaward Site.dc.html, Sigmaward Brand.dc.html, assets/)

---

## 1. Objetivo

Construir o site de marketing público da **Sigmaward** — plataforma comercial de SIEM/SOAR/SOC construída sobre Wazuh, posicionada como alternativa mais leve, moderna e acessível a Splunk, IBM QRadar e Microsoft Sentinel. Público: analistas de SOC, blue teams, gestores de risco e MSSPs.

Estética: **dark-first, "big-tech security"** (referências SentinelOne × Vanta × Microsoft Sentinel). Bilíngue **pt-BR (padrão) + en**. Recriação fiel (alta fidelidade) do protótipo `Sigmaward Site.dc.html` em código de produção limpo.

O protótipo `.dc.html` é **referência de design, não código para enviar** — usa um runtime de prototipagem (`<x-dc>` / `DCLogic`) que deve ser ignorado. Reconstruir a UI de forma idiomática no stack abaixo.

## 2. Stack & build

- **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4.**
- Fontes via `next/font/google`: **Space Grotesk** (display: 500/600/700), **Manrope** (texto/UI: 400/500/600/700), **JetBrains Mono** (mono: 400/500/600).
- **Export estático:** `output: 'export'` + `trailingSlash: true` em `next.config`. Gera `out/` com HTML/CSS/JS puro. `images.unoptimized: true` (sem otimizador de servidor). Sem `Date.now()`/dados de servidor nessas páginas — tudo SSG.
- Gerenciador: **npm**.
- Lint/format: ESLint (config padrão do Next) + Prettier.

**Por que export estático:** hospedagem na **Hostinger** (shared hosting). O conteúdo de `out/` sobe para o `public_html` via File Manager/FTP. `trailingSlash: true` garante `pasta/index.html` — URLs limpas confiáveis em Apache/LiteSpeed sem regras de rewrite.

## 3. Roteamento & i18n

Export estático não tem middleware, então o padrão é **pt na raiz (sem prefixo), inglês sob `/en`**.

| URL | Página | Locale |
|---|---|---|
| `/` | Home | pt |
| `/platform/` | Plataforma | pt |
| `/en/` | Home | en |
| `/en/platform/` | Plataforma | en |
| `/solutions/`, `/pricing/`, `/resources/`, `/company/`, `/login/` (+ variantes `/en/...`) | Placeholders "em breve" | pt/en |

- **Copy:** 100% de `content/i18n.json` (cópia do handoff para o repo). Nunca hardcoded. Chaves espelhadas 1:1 entre locales.
- **Exceção:** labels DENTRO dos mocks de produto (ex.: "Threat Overview", "Sigma Rule", "Playbook · Auto-respond", "CASE-1042", nomes de nós, IOCs) ficam em **inglês nos dois idiomas** — representam a UI real do produto. Não traduzir, não colocar no i18n.json.
- **Dicionário tipado:** `lib/i18n.ts` exporta `Locale = 'pt' | 'en'`, tipos das seções e `getDictionary(locale)`. Sem dependência de i18n externa (suficiente para 2 locales estáticos).
- **Toggle PT|EN** (nav): controle segmentado, ativo = fill ciano / texto ink. Troca o idioma **preservando a página atual** (`/platform/` ↔ `/en/platform/`). Persiste a escolha em `localStorage` (chave `sw-locale`). Não há auto-redirect server-side (estático); o toggle reflete a escolha na URL.
- **`<html lang>`:** o App Router tem um único `<html>` (no root layout), definido como `lang="pt"` (padrão). Para o subtree `/en/*`, um componente cliente leve (`SetHtmlLang`, montado via `app/en/layout.tsx` que é um layout aninhado — não um segundo `<html>`) ajusta `document.documentElement.lang = 'en'`. Imperfeição mínima aceita: o HTML estático de `/en/*` nasce com `lang="pt"` até o JS rodar (crawlers que executam JS veem `en`). Mantém URLs limpas (pt na raiz) sem redirect.

## 4. Design tokens

Traduzir o bloco de tokens do README para o **`@theme` do Tailwind v4** em `app/globals.css` (cores como custom properties + utilitários Tailwind), mais variáveis CSS para glows/gradientes. **Sem hex solto** espalhado no código.

**Regra dura:** ciano (`--brand`) é reservado para brand/UI primária — **nunca** para sinalizar severidade.

### Cores
```
/* Brand */
--brand:#20DDC9  --brand-hover:#3DE9D6  --brand-ink:#062019  --violet:#8C7BFF
--grad: linear-gradient(135deg,#34F0DA 0%,#8C7BFF 100%);  /* "scan sweep" — uso parcimonioso */
/* Neutros dark */
--bg:#0A0F1A  --bg-alt:#0B111C  --bg-footer:#080C14  --surface:#101826
--surface-mock:#0B111E  --surface-2:#16202F
--border:#243049  --border-soft:#161E2C  --border-strong:#283650  --hairline:rgba(255,255,255,.07)
/* Texto */
--text-bright:#F2F6FC  --text:#C7D0E2  --text-body:#A6B3CA  --text-muted:#8392AD
--text-faint:#76849E  --text-faintest:#5E6B84  --disclaimer:#3F4A60
/* Severidade/semântico */
--sev-critical:#FF3B5C (soft #FF6B82)  --sev-high:#FF8A3D  --sev-medium:#FFC53D
--sev-low:#4D8DF7  --sev-info:#8094B0  --status-ok:#34D27A
```

### Tipografia (escala do design)
| Papel | Fonte | Tamanho / line-height / tracking / peso |
|---|---|---|
| Hero H1 | Space Grotesk | 50–55px / 1.04 / -0.025em / 600 |
| Section H2 | Space Grotesk | 36–39px / 1.1 / -0.02em / 600 |
| Card/pillar title | Space Grotesk | 17–18px / 600 |
| Lead | Manrope | 17–18px / 1.6 / 400 |
| Body | Manrope | 16.5px / 1.62 / 400 |
| Card body | Manrope | 14px / 1.55 / 400 (--text-muted) |
| Eyebrow | JetBrains Mono | 11.5px / uppercase / 0.22em / 500 (--brand) |
| Stat number | Space Grotesk | 30px / 600 |
| Badge/chip | JetBrains Mono | 9–11px / 700 / uppercase |

### Espaçamento, raios, sombras
- Max-width do conteúdo: **1180–1240px**, centrado, 32px de padding lateral.
- Ritmo vertical das seções: **~90px** (88–94). Seções alternam `--bg` / `--bg-alt`, separadas por borda topo `--border-soft`.
- Raios: cards **16px**; painéis/CTA band **18–24px**; mock frames **14px**; botões **9–11px**; pills/badges **999px**; chips **5–8px**.
- Botões: padding ~13–14px × 24–26px; primário = fill ciano + texto `--brand-ink` + sombra `0 10px 30px -10px rgba(32,221,201,.7)`; secundário = fill `rgba(255,255,255,.04)` + `1px var(--border-strong)` + texto claro.
- Sombra de mock frames: `0 30px 70px -36px rgba(0,0,0,.85)`.
- Glows ambientes: `radial-gradient` suave de ciano (8–16% alpha) e violeta; overlay de grid 52px no hero/CTA.

## 5. Arquitetura de componentes

```
app/
  layout.tsx              # fontes next/font, <html lang>, favicon, metadata base
  globals.css             # @theme (tokens), keyframes, base dark
  page.tsx                # Home pt        (/)
  platform/page.tsx       # Plataforma pt  (/platform/)
  en/layout.tsx           # define lang=en
  en/page.tsx             # Home en        (/en/)
  en/platform/page.tsx    # Plataforma en  (/en/platform/)
  (placeholders) solutions|pricing|resources|company|login + variantes /en
components/
  layout/   → Nav.tsx (sticky, blur, links, LocaleToggle, CTAs), Footer.tsx, LocaleToggle.tsx
  pages/    → HomePage.tsx, PlatformPage.tsx, ComingSoonPage.tsx  (recebem dict + locale)
  sections/ → Hero, TrustStrip, Problem, Pillar, Capabilities, Comparison,
              Mssp, Compliance, Quote, FinalCta,
              PlatformHero, Pipeline, Modules, Integrations, Architecture
  mocks/    → DashboardMock, SigmaRuleCard, PlaybookFlow, CaseTimeline,
              IocTable, TenantsPanel, ArchStack
  ui/       → Button, EyebrowLabel, SeverityBadge, SectionShell, Logo,
              CheckBullet, Card, GlowBackdrop, GridOverlay
lib/
  i18n.ts                 # Locale, tipos do dicionário, getDictionary()
content/i18n.json         # copiado do handoff (fonte de copy)
public/
  favicon.svg, sigmaward-mark.svg, sigmaward-mark-mono.svg
```

- **Páginas dirigidas por dados:** `HomePage`/`PlatformPage` recebem o dicionário do locale e o `locale`, e montam as seções. Os arquivos de rota são finos (importam a page component + dict). Mesma `HomePage` serve `/` (pt) e `/en/` (en).
- **`Pillar`** é um componente único parametrizado (eyebrow, título, body, bullets, mock, lado do mock, cor do glow) — usado 4× na Home.
- **Mocks** reconstruídos em HTML/CSS/SVG como no protótipo, como componentes próprios e reutilizáveis. Conteúdo interno em inglês (UI do produto).
- **`Logo`** usa a marca Σ (polyline gradiente em SVG inline) → link para `/` (ou `/en/`).

## 6. Páginas e seções

### Chrome compartilhado
- **Nav** (sticky, h=66px): `rgba(10,15,26,.82)` + `backdrop-blur(14px)`, borda inferior `--hairline`. Esquerda: logo + links [Plataforma, Soluções, Preços, Recursos, Empresa]. Direita: **toggle PT|EN**, "Entrar" (texto), CTA primário "Ver o produto" → `/platform/`. Só Plataforma (e Home) são rotas reais designadas; demais → placeholders.
- **Footer** (bg `--bg-footer`): 5 colunas (blurb da marca + ícones sociais X/LinkedIn/GitHub | Produto | Soluções | Recursos | Empresa); linha inferior = copyright + tagline "built on Wazuh". Copy de `footer.*`.

### Home (`/`)
1. **Hero** — pill eyebrow (`hero.badge`), H1 (`hero.title`), lead (`hero.sub`), CTA primário (→ `/platform/`) + secundário, micro-nota (`hero.note`). À direita: **DashboardMock** (browser frame: sidebar + "Threat Overview" + 3 stats + 3 linhas de alerta por severidade). Fundo: glows ciano/violeta em camadas + grid 52px + **sweep diagonal lento**.
2. **TrustStrip** — label (`trust.label`), 6 wordmarks placeholder (`trust.logos`), 4 stats (`trust.stats`), disclaimer itálico.
3. **Problem** — eyebrow laranja, H2, lead, 3 pain cards (`problem.points`) com ícone de triângulo de alerta.
4. **Pillars ×4** (`pillars[]`) — blocos two-column alternados (texto + mock distinto): (1) Detection → **SigmaRuleCard**; (2) Automation → **PlaybookFlow** (Trigger→Enrich→Decide→Contain); (3) Cases → **CaseTimeline**; (4) Threat Intel → **IocTable**. Cada um: eyebrow, H2, body, 3 check-bullets.
5. **Capabilities** (`capsHead` + `caps[]`) — heading central + grid 3×2; cada card = tile de ícone + título + body. (6 ícones distintos do protótipo.)
6. **Comparison** (`compare`) — heading central + tabela; **coluna Sigmaward destacada** (tint ciano + bordas laterais, marca Σ no header). Booleanos → check ciano (Sigmaward) / ✕ apagado (legado); strings → texto. Linhas em `compare.rows` (`a`=Sigmaward, `b`=legado; valor `true|false|string`).
7. **MSSP** (`mssp`) — two-column: texto+bullets (eyebrow violeta) + **TenantsPanel** (linhas de cliente com dots de saúde).
8. **Compliance** (`compliance`) — heading central + 4 badge pills (`compliance.badges`) com ícone shield-check.
9. **Quote** (`quote`) — testimonial central, autor/role, nota itálica "ilustrativo".
10. **FinalCta** (`cta`) — band arredondada com glows ciano+violeta + grid, H2, sub, primário (→ `/platform/`) + secundário.

### Platform (`/platform/`)
1. **PlatformHero** (`platform.badge/heroTitle/heroSub/ctaPrimary/ctaSecondary`) — centralizado, glow + grid.
2. **Pipeline** (`platform.pipelineHead` + `platform.pipeline[]`) — 6 passos numerados em linha, conector horizontal atrás de badges circulares.
3. **Modules** (`platform.modulesHead` + `platform.modules[]`) — cards 3×2, cada = check chip + título + body.
4. **Integrations** (`platform.integrationsHead` + `platform.integrations[]`) — grid 4 colunas de chips (dot gradiente + nome); disclaimer itálico.
5. **Architecture** (`platform.arch`) — two-column: texto + bullets, e **ArchStack** (Sources → Open core/Wazuh → **Sigmaward** [destacado] → Response) com setas para baixo.
6. **FinalCta** — mesma band da Home.

### Placeholders (Soluções, Preços, Recursos, Empresa, Entrar)
- `ComingSoonPage` estilizado (nav + footer + hero curto "em breve" com glow), bilíngue, para os links do menu não darem 404. Estrutura pronta para virar página real depois.

## 7. Interações & motion

- **Navegação:** logo e footer logo → home do locale. Nav "Plataforma" e CTAs primários → `/platform/`. Links usam `next/link`; scroll ao topo na navegação.
- **Toggle de idioma:** ver §3.
- **Hover:** nav links → texto clareia + bg leve; botões → `--brand-hover` (primário) / fill mais claro (secundário); cards → borda `#2E6E66` + bg sobe para `#121C2C`.
- **Motion ambiente:** um sweep diagonal lento no hero (`@keyframes sw-sweep`); dot "LIVE" pulsando no DashboardMock (`sw-pulse`/`sw-blink`). Sutil. **Respeitar `prefers-reduced-motion`** (desliga animações).

## 8. Responsivo

Desktop-first ~1240px. Em ≤900px: colunas duplas → 1 coluna; pipeline de 6 passos → lista vertical (conector vira vertical ou some); grids 3-col → 1–2 col; nav links → **hambúrguer** (menu drawer/colapsável). Mobile não está no protótipo — aplicar padrões responsivos sensatos mantendo tokens e hierarquia.

## 9. Acessibilidade

- Contraste conforme tokens (texto claro sobre dark). Foco visível (anel ciano).
- `<html lang>` correto por locale. SVGs decorativos com `aria-hidden`; logo com label acessível.
- Toggle PT|EN e hambúrguer navegáveis por teclado. `prefers-reduced-motion` respeitado.
- Headings semânticos (um H1 por página).

## 10. SEO & metadata

- `metadata` por página (title/description por locale), `lang` correto, favicon (`favicon.svg`), Open Graph básico, `alternates.languages` apontando pt/en. `sitemap.xml` + `robots.txt` simples (estáticos).

## 11. Assets

- `sigmaward-mark.svg` (Σ gradiente, on dark), `sigmaward-mark-mono.svg` (currentColor), `favicon.svg` — copiados para `public/`. Logo principal pode ser SVG inline (componente `Logo`) para herdar cor/gradiente.
- Logos de clientes na trust strip = **wordmarks placeholder** (`trust.logos`) — trocar por logos reais depois.
- Sem imagens raster: todos os "screenshots" são HTML/CSS (componentes mock).

## 12. Deploy (Hostinger)

- Dev: `npm run dev`.
- Build: `npm run build` → gera `out/`.
- Publicar: subir o **conteúdo de `out/`** para `public_html/` da Hostinger (File Manager ou FTP). Incluir `README.md` curto com esse passo a passo. (Opcional futuro: `.htaccess` se necessário para rewrites — não previsto com `trailingSlash`.)

## 13. Fora de escopo (agora)

- Conteúdo real das páginas Soluções/Preços/Recursos/Empresa/Entrar (só placeholders).
- Formulários (login, "falar com vendas") — CTAs apontam para rotas placeholder.
- Backend, autenticação, integração com o produto real, analytics, cookie banner.
- Layouts mobile pixel-perfeitos (não há no protótipo; aplicar padrões sensatos).

## 14. Definição de "pronto"

- Fiel ao `Sigmaward Site.dc.html` no desktop, tema escuro, **ambos os locales**, tokens exatos.
- Home + Plataforma completas com todos os mocks como componentes; placeholders dos demais links.
- Toggle PT|EN funcional preservando rota + persistência; URLs `/`, `/platform/`, `/en/`, `/en/platform/`.
- Hover states + sweep/LIVE-dot com `prefers-reduced-motion`.
- Responsivo (desktop → mobile com hambúrguer).
- `npm run build` gera `out/` sem erros; conteúdo pronto para subir na Hostinger.
- Código TypeScript limpo, componentes tipados e reutilizáveis, sem runtime de protótipo.
