import SectionShell from "@/components/ui/SectionShell";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import CheckBullet from "@/components/ui/CheckBullet";
import ArchStack from "@/components/mocks/ArchStack";
import type { Dictionary } from "@/lib/i18n";

export default function Architecture({ dict }: { dict: Dictionary }) {
  const arch = dict.platform.arch;

  return (
    <SectionShell bg="bg" topBorder className="py-[94px]" label="Architecture">
      <div
        className="grid items-center [grid-template-columns:1fr_0.95fr] gap-[60px] max-[900px]:grid-cols-1 max-[900px]:gap-10"
      >
        {/* Left: copy + bullets */}
        <div>
          <div className="mb-4">
            <EyebrowLabel color="brand">{arch.eyebrow}</EyebrowLabel>
          </div>
          <h2
            className="font-display font-semibold text-[36px] max-[900px]:text-[28px] leading-[1.12] tracking-[-0.02em] text-text-bright mb-4"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            {arch.title}
          </h2>
          <p
            className="text-[16.5px] text-text-body leading-[1.62] mb-6"
            style={{ maxWidth: 460 }}
          >
            {arch.body}
          </p>
          <div>
            {arch.points.map((p, i) => (
              <CheckBullet key={i} color="brand">
                {p}
              </CheckBullet>
            ))}
          </div>
        </div>

        {/* Right: layered architecture stack */}
        <ArchStack />
      </div>
    </SectionShell>
  );
}
