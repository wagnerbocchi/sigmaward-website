import Button from "@/components/ui/Button";
import GridOverlay from "@/components/ui/GridOverlay";
import DashboardMock from "@/components/mocks/DashboardMock";
import { Dictionary, Locale, localizePath } from "@/lib/i18n";

export default function Hero({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section
      data-screen-label="Home Hero"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1100px 560px at 78% -8%,rgba(140,123,255,0.16),transparent 58%),radial-gradient(900px 520px at 8% 4%,rgba(32,221,201,0.13),transparent 56%),var(--color-bg)",
      }}
    >
      {/* Faint grid overlay */}
      <GridOverlay size={52} />

      {/* Diagonal sweep beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "-10%",
          left: 0,
          width: "22%",
          height: "130%",
          transform: "skewX(-12deg)",
          background:
            "linear-gradient(90deg,transparent,rgba(43,231,210,0.06),transparent)",
          filter: "blur(12px)",
          animation: "sw-sweep 11s ease-in-out infinite",
        }}
      />

      {/* Content grid */}
      <div
        className="relative mx-auto grid items-center [grid-template-columns:1.04fr_1.18fr] gap-[54px] max-[900px]:grid-cols-1 max-[900px]:gap-10"
        style={{
          maxWidth: 1240,
          padding: "78px 32px 70px",
        }}
      >
        {/* Left column */}
        <div>
          {/* Badge pill */}
          <div
            className="inline-flex items-center mb-[26px]"
            style={{
              gap: 9,
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              letterSpacing: "0.06em",
              color: "#9FE9DF",
              background: "rgba(32,221,201,0.07)",
              border: "1px solid rgba(32,221,201,0.22)",
              padding: "7px 14px",
              borderRadius: 999,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#20DDC9",
                boxShadow: "0 0 8px #20DDC9",
                flexShrink: 0,
              }}
            />
            {dict.hero.badge}
          </div>

          {/* Heading */}
          <h1
            className="text-text-bright text-[55px] max-[900px]:text-[34px]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              margin: "0 0 22px",
              textWrap: "balance",
            }}
          >
            {dict.hero.title}
          </h1>

          {/* Sub-heading */}
          <p
            className="text-text-body"
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              margin: "0 0 34px",
              maxWidth: 540,
            }}
          >
            {dict.hero.sub}
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-[14px] mb-[26px]">
            <Button
              href={localizePath("/platform/", locale)}
              variant="primary"
              withArrow
            >
              {dict.hero.ctaPrimary}
            </Button>
            <Button href="#" variant="secondary">
              {dict.hero.ctaSecondary}
            </Button>
          </div>

          {/* Mono note */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "#5E6B84",
              letterSpacing: "0.02em",
            }}
          >
            {dict.hero.note}
          </div>
        </div>

        {/* Right column — dashboard mock */}
        <DashboardMock />
      </div>
    </section>
  );
}
