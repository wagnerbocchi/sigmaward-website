import type { Metadata } from "next";
import CompanyPage from "@/components/pages/CompanyPage";
import { toMetadata } from "@/lib/routes";

export const metadata: Metadata = toMetadata("/company/", "pt");

export default function Page() {
  return <CompanyPage locale="pt" />;
}
