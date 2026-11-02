import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import Icon from "@/components/ui/Icon";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";

type IconName = React.ComponentProps<typeof Icon>["name"];

export default function ResourcesPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const r = dict.resources;

  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero badge={r.badge} title={r.heroTitle} sub={r.heroSub} />

        <section className="site-container product-overview">
          <div className="section-heading">
            <p className="eyebrow">{r.cardsHead.eyebrow}</p>
            <h2>{r.cardsHead.title}</h2>
          </div>
          <div className="resource-grid">
            {r.cards.map((card) => {
              const inner = (
                <>
                  <span className="resource-icon" aria-hidden="true">
                    <Icon name={card.icon as IconName} size={20} strokeWidth={1.8} />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <span className="resource-cta">
                    {card.cta}
                    <span aria-hidden="true"> {card.external ? "↗" : "→"}</span>
                  </span>
                </>
              );
              if (!card.href) {
                return (
                  <span key={card.title} className="resource-card resource-card-disabled">
                    {inner}
                  </span>
                );
              }
              if (card.external) {
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="resource-card"
                  >
                    {inner}
                  </a>
                );
              }
              return (
                <Link
                  key={card.title}
                  href={localizePath(card.href, locale)}
                  className="resource-card"
                >
                  {inner}
                </Link>
              );
            })}
          </div>
        </section>

        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
