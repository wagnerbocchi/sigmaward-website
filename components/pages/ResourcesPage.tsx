import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import TextLink from "@/components/ui/TextLink";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
export default function ResourcesPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale),
    s = dict.site;
  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero
          locale={locale}
          badge={dict.nav.resources}
          title={s.resourcesTitle}
          sub={s.resourcesIntro}
        />
        <div className="site-container resource-list">
          {s.resources.map((item) => (
            <article key={item.title} className="resource-item">
              <h2 className="text-[22px]">{item.title}</h2>
              <p>{item.body}</p>
              <TextLink
                href={
                  item.external ? item.href : localizePath(item.href, locale)
                }
              >
                {item.link}
              </TextLink>
            </article>
          ))}
        </div>
        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
