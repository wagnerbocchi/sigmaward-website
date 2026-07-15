export default function SigmaRuleCard() {
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
            Sigma Rule
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9.5,
              color: "#20DDC9",
              background: "rgba(32,221,201,0.1)",
              padding: "3px 8px",
              borderRadius: 5,
            }}
          >
            active
          </span>
        </div>

        {/* YAML body */}
        <div
          style={{
            padding: "16px 17px",
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            lineHeight: 1.85,
          }}
        >
          <div>
            <span style={{ color: "#7C8AA6" }}>title:</span>{" "}
            <span style={{ color: "#E6ECF7" }}>
              Suspicious Encoded PowerShell
            </span>
          </div>
          <div>
            <span style={{ color: "#7C8AA6" }}>logsource:</span>{" "}
            <span style={{ color: "#9FE9DF" }}>windows/process_creation</span>
          </div>
          <div>
            <span style={{ color: "#7C8AA6" }}>detection:</span>
          </div>
          <div style={{ paddingLeft: 16 }}>
            <span style={{ color: "#7C8AA6" }}>selection:</span>
          </div>
          <div style={{ paddingLeft: 32 }}>
            <span style={{ color: "#8C7BFF" }}>CommandLine|contains:</span>{" "}
            <span style={{ color: "#9FE9DF" }}>&apos;-enc&apos;</span>
          </div>
          <div style={{ paddingLeft: 16 }}>
            <span style={{ color: "#7C8AA6" }}>condition:</span>{" "}
            <span style={{ color: "#E6ECF7" }}>selection</span>
          </div>
          <div>
            <span style={{ color: "#7C8AA6" }}>level:</span>{" "}
            <span style={{ color: "#FF8A3D" }}>high</span>
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            padding: "13px 17px",
            borderTop: "1px solid #1A2334",
            background: "#0C1322",
          }}
        >
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
          <span
            style={{
              flex: 1,
              fontSize: 12.5,
              color: "#E6ECF7",
              fontWeight: 500,
            }}
          >
            Match · powershell.exe -enc …
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#8C7BFF",
            }}
          >
            T1059.001
          </span>
        </div>
      </div>
    </div>
  );
}
