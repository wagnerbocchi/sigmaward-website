import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { toMetadata } from "@/lib/routes";

export const metadata: Metadata = toMetadata("/", "en");

export default function Page() {
  return <HomePage locale="en" />;
}
