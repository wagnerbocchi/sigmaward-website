import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Sigmaward | SIEM, SOAR, EDR e NOC",
  description: getDictionary("pt").hero.sub,
};

export default function Page() {
  return <HomePage locale="pt" />;
}
