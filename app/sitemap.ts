import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

export const dynamic = "force-static";

const PRIORITIES: Record<string, number> = {
  "/": 1,
  "/platform/": 0.8,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const localePrefixes = ["", "/en"]; // pt na raiz, en sob /en

  return localePrefixes.flatMap((prefix) =>
    ROUTES.map((path) => ({
      url: `${SITE_URL}${prefix}${path}`,
      priority: PRIORITIES[path] ?? 0.5,
    })),
  );
}
