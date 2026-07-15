import Icon from "@/components/ui/Icon";

export default function DashboardMock() {
  return (
    <div style={{ position: "relative" }}>
      {/* glow backdrop */}
      <div
        style={{
          position: "absolute",
          inset: "-12% -8% -18% -8%",
          background:
            "radial-gradient(closest-side,rgba(32,221,201,0.12),transparent)",
          filter: "blur(20px)",
        }}
      />
      {/* browser frame */}
      <div
        style={{
          position: "relative",
          border: "1px solid #283650",
          borderRadius: 14,
          overflow: "hidden",
          background: "#0B111E",
          boxShadow:
            "0 40px 90px -40px rgba(0,0,0,0.9),0 0 0 1px rgba(255,255,255,0.03)",
        }}
      >
        {/* title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "11px 14px",
            background: "#0C1322",
            borderBottom: "1px solid #1A2334",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#FF5F57",
            }}
          />
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#FEBC2E",
            }}
          />
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#28C840",
            }}
          />
          {/* address bar */}
          <div
            style={{
              marginLeft: 10,
              height: 21,
              flex: 1,
              maxWidth: 230,
              borderRadius: 6,
              background: "#0A0F1A",
              border: "1px solid #243049",
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#5E6B84",
            }}
          >
            <span style={{ color: "#34D27A", marginRight: 6 }}>&#9679;</span>
            app.sigmaward.com
          </div>
        </div>

        {/* content area */}
        <div style={{ display: "flex", height: 330 }}>
          {/* left icon sidebar */}
          <div
            style={{
              width: 52,
              flexShrink: 0,
              background: "#0A0F1A",
              borderRight: "1px solid #1A2334",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "14px 0",
              gap: 16,
            }}
          >
            {/* Sigma logo */}
            <div style={{ width: 22, height: 22 }}>
              <svg
                viewBox="0 0 100 100"
                width="100%"
                height="100%"
                style={{ display: "block" }}
                aria-hidden="true"
              >
                <polyline
                  points="75,24 27,24 53,50 27,76 75,76"
                  fill="none"
                  stroke="#20DDC9"
                  strokeWidth="13"
                  strokeLinejoin="miter"
                  strokeLinecap="square"
                />
              </svg>
            </div>
            {/* grid icon - active */}
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 7,
                background: "rgba(32,221,201,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#20DDC9",
              }}
            >
              <Icon name="grid" size={14} strokeWidth={1.9} />
            </div>
            {/* target icon */}
            <div style={{ color: "#4A576E" }}>
              <Icon name="target" size={15} strokeWidth={1.8} />
            </div>
            {/* folder icon */}
            <div style={{ color: "#4A576E" }}>
              <Icon name="folder" size={15} strokeWidth={1.8} />
            </div>
            {/* dot-circle icon */}
            <div style={{ color: "#4A576E" }}>
              <Icon name="dot-circle" size={15} strokeWidth={1.8} />
            </div>
          </div>

          {/* main panel */}
          <div
            style={{
              flex: 1,
              padding: "15px 17px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              overflow: "hidden",
            }}
          >
            {/* header row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#F2F6FC",
                }}
              >
                Threat Overview
              </span>
              {/* LIVE pulse dot */}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "var(--font-mono)",
                  fontSize: 9.5,
                  color: "#34D27A",
                }}
              >
                <span style={{ position: "relative", width: 6, height: 6 }}>
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      background: "#34D27A",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      background: "#34D27A",
                      animation: "sw-pulse 2s ease-out infinite",
                    }}
                  />
                </span>
                LIVE
              </span>
            </div>

            {/* stat cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 9,
              }}
            >
              <div
                style={{
                  background: "#101826",
                  border: "1px solid #243049",
                  borderRadius: 9,
                  padding: "10px 11px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 8,
                    letterSpacing: "0.1em",
                    color: "#76849E",
                    textTransform: "uppercase",
                    marginBottom: 5,
                  }}
                >
                  Events/24h
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 17,
                    color: "#F2F6FC",
                  }}
                >
                  4.2M
                </div>
              </div>
              <div
                style={{
                  background: "#101826",
                  border: "1px solid #243049",
                  borderRadius: 9,
                  padding: "10px 11px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 8,
                    letterSpacing: "0.1em",
                    color: "#76849E",
                    textTransform: "uppercase",
                    marginBottom: 5,
                  }}
                >
                  Findings
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 17,
                    color: "#F2F6FC",
                  }}
                >
                  318
                </div>
              </div>
              <div
                style={{
                  background: "#101826",
                  border: "1px solid #243049",
                  borderRadius: 9,
                  padding: "10px 11px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 8,
                    letterSpacing: "0.1em",
                    color: "#76849E",
                    textTransform: "uppercase",
                    marginBottom: 5,
                  }}
                >
                  Cases
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 17,
                    color: "#FF8A3D",
                  }}
                >
                  7
                </div>
              </div>
            </div>

            {/* alert rows */}
            <div
              style={{
                background: "#101826",
                border: "1px solid #243049",
                borderRadius: 9,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "9px 11px",
                  borderBottom: "1px solid #1A2334",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 8,
                    fontWeight: 700,
                    color: "#0A0F1A",
                    background: "#FF3B5C",
                    padding: "2px 6px",
                    borderRadius: 4,
                  }}
                >
                  CRIT
                </span>
                <span style={{ flex: 1, fontSize: 11.5, color: "#E6ECF7" }}>
                  LSASS memory access
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    color: "#76849E",
                  }}
                >
                  DC-02
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "9px 11px",
                  borderBottom: "1px solid #1A2334",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 8,
                    fontWeight: 700,
                    color: "#0A0F1A",
                    background: "#FF8A3D",
                    padding: "2px 6px",
                    borderRadius: 4,
                  }}
                >
                  HIGH
                </span>
                <span style={{ flex: 1, fontSize: 11.5, color: "#E6ECF7" }}>
                  Encoded PowerShell exec
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    color: "#76849E",
                  }}
                >
                  LT-118
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "9px 11px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 8,
                    fontWeight: 700,
                    color: "#0A0F1A",
                    background: "#FFC53D",
                    padding: "2px 6px",
                    borderRadius: 4,
                  }}
                >
                  MED
                </span>
                <span style={{ flex: 1, fontSize: 11.5, color: "#E6ECF7" }}>
                  Impossible travel login
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    color: "#76849E",
                  }}
                >
                  azure-ad
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
