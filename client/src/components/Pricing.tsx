/**
 * AZELIA STUDIO — Pricing Section (Full)
 * Signature card DOMINATES. Showcase is visually secondary/muted.
 * Quiet Luxury Editorial: parchment bg, gold badge, sage border on Signature.
 * Guarantee block below primary CTA inside the Signature card.
 */

import { openCalendlyPopup } from "@/hooks/useCalendly";

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        backgroundColor: "var(--az-parchment)",
        padding: "7rem 0 6rem",
        borderTop: "1px solid rgba(122, 140, 110, 0.2)",
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
        <div className="az-fade-up" style={{ marginBottom: "3.5rem" }}>
          <div className="az-label" style={{ color: "var(--az-sage)", marginBottom: "1.25rem" }}>
            Pricing
          </div>
          <h2
            className="az-display"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "var(--az-ink)",
              lineHeight: 1.1,
            }}
          >
            Choose where to start.
          </h2>
        </div>

        {/* Cards — Signature first and dominant */}
        <div
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          {/* Card 1 — Signature (DOMINANT, shown first on mobile too) */}
          <div
            className="az-fade-up az-pricing-signature"
            style={{ padding: "2.25rem", order: 1 }}
          >
            {/* Header row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "1rem",
                marginBottom: "0.35rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "1.75rem",
                  color: "var(--az-ink)",
                  letterSpacing: "0.02em",
                }}
              >
                Signature
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "var(--az-gold)",
                  color: "var(--az-ink)",
                  padding: "0.28rem 0.9rem",
                  borderRadius: "2px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}
              >
                Most popular
              </div>
            </div>

            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                color: "var(--az-muted-text)",
                marginBottom: "2rem",
                lineHeight: 1.6,
              }}
            >
              The complete, conversion-focused website for design-led businesses serious about more enquiries.
            </div>

            {/* Price */}
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.875rem", flexWrap: "wrap" }}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "3.5rem",
                    color: "var(--az-ink)",
                    lineHeight: 1,
                  }}
                >
                  £597
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.05rem",
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
                  color: "var(--az-muted-text)",
                  marginTop: "0.3rem",
                }}
              >
                One-time payment &nbsp;·&nbsp; or £149 deposit, £448 on completion
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  color: "var(--az-sage)",
                  fontWeight: 500,
                  marginTop: "0.3rem",
                }}
              >
                You save £603
              </div>
            </div>

            <div style={{ height: "1px", backgroundColor: "rgba(122, 140, 110, 0.2)", marginBottom: "1.5rem" }} />

            {/* Includes */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "1.5rem" }}>
              {[
                "Everything in Showcase, plus up to 5+ pages",
                "Brand story, portfolio, client journey, trust section, FAQ",
                "Google Business Profile setup",
                "Launch support + 60 days aftercare (2 changes/month)",
                "Total value: £2,435",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      backgroundColor: "var(--az-sage)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "var(--az-ink)", lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Bonus — editorial */}
            <div
              style={{
                borderLeft: "2px solid var(--az-gold)",
                paddingLeft: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  color: "var(--az-olive)",
                  marginBottom: "0.2rem",
                }}
              >
                Book within 24 hours of your call:
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "var(--az-muted-text)", lineHeight: 1.55 }}>
                Calendly integration + Chatbot Assistant included free, worth £444.
              </p>
            </div>

            {/* Primary CTA */}
            <a
              href="#" onClick={openCalendlyPopup}
              target="_blank"
              rel="noopener noreferrer"
              className="az-btn-primary"
              style={{ marginBottom: "1.5rem" }}
            >
              Book your free strategy call
            </a>

            {/* Guarantee — below CTA */}
            <div
              style={{
                backgroundColor: "rgba(122, 140, 110, 0.07)",
                border: "1px solid rgba(122, 140, 110, 0.2)",
                borderRadius: "2px",
                padding: "1.1rem 1.25rem",
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "1.1rem", flexShrink: 0, marginTop: "1px" }}>🛡️</span>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "var(--az-olive)", marginBottom: "0.25rem" }}>
                  Risk-free to start
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "var(--az-muted-text)", lineHeight: 1.55 }}>
                  £149 deposit to begin. Full refund if you don't love the first draft. No awkward conversations.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 — Showcase (SECONDARY — visually muted, smaller) */}
          <div
            className="az-fade-up"
            style={{
              backgroundColor: "rgba(253, 250, 244, 0.55)",
              border: "1px solid rgba(122, 140, 110, 0.15)",
              borderRadius: "3px",
              padding: "1.75rem",
              opacity: 0.82,
              order: 2,
              transitionDelay: "80ms",
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "1.35rem",
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
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              A clean one-page presence to get you online fast.
            </div>

            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "2.25rem",
                color: "var(--az-ink)",
                marginBottom: "0.25rem",
              }}
            >
              £297
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                color: "var(--az-muted-text)",
                marginBottom: "1.5rem",
              }}
            >
              One-time payment
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "1.75rem" }}>
              {[
                "One-page website",
                "Mobile-friendly design",
                "Clear offer and easy enquiry section",
                "Built around your existing brand",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      border: "1.5px solid rgba(122, 140, 110, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  >
                    <svg width="6" height="5" viewBox="0 0 6 5" fill="none">
                      <path d="M1 2.5L2.2 3.8L5 1" stroke="var(--az-sage)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "var(--az-muted-text)", lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#" onClick={openCalendlyPopup}
              target="_blank"
              rel="noopener noreferrer"
              className="az-btn-outline"
              style={{ fontSize: "0.85rem" }}
            >
              Get started
            </a>
          </div>
        </div>

        {/* Scarcity note */}
        <div
          className="az-fade-up"
          style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--az-terracotta)",
              flexShrink: 0,
            }}
          />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "var(--az-terracotta)", fontWeight: 500 }}>
            Only 4 Signature build slots available this month.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 760px) {
          .pricing-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
          .pricing-grid > div:first-child { order: 1 !important; }
          .pricing-grid > div:last-child { order: 2 !important; }
        }
      `}</style>
    </section>
  );
}
