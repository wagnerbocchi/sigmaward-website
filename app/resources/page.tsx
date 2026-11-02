import type { Metadata } from "next";
import ResourcesPage from "@/components/pages/ResourcesPage";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Recursos — Sigmaward",
  description: getDictionary("pt").site.resourcesIntro,
};

export default function Page() {
  return <ResourcesPage locale="pt" />;
}
