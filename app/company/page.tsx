import type { Metadata } from "next";
import CompanyPage from "@/components/pages/CompanyPage";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Empresa — Sigmaward",
  description: getDictionary("pt").company.heroSub,
};

export default function Page() {
  return <CompanyPage locale="pt" />;
}
