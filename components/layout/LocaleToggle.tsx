"use client";

import { usePathname, useRouter } from "next/navigation";
import { getLocaleFromPath, localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export default function LocaleToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const active = getLocaleFromPath(pathname);

  function navigate(target: Locale) {
    if (target === active) return;
    if (typeof window !== "undefined") {
      localStorage.setItem("sw-locale", target);
    }
    router.push(localizePath(pathname, target));
  }

  return (
    <div className="flex items-center border border-border rounded-lg overflow-hidden font-mono text-[11px] font-semibold">
      <button
        type="button"
        onClick={() => navigate("pt")}
        className={`px-[10px] py-[6px] cursor-pointer transition-colors ${
          active === "pt"
            ? "bg-brand text-brand-ink"
            : "text-text-muted hover:text-text-bright"
        }`}
        aria-pressed={active === "pt"}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => navigate("en")}
        className={`px-[10px] py-[6px] cursor-pointer transition-colors ${
          active === "en"
            ? "bg-brand text-brand-ink"
            : "text-text-muted hover:text-text-bright"
        }`}
        aria-pressed={active === "en"}
      >
        EN
      </button>
    </div>
  );
}
