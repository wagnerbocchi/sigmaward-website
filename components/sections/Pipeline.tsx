import SectionShell from "@/components/ui/SectionShell";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import type { Dictionary } from "@/lib/i18n";

export default function Pipeline({ dict }: { dict: Dictionary }) {
  return (
    <SectionShell bg="bg-alt" topBorder label="Pipeline">
      {/* Centered heading block */}
      <div className="text-center max-w-[680px] mx-auto mb-[50px]">
        <div className="mb-[14px]">
          <EyebrowLabel color="brand">{dict.platform.pipelineHead.eyebrow}</EyebrowLabel>
        </div>
        <h2
          className="font-display font-semibold text-[38px] max-[640px]:text-[28px] leading-tight tracking-[-0.02em] text-text-bright mb-[13px]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          {dict.platform.pipelineHead.title}
        </h2>
        <p className="text-[16.5px] text-text-body leading-[1.55]">
          {dict.platform.pipelineHead.sub}
        </p>
      </div>

      {/* Connector line + 6-step grid */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute max-[900px]:hidden"
          style={{
            top: 25,
            left: "9%",
            right: "9%",
            height: 2,
            background:
              "linear-gradient(90deg,transparent,#26344C 8%,#26344C 92%,transparent)",
          }}
        />
        <div
          className="relative grid grid-cols-6 max-[900px]:grid-cols-1 max-[900px]:gap-y-6"
          style={{ gap: 12 }}
        >
          {dict.platform.pipeline.map((step, i) => (
            <div key={i} className="text-center" style={{ padding: "0 4px" }}>
              <div
                className="font-mono mx-auto flex items-center justify-center"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "var(--color-bg-alt)",
                  border: "1px solid #2E6E66",
                  color: "var(--color-brand)",
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 16,
                  boxShadow: "0 0 0 5px var(--color-bg-alt)",
                }}
              >
                {step.n}
              </div>
              <div className="font-display font-semibold text-[15px] text-text-bright mb-[6px]">
                {step.title}
              </div>
              <div className="text-[12px] text-text-faint leading-[1.5]">
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
