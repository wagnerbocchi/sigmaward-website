import CheckBullet from "@/components/ui/CheckBullet";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import SectionShell from "@/components/ui/SectionShell";
import PlatformShot from "@/components/mocks/PlatformShot";
import { Dictionary } from "@/lib/i18n";

export default function Mssp({ dict }: { dict: Dictionary }) {
  return (
    <SectionShell bg="bg" topBorder className="py-[94px]" label="MSSP">
      <div
        className="grid items-center [grid-template-columns:1fr_0.92fr] gap-[60px] max-[900px]:grid-cols-1 max-[900px]:gap-10"
      >
        {/* Left: copy */}
        <div>
          <div className="mb-4">
            <EyebrowLabel color="violet">{dict.mssp.eyebrow}</EyebrowLabel>
          </div>
          <h2
            className="text-text-bright text-[36px] max-[900px]:text-[28px]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              margin: "0 0 16px",
              textWrap: "balance",
            }}
          >
            {dict.mssp.title}
          </h2>
          <p
            className="text-text-body"
            style={{
              fontSize: 16.5,
              lineHeight: 1.62,
              margin: "0 0 26px",
              maxWidth: 470,
            }}
          >
            {dict.mssp.body}
          </p>
          <div>
            {dict.mssp.bullets.map((b, i) => (
              <CheckBullet key={i} color="violet">
                {b}
              </CheckBullet>
            ))}
          </div>
        </div>

        {/* Right: screenshot real da plataforma (portfólio MSSP) */}
        <div className="relative">
          <PlatformShot
            src="/screenshots/mssp.png"
            alt="Sigmaward — console MSSP com métricas globais e portfólio cross-tenant de clientes"
          />
        </div>
      </div>
    </SectionShell>
  );
}
