/**
 * AZELIA STUDIO — Mini CTA Card (reusable, repeated throughout page)
 * Appears after Shift section, after ForWho, and in Closing area.
 * Quiet Luxury Editorial: cream bg, sage border, Signature offer prominent,
 * Showcase card small and secondary.
 */

import { openCalendlyPopup } from "@/hooks/useCalendly";

interface MiniCTACardProps {
  variant?: "light" | "dark";
}

export default function MiniCTACard({ variant = "light" }: MiniCTACardProps) {
  const bg = variant === "dark" ? "var(--az-olive)" : "var(--az-cream)";
  const border = variant === "dark" ? "rgba(168, 184, 154, 0.2)" : "rgba(122, 140, 110, 0.2)";
  const headingColor = variant === "dark" ? "var(--az-cream)" : "var(--az-ink)";
  const mutedColor = variant === "dark" ? "rgba(253,250,244,0.6)" : "var(--az-muted-text)";
  const labelColor = variant === "dark" ? "var(--az-sage-light)" : "var(--az-sage)";

  return (
    <section
      style={{
        backgroundColor: bg,
        padding: "5rem 0",
        borderTop: `1px solid ${border}`,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Header */}
        <div className="az-fade-up" style={{ marginBottom: "2.5rem" }}>
          <div className="az-label" style={{ color: labelColor, marginBottom: "0.875rem" }}>
            The offer
          </div>
          <h2
            className="az-display"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: headingColor,
              lineHeight: 1.1,
            }}
          >
            Choose where to start.
          </h2>
        </div>

        {/* Cards — Signature dominant, Showcase secondary */}
        <div
          className="mini-cta-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
            alignItems: "start",
          }}
        >
          {/* Signature — DOMINANT */}
          <div
            className="az-fade-up"
            style={{
              backgroundColor: "var(--az-cream)",
              border: "2px solid var(--az-sage)",
              borderRadius: "3px",
              padding: "2rem",
              boxShadow: "0 8px 40px rgba(74, 82, 64, 0.12)",
              order: 1,
            }}
          >
            {/* Badge row */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <div
                style={{
                  backgroundColor: "var(--az-gold)",
                  color: "var(--az-ink)",
                  padding: "0.25rem 0.85rem",
                  borderRadius: "2px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Most popular
              </div>
              <div
                style={{
                  backgroundColor: "rgba(181, 97, 58, 0.1)",
                  color: "var(--az-terracotta)",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "2px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                }}
              >
                4 slots left this month
              </div>
            </div>

            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "1.6rem",
                color: "var(--az-ink)",
                marginBottom: "0.25rem",
              }}
            >
              Signature Website
            </div>

            {/* Price */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", margin: "1rem 0 0.25rem", flexWrap: "wrap" }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "3rem",
                  color: "var(--az-ink)",
                  lineHeight: 1,
                }}
              >
                £597
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  color: "var(--az-muted-text)",
                  textDecoration: "line-through",
                  textDecorationColor: "var(--az-terracotta)",
                }}
              >
                £1,200
              </div>
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8rem",
                color: "var(--az-sage)",
                fontWeight: 500,
                marginBottom: "1.5rem",
              }}
            >
              or £149 deposit, £448 on completion · you save £603
            </div>

            {/* Key includes — condensed */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
              {[
                "Up to 5+ pages, designed to convert",
                "Brand story, portfolio, client journey, trust section, FAQ",
                "Google Business Profile + 60 days aftercare",
                "Bonus within 24h: Calendly + Chatbot (worth £444)",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: "var(--az-sage)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "var(--az-ink)", lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#" onClick={openCalendlyPopup}
              target="_blank"
              rel="noopener noreferrer"
              className="az-btn-primary"
              style={{ marginBottom: "1rem" }}
            >
              Book your free strategy call
            </a>

            {/* Guarantee */}
            <div
              style={{
                display: "flex",
                gap: "0.625rem",
                alignItems: "flex-start",
                padding: "0.875rem 1rem",
                backgroundColor: "rgba(122, 140, 110, 0.07)",
                borderRadius: "2px",
                border: "1px solid rgba(122, 140, 110, 0.18)",
              }}
            >
              <span style={{ fontSize: "1rem", flexShrink: 0 }}>🛡️</span>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "var(--az-muted-text)", lineHeight: 1.5 }}>
                £149 deposit. Full refund if you don't love the first draft.
              </p>
            </div>
          </div>

          {/* Showcase — SECONDARY, visually smaller */}
          <div
            className="az-fade-up"
            style={{
              backgroundColor: "rgba(253, 250, 244, 0.6)",
              border: "1px solid rgba(122, 140, 110, 0.15)",
              borderRadius: "3px",
              padding: "1.5rem",
              opacity: 0.85,
              order: 2,
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "1.25rem",
                color: "var(--az-ink)",
                marginBottom: "0.25rem",
              }}
            >
              Showcase
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.82rem",
                color: "var(--az-muted-text)",
                marginBottom: "1rem",
              }}
            >
              One-page presence to get you online fast.
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "2rem",
                color: "var(--az-ink)",
                marginBottom: "1.25rem",
              }}
            >
              £297
            </div>
            <a
              href="#" onClick={openCalendlyPopup}
              target="_blank"
              rel="noopener noreferrer"
              className="az-btn-outline"
              style={{ fontSize: "0.82rem", padding: "0.7rem 1.5rem" }}
            >
              Get started
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 760px) {
          .mini-cta-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            align-items: start !important;
          }
          .mini-cta-grid > div:first-child { order: 1 !important; }
          .mini-cta-grid > div:last-child { order: 2 !important; }
        }
      `}</style>
    </section>
  );
}
