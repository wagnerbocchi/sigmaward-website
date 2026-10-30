import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import GridOverlay from "@/components/ui/GridOverlay";
import { getDictionary, localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export default function ComingSoonPage({
  locale,
  titleKey,
}: {
  locale: Locale;
  titleKey: "solutions" | "pricing" | "resources" | "company" | "login";
}) {
  const dict = getDictionary(locale);

  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <section
          data-screen-label="Coming Soon"
          className="relative overflow-hidden flex items-center"
          style={{
            minHeight: "70vh",
            background:
              "radial-gradient(1000px 520px at 72% -12%,rgba(140,123,255,0.15),transparent 58%),radial-gradient(820px 460px at 8% -2%,rgba(32,221,201,0.12),transparent 56%),var(--color-bg)",
          }}
        >
          <GridOverlay size={52} />

          <div
            className="relative mx-auto text-center"
            style={{ maxWidth: 560, padding: "92px 32px" }}
          >
            <div className="mb-[18px]">
              <EyebrowLabel>{dict.nav[titleKey]}</EyebrowLabel>
            </div>

            <h1
              className="text-text-bright"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 44,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                margin: "0 0 18px",
              }}
            >
              {locale === "pt" ? "Em breve" : "Coming soon"}
            </h1>

            <p
              className="text-text-body mx-auto"
              style={{ fontSize: 17, lineHeight: 1.6, margin: "0 auto 32px", maxWidth: 480 }}
            >
              {locale === "pt"
                ? "Esta página está em construção. Volte em breve."
                : "This page is under construction. Check back soon."}
            </p>

            <div className="flex items-center justify-center">
              <Button href={localizePath("/", locale)} variant="primary" withArrow>
                {locale === "pt" ? "Voltar para a home" : "Back to home"}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
