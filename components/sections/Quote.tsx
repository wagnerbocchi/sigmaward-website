import SectionShell from "@/components/ui/SectionShell";
import { Dictionary } from "@/lib/i18n";

export default function Quote({ dict }: { dict: Dictionary }) {
  return (
    <SectionShell bg="bg" topBorder className="py-[92px]" label="Quote">
      <div className="text-center" style={{ maxWidth: 840, margin: "0 auto" }}>
        {/* Opening quote glyph */}
        <div
          aria-hidden="true"
          className="text-brand"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 64,
            lineHeight: 0.4,
            height: 34,
            opacity: 0.85,
          }}
        >
          &ldquo;
        </div>

        {/* Quote text */}
        <p
          className="text-text-bright"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 29,
            lineHeight: 1.4,
            letterSpacing: "-0.012em",
            margin: "0 0 26px",
            textWrap: "balance",
          }}
        >
          {dict.quote.text}
        </p>

        {/* Author block */}
        <div className="flex items-center justify-center" style={{ gap: 12 }}>
          <span
            aria-hidden="true"
            className="flex items-center justify-center"
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#16202F,#0C1322)",
              border: "1px solid #2A3852",
              color: "#76849E",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            &#9679;
          </span>
          <div className="text-left">
            <div
              style={{ fontWeight: 700, color: "#E6ECF7", fontSize: 14.5 }}
            >
              {dict.quote.author}
            </div>
            <div style={{ fontSize: 12.5, color: "#76849E" }}>
              {dict.quote.role}
            </div>
          </div>
        </div>

        {/* Disclaimer note */}
        <div
          className="text-disclaimer"
          style={{
            marginTop: 16,
            fontSize: 10.5,
            fontStyle: "italic",
          }}
        >
          {dict.quote.note}
        </div>
      </div>
    </SectionShell>
  );
}
