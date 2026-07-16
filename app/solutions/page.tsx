import type { Metadata } from "next";
import SolutionsPage from "@/components/pages/SolutionsPage";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Soluções — Sigmaward",
  description: getDictionary("pt").solutions.heroSub,
};

export default function Page() {
  return <SolutionsPage locale="pt" />;
}
