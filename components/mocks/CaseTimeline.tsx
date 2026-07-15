export default function CaseTimeline() {
  return (
    <div style={{ position: "relative" }}>
      {/* glow backdrop */}
      <div
        style={{
          position: "absolute",
          inset: "-8% -6%",
          background:
            "radial-gradient(closest-side,rgba(32,221,201,0.1),transparent)",
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
            padding: "14px 16px",
            borderBottom: "1px solid #1A2334",
            background: "#0C1322",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "#76849E",
              }}
            >
              CASE-1042
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                fontWeight: 700,
                color: "#0A0F1A",
                background: "#FF8A3D",
                padding: "3px 7px",
                borderRadius: 5,
              }}
            >
              HIGH
            </span>
          </div>
          {/* JD avatar */}
          <span
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: "#16202F",
              border: "1px solid #2A3852",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              fontWeight: 700,
              color: "#A6B3CA",
            }}
          >
            JD
          </span>
        </div>

        {/* body */}
        <div style={{ padding: "16px 18px" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 15,
              color: "#F2F6FC",
              marginBottom: 18,
            }}
          >
            Encoded PowerShell on HR-LT-118
          </div>

          {/* timeline steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {/* Step 1: Finding detected — cyan node */}
            <div style={{ display: "flex", gap: 13 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: "#20DDC9",
                    border: "2px solid #0B111E",
                    boxShadow: "0 0 0 2px #20DDC9",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{ width: 2, flex: 1, background: "#243049" }}
                />
              </div>
              <div style={{ paddingBottom: 16 }}>
                <div
                  style={{ fontSize: 13, color: "#E6ECF7", fontWeight: 500 }}
                >
                  Finding detected
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "#76849E",
                  }}
                >
                  09:41:02 · Sigma engine
                </div>
              </div>
            </div>

            {/* Step 2: IOCs enriched */}
            <div style={{ display: "flex", gap: 13 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: "#16202F",
                    border: "2px solid #3A4A66",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{ width: 2, flex: 1, background: "#243049" }}
                />
              </div>
              <div style={{ paddingBottom: 16 }}>
                <div
                  style={{ fontSize: 13, color: "#E6ECF7", fontWeight: 500 }}
                >
                  IOCs enriched
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "#76849E",
                  }}
                >
                  09:41:04 · 3 indicators
                </div>
              </div>
            </div>

            {/* Step 3: Promoted to case */}
            <div style={{ display: "flex", gap: 13 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: "#16202F",
                    border: "2px solid #3A4A66",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{ width: 2, flex: 1, background: "#243049" }}
                />
              </div>
              <div style={{ paddingBottom: 16 }}>
                <div
                  style={{ fontSize: 13, color: "#E6ECF7", fontWeight: 500 }}
                >
                  Promoted to case
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "#76849E",
                  }}
                >
                  09:41:05 · auto-rule
                </div>
              </div>
            </div>

            {/* Step 4: Host contained — green node, no connector below */}
            <div style={{ display: "flex", gap: 13 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: "#34D27A",
                    border: "2px solid #0B111E",
                    boxShadow: "0 0 0 2px #34D27A",
                    flexShrink: 0,
                  }}
                />
              </div>
              <div>
                <div
                  style={{ fontSize: 13, color: "#E6ECF7", fontWeight: 500 }}
                >
                  Host contained
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "#34D27A",
                  }}
                >
                  09:41:12 · playbook
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
