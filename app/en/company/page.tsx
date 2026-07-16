import type { Metadata } from "next";
import CompanyPage from "@/components/pages/CompanyPage";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Company — Sigmaward",
  description: getDictionary("en").company.heroSub,
};

export default function Page() {
  return <CompanyPage locale="en" />;
}
