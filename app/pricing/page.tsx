import type { Metadata } from "next";
import PricingPage from "@/components/pages/PricingPage";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Preços — Sigmaward",
  description: getDictionary("pt").pricing.heroSub,
};

export default function Page() {
  return <PricingPage locale="pt" />;
}
