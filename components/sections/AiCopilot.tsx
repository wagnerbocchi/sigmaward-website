import CheckBullet from "@/components/ui/CheckBullet";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import SectionShell from "@/components/ui/SectionShell";
import PlatformShot from "@/components/mocks/PlatformShot";
import type { Dictionary } from "@/lib/i18n";

export default function AiCopilot({ dict }: { dict: Dictionary }) {
  const ai = dict.platform.aiCopilot;

  return (
    <SectionShell bg="bg-alt" topBorder className="py-[94px]" label={ai.eyebrow}>
      <div
        className="grid items-center [grid-template-columns:0.95fr_1fr] gap-[60px] max-[900px]:grid-cols-1 max-[900px]:gap-10"
      >
        {/* Left: real screenshot (AI Assist) */}
        <div className="relative max-[900px]:order-2">
          <PlatformShot
            src="/screenshots/ai-copilot.svg"
            alt="Sigmaward — AI Assist: copiloto SOC conversacional com tool_traces e follow-ups"
          />
        </div>

        {/* Right: copy + bullets */}
        <div className="max-[900px]:order-1">
          <div className="mb-4">
            <EyebrowLabel color="brand">{ai.eyebrow}</EyebrowLabel>
          </div>
          <h2
            className="font-display font-semibold text-[36px] max-[900px]:text-[28px] leading-[1.12] tracking-[-0.02em] text-text-bright mb-4"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            {ai.title}
          </h2>
          <p
            className="text-[16.5px] text-text-body leading-[1.62] mb-[26px]"
            style={{ maxWidth: 470 }}
          >
            {ai.body}
          </p>
          <div>
            {ai.bullets.map((b, i) => (
              <CheckBullet key={i} color="brand">
                {b}
              </CheckBullet>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
