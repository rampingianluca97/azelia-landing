/**
 * AZELIA STUDIO — Impact Bridge
 * Appears immediately after Hero. One punchy statement + first CTA.
 * Parchment bg, large serif statement, then the full offer card.
 */

import { openCalendlyPopup } from "@/hooks/useCalendly";

export default function ImpactBridge() {
  return (
    <section
      style={{
        backgroundColor: "var(--az-parchment)",
        padding: "5rem 0 4rem",
        borderTop: "none",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        {/* Punchy statement */}
        <div className="az-fade-up" style={{ marginBottom: "3rem" }}>
          <h2
            className="az-display"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
              color: "var(--az-ink)",
              lineHeight: 1.15,
              maxWidth: "700px",
              margin: "0 auto 1.25rem",
            }}
          >
            The right clients are already searching for someone like you.
            <br />
            <em style={{ color: "var(--az-sage)", fontStyle: "italic" }}>
              Give them somewhere to land.
            </em>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "var(--az-muted-text)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A free strategy call takes 30 minutes. <strong style={{ color: "var(--az-ink)" }}>No commitment, no pressure</strong> just a clear picture of what your site needs to start bringing in enquiries.
          </p>
        </div>

        {/* Inline CTA — centred, before the full offer card */}
        <div className="az-fade-up" style={{ display: "flex", justifyContent: "center", marginBottom: "0" }}>
          <a
            href="#" onClick={openCalendlyPopup}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--az-olive)",
              color: "#FDFAF4",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "1.05rem 2.5rem",
              borderRadius: "2px",
              textDecoration: "none",
              transition: "background-color 0.2s ease, transform 0.16s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--az-ink)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--az-olive)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Book Your Free&nbsp;Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
