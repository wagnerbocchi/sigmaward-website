import type { Metadata } from "next";
import PricingPage from "@/components/pages/PricingPage";
import { toMetadata } from "@/lib/routes";

export const metadata: Metadata = toMetadata("/pricing/", "en");

export default function Page() {
  return <PricingPage locale="en" />;
}
