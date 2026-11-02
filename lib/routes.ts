import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/i18n";

/** All marketing routes, pt at the root, en under /en (see app/ and app/en/). */
export const ROUTES = [
  "/",
  "/platform/",
  "/solutions/",
  "/pricing/",
  "/resources/",
  "/company/",
  "/login/",
] as const;

type PageMeta = { title: string; description: string };

/**
 * Per-route, per-locale metadata, read from the same i18n dictionary the
 * pages render — one source of truth for copy. Route files in app/ and
 * app/en/ become one-liners via `pageMetadata()`.
 */
export function pageMetadata(route: string, locale: Locale): PageMeta {
  const d = getDictionary(locale);
  switch (route) {
    case "/":
      return { title: "Sigmaward | SIEM, SOAR, EDR e NOC", description: d.product.sub };
    case "/platform/":
      return { title: `${d.platform.badge} — Sigmaward`, description: d.platform.heroSub };
    case "/solutions/":
      return { title: `${d.solutions.badge} — Sigmaward`, description: d.solutions.heroSub };
    case "/pricing/":
      return { title: `${d.nav.pricing} — Sigmaward`, description: d.site.pricingIntro };
    case "/resources/":
      return { title: `${d.nav.resources} — Sigmaward`, description: d.site.resourcesIntro };
    case "/company/":
      return { title: `${d.nav.company} — Sigmaward`, description: d.site.companyIntro };
    case "/login/":
      return { title: `${d.login.badge} — Sigmaward`, description: d.login.heroSub };
    default:
      return { title: "Sigmaward", description: d.product.sub };
  }
}

/** Convenience for route files: `export const metadata = toMetadata("/platform/", "pt")`. */
export function toMetadata(route: string, locale: Locale): Metadata {
  return pageMetadata(route, locale);
}
