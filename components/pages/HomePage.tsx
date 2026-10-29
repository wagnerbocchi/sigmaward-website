import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Problem from "@/components/sections/Problem";
import Pillar from "@/components/sections/Pillar";
import Capabilities from "@/components/sections/Capabilities";
import NocSoc from "@/components/sections/NocSoc";
import Comparison from "@/components/sections/Comparison";
import Mssp from "@/components/sections/Mssp";
import Compliance from "@/components/sections/Compliance";
import Quote from "@/components/sections/Quote";
import FinalCta from "@/components/sections/FinalCta";
import PlatformShot from "@/components/mocks/PlatformShot";
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
          mock={
            <PlatformShot
              src="/screenshots/detections.png"
              alt="Sigmaward — catálogo de detecções Sigma (SigmaHQ) com detalhe da regra, query e YAML"
            />
          }
          mockSide="right"
          bg="bg"
        />
        <Pillar
          data={dict.pillars[1]}
          mock={
            <PlatformShot
              src="/screenshots/playbooks.png"
              alt="Sigmaward — playbooks SOAR em DAG com gatilho, passos ordenados e estado"
            />
          }
          mockSide="left"
          bg="bg-alt"
        />
        <Pillar
          data={dict.pillars[2]}
          mock={
            <PlatformShot
              src="/screenshots/case-detail-timeline.png"
              alt="Sigmaward — caso com linha do tempo, observáveis e tags (ransomware, TLP, SLA)"
            />
          }
          mockSide="right"
          bg="bg"
        />
        <Pillar
          data={dict.pillars[3]}
          mock={
            <PlatformShot
              src="/screenshots/ai-copilot.svg"
              alt="Sigmaward — Copiloto de IA (AI Assist) respondendo sobre o contexto do SOC"
            />
          }
          mockSide="left"
          bg="bg-alt"
        />
        <Capabilities dict={dict} />
        <NocSoc dict={dict} />
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
