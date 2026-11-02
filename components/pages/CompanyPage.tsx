import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import Icon from "@/components/ui/Icon";
import { getDictionary, type Locale } from "@/lib/i18n";

type IconName = React.ComponentProps<typeof Icon>["name"];

// Production contact confirmed by the product owner.
const CONTACT_EMAIL = "contato@sigmaward.com";

export default function CompanyPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const c = dict.company;

  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero badge={c.badge} title={c.heroTitle} sub={c.heroSub} />

        <section className="site-container product-overview">
          <div className="section-heading">
            <p className="eyebrow">{c.missionHead.eyebrow}</p>
            <h2>{c.missionHead.title}</h2>
            <p>{c.missionBody}</p>
          </div>
        </section>

        <section className="surface-section">
          <div className="site-container product-overview">
            <div className="section-heading">
              <p className="eyebrow">{c.valuesHead.eyebrow}</p>
              <h2>{c.valuesHead.title}</h2>
            </div>
            <div className="value-grid">
              {c.values.map((v) => (
                <article key={v.title} className="value-card">
                  <span className="resource-icon" aria-hidden="true">
                    <Icon name={v.icon as IconName} size={20} strokeWidth={1.8} />
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-container governance" id="contato">
          <p className="eyebrow">{c.contactHead.eyebrow}</p>
          <h2>{c.contactHead.title}</h2>
          <p>{c.contactBody}</p>
          <p className="contact-row">
            <a className="site-button site-button-primary" href={`mailto:${CONTACT_EMAIL}`}>
              {c.contactCta} <span aria-hidden="true">→</span>
            </a>
          </p>
        </section>

        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
