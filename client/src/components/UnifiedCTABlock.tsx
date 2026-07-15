/**
 * AZELIA STUDIO — Unified CTA Block (v6)
 * TRUE EDGE-TO-EDGE on mobile: section has zero horizontal padding,
 * Signature card has no border-radius on mobile, fills 100vw.
 * No ⚡ emojis in banner.
 * Showcase secondary/muted.
 * Identical content across all 3 instances.
 */

import { openCalendlyPopup } from "@/hooks/useCalendly";
const BUY_NOW_URL = "https://buy.stripe.com/8x27sK1vq0Bm8GF8MtaZi00";
const SHOWCASE_BUY_URL = "https://buy.stripe.com/8x2bJ0ca483O1ed9QxaZi01";

interface Props {
  variant?: "light" | "full" | "dark";
}

const SIGNATURE_INCLUDES = [
  { text: "Custom website design & build (up to 5 pages, mobile-optimised)", value: "£1,000" },
  { text: "Conversion copy & messaging (done for you)", value: "£400" },
  { text: "Easy enquiry & booking setup (Calendly / enquiry integration)", value: "£97" },
  { text: "Google Business Profile setup", value: "£150" },
  { text: "Done-for-you launch + settling-in support", value: "£200" },
];

const SHOWCASE_INCLUDES = [
  "One-page website",
  "Mobile-friendly design",
  "Clear offer and easy enquiry section",
  "Built around your existing brand",
];

export default function UnifiedCTABlock({ variant = "light" }: Props) {
  const isDark = variant === "dark";
  const sectionBg = isDark ? "var(--az-olive)" : "var(--az-parchment)";
  const borderColor = isDark ? "rgba(168,184,154,0.15)" : "rgba(122,140,110,0.2)";
  const headingColor = isDark ? "#FDFAF4" : "var(--az-ink)";
  const labelColor = isDark ? "var(--az-sage-light)" : "var(--az-sage)";
  const mutedColor = isDark ? "rgba(253,250,244,0.6)" : "var(--az-muted-text)";

  return (
    <section
      id={variant === "full" ? "pricing" : undefined}
      style={{
        backgroundColor: sectionBg,
        paddingTop: "5rem",
        paddingBottom: "3rem",
        borderTop: `1px solid ${borderColor}`,
      }}
    >
      {/* Section header — keeps normal container padding */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          marginBottom: "2.5rem",
        }}
      >
        <div className="az-fade-up">
          <div className="az-label" style={{ color: labelColor, marginBottom: "1rem" }}>
            The offer
          </div>
          <h2
            className="az-display"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", color: headingColor, lineHeight: 1.05 }}
          >
            Choose where to start.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: mutedColor, marginTop: "0.75rem" }}>
            Both options include a <strong style={{ color: isDark ? "#FDFAF4" : "var(--az-ink)" }}>free strategy call</strong>. No pressure, no commitment.
          </p>
        </div>
      </div>

      {/* Cards — ZERO horizontal padding on mobile so cards go edge-to-edge */}
      <div
        className="unified-cta-outer"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          /* No padding here — cards fill full width on mobile */
        }}
      >
        <div
          className="unified-cta-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}
        >
          {/* ── SIGNATURE — DOMINANT, edge-to-edge on mobile ── */}
          <div
            className="az-fade-up signature-card"
            style={{
              backgroundColor: "#FDFAF4",
              /* No border-radius on mobile — added via CSS for desktop */
              overflow: "hidden",
              order: 1,
              boxShadow: "0 16px 60px rgba(74,82,64,0.18)",
            }}
          >
            {/* Urgency banner — no emojis, clean text */}
            <div
              style={{
                backgroundColor: "var(--az-terracotta)",
                padding: "1rem 1.5rem",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.88rem",
                  color: "#FDFAF4",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "block",
                  lineHeight: 1.3,
                }}
              >
                Only 4 Build Slots Available This Month
              </span>
            </div>

            {/* Card body */}
            <div style={{ padding: "2rem 1.5rem" }}>
              {/* Badge */}
              <div style={{ marginBottom: "1rem" }}>
                <span
                  style={{
                    backgroundColor: "var(--az-gold)",
                    color: "var(--az-ink)",
                    padding: "0.3rem 1rem",
                    borderRadius: "2px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Most popular
                </span>
              </div>

              {/* Title */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "2.25rem",
                  color: "var(--az-ink)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.1,
                }}
              >
                Signature Website
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "var(--az-muted-text)",
                  marginBottom: "1.75rem",
                  lineHeight: 1.6,
                }}
              >
                The complete, conversion-focused website for{" "}
                <strong style={{ color: "var(--az-ink)" }}>design-led businesses</strong> serious about more enquiries.
              </div>

              {/* Price block */}
              <div
                style={{
                  borderLeft: "4px solid var(--az-sage)",
                  paddingLeft: "1.25rem",
                  marginBottom: "1.75rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", flexWrap: "wrap", marginBottom: "0.35rem" }}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 600,
                      fontSize: "4.5rem",
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
                    £2,241
                  </div>
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "var(--az-muted-text)", marginBottom: "0.4rem" }}>
                  One-time &nbsp;·&nbsp; or <strong style={{ color: "var(--az-ink)" }}>£149 deposit</strong> + £448 on completion
                </div>
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: "rgba(181,97,58,0.12)",
                    color: "var(--az-terracotta)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    padding: "0.25rem 0.875rem",
                    borderRadius: "2px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  You save £1,644
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", backgroundColor: "rgba(122,140,110,0.15)", marginBottom: "1.5rem" }} />

              {/* Includes with £ values */}
              <div style={{ marginBottom: "1.75rem" }}>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    color: "var(--az-sage)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  What's included:
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {SIGNATURE_INCLUDES.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", flex: 1 }}>
                        <div
                          style={{
                            width: "22px", height: "22px", borderRadius: "50%",
                            backgroundColor: "var(--az-sage)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            flexShrink: 0, marginTop: "1px",
                          }}
                        >
                          <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                            <path d="M1 4.5L4 7.5L10 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "var(--az-ink)", lineHeight: 1.5 }}>
                          {item.text}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "var(--az-sage)",
                          backgroundColor: "rgba(122,140,110,0.1)",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "2px",
                          flexShrink: 0,
                          marginTop: "3px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonus box */}
              <div
                style={{
                  backgroundColor: "rgba(201,169,110,0.1)",
                  border: "2px solid var(--az-gold)",
                  borderRadius: "3px",
                  padding: "1.25rem",
                  marginBottom: "1.75rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "1.6rem" }}>🎁</span>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.9rem",
                      color: "#8B6914",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      lineHeight: 1.3,
                    }}
                  >
                    Free Bonus — Book Within 24 Hours
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
                  {[
                    { text: "On-page SEO setup", value: "£197" },
                    { text: "Always-On Chatbot Assistant", value: "£197" },
                  ].map((b, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                        <span style={{ color: "var(--az-gold)", fontWeight: 700, fontSize: "1.1rem" }}>✓</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600, color: "var(--az-ink)", lineHeight: 1.4 }}>{b.text}</span>
                      </div>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "#8B6914", backgroundColor: "rgba(201,169,110,0.2)", padding: "0.25rem 0.7rem", borderRadius: "2px", flexShrink: 0 }}>
                        {b.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "var(--az-ink)", fontWeight: 700 }}>
                  Total bonus value: <span style={{ color: "#8B6914", fontSize: "1.05rem" }}>£394 included free</span>
                </div>
              </div>

              {/* Total value bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem 1.25rem",
                  backgroundColor: "var(--az-ink)",
                  borderRadius: "3px",
                  marginBottom: "1.75rem",
                }}
              >
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "rgba(253,250,244,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.15rem" }}>
                    Total value
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(253,250,244,0.45)", textDecoration: "line-through" }}>
                    £2,241
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "2rem", color: "#FDFAF4", lineHeight: 1 }}>
                    £597
                  </div>

                </div>
              </div>

              {/* Primary CTA — Book a call */}
              <a
                href="#" onClick={openCalendlyPopup}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "var(--az-olive)",
                  color: "#FDFAF4",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "1.2rem 2rem",
                  borderRadius: "2px",
                  textDecoration: "none",
                  width: "100%",
                  boxSizing: "border-box",
                  marginBottom: "0.875rem",
                  transition: "background-color 0.2s ease, transform 0.16s ease",
                  lineHeight: 1.2,
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

              {/* Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
                <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(122,140,110,0.2)" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "var(--az-muted-text)", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>or skip the call</span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(122,140,110,0.2)" }} />
              </div>

              {/* Secondary CTA — Buy Now directly */}
              <a
                href={BUY_NOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "var(--az-terracotta)",
                  color: "#FDFAF4",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "1.2rem 2rem",
                  borderRadius: "2px",
                  textDecoration: "none",
                  width: "100%",
                  boxSizing: "border-box",
                  marginBottom: "1.5rem",
                  transition: "background-color 0.2s ease, transform 0.16s ease",
                  lineHeight: 1.2,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#8B3E22";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--az-terracotta)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Buy Now — £597 (Save £1,644)
              </a>

              {/* Money-back guarantee */}
              <div
                style={{
                  backgroundColor: "rgba(74,82,64,0.06)",
                  borderTop: "3px solid var(--az-sage)",
                  padding: "1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ fontSize: "2.25rem", flexShrink: 0, lineHeight: 1 }}>🛡️</div>
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "1rem",
                      color: "var(--az-olive)",
                      marginBottom: "0.5rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    100% Money-Back Guarantee
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "var(--az-ink)", lineHeight: 1.65, fontWeight: 500 }}>
                    Start with just <strong>£149 deposit</strong>. If you don't love your first design draft —{" "}
                    <strong>you get every penny back</strong>. No questions asked.
                  </p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "var(--az-sage)", marginTop: "0.5rem", fontStyle: "italic" }}>
                    The risk is on me, not you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── SHOWCASE — SECONDARY ── */}
          <div
            className="az-fade-up showcase-card"
            style={{
              backgroundColor: isDark ? "rgba(44,36,22,0.25)" : "rgba(253,250,244,0.5)",
              border: `1px solid ${isDark ? "rgba(168,184,154,0.12)" : "rgba(122,140,110,0.15)"}`,
              borderRadius: "3px",
              padding: "1.5rem",
              opacity: 0.78,
              order: 2,
              transitionDelay: "80ms",
            }}
          >
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.4rem", color: isDark ? "rgba(253,250,244,0.75)" : "var(--az-ink)", marginBottom: "0.25rem" }}>
              Showcase
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: mutedColor, marginBottom: "1.25rem", lineHeight: 1.55 }}>
              One-page presence to get you online fast.
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "2.5rem", color: isDark ? "rgba(253,250,244,0.75)" : "var(--az-ink)", marginBottom: "0.25rem" }}>
              £297
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: mutedColor, marginBottom: "1.5rem" }}>
              One-time payment
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "1.5rem" }}>
              {SHOWCASE_INCLUDES.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "15px", height: "15px", borderRadius: "50%",
                      border: `1.5px solid ${isDark ? "rgba(168,184,154,0.4)" : "rgba(122,140,110,0.4)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: "3px",
                    }}
                  >
                    <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
                      <path d="M1 2.5L2.5 4L6 1" stroke={isDark ? "rgba(168,184,154,0.6)" : "var(--az-sage)"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: mutedColor, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
            <a
              href={SHOWCASE_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                backgroundColor: "transparent",
                color: isDark ? "rgba(253,250,244,0.6)" : "var(--az-sage)",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.88rem",
                letterSpacing: "0.04em", padding: "0.875rem 1.5rem", borderRadius: "2px",
                border: `1.5px solid ${isDark ? "rgba(168,184,154,0.25)" : "rgba(122,140,110,0.3)"}`,
                textDecoration: "none", width: "100%", boxSizing: "border-box",
              }}
            >
              Get started
            </a>
          </div>
        </div>


      </div>

      <style>{`
        /* Mobile: cards go edge-to-edge, no side margins */
        .unified-cta-outer {
          padding: 0;
        }
        .signature-card {
          border-radius: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        .showcase-card {
          margin-left: 1.5rem;
          margin-right: 1.5rem;
        }

        /* Desktop: restore normal container padding and rounded corners */
        @media (min-width: 760px) {
          .unified-cta-outer {
            padding: 0 1.5rem !important;
          }
          .unified-cta-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            align-items: start !important;
          }
          .signature-card {
            border-radius: 4px !important;
          }
          .showcase-card {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
