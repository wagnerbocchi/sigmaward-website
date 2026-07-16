import type { Metadata } from "next";
import LoginPage from "@/components/pages/LoginPage";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Entrar — Sigmaward",
  description: getDictionary("pt").login.heroSub,
};

export default function Page() {
  return <LoginPage locale="pt" />;
}
