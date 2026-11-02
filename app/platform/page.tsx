import type { Metadata } from "next";
import PlatformPage from "@/components/pages/PlatformPage";
import { toMetadata } from "@/lib/routes";

export const metadata: Metadata = toMetadata("/platform/", "pt");

export default function Page() {
  return <PlatformPage locale="pt" />;
}
