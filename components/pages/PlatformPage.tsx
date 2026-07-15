import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PlatformHero from "@/components/sections/PlatformHero";
import Pipeline from "@/components/sections/Pipeline";
import Modules from "@/components/sections/Modules";
import Integrations from "@/components/sections/Integrations";
import Architecture from "@/components/sections/Architecture";
import FinalCta from "@/components/sections/FinalCta";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export default function PlatformPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Nav locale={locale} />
      <main>
        <PlatformHero dict={dict} />
        <Pipeline dict={dict} />
        <Modules dict={dict} />
        <Integrations dict={dict} locale={locale} />
        <Architecture dict={dict} />
        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
