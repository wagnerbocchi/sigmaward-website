import Link from "next/link";
import type { ReactNode } from "react";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
export default function PageHero({
  badge,
  title,
  sub,
  locale = "pt",
  children,
}: {
  badge: string;
  title: string;
  sub: string;
  locale?: Locale;
  children?: ReactNode;
}) {
  return (
    <section className="site-container page-hero">
      <nav
        className="breadcrumb"
        aria-label={getDictionary(locale).site.breadcrumb}
      >
        <Link href={localizePath("/", locale)}>
          {getDictionary(locale).site.home}
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{badge}</span>
      </nav>
      <h1>{title}</h1>
      <p className="page-intro">{sub}</p>
      {children && <div className="button-row">{children}</div>}
    </section>
  );
}
