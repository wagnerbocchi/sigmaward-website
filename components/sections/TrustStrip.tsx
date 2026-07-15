import { Dictionary } from "@/lib/i18n";

export default function TrustStrip({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-t border-b border-border-soft bg-bg-alt">
      <div
        className="mx-auto"
        style={{ maxWidth: 1240, padding: "30px 32px" }}
      >
        {/* Label */}
        <div
          className="text-center mb-[22px]"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#5E6B84",
          }}
        >
          {dict.trust.label}
        </div>

        {/* Wordmarks */}
        <div
          aria-hidden="true"
          className="flex items-center justify-center flex-wrap mb-[30px]"
          style={{ gap: 46, opacity: 0.62 }}
        >
          {dict.trust.logos.map((logo, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: "0.04em",
                color: "#8392AD",
              }}
            >
              {logo}
            </span>
          ))}
        </div>

        {/* Stats grid */}
        <div
          className="grid border-t border-border-soft pt-[26px] grid-cols-4 gap-[18px] max-[600px]:grid-cols-2"
        >
          {dict.trust.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="text-text-bright"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 30,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.v}
              </div>
              <div
                className="text-text-faint mt-[3px]"
                style={{ fontSize: 13 }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div
          className="text-center mt-[16px]"
          style={{
            fontSize: 10.5,
            color: "#3F4A60",
            fontStyle: "italic",
          }}
        >
          {dict.trust.disclaimer}
        </div>
      </div>
    </section>
  );
}
