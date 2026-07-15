import type { Metadata } from "next";
import PlatformPage from "@/components/pages/PlatformPage";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Platform — Sigmaward",
  description: getDictionary("en").platform.heroSub,
};

export default function Page() {
  return <PlatformPage locale="en" />;
}
