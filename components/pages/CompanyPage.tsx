import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import SectionShell from "@/components/ui/SectionShell";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

type IconName = React.ComponentProps<typeof Icon>["name"];

// Endereço placeholder no próprio domínio do produto (como o SITE_URL em
// lib/site.ts) — trocar pelo canal real antes do deploy.
const CONTACT_EMAIL = "contato@sigmaward.com";

export default function CompanyPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Nav locale={locale} />
      <main>
        <PageHero
          badge={dict.company.badge}
          title={dict.company.heroTitle}
          sub={dict.company.heroSub}
        />

        {/* Missão */}
        <SectionShell bg="bg" topBorder className="py-[80px]" label="Mission">
          <div className="max-w-[760px] mx-auto text-center">
            <div className="mb-[14px]">
              <EyebrowLabel color="brand">{dict.company.missionHead.eyebrow}</EyebrowLabel>
            </div>
            <h2
              className="font-display font-semibold text-[36px] max-[640px]:text-[27px] leading-tight tracking-[-0.02em] text-text-bright mb-5"
              style={{ textWrap: "balance" }}
            >
              {dict.company.missionHead.title}
            </h2>
            <p className="text-[17px] text-text-body leading-[1.7]">
              {dict.company.missionBody}
            </p>
          </div>
        </SectionShell>

        {/* Princípios */}
        <SectionShell bg="bg-alt" topBorder className="py-[80px]" label="Values">
          <div className="text-center max-w-[640px] mx-auto mb-[44px]">
            <div className="mb-[14px]">
              <EyebrowLabel color="brand">{dict.company.valuesHead.eyebrow}</EyebrowLabel>
            </div>
            <h2
              className="font-display font-semibold text-[36px] max-[640px]:text-[27px] leading-tight tracking-[-0.02em] text-text-bright"
              style={{ textWrap: "balance" }}
            >
              {dict.company.valuesHead.title}
            </h2>
          </div>

          <div className="grid grid-cols-3 max-[800px]:grid-cols-1 gap-[18px]">
            {dict.company.values.map((v, i) => (
              <Card key={i} hover className="p-[26px]">
                <div className="w-[42px] h-[42px] rounded-[11px] bg-[rgba(32,221,201,0.1)] border border-[rgba(32,221,201,0.18)] flex items-center justify-center text-brand mb-[18px]">
                  <Icon name={v.icon as IconName} size={20} strokeWidth={1.8} />
                </div>
                <div className="font-display font-semibold text-[18px] text-text-bright mb-2">
                  {v.title}
                </div>
                <div className="text-[14px] text-text-muted leading-[1.55]">
                  {v.desc}
                </div>
              </Card>
            ))}
          </div>
        </SectionShell>

        {/* Contato — âncora de destino dos CTAs "Falar com vendas" */}
        <SectionShell bg="bg" topBorder className="py-[80px]" label="Contact">
          <div id="contato" className="max-w-[620px] mx-auto text-center scroll-mt-[90px]">
            <div className="mb-[14px]">
              <EyebrowLabel color="brand">{dict.company.contactHead.eyebrow}</EyebrowLabel>
            </div>
            <h2
              className="font-display font-semibold text-[34px] max-[640px]:text-[26px] leading-tight tracking-[-0.02em] text-text-bright mb-4"
              style={{ textWrap: "balance" }}
            >
              {dict.company.contactHead.title}
            </h2>
            <p className="text-[16.5px] text-text-body leading-[1.6] mb-8">
              {dict.company.contactBody}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-[9px] text-[15.5px] font-bold text-brand-ink bg-brand rounded-[11px] px-6 py-[13px] shadow-[0_10px_30px_-10px_rgba(32,221,201,0.7)] hover:bg-brand-hover"
            >
              {dict.company.contactCta}
              <span className="text-[17px]">→</span>
            </a>
          </div>
        </SectionShell>

        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
