import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Icon from "@/components/ui/Icon";
import SectionShell from "@/components/ui/SectionShell";
import { Dictionary } from "@/lib/i18n";

export default function Compliance({ dict }: { dict: Dictionary }) {
  return (
    <SectionShell bg="bg-alt" topBorder className="py-[90px]" label="Compliance">
      <div className="text-center" style={{ maxWidth: 860, margin: "0 auto" }}>
        <div className="mb-[14px]">
          <EyebrowLabel color="brand">{dict.compliance.eyebrow}</EyebrowLabel>
        </div>
        <h2
          className="text-text-bright"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 38,
            letterSpacing: "-0.02em",
            margin: "0 0 14px",
            textWrap: "balance",
          }}
        >
          {dict.compliance.title}
        </h2>
        <p
          className="text-text-body"
          style={{
            fontSize: 16.5,
            lineHeight: 1.6,
            margin: "0 auto 32px",
            maxWidth: 600,
          }}
        >
          {dict.compliance.body}
        </p>

        {/* Badge pills */}
        <div className="flex items-center justify-center flex-wrap" style={{ gap: 14 }}>
          {dict.compliance.badges.map((b, i) => (
            <div
              key={i}
              className="inline-flex items-center bg-surface border border-border rounded-[11px]"
              style={{ gap: 9, padding: "12px 18px" }}
            >
              <span className="text-brand">
                <Icon name="shield-check" size={15} strokeWidth={1.9} />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#E6ECF7",
                }}
              >
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
