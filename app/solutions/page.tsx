import type { Metadata } from "next";
import SolutionsPage from "@/components/pages/SolutionsPage";
import { toMetadata } from "@/lib/routes";

export const metadata: Metadata = toMetadata("/solutions/", "pt");

export default function Page() {
  return <SolutionsPage locale="pt" />;
}
