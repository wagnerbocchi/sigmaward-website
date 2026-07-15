import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Icon from "@/components/ui/Icon";
import Logo from "@/components/ui/Logo";
import SectionShell from "@/components/ui/SectionShell";
import { Dictionary, Locale } from "@/lib/i18n";

export default function Comparison({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <SectionShell bg="bg-alt" topBorder className="py-[90px]" label="Comparison">
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        {/* Centered head */}
        <div className="text-center mb-10">
          <div className="mb-[14px]">
            <EyebrowLabel color="brand">{dict.compare.eyebrow}</EyebrowLabel>
          </div>
          <h2
            className="text-text-bright text-[38px] max-[640px]:text-[28px]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            {dict.compare.title}
          </h2>
        </div>

        {/* Table — horizontally scrollable on narrow viewports */}
        <div className="overflow-x-auto">
          <div
            className="border border-border rounded-[18px] overflow-hidden bg-bg"
            style={{ minWidth: 560 }}
          >
            {/* Header row */}
            <div
              className="grid items-stretch"
              style={{ gridTemplateColumns: "1.6fr 1fr 1fr" }}
            >
              <div style={{ padding: "20px 24px" }} />
              <div
                className="text-center"
                style={{
                  padding: "18px 22px",
                  background: "rgba(32,221,201,0.07)",
                  borderLeft: "1px solid rgba(32,221,201,0.22)",
                  borderRight: "1px solid rgba(32,221,201,0.22)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-brand">
                    <Logo size={18} mono />
                  </span>
                  <span
                    className="text-text-bright"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 15,
                    }}
                  >
                    {dict.compare.colA}
                  </span>
                </div>
              </div>
              <div
                className="flex items-center justify-center text-center"
                style={{ padding: "18px 22px" }}
              >
                <span
                  className="text-text-faint"
                  style={{ fontSize: 12.5, fontWeight: 600 }}
                >
                  {dict.compare.colB}
                </span>
              </div>
            </div>

            {/* Rows */}
            {dict.compare.rows.map((r, i) => (
              <div
                key={i}
                className="grid border-t border-border-soft"
                style={{ gridTemplateColumns: "1.6fr 1fr 1fr" }}
              >
                {/* Feature label */}
                <div
                  className="text-text flex items-center"
                  style={{ padding: "15px 24px", fontSize: 14, fontWeight: 500 }}
                >
                  {r.f}
                </div>

                {/* Sigmaward column — highlighted */}
                <div
                  className="flex items-center justify-center text-center text-brand"
                  style={{
                    padding: "15px 22px",
                    background: "rgba(32,221,201,0.04)",
                    borderLeft: "1px solid rgba(32,221,201,0.14)",
                    borderRight: "1px solid rgba(32,221,201,0.14)",
                  }}
                >
                  {typeof r.a === "boolean" ? (
                    r.a ? (
                      <>
                        <Icon name="check" size={19} strokeWidth={2.6} />
                        <span className="sr-only">
                          {locale === "pt" ? "Sim" : "Yes"}
                        </span>
                      </>
                    ) : (
                      <>
                        <XIcon size={16} color="#56627B" />
                        <span className="sr-only">
                          {locale === "pt" ? "Não" : "No"}
                        </span>
                      </>
                    )
                  ) : (
                    <span
                      className="text-text-bright"
                      style={{ fontSize: 13.5, fontWeight: 600 }}
                    >
                      {r.a}
                    </span>
                  )}
                </div>

                {/* Legacy column */}
                <div
                  className="flex items-center justify-center text-center"
                  style={{ padding: "15px 22px" }}
                >
                  {typeof r.b === "boolean" ? (
                    r.b ? (
                      <>
                        <Icon name="check" size={16} strokeWidth={2.4} />
                        <span className="sr-only">
                          {locale === "pt" ? "Sim" : "Yes"}
                        </span>
                      </>
                    ) : (
                      <>
                        <XIcon size={16} color="#56627B" />
                        <span className="sr-only">
                          {locale === "pt" ? "Não" : "No"}
                        </span>
                      </>
                    )
                  ) : (
                    <span className="text-text-muted" style={{ fontSize: 13.5 }}>
                      {r.b}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function XIcon({ size = 16, color }: { size?: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
