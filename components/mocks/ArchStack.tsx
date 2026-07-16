import Logo from "@/components/ui/Logo";

function StackArrow() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "7px 0" }}>
      <svg
        width="15"
        height="17"
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

export default function ArchStack() {
  return (
    <div>
      {/* Sources */}
      <div
        style={{
          background: "#101826",
          border: "1px solid #243049",
          borderRadius: 12,
          padding: "15px 18px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9.5,
            letterSpacing: "0.14em",
            color: "#5E6B84",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          Sources
        </div>
        <div style={{ fontSize: 13, color: "#C7D0E2" }}>
          Endpoints · Cloud · Identity · Network
        </div>
      </div>

      <StackArrow />

      {/* Collection — Sigmaward agents */}
      <div
        style={{
          background: "#101826",
          border: "1px solid #2A3852",
          borderRadius: 12,
          padding: "15px 18px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9.5,
            letterSpacing: "0.14em",
            color: "#8C7BFF",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          Collection
        </div>
        <div style={{ fontSize: 13, color: "#C7D0E2" }}>
          Sigmaward agents · multi-OS
        </div>
      </div>

      <StackArrow />

      {/* Sigmaward — cyan-highlighted */}
      <div
        style={{
          background: "rgba(32,221,201,0.06)",
          border: "1px solid rgba(32,221,201,0.32)",
          borderRadius: 12,
          padding: 18,
          textAlign: "center",
          boxShadow:
            "0 0 0 1px rgba(32,221,201,0.06),0 16px 40px -24px rgba(32,221,201,0.5)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginBottom: 6,
          }}
        >
          {/* Σ mark via Logo component */}
          <div style={{ color: "#20DDC9", width: 16, height: 16 }}>
            <Logo size={16} mono />
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9.5,
              letterSpacing: "0.14em",
              color: "#20DDC9",
              textTransform: "uppercase",
            }}
          >
            Sigmaward
          </span>
        </div>
        <div style={{ fontSize: 13, color: "#E6ECF7", fontWeight: 500 }}>
          Sigma detection · SOAR · Cases · Threat intel
        </div>
      </div>

      <StackArrow />

      {/* Response */}
      <div
        style={{
          background: "#101826",
          border: "1px solid #243049",
          borderRadius: 12,
          padding: "15px 18px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9.5,
            letterSpacing: "0.14em",
            color: "#5E6B84",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          Response
        </div>
        <div style={{ fontSize: 13, color: "#C7D0E2" }}>
          Playbooks · Integrations · Reports
        </div>
      </div>
    </div>
  );
}
