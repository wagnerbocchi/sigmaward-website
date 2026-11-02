import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import Button from "@/components/ui/Button";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";

export default function PricingPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const p = dict.pricing;
  const contactHref = localizePath("/company/", locale);

  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero badge={p.badge} title={p.heroTitle} sub={p.heroSub} />

        <section className="site-container product-overview">
          <div className="section-heading">
            <p className="eyebrow">{p.tiersHead.eyebrow}</p>
            <h2>{p.tiersHead.title}</h2>
          </div>
          <div className="plan-grid">
            {p.tiers.map((tier) => (
              <article
                key={tier.name}
                className={tier.featured ? "plan-card plan-card-featured" : "plan-card"}
              >
                <h3>{tier.name}</h3>
                <p className="plan-tagline">{tier.tagline}</p>
                <p className="plan-price">{tier.price}</p>
                <ul className="detail-list">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Button
                  href={`${contactHref}#contato`}
                  variant={tier.featured ? "primary" : "secondary"}
                  withArrow
                >
                  {tier.cta}
                </Button>
              </article>
            ))}
          </div>
          <p className="capture-caption plans-note">{p.note}</p>
        </section>

        <section className="surface-section">
          <div className="site-container product-overview">
            <div className="section-heading">
              <p className="eyebrow">{p.faqHead.eyebrow}</p>
              <h2>{p.faqHead.title}</h2>
            </div>
            <div className="faq-list">
              {p.faq.map((item) => (
                <details key={item.q} className="faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
