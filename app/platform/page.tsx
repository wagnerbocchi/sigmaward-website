import type { Metadata } from "next";
import PlatformPage from "@/components/pages/PlatformPage";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Plataforma — Sigmaward",
  description: getDictionary("pt").platform.heroSub,
};

export default function Page() {
  return <PlatformPage locale="pt" />;
}
