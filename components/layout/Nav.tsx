import Link from "next/link";
import Brand from "@/components/ui/Brand";
import LocaleToggle from "@/components/layout/LocaleToggle";
import MobileMenu from "@/components/layout/MobileMenu";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
export default function Nav({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        {d.product.skip}
      </a>
      <div className="site-container nav-inner">
        <Link
          href={localizePath("/", locale)}
          className="wordmark"
          aria-label="Sigmaward"
        >
          <Brand />
        </Link>
        <nav className="desktop-navigation" aria-label={d.product.navigation}>
          {(["platform", "solutions", "resources", "company"] as const).map(
            (key) => (
              <Link key={key} href={localizePath(`/${key}/`, locale)}>
                {d.nav[key]}
              </Link>
            ),
          )}
        </nav>
        <div className="desktop-controls">
          <LocaleToggle />
          <Link className="console-link" href={localizePath("/login/", locale)}>
            {d.nav.login}
          </Link>
        </div>
        <MobileMenu locale={locale} />
      </div>
    </header>
  );
}
