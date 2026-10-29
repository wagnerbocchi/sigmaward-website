import SectionShell from "@/components/ui/SectionShell";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import type { Dictionary, Locale } from "@/lib/i18n";

export default function Integrations({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const disclaimer =
    locale === "pt"
      ? "Componentes reais da stack Sigmaward — a telemetria entra sempre pelo Agente Sigmaward (sem coletor de terceiros)."
      : "Real Sigmaward stack components — telemetry always enters via the Sigmaward Agent (no third-party collector).";

  return (
    <SectionShell bg="bg-alt" topBorder label="Integrations">
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        {/* Centered heading block */}
        <div className="text-center max-w-[640px] mx-auto mb-[44px]">
          <div className="mb-[14px]">
            <EyebrowLabel color="brand">
              {dict.platform.integrationsHead.eyebrow}
            </EyebrowLabel>
          </div>
          <h2
            className="font-display font-semibold text-[38px] max-[640px]:text-[28px] leading-tight tracking-[-0.02em] text-text-bright mb-[13px]"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            {dict.platform.integrationsHead.title}
          </h2>
          <p className="text-[16.5px] text-text-body leading-[1.55]">
            {dict.platform.integrationsHead.sub}
          </p>
        </div>

        {/* 4-col chip grid */}
        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 gap-[14px]">
          {dict.platform.integrations.map((name, i) => (
            <div
              key={i}
              className="bg-surface border border-border rounded-[12px] flex items-center justify-center hover:border-[#2E6E66] transition-colors"
              style={{ padding: 18, gap: 10, minHeight: 56 }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: 3,
                  background: "linear-gradient(135deg,#20DDC9,#8C7BFF)",
                }}
              />
              <span className="font-display font-semibold text-[14px] text-text">
                {name}
              </span>
            </div>
          ))}
        </div>

        <div
          className="text-center"
          style={{
            fontSize: 10.5,
            color: "var(--color-disclaimer)",
            marginTop: 18,
            fontStyle: "italic",
          }}
        >
          {disclaimer}
        </div>
      </div>
    </SectionShell>
  );
}
