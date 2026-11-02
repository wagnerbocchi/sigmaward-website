import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import PlatformShot from "@/components/mocks/PlatformShot";
import { getDictionary, type Locale } from "@/lib/i18n";

// One real product capture per solution block (order mirrors dict.solutions.blocks).
const CAPTURES = [
  { src: "/screenshots/current/fleet.jpg", alt: "Sigmaward — fleet management with anonymized identifiers" },
  { src: "/screenshots/current/case-detail.jpg", alt: "Sigmaward — case investigation" },
  { src: "/screenshots/current/watchfloor.jpg", alt: "Sigmaward — Watchfloor" },
  { src: "/screenshots/current/cases.jpg", alt: "Sigmaward — cases and SLA" },
] as const;

export default function SolutionsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const s = dict.solutions;

  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero badge={s.badge} title={s.heroTitle} sub={s.heroSub} />
        {s.blocks.map((block, i) => (
          <section
            key={block.eyebrow}
            className={i % 2 === 0 ? "surface-section" : "site-container feature-split"}
          >
            <div className={i % 2 === 0 ? "site-container feature-split" : ""}>
              <div>
                <p className="eyebrow">{block.eyebrow}</p>
                <h2>{block.title}</h2>
                <p>{block.body}</p>
                <ul className="detail-list">
                  {block.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div>
                <PlatformShot src={CAPTURES[i].src} alt={CAPTURES[i].alt} />
              </div>
            </div>
          </section>
        ))}
        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
