import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import Pillar from "@/components/sections/Pillar";
import FinalCta from "@/components/sections/FinalCta";
import TenantsPanel from "@/components/mocks/TenantsPanel";
import CaseTimeline from "@/components/mocks/CaseTimeline";
import DashboardMock from "@/components/mocks/DashboardMock";
import IocTable from "@/components/mocks/IocTable";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

// Um mock por bloco de solução (ordem espelha dict.solutions.blocks).
const MOCKS = [
  <TenantsPanel key="mssp" />,
  <CaseTimeline key="blue" />,
  <DashboardMock key="risk" />,
  <IocTable key="compliance" />,
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
