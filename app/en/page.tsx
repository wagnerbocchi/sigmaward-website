import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Sigmaward — The modern SOC, without the legacy SIEM weight",
  description: getDictionary("en").hero.sub,
};

export default function Page() {
  return <HomePage locale="en" />;
}
