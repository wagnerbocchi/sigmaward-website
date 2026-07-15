import i18n from "@/content/i18n.json";

export type Locale = "pt" | "en";
export const LOCALES: Locale[] = ["pt", "en"];
export const DEFAULT_LOCALE: Locale = "pt";

export type Dictionary = (typeof i18n)["pt"];

export function getDictionary(locale: Locale): Dictionary {
  return i18n[locale];
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
