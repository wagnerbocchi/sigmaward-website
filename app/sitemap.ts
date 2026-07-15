import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const paths: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/platform/", priority: 0.8 },
  { path: "/solutions/", priority: 0.5 },
  { path: "/pricing/", priority: 0.5 },
  { path: "/resources/", priority: 0.5 },
  { path: "/company/", priority: 0.5 },
  { path: "/login/", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["", "/en"];

  return locales.flatMap((prefix) =>
    paths.map(({ path, priority }) => ({
      url: `${SITE_URL}${prefix}${path}`,
      priority,
    }))
  );
}
