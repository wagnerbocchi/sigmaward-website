import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import LocaleToggle from "@/components/layout/LocaleToggle";
import MobileMenu from "@/components/layout/MobileMenu";
import { getDictionary, localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const NAV_LINKS = [
  { key: "platform" as const, href: "/platform/" },
  { key: "solutions" as const, href: "/solutions/" },
  { key: "pricing" as const, href: "/pricing/" },
  { key: "resources" as const, href: "/resources/" },
  { key: "company" as const, href: "/company/" },
] as const;

export default function Nav({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(10,15,26,0.82)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div
        style={{ maxWidth: 1240, margin: "0 auto" }}
        className="px-8 h-[66px] flex items-center justify-between"
      >
        {/* Left: Logo + desktop nav links */}
        <div className="flex items-center gap-[38px]">
          <Link
            href={localizePath("/", locale)}
            className="flex items-center gap-[10px]"
            aria-label="Sigmaward — home"
          >
            <Logo size={30} />
            <span className="font-display font-semibold text-[19px] tracking-[-0.02em] text-text-bright">
              Sigmaward
            </span>
          </Link>

          {/* Desktop nav links — hidden below 1024px */}
          <nav className="hidden lg:flex items-center gap-[6px]">
            {NAV_LINKS.map(({ key, href }) => (
              <Link
                key={key}
                href={localizePath(href, locale)}
                className="text-[14px] font-medium text-text-body hover:text-text-bright hover:bg-white/[0.04] px-3 py-2 rounded-lg transition-colors"
              >
                {dict.nav[key]}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: LocaleToggle + login link + CTA button + mobile menu */}
        <div className="flex items-center gap-[14px]">
          {/* Desktop controls — hidden below 1024px */}
          <div className="hidden lg:flex items-center gap-[14px]">
            <LocaleToggle />
            <Link
              href={localizePath("/login/", locale)}
              className="text-[14px] font-medium text-text-body hover:text-text-bright transition-colors"
            >
              {dict.nav.login}
            </Link>
            <Button href={localizePath("/platform/", locale)} variant="primary">
              {dict.nav.cta}
            </Button>
          </div>

          {/* Mobile hamburger — hidden ≥1024px */}
          <MobileMenu locale={locale} />
        </div>
      </div>
    </header>
  );
}
