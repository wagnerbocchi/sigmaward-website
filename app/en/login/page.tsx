import type { Metadata } from "next";
import LoginPage from "@/components/pages/LoginPage";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Log in — Sigmaward",
  description: getDictionary("en").login.heroSub,
};

export default function Page() {
  return <LoginPage locale="en" />;
}
