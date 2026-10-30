import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import SectionShell from "@/components/ui/SectionShell";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Card from "@/components/ui/Card";
import CheckBullet from "@/components/ui/CheckBullet";
import Button from "@/components/ui/Button";
import { getDictionary, localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export default function PricingPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  // CTA de vendas aponta para o hub de contato (página Empresa).
  const contactHref = localizePath("/company/", locale);

  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero
          badge={dict.pricing.badge}
          title={dict.pricing.heroTitle}
          sub={dict.pricing.heroSub}
        />

        {/* Planos */}
        <SectionShell bg="bg" topBorder className="py-[80px]" label="Pricing tiers">
          <div className="text-center max-w-[640px] mx-auto mb-[44px]">
            <div className="mb-[14px]">
              <EyebrowLabel color="brand">{dict.pricing.tiersHead.eyebrow}</EyebrowLabel>
            </div>
            <h2
              className="font-display font-semibold text-[36px] max-[640px]:text-[27px] leading-tight tracking-[-0.02em] text-text-bright"
              style={{ textWrap: "balance" }}
            >
              {dict.pricing.tiersHead.title}
            </h2>
          </div>

          <div className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-5 items-start">
            {dict.pricing.tiers.map((tier) => (
              <Card
                key={tier.name}
                className={`p-[28px] flex flex-col h-full ${
                  tier.featured
                    ? "border-brand bg-[rgba(32,221,201,0.04)]"
                    : ""
                }`}
              >
                <div className="font-display font-semibold text-[20px] text-text-bright">
                  {tier.name}
                </div>
                <div className="text-[14px] text-text-muted mt-1 mb-4">
                  {tier.tagline}
                </div>
                <div className="font-display font-semibold text-[24px] text-text-bright mb-[22px]">
                  {tier.price}
                </div>
                <div className="mb-[26px] grow">
                  {tier.features.map((f, i) => (
                    <CheckBullet key={i} color={tier.featured ? "brand" : "violet"}>
                      {f}
                    </CheckBullet>
                  ))}
                </div>
                <Button
                  href={contactHref}
                  variant={tier.featured ? "primary" : "secondary"}
                  withArrow
                >
                  {tier.cta}
                </Button>
              </Card>
            ))}
          </div>

          <p className="text-center text-[14px] text-text-faint mt-8 max-w-[620px] mx-auto">
            {dict.pricing.note}
          </p>
        </SectionShell>

        {/* FAQ */}
        <SectionShell bg="bg-alt" topBorder className="py-[80px]" label="Pricing FAQ">
          <div className="text-center max-w-[640px] mx-auto mb-[40px]">
            <div className="mb-[14px]">
              <EyebrowLabel color="brand">{dict.pricing.faqHead.eyebrow}</EyebrowLabel>
            </div>
            <h2
              className="font-display font-semibold text-[36px] max-[640px]:text-[27px] leading-tight tracking-[-0.02em] text-text-bright"
              style={{ textWrap: "balance" }}
            >
              {dict.pricing.faqHead.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 max-[720px]:grid-cols-1 gap-4 max-w-[900px] mx-auto">
            {dict.pricing.faq.map((item, i) => (
              <Card key={i} className="p-[24px]">
                <div className="font-display font-semibold text-[16px] text-text-bright mb-2">
                  {item.q}
                </div>
                <div className="text-[14.5px] text-text-body leading-[1.6]">
                  {item.a}
                </div>
              </Card>
            ))}
          </div>
        </SectionShell>

        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
