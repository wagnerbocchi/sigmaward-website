import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Icon from "@/components/ui/Icon";
import SectionShell from "@/components/ui/SectionShell";
import { Dictionary } from "@/lib/i18n";

export default function Problem({ dict }: { dict: Dictionary }) {
  return (
    <SectionShell bg="bg-alt" topBorder label="Problem">
      {/* Header block */}
      <div style={{ maxWidth: 780, marginBottom: 44 }}>
        <div className="mb-[16px]">
          <EyebrowLabel color="orange">{dict.problem.eyebrow}</EyebrowLabel>
        </div>
        <h2
          className="text-text-bright"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 39,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            margin: "0 0 18px",
            textWrap: "balance",
          }}
        >
          {dict.problem.title}
        </h2>
        <p
          className="text-text-body"
          style={{ fontSize: 17.5, lineHeight: 1.6, margin: 0 }}
        >
          {dict.problem.body}
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[18px]">
        {dict.problem.points.map((pp, i) => (
          <div
            key={i}
            className="bg-surface border border-border rounded-[16px]"
            style={{ padding: "24px 26px" }}
          >
            {/* Icon tile */}
            <div
              className="flex items-center justify-center mb-[15px]"
              style={{
                width: 36,
                height: 36,
                borderRadius: 9,
                background: "rgba(255,138,61,0.1)",
                border: "1px solid rgba(255,138,61,0.22)",
                color: "#FF8A3D",
              }}
            >
              <Icon name="alert-triangle" size={17} strokeWidth={1.9} />
            </div>

            {/* Card title */}
            <div
              className="text-text-bright mb-[8px]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 17.5,
              }}
            >
              {pp.t}
            </div>

            {/* Card body */}
            <div
              className="text-text-muted"
              style={{ fontSize: 14, lineHeight: 1.55 }}
            >
              {pp.d}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
