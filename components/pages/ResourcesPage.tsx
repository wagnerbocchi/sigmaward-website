import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import SectionShell from "@/components/ui/SectionShell";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { getDictionary, localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

type IconName = React.ComponentProps<typeof Icon>["name"];

// Rótulo do CTA como link (externo em nova aba, interno via router, ou inerte
// quando o recurso ainda não existe — honesto, sem link morto).
function ResourceCta({
  cta,
  href,
  external,
  locale,
}: {
  cta: string;
  href: string;
  external: boolean;
  locale: Locale;
}) {
  const cls =
    "inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand mt-[18px]";
  if (!href) {
    return (
      <span className="inline-flex items-center text-[13.5px] font-medium text-text-faint mt-[18px]">
        {cta}
      </span>
    );
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {cta}
        <span className="text-[15px]">↗</span>
      </a>
    );
  }
  return (
    <Link href={localizePath(href, locale)} className={cls}>
      {cta}
      <span className="text-[15px]">→</span>
    </Link>
  );
}

export default function ResourcesPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero
          badge={dict.resources.badge}
          title={dict.resources.heroTitle}
          sub={dict.resources.heroSub}
        />

        <SectionShell bg="bg" topBorder className="py-[80px]" label="Resources">
          <div className="text-center max-w-[640px] mx-auto mb-[44px]">
            <div className="mb-[14px]">
              <EyebrowLabel color="brand">{dict.resources.cardsHead.eyebrow}</EyebrowLabel>
            </div>
            <h2
              className="font-display font-semibold text-[36px] max-[640px]:text-[27px] leading-tight tracking-[-0.02em] text-text-bright"
              style={{ textWrap: "balance" }}
            >
              {dict.resources.cardsHead.title}
            </h2>
          </div>

          <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[18px]">
            {dict.resources.cards.map((card, i) => (
              <Card key={i} hover className="p-[26px] flex flex-col">
                <div className="w-[42px] h-[42px] rounded-[11px] bg-[rgba(32,221,201,0.1)] border border-[rgba(32,221,201,0.18)] flex items-center justify-center text-brand mb-[18px]">
                  <Icon name={card.icon as IconName} size={20} strokeWidth={1.8} />
                </div>
                <div className="font-display font-semibold text-[18px] text-text-bright mb-2">
                  {card.title}
                </div>
                <div className="text-[14px] text-text-muted leading-[1.55] grow">
                  {card.desc}
                </div>
                <ResourceCta
                  cta={card.cta}
                  href={card.href}
                  external={card.external}
                  locale={locale}
                />
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
