import type { Metadata } from "next";
import LoginPage from "@/components/pages/LoginPage";
import { toMetadata } from "@/lib/routes";

export const metadata: Metadata = toMetadata("/login/", "pt");

export default function Page() {
  return <LoginPage locale="pt" />;
}
