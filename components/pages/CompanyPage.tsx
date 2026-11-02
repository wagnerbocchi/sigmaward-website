import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import TextLink from "@/components/ui/TextLink";
import { getDictionary, type Locale } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";
export default function CompanyPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale),
    s = dict.site;
  const contactHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(s.contactSubject)}`;
  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero
          locale={locale}
          badge={dict.nav.company}
          title={s.companyTitle}
          sub={s.companyIntro}
        />
        <section className="site-container company-intro">
          <h2>{s.companyStoryTitle}</h2>
          <div>
            {s.companyStory.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <TextLink href="https://bocchi.company/">
              {s.companyWebsite}
            </TextLink>
          </div>
        </section>
        <section className="surface-section">
          <div className="site-container reading-section">
            <h2>{s.companyPrinciplesTitle}</h2>
            <div className="principle-list">
              {dict.company.values.map((value) => (
                <article className="principle" key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="site-container contact-section" id="contato">
          <div>
            <h2>{s.contactTitle}</h2>
            <p>{s.contactBody}</p>
            <a className="contact-address" href={contactHref}>
              {CONTACT_EMAIL}
            </a>
            <p>
              <Button href={contactHref} variant="primary" withArrow>
                {s.contactAction}
              </Button>
            </p>
          </div>
          <div>
            <h3>{s.contactPrepTitle}</h3>
            <ul className="contact-prompts">
              {s.contactPrep.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
