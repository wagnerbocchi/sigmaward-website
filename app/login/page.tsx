import type { Metadata } from "next";
import ComingSoonPage from "@/components/pages/ComingSoonPage";

export const metadata: Metadata = {
  title: "Entrar — Sigmaward",
};

export default function Page() {
  return <ComingSoonPage locale="pt" titleKey="login" />;
}
