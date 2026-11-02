import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import Faq from "@/components/sections/Faq";
import Button from "@/components/ui/Button";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
export default function PricingPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale),
    s = dict.site;
  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero
          locale={locale}
          badge={dict.nav.pricing}
          title={s.pricingTitle}
          sub={s.pricingIntro}
        >
          <Button
            href={`${localizePath("/company/", locale)}#contato`}
            variant="primary"
            withArrow
          >
            {s.demo}
          </Button>
        </PageHero>
        <section className="site-container reading-section">
          <h2>{s.pricingScopeTitle}</h2>
          <div className="principle-list">
            {s.pricingScope.map((item) => (
              <article className="principle" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
        <Faq title={dict.pricing.faqHead.title} items={dict.pricing.faq} />
        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
