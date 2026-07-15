export default function TenantsPanel() {
  return (
    <div style={{ position: "relative" }}>
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
            Tenants
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#34D27A",
            }}
          >
            6 active
          </span>
        </div>

        {/* Row: NORTHWIND */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "13px 16px",
            borderBottom: "1px solid #141D2B",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 12,
              color: "#8392AD",
              width: 88,
            }}
          >
            NORTHWIND
          </span>
          <span
            style={{
              flex: 1,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#76849E",
            }}
          >
            1.2M evt/day
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#34D27A",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#34D27A",
              }}
            />
            healthy
          </span>
        </div>

        {/* Row: VERTEX */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "13px 16px",
            borderBottom: "1px solid #141D2B",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 12,
              color: "#8392AD",
              width: 88,
            }}
          >
            VERTEX
          </span>
          <span
            style={{
              flex: 1,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#76849E",
            }}
          >
            840k evt/day
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#34D27A",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#34D27A",
              }}
            />
            healthy
          </span>
        </div>

        {/* Row: MERIDIAN — critical */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "13px 16px",
            borderBottom: "1px solid #141D2B",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 12,
              color: "#8392AD",
              width: 88,
            }}
          >
            MERIDIAN
          </span>
          <span
            style={{
              flex: 1,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#76849E",
            }}
          >
            2 open cases
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#FF6B82",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#FF3B5C",
              }}
            />
            critical
          </span>
        </div>

        {/* Row: QUANTLY */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "13px 16px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 12,
              color: "#8392AD",
              width: 88,
            }}
          >
            QUANTLY
          </span>
          <span
            style={{
              flex: 1,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#76849E",
            }}
          >
            410k evt/day
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#34D27A",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#34D27A",
              }}
            />
            healthy
          </span>
        </div>
      </div>
    </div>
  );
}
