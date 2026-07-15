import SectionShell from "@/components/ui/SectionShell";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import type { Dictionary } from "@/lib/i18n";

export default function Modules({ dict }: { dict: Dictionary }) {
  return (
    <SectionShell bg="bg" topBorder label="Modules">
      {/* Centered heading block */}
      <div className="text-center max-w-[640px] mx-auto mb-[46px]">
        <div className="mb-[14px]">
          <EyebrowLabel color="brand">{dict.platform.modulesHead.eyebrow}</EyebrowLabel>
        </div>
        <h2
          className="font-display font-semibold text-[38px] max-[640px]:text-[28px] leading-tight tracking-[-0.02em] text-text-bright"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          {dict.platform.modulesHead.title}
        </h2>
      </div>

      {/* 3×2 module grid */}
      <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[18px]">
        {dict.platform.modules.map((m, i) => (
          <Card key={i} hover className="p-[26px]">
            <div className="flex items-center gap-[11px] mb-[10px]">
              <span className="flex-shrink-0 w-[28px] h-[28px] rounded-[8px] bg-[rgba(32,221,201,0.1)] border border-[rgba(32,221,201,0.2)] flex items-center justify-center text-brand">
                <Icon name="check" size={14} strokeWidth={2.6} />
              </span>
              <div className="font-display font-semibold text-[17px] text-text-bright">
                {m.title}
              </div>
            </div>
            <div className="text-[14px] text-text-muted leading-[1.55]">{m.desc}</div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
