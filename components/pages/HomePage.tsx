import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProductOverview from "@/components/sections/ProductOverview";
import FinalCta from "@/components/sections/FinalCta";
import PlatformShot from "@/components/mocks/PlatformShot";
import Button from "@/components/ui/Button";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";

export default function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale),
    p = dict.product;
  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <Hero dict={dict} locale={locale} />
        <section className="site-container editorial-intro">
          <h2>{p.workflowTitle}</h2>
          <div>
            <h3>{p.workflow[0].title}</h3>
            <p>{p.workflow[0].body}</p>
          </div>
          <div>
            <h3>{p.workflow[1].title}</h3>
            <p>{p.workflow[1].body}</p>
          </div>
        </section>
        <ProductOverview dict={dict} locale={locale} />
        <section className="surface-section">
          <div className="site-container feature-split">
            <div>
              <p className="eyebrow">{p.agentLabel}</p>
              <h2>{p.agentTitle}</h2>
              <p>{p.agentBody}</p>
              <ul className="detail-list">
                {p.agentFacts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Button
                href={`${localizePath("/platform/", locale)}#monitoring`}
                variant="secondary"
                withArrow
              >
                {p.primary}
              </Button>
            </div>
            <div>
              <PlatformShot
                src="/screenshots/current/monitoring.jpg"
                alt={p.features[3].title}
              />
              <p className="capture-caption">{p.captureNote}</p>
            </div>
          </div>
        </section>
        <section className="site-container governance">
          <p className="eyebrow">{p.governanceLabel}</p>
          <h2>{p.governanceTitle}</h2>
          <p>{p.governanceBody}</p>
          <div className="governance-facts">
            {p.features[5].details.map((f) => (
              <p key={f}>{f}</p>
            ))}
          </div>
        </section>
        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
