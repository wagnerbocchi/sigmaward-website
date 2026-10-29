import CheckBullet from "@/components/ui/CheckBullet";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import SectionShell from "@/components/ui/SectionShell";
import PlatformShot from "@/components/mocks/PlatformShot";
import type { Dictionary } from "@/lib/i18n";

export default function NocSoc({ dict }: { dict: Dictionary }) {
  const noc = dict.nocSoc;

  return (
    <SectionShell bg="bg" topBorder className="py-[94px]" label={noc.eyebrow}>
      <div
        className="grid items-center [grid-template-columns:1fr_0.95fr] gap-[60px] max-[900px]:grid-cols-1 max-[900px]:gap-10"
      >
        {/* Left: copy + bullets */}
        <div>
          <div className="mb-4">
            <EyebrowLabel color="violet">{noc.eyebrow}</EyebrowLabel>
          </div>
          <h2
            className="font-display font-semibold text-[36px] max-[900px]:text-[28px] leading-[1.12] tracking-[-0.02em] text-text-bright mb-4"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            {noc.title}
          </h2>
          <p
            className="text-[16.5px] text-text-body leading-[1.62] mb-[26px]"
            style={{ maxWidth: 470 }}
          >
            {noc.body}
          </p>
          <div>
            {noc.bullets.map((b, i) => (
              <CheckBullet key={i} color="violet">
                {b}
              </CheckBullet>
            ))}
          </div>
        </div>

        {/* Right: real screenshot (NOC monitoring) */}
        <div className="relative">
          <PlatformShot
            src="/screenshots/monitoring.svg"
            alt="Sigmaward — monitoramento NOC: saúde da frota, métricas de host e triggers"
          />
        </div>
      </div>
    </SectionShell>
  );
}
