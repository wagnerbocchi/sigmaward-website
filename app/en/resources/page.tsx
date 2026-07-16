import type { Metadata } from "next";
import ResourcesPage from "@/components/pages/ResourcesPage";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Resources — Sigmaward",
  description: getDictionary("en").resources.heroSub,
};

export default function Page() {
  return <ResourcesPage locale="en" />;
}
