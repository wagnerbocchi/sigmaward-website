import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
export default function Footer({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <div>
            <Link className="wordmark" href={localizePath("/", locale)}>
              <Logo size={32} />
              <span>Sigmaward</span>
            </Link>
            <a className="company-credit" href="https://bocchi.company/">
              {d.product.companyLink}
            </a>
          </div>
          <nav aria-label={d.product.footerNavigation}>
            {(
              [
                "platform",
                "solutions",
                "pricing",
                "resources",
                "company",
              ] as const
            ).map((k) => (
              <Link key={k} href={localizePath(`/${k}/`, locale)}>
                {d.nav[k]}
              </Link>
            ))}
            <a href="mailto:contato@sigmaward.com">contato@sigmaward.com</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sigmaward. {d.footer.rights}</span>
          <span>{d.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}
