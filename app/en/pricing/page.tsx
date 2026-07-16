import type { Metadata } from "next";
import PricingPage from "@/components/pages/PricingPage";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Pricing — Sigmaward",
  description: getDictionary("en").pricing.heroSub,
};

export default function Page() {
  return <PricingPage locale="en" />;
}
