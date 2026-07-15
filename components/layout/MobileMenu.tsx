"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import LocaleToggle from "@/components/layout/LocaleToggle";
import { getDictionary, localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const NAV_LINKS = [
  { key: "platform" as const, href: "/platform/" },
  { key: "solutions" as const, href: "/solutions/" },
  { key: "pricing" as const, href: "/pricing/" },
  { key: "resources" as const, href: "/resources/" },
  { key: "company" as const, href: "/company/" },
] as const;

export default function MobileMenu({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const dict = getDictionary(locale);

  return (
    <div className="lg:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        aria-label={locale === "pt" ? (open ? "Fechar menu" : "Abrir menu") : (open ? "Close menu" : "Open menu")}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-10 h-10 text-text-body hover:text-text-bright"
      >
        {open ? (
          /* X icon */
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          /* Hamburger icon */
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Drawer — portaled to <body> so `position:fixed` is viewport-relative
          (the Nav's backdrop-filter would otherwise be its containing block). */}
      {open && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-x-0 top-[66px] bottom-0 z-40 bg-bg flex flex-col gap-2 p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={locale === "pt" ? "Menu de navegação" : "Navigation menu"}
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map(({ key, href }) => (
              <Link
                key={key}
                href={localizePath(href, locale)}
                onClick={() => setOpen(false)}
                className="text-[16px] font-medium text-text-body hover:text-text-bright px-3 py-3 rounded-lg hover:bg-white/[0.04]"
              >
                {dict.nav[key]}
              </Link>
            ))}
          </nav>

          <div className="mt-2 border-t border-border pt-4 flex flex-col gap-4">
            <Link
              href={localizePath("/login/", locale)}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-text-body hover:text-text-bright px-3 py-2"
            >
              {dict.nav.login}
            </Link>
            <Button href={localizePath("/platform/", locale)} variant="primary">
              {dict.nav.cta}
            </Button>
          </div>

          <div className="mt-4 px-3">
            <LocaleToggle />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
