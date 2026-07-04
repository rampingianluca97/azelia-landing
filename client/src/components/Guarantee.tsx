/**
 * AZELIA STUDIO — Guarantee Section
 * Bold keywords added.
 */

export default function Guarantee() {
  return (
    <section
      style={{
        backgroundColor: "var(--az-cream)",
        padding: "5rem 0",
        borderTop: "1px solid rgba(122, 140, 110, 0.2)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="az-fade-up" style={{ maxWidth: "640px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "2.5rem" }}>🛡️</span>
            <div className="az-label" style={{ color: "var(--az-sage)" }}>Risk reversal</div>
          </div>

          <h2
            className="az-display"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--az-ink)", marginBottom: "1.5rem" }}
          >
            You risk nothing to start.
          </h2>

          <p className="az-body" style={{ fontSize: "1.05rem", color: "var(--az-ink)", marginBottom: "1rem", lineHeight: 1.75 }}>
            You only pay a <strong>£149 deposit</strong> to begin. If you don't love your first design draft, you get that <strong>deposit back in full</strong>. No awkward conversations, no chasing.
          </p>
          <p className="az-body" style={{ fontSize: "1.05rem", color: "var(--az-ink)", lineHeight: 1.75 }}>
            The only way this works is if you're <strong>genuinely happy</strong>, so the risk is on me, not you.
          </p>
        </div>
      </div>
    </section>
  );
}
