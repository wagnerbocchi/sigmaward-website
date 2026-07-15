import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Problem from "@/components/sections/Problem";
import Pillar from "@/components/sections/Pillar";
import Capabilities from "@/components/sections/Capabilities";
import Comparison from "@/components/sections/Comparison";
import Mssp from "@/components/sections/Mssp";
import Compliance from "@/components/sections/Compliance";
import Quote from "@/components/sections/Quote";
import FinalCta from "@/components/sections/FinalCta";
import SigmaRuleCard from "@/components/mocks/SigmaRuleCard";
import PlaybookFlow from "@/components/mocks/PlaybookFlow";
import CaseTimeline from "@/components/mocks/CaseTimeline";
import IocTable from "@/components/mocks/IocTable";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export default function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Nav locale={locale} />
      <main>
        <Hero dict={dict} locale={locale} />
        <TrustStrip dict={dict} />
        <Problem dict={dict} />
        <Pillar
          data={dict.pillars[0]}
          mock={<SigmaRuleCard />}
          mockSide="right"
          bg="bg"
        />
        <Pillar
          data={dict.pillars[1]}
          mock={<PlaybookFlow />}
          mockSide="left"
          bg="bg-alt"
        />
        <Pillar
          data={dict.pillars[2]}
          mock={<CaseTimeline />}
          mockSide="right"
          bg="bg"
        />
        <Pillar
          data={dict.pillars[3]}
          mock={<IocTable />}
          mockSide="left"
          bg="bg-alt"
        />
        <Capabilities dict={dict} />
        <Comparison dict={dict} locale={locale} />
        <Mssp dict={dict} />
        <Compliance dict={dict} />
        <Quote dict={dict} />
        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
