import SectionShell from "@/components/ui/SectionShell";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import type { Dictionary } from "@/lib/i18n";

const CAP_ICONS = [
  "layers",
  "box",
  "bar-chart",
  "shield-check",
  "sliders",
  "trending-up",
] as const;

export default function Capabilities({ dict }: { dict: Dictionary }) {
  return (
    <SectionShell bg="bg" topBorder className="py-[92px]" label="Capabilities">
      {/* Centered heading block */}
      <div className="text-center max-w-[660px] mx-auto mb-[46px]">
        <div className="mb-[14px]">
          <EyebrowLabel color="brand">{dict.capsHead.eyebrow}</EyebrowLabel>
        </div>
        <h2
          className="font-display font-semibold text-[38px] max-[640px]:text-[28px] leading-tight tracking-[-0.02em] text-text-bright mb-[13px]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          {dict.capsHead.title}
        </h2>
        <p className="text-[16.5px] text-text-body leading-[1.55]">
          {dict.capsHead.sub}
        </p>
      </div>

      {/* 3×2 capability grid */}
      <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[18px]">
        {dict.caps.map((c, i) => (
          <Card key={i} hover className="p-[26px]">
            {/* Icon tile */}
            <div className="w-[42px] h-[42px] rounded-[11px] bg-[rgba(32,221,201,0.1)] border border-[rgba(32,221,201,0.18)] flex items-center justify-center text-brand mb-[18px]">
              <Icon name={CAP_ICONS[i]} size={20} strokeWidth={1.8} />
            </div>
            <div className="font-display font-semibold text-[18px] text-text-bright mb-2">
              {c.t}
            </div>
            <div className="text-[14px] text-text-muted leading-[1.55]">
              {c.d}
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
