# Design QA

final result: passed

## Evidence and state

Source: `/home/wagner/.codex/generated_images/01a18a08-26a9-7480-b8b1-d7de97294b84/exec-b0bb9740-4a1c-4c84-bb73-b14b284a89ba.png` (1036 x 1518).
Implementation: http://127.0.0.1:4173/, Portuguese, dark theme, top of home, menu closed.
Final comparison: `/tmp/sigmaward-qa/home-desktop-final.jpg` (1021 x 1496), requested viewport 1036 x 1518. Browser output excludes the scrollbar and scales the capture; comparison used matching proportional full views, not exact pixel subtraction. Source and implementation were emitted together in one comparison input. Device density was not overridden. No raster editing was used.
Additional evidence: `/tmp/sigmaward-qa/home-mobile.jpg`, `/tmp/sigmaward-qa/platform-mobile.jpg` (375 x 812), requested mobile viewport 390 x 844; desktop also inspected at 1440 x 1000. Browser scrollbar reduces content width. Full-page evidence: `/tmp/sigmaward-qa/home-wide.jpg`. The lazy NOC image was separately scrolled into view and verified loaded; the initial full-page capture precedes that load.

## Comparison history and findings

- Initial P2: header/hero spacing was too tall, headline and introductory hierarchy too small relative to the approved direction. Evidence: `/tmp/sigmaward-qa/home-desktop.jpg`. Fixed header to 80px, hero top padding to 56px, medium desktop headline to 70px and strengthened section heading/summary scales. Re-captured and compared against the source in the same input: `home-desktop-final.jpg`. Resolved.
- P2: capability arrows rendered a literal unsupported named entity. Replaced with the numeric Unicode entity. Rebuilt and verified rendered arrows in the wide home screenshot. Resolved.
- No remaining actionable P0/P1/P2 findings in the reviewed states.

## Five fidelity surfaces

- Typography: self-hosted Manrope and JetBrains Mono; large three-line hero, quiet navigation and clear heading hierarchy. Mobile wraps without clipping. Generated reference type is approximated with a consistent available family.
- Spacing: editorial two-column hero, broad real screenshot and divided introduction retained. Mobile stacks content and exposes a compact menu. No horizontal overflow in tested home/platform states.
- Color: charcoal background, muted light text and restrained teal CTA match the direction. Existing product icon colors are preserved.
- Images: original logo and real sanitized captures retained. The screenshot has its actual aspect ratio and additional lower interface rows, so the next marketing section begins lower than in the generated reference. This is an intentional fidelity-to-product choice. Full-size linked images provide detail beyond mobile thumbnail scale.
- Copy: Portuguese/English descriptions updated from repository and observed UI. No invented testimonials, customer logos, certification or performance numbers. Operational totals are historical captures.

Full-view comparison was sufficient for marketing hierarchy and typography at the emitted size. Dense dashboard text was not judged against generated text: the actual captures were inspected separately, including the NOC section at desktop size. Decorative intro icons from the proposal were omitted; these do not carry information or product identity.

## Functional checks

- Production static build passed, including compilation and type validation.
- `npm run typecheck` passed; `npm test`: 6 passed.
- Static export check: 16 HTML files, 489 local asset/link references, no missing files or anchors.
- Primary CTA navigated to platform; monitoring anchor navigated correctly.
- Mobile menu opens and closes with Escape; language switch retains platform route and document language changes to en and back to pt.
- No console errors in the tested browser session.
- Current home images loaded successfully; no overflow at tested desktop/mobile widths.

## Limits and checklist

- External mail submission and authenticated console actions were not executed.
- No exhaustive assistive-technology or cross-browser audit was performed.
- Existing dependency audit findings were not addressed by this visual/content update.
- [x] Preserve original icon and actual product interface.
- [x] Replace outdated active-page content and screenshots.
- [x] Verify responsive navigation, locale, build and local references.
- [x] Keep preview available; no deployment or push performed.
