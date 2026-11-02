import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { toMetadata } from "@/lib/routes";

export const metadata: Metadata = toMetadata("/", "pt");

export default function Page() {
  return <HomePage locale="pt" />;
}
