import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { getDictionary, localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

// Production console confirmed by the product owner.
const CONSOLE_URL = "https://app.sigmaward.com";

export default function LoginPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero
          badge={dict.login.badge}
          title={dict.login.heroTitle}
          sub={dict.login.heroSub}
        />

        <section className="bg-bg" style={{ padding: "0 32px 90px" }}>
          <Card className="max-w-[460px] mx-auto p-[32px] text-center">
            <div className="w-[46px] h-[46px] rounded-[12px] bg-[rgba(32,221,201,0.1)] border border-[rgba(32,221,201,0.18)] flex items-center justify-center text-brand mx-auto mb-[18px]">
              <Icon name="shield-check" size={22} strokeWidth={1.8} />
            </div>
            <div className="font-display font-semibold text-[20px] text-text-bright mb-2">
              {dict.login.cardTitle}
            </div>
            <p className="text-[14.5px] text-text-body leading-[1.6] mb-6">
              {dict.login.cardBody}
            </p>
            <a
              href={CONSOLE_URL}
              className="inline-flex items-center gap-[9px] text-[15.5px] font-bold text-brand-ink bg-brand rounded-[11px] px-6 py-[13px] shadow-[0_10px_30px_-10px_rgba(32,221,201,0.7)] hover:bg-brand-hover"
            >
              {dict.login.cardCta}
              <span className="text-[17px]">→</span>
            </a>
          </Card>

          <div className="max-w-[460px] mx-auto text-center mt-8">
            <div className="font-display font-semibold text-[15px] text-text-bright mb-1">
              {dict.login.noAccountTitle}
            </div>
            <p className="text-[14px] text-text-muted leading-[1.6] mb-3">
              {dict.login.noAccountBody}
            </p>
            <Link
              href={`${localizePath("/company/", locale)}#contato`}
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand"
            >
              {dict.login.noAccountCta}
              <span className="text-[15px]">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
