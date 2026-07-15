import type { Metadata } from "next";
import ComingSoonPage from "@/components/pages/ComingSoonPage";

export const metadata: Metadata = {
  title: "Pricing — Sigmaward",
};

export default function Page() {
  return <ComingSoonPage locale="en" titleKey="pricing" />;
}
