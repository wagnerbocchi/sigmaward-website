import Icon from "@/components/ui/Icon";

function ArrowDown() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "4px 0" }}>
      <svg
        width="14"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3A4A66"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 4v16M6 14l6 6 6-6" />
      </svg>
    </div>
  );
}

export default function PlaybookFlow() {
  return (
    <div style={{ position: "relative", order: 2 }}>
      {/* glow backdrop */}
      <div
        style={{
          position: "absolute",
          inset: "-8% -6%",
          background:
            "radial-gradient(closest-side,rgba(140,123,255,0.12),transparent)",
          filter: "blur(20px)",
        }}
      />
      <div
        style={{
          position: "relative",
          background: "#0B111E",
          border: "1px solid #283650",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 30px 70px -36px rgba(0,0,0,0.85)",
        }}
      >
        {/* header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 15px",
            borderBottom: "1px solid #1A2334",
            background: "#0C1322",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 13,
              color: "#F2F6FC",
            }}
          >
            Playbook · Auto-respond
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9.5,
              color: "#34D27A",
              background: "rgba(52,210,122,0.1)",
              padding: "3px 8px",
              borderRadius: 5,
            }}
          >
            running
          </span>
        </div>

        {/* nodes */}
        <div style={{ padding: "18px 20px" }}>
          {/* Trigger */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#101826",
              border: "1px solid #2A3852",
              borderRadius: 11,
              padding: "12px 14px",
            }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: "rgba(32,221,201,0.12)",
                color: "#20DDC9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon name="zap" size={15} strokeWidth={1.9} />
            </span>
            <div>
              <div
                style={{ fontSize: 12.5, fontWeight: 600, color: "#F2F6FC" }}
              >
                Trigger
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "#76849E",
                }}
              >
                Critical finding raised
              </div>
            </div>
          </div>

          <ArrowDown />

          {/* Enrich */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#101826",
              border: "1px solid #243049",
              borderRadius: 11,
              padding: "12px 14px",
            }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: "rgba(32,221,201,0.12)",
                color: "#20DDC9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon name="search" size={15} strokeWidth={1.9} />
            </span>
            <div>
              <div
                style={{ fontSize: 12.5, fontWeight: 600, color: "#F2F6FC" }}
              >
                Enrich
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "#76849E",
                }}
              >
                Extract &amp; look up IOCs
              </div>
            </div>
          </div>

          <ArrowDown />

          {/* Decide */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#101826",
              border: "1px solid #243049",
              borderRadius: 11,
              padding: "12px 14px",
            }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: "rgba(140,123,255,0.14)",
                color: "#8C7BFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon name="git-branch" size={15} strokeWidth={1.9} />
            </span>
            <div>
              <div
                style={{ fontSize: 12.5, fontWeight: 600, color: "#F2F6FC" }}
              >
                Decide
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "#76849E",
                }}
              >
                Severity ≥ High?
              </div>
            </div>
          </div>

          <ArrowDown />

          {/* Contain — green tinted */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(52,210,122,0.06)",
              border: "1px solid rgba(52,210,122,0.28)",
              borderRadius: 11,
              padding: "12px 14px",
            }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: "rgba(52,210,122,0.14)",
                color: "#34D27A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon name="shield" size={15} strokeWidth={1.9} />
            </span>
            <div>
              <div
                style={{ fontSize: 12.5, fontWeight: 600, color: "#F2F6FC" }}
              >
                Contain
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "#76849E",
                }}
              >
                Isolate host · notify on-call
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
