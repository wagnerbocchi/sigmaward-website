import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AgentBridge from "@/components/sections/AgentBridge";
import ProductOverview from "@/components/sections/ProductOverview";
import FinalCta from "@/components/sections/FinalCta";
import TextLink from "@/components/ui/TextLink";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
export default function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <Hero dict={dict} locale={locale} />
        <AgentBridge dict={dict} locale={locale} />
        <ProductOverview dict={dict} locale={locale} />
        <section className="surface-section">
          <div className="site-container audience-section">
            <h2>{dict.site.audienceTitle}</h2>
            <div className="audience-links">
              {dict.site.audiences.map((a) => (
                <article className="audience-link" key={a.id}>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                  <TextLink
                    href={`${localizePath("/solutions/", locale)}#${a.id}`}
                  >
                    {a.link}
                  </TextLink>
                </article>
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
