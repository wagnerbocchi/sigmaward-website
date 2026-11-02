import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import TextLink from "@/components/ui/TextLink";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
import { CONSOLE_URL } from "@/lib/site";
export default function LoginPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero
          locale={locale}
          badge={dict.login.badge}
          title={dict.login.heroTitle}
          sub={dict.login.heroSub}
        />
        <div className="site-container">
          <section className="login-panel">
            <h2>{dict.login.cardTitle}</h2>
            <p>{dict.login.cardBody}</p>
            <Button href={CONSOLE_URL} variant="primary" withArrow>
              {dict.login.cardCta}
            </Button>
            <div className="login-help">
              <h3>{dict.login.noAccountTitle}</h3>
              <p>{dict.login.noAccountBody}</p>
              <TextLink href={`${localizePath("/company/", locale)}#contato`}>
                {dict.login.noAccountCta}
              </TextLink>
            </div>
          </section>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
