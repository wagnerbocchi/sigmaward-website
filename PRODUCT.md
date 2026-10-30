# Sigmaward Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Internal SOC/security teams and managed security service providers (MSSPs) are
equally important audiences. They use this website to evaluate Sigmaward's
capabilities, inspect the product, and contact the team. Existing customers also
need a clear path to the product console.

## Product Purpose

Sigmaward is a commercial security platform combining detection, investigation,
response, and endpoint monitoring. The website helps prospective users understand
these connected capabilities and decide whether to start a conversation with the
team. The website is separate from the operational product console.

## Positioning

The product brings security operations and endpoint health into one environment:
Sigma detection, investigations, response workflows, and operational telemetry
share context. Describe this mechanism through supported capabilities and real
interface evidence, without claiming unverified superiority or outcomes.

## Operating Context

The website serves Portuguese (pt-BR) by default, with English content parity.
Both audiences should be able to evaluate the platform in either language.
Language switching preserves the current page.

The current site includes Home, Platform, Solutions, Pricing, Resources, Company,
and Login. Contact is through `contato@sigmaward.com`; the product console is at
`https://app.sigmaward.com`. These destinations were previously confirmed by the
owner in `docs/website-content-and-captures.md`.

## Capabilities and Constraints

- Preserve the confirmed commercial product scope: detection, investigation,
  response, and endpoint monitoring.
- The existing codebase is a Next.js App Router static export using TypeScript
  and Tailwind CSS. Preserve static-hosting compatibility; the documented
  deployment target is Hostinger shared hosting.
- Portuguese routes are unprefixed and English routes live under `/en/`.
  Shared marketing copy is maintained in `content/i18n.json`.
- The current product evidence covers Sigma detection and correlation, UEBA/RBA,
  cases and investigations, ordered playbooks with human approval, endpoint
  response, NOC monitoring, agent fleet management, assistive AI, and tenant
  governance. See the capture provenance document for the basis and limits of
  these claims.
- Agent capabilities vary by operating system. Do not imply that all collectors
  are available on every supported system.
- Playbooks are evidenced as ordered steps; do not promise an unverified visual
  DAG editor. AI assistance includes case/rule creation and query generation;
  do not describe it as strictly read-only.
- Do not invent customers, testimonials, metrics, certifications, prices,
  licensing terms, or deployment guarantees. Existing illustrative copy is not
  proof of a product fact.
- Open decisions: no additional pricing terms, independently verified performance
  claims, certification status, or product-specific accessibility standard were
  confirmed during this initialization.

## Brand Commitments

Preserve the Sigmaward name, existing logo assets, and real anonymized product
captures. Maintain factual, product-grounded communication in both languages.
The user confirmed these commitments on 2026-10-30.

## Evidence on Hand

- `docs/website-content-and-captures.md`: provenance and claim boundaries, updated
  2026-10-29, based on the product repository README and the owner's authenticated
  product interface. This is recorded evidence, not independent certification.
- `public/screenshots/current/`: real, anonymized captures of watchfloor,
  detections, monitoring, fleet, AI assistance, cases, case detail, and playbooks.
  Their displayed metrics are dated interface examples, not live measurements
  or performance guarantees. Preserve screenshot proportions and full-size
  access. Inspect and anonymize replacement captures before publication.
- `public/sigmaward-mark.svg`, `public/sigmaward-mark-mono.svg`, and
  `public/favicon.svg`: existing identity assets.
- `README.md`, `lib/site.ts`, and the current route components: website
  implementation, routing, hosting, and destination references.
- `docs/archive/screenshots/` and retained mock components are historical
  material, not current approved product evidence. Illustrative statistics,
  logos, and testimonials in legacy copy must not be promoted as verified proof.

## Product Principles

1. Serve internal security teams and MSSPs with equal priority.
2. Explain connected detection, investigation, response, and endpoint health
   through concrete product capabilities.
3. Ground claims in current evidence and clearly distinguish examples from
   guarantees or independent validation.
4. Preserve Portuguese-first access and English parity throughout evaluation.
5. Make product evaluation, contact, and access to the existing console clear.
