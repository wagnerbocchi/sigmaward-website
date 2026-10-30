"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LocaleToggle from "@/components/layout/LocaleToggle";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
export default function MobileMenu({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false),
    root = useRef<HTMLDivElement>(null),
    trigger = useRef<HTMLButtonElement>(null);
  const d = getDictionary(locale);
  useEffect(() => {
    if (!open) return;
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    const outside = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <div className="mobile-navigation" ref={root}>
      <button
        ref={trigger}
        type="button"
        className="menu-trigger"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? d.product.closeMenu : d.product.menu}
      </button>
      {open && (
        <nav
          id="mobile-nav"
          aria-label={d.product.navigation}
          className="mobile-panel"
          onBlur={(e) => {
            if (
              !e.currentTarget.parentElement?.contains(e.relatedTarget as Node)
            )
              setOpen(false);
          }}
        >
          {(
            [
              "platform",
              "solutions",
              "pricing",
              "resources",
              "company",
              "login",
            ] as const
          ).map((k) => (
            <Link
              key={k}
              onClick={() => setOpen(false)}
              href={localizePath(`/${k}/`, locale)}
            >
              {d.nav[k]}
            </Link>
          ))}
          <LocaleToggle />
        </nav>
      )}
    </div>
  );
}
