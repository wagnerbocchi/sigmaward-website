import type { Metadata } from "next";
import ResourcesPage from "@/components/pages/ResourcesPage";
import { toMetadata } from "@/lib/routes";

export const metadata: Metadata = toMetadata("/resources/", "pt");

export default function Page() {
  return <ResourcesPage locale="pt" />;
}
