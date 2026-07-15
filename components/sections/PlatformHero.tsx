import Button from "@/components/ui/Button";
import GridOverlay from "@/components/ui/GridOverlay";
import type { Dictionary } from "@/lib/i18n";

export default function PlatformHero({ dict }: { dict: Dictionary }) {
  return (
    <section
      data-screen-label="Platform Hero"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1000px 520px at 72% -12%,rgba(140,123,255,0.15),transparent 58%),radial-gradient(820px 460px at 8% -2%,rgba(32,221,201,0.12),transparent 56%),var(--color-bg)",
      }}
    >
      <GridOverlay size={52} />

      <div
        className="relative mx-auto text-center"
        style={{ maxWidth: 920, padding: "92px 32px 78px" }}
      >
        {/* Badge pill */}
        <div
          className="inline-flex items-center mb-[26px]"
          style={{
            gap: 9,
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#9FE9DF",
            background: "rgba(32,221,201,0.07)",
            border: "1px solid rgba(32,221,201,0.22)",
            padding: "7px 14px",
            borderRadius: 999,
          }}
        >
          {dict.platform.badge}
        </div>

        {/* Heading */}
        <h1
          className="text-text-bright text-[50px] max-[900px]:text-[34px]"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            lineHeight: 1.06,
            letterSpacing: "-0.025em",
            margin: "0 0 20px",
            textWrap: "balance",
          }}
        >
          {dict.platform.heroTitle}
        </h1>

        {/* Sub-heading */}
        <p
          className="text-text-body mx-auto"
          style={{ fontSize: 18, lineHeight: 1.6, margin: "0 auto 32px", maxWidth: 600 }}
        >
          {dict.platform.heroSub}
        </p>

        {/* CTA row */}
        <div className="flex items-center justify-center" style={{ gap: 14 }}>
          <Button href="#" variant="primary" withArrow>
            {dict.platform.ctaPrimary}
          </Button>
          <Button href="#" variant="secondary">
            {dict.platform.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
