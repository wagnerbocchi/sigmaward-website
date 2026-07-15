import Button from "@/components/ui/Button";
import GridOverlay from "@/components/ui/GridOverlay";
import { Dictionary, Locale, localizePath } from "@/lib/i18n";

export default function FinalCta({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section
      data-screen-label="Final CTA"
      className="bg-bg"
      style={{ padding: "24px 32px 92px" }}
    >
      <div
        className="relative overflow-hidden border border-border rounded-[24px] text-center mx-auto px-[56px] py-[66px] max-[600px]:px-6 max-[600px]:py-12"
        style={{
          maxWidth: 1180,
          background:
            "radial-gradient(720px 320px at 26% -20%,rgba(32,221,201,0.16),transparent 60%),radial-gradient(640px 320px at 92% 130%,rgba(140,123,255,0.18),transparent 60%),#0C1322",
        }}
      >
        <GridOverlay size={46} />

        <div className="relative">
          <h2
            className="text-text-bright"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 43,
              letterSpacing: "-0.022em",
              margin: "0 0 14px",
              textWrap: "balance",
            }}
          >
            {dict.cta.title}
          </h2>
          <p
            className="text-text-body"
            style={{
              fontSize: 17.5,
              margin: "0 auto 32px",
              maxWidth: 520,
              lineHeight: 1.55,
            }}
          >
            {dict.cta.sub}
          </p>
          <div className="flex items-center justify-center" style={{ gap: 14 }}>
            <Button
              href={localizePath("/platform/", locale)}
              variant="primary"
              withArrow
            >
              {dict.cta.primary}
            </Button>
            <Button href="#" variant="secondary">
              {dict.cta.secondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
