import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";

// Production console confirmed by the product owner.
const CONSOLE_URL = "https://app.sigmaward.com";

export default function LoginPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const l = dict.login;

  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero badge={l.badge} title={l.heroTitle} sub={l.heroSub} />

        <section className="site-container login-section">
          <div className="login-card">
            <h2>{l.cardTitle}</h2>
            <p>{l.cardBody}</p>
            <a className="site-button site-button-primary" href={CONSOLE_URL}>
              {l.cardCta} <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="login-alt">
            <h3>{l.noAccountTitle}</h3>
            <p>{l.noAccountBody}</p>
            <Link href={`${localizePath("/company/", locale)}#contato`}>
              {l.noAccountCta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
