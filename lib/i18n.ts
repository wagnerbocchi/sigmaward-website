import i18n from "@/content/i18n.json";

export type Locale = "pt" | "en";
export const LOCALES: Locale[] = ["pt", "en"];
export const DEFAULT_LOCALE: Locale = "pt";

/**
 * Dictionary type is derived from the pt locale of content/i18n.json.
 * The en locale is asserted at module load (and in unit tests) to mirror
 * the exact same key structure, so `Dictionary` is safe for both locales.
 */
export type Dictionary = (typeof i18n)["pt"];

function keyPaths(obj: unknown, prefix = ""): string[] {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    return Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) =>
      keyPaths(v, prefix ? `${prefix}.${k}` : k),
    );
  }
  return [prefix];
}

const ptKeys = new Set(keyPaths(i18n.pt));
const enKeys = new Set(keyPaths(i18n.en));
const missingInEn = [...ptKeys].filter((k) => !enKeys.has(k));
const missingInPt = [...enKeys].filter((k) => !ptKeys.has(k));
if (missingInEn.length || missingInPt.length) {
  throw new Error(
    `i18n mirror mismatch. missing in en: ${missingInEn.join(", ")} | missing in pt: ${missingInPt.join(", ")}`,
  );
}

export function getDictionary(locale: Locale): Dictionary {
  return (i18n as Record<Locale, Dictionary>)[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
}

export function localizePath(pathname: string, target: Locale): string {
  let base = pathname;
  if (base === "/en" || base === "/en/") base = "/";
  else if (base.startsWith("/en/")) base = base.slice(3); // "/en/platform/" -> "/platform/"
  if (target === "en") return base === "/" ? "/en/" : `/en${base}`;
  return base;
}
