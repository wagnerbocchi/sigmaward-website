import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import DetailList from "@/components/ui/DetailList";
import TextLink from "@/components/ui/TextLink";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
const anchors = ["mssp", "soc", "risk", "compliance"];
const modules = ["governance", "investigation", "detection", "governance"];
export default function SolutionsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero
          locale={locale}
          badge={dict.nav.solutions}
          title={dict.solutions.heroTitle}
          sub={dict.solutions.heroSub}
        />
        <nav
          className="site-container section-nav"
          aria-label={dict.nav.solutions}
        >
          {dict.solutions.blocks.map((block, i) => (
            <a key={anchors[i]} href={`#${anchors[i]}`}>
              {block.eyebrow}
            </a>
          ))}
        </nav>
        <div className="site-container">
          {dict.solutions.blocks.map((block, i) => (
            <section
              key={anchors[i]}
              id={anchors[i]}
              className="solution-block"
            >
              <h2>{block.title}</h2>
              <div className="solution-layout">
                <div>
                  <p>{block.body}</p>
                  <TextLink
                    href={`${localizePath("/platform/", locale)}#${modules[i]}`}
                  >
                    {dict.site.explore}
                  </TextLink>
                </div>
                <DetailList items={block.bullets} />
              </div>
            </section>
          ))}
        </div>
        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
