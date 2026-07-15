export default function IocTable() {
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
            padding: "13px 16px",
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
            Extracted IOCs
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#76849E",
            }}
          >
            128 total
          </span>
        </div>

        {/* column headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "78px 1fr 84px",
            padding: "9px 16px",
            borderBottom: "1px solid #1A2334",
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            color: "#5E6B84",
          }}
        >
          <span>Type</span>
          <span>Indicator</span>
          <span style={{ textAlign: "right" as const }}>Status</span>
        </div>

        {/* Row 1: hash / blocked */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "78px 1fr 84px",
            alignItems: "center",
            padding: "11px 16px",
            borderBottom: "1px solid #141D2B",
          }}
        >
          <span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                color: "#8C7BFF",
                background: "rgba(140,123,255,0.12)",
                padding: "2px 7px",
                borderRadius: 5,
              }}
            >
              hash
            </span>
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              color: "#C7D0E2",
            }}
          >
            a3f9c1…e21c
          </span>
          <span style={{ textAlign: "right" as const }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                color: "#FF6B82",
                background: "rgba(255,59,92,0.1)",
                padding: "2px 7px",
                borderRadius: 5,
              }}
            >
              blocked
            </span>
          </span>
        </div>

        {/* Row 2: ip / watch */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "78px 1fr 84px",
            alignItems: "center",
            padding: "11px 16px",
            borderBottom: "1px solid #141D2B",
          }}
        >
          <span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                color: "#20DDC9",
                background: "rgba(32,221,201,0.1)",
                padding: "2px 7px",
                borderRadius: 5,
              }}
            >
              ip
            </span>
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              color: "#C7D0E2",
            }}
          >
            185.12.4.9
          </span>
          <span style={{ textAlign: "right" as const }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                color: "#FFC53D",
                background: "rgba(255,197,61,0.1)",
                padding: "2px 7px",
                borderRadius: 5,
              }}
            >
              watch
            </span>
          </span>
        </div>

        {/* Row 3: domain / blocked */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "78px 1fr 84px",
            alignItems: "center",
            padding: "11px 16px",
            borderBottom: "1px solid #141D2B",
          }}
        >
          <span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                color: "#FF8A3D",
                background: "rgba(255,138,61,0.1)",
                padding: "2px 7px",
                borderRadius: 5,
              }}
            >
              domain
            </span>
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              color: "#C7D0E2",
            }}
          >
            evil-c2.net
          </span>
          <span style={{ textAlign: "right" as const }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                color: "#FF6B82",
                background: "rgba(255,59,92,0.1)",
                padding: "2px 7px",
                borderRadius: 5,
              }}
            >
              blocked
            </span>
          </span>
        </div>

        {/* Row 4: url / watch */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "78px 1fr 84px",
            alignItems: "center",
            padding: "11px 16px",
          }}
        >
          <span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                color: "#4D8DF7",
                background: "rgba(77,141,247,0.1)",
                padding: "2px 7px",
                borderRadius: 5,
              }}
            >
              url
            </span>
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              color: "#C7D0E2",
            }}
          >
            hxxp://evil-c2…
          </span>
          <span style={{ textAlign: "right" as const }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                color: "#FFC53D",
                background: "rgba(255,197,61,0.1)",
                padding: "2px 7px",
                borderRadius: 5,
              }}
            >
              watch
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
