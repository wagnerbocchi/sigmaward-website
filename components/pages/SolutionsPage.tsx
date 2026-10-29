import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import Pillar from "@/components/sections/Pillar";
import FinalCta from "@/components/sections/FinalCta";
import PlatformShot from "@/components/mocks/PlatformShot";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

// Um screenshot real por bloco de solução (ordem espelha dict.solutions.blocks:
// MSSP · SOC/Blue teams · NOC · Conformidade).
const MOCKS = [
  <PlatformShot key="mssp" src="/screenshots/mssp.png" alt="Sigmaward — console MSSP com portfólio cross-tenant" />,
  <PlatformShot
    key="soc"
    src="/screenshots/case-detail.png"
    alt="Sigmaward — detalhe do caso de segurança (overview, observáveis e timeline)"
  />,
  <PlatformShot key="noc" src="/screenshots/monitoring.svg" alt="Sigmaward — monitoramento NOC (saúde da frota, métricas e triggers)" />,
  <PlatformShot key="compliance" src="/screenshots/cases.png" alt="Sigmaward — gestão de casos com SLA e status" />,
];

export default function SolutionsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Nav locale={locale} />
      <main>
        <PageHero
          badge={dict.solutions.badge}
          title={dict.solutions.heroTitle}
          sub={dict.solutions.heroSub}
        />
        {dict.solutions.blocks.map((block, i) => (
          <Pillar
            key={block.eyebrow}
            data={block}
            mock={MOCKS[i]}
            mockSide={i % 2 === 0 ? "right" : "left"}
            bg={i % 2 === 0 ? "bg" : "bg-alt"}
          />
        ))}
        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
