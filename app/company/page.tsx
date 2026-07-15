import type { Metadata } from "next";
import ComingSoonPage from "@/components/pages/ComingSoonPage";

export const metadata: Metadata = {
  title: "Empresa — Sigmaward",
};

export default function Page() {
  return <ComingSoonPage locale="pt" titleKey="company" />;
}
