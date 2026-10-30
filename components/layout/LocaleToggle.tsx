"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPath, localizePath } from "@/lib/i18n";
export default function LocaleToggle() {
  const pathname = usePathname(),
    active = getLocaleFromPath(pathname);
  return (
    <div
      className="locale-toggle"
      aria-label={active === "pt" ? "Idioma" : "Language"}
    >
      {(["pt", "en"] as const).map((locale) => (
        <Link
          key={locale}
          href={localizePath(pathname, locale)}
          hrefLang={locale}
          aria-current={active === locale ? "page" : undefined}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
