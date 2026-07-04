/**
 * AZELIA STUDIO — Offer Section (The Signature Website)
 * Bold keywords added to includes list and body copy.
 */

import { openCalendlyPopup } from "@/hooks/useCalendly";

const includes = [
  {
    title: "Up to 5+ pages, designed to convert.",
    body: "Not just beautiful, structured so the right client moves from curious to enquiring.",
  },
  {
    title: "A brand story that sets you apart.",
    body: "Why you, why now, why people should choose you over the studio down the road.",
  },
  {
    title: "A best-work showcase.",
    body: "Your strongest projects in one place, presented to impress.",
  },
  {
    title: "A clear client journey.",
    body: "Shows people exactly what happens when they work with you, so there are no surprises and no hesitation.",
  },
  {
    title: "A trust section.",
    body: "Reviews, proof and experience, in the spot where doubt usually creeps in.",
  },
  {
    title: "A question-clearing section.",
    body: "The common doubts answered before anyone has to ask.",
  },
  {
    title: "Google Business Profile setup.",
    body: "So you show up properly and everything stays consistent.",
  },
  {
    title: "Launch support and 60 days of aftercare.",
    body: "We get it live properly, then handle bug fixes and small changes (up to two a month) for the first two months.",
  },
];

export default function Offer() {
  return (
    <section
      id="offer"
      style={{
        backgroundColor: "var(--az-parchment)",
        padding: "6rem 0",
        borderTop: "1px solid rgba(122, 140, 110, 0.2)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <div className="az-fade-up" style={{ marginBottom: "1rem" }}>
          <div className="az-label" style={{ color: "var(--az-sage)", marginBottom: "1rem" }}>
            The offer
          </div>
          <h2
            className="az-display"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "var(--az-ink)", marginBottom: "0.75rem" }}
          >
            The Signature Website
          </h2>
          <p className="az-body" style={{ fontSize: "1.05rem", color: "var(--az-muted-text)", maxWidth: "560px", marginBottom: "0.5rem" }}>
            A complete, <strong style={{ color: "var(--az-ink)" }}>conversion-focused website</strong> for design-led businesses, built around one goal: <strong style={{ color: "var(--az-ink)" }}>turning interest into serious enquiries</strong>.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "var(--az-sage)", fontWeight: 600 }}>
            Everything below is included.
          </p>
        </div>

        <div className="az-rule" style={{ margin: "2.5rem 0" }} />

        {/* Includes list */}
        <div style={{ display: "grid", gap: "1.5rem" }}>
          {includes.map((item, i) => (
            <div
              key={i}
              className="az-fade-up"
              style={{
                display: "grid",
                gridTemplateColumns: "1.5rem 1fr",
                gap: "1rem",
                alignItems: "start",
                paddingBottom: "1.5rem",
                borderBottom: i < includes.length - 1 ? "1px solid rgba(122, 140, 110, 0.15)" : "none",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "var(--az-sage)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--az-ink)" }}>
                  {item.title}
                </span>{" "}
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.95rem", color: "var(--az-muted-text)" }}>
                  {item.body}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="az-fade-up" style={{ marginTop: "3rem", maxWidth: "380px" }}>
          <a
            href="#" onClick={openCalendlyPopup}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--az-olive)",
              color: "#FDFAF4",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.92rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "1.05rem 2rem",
              borderRadius: "2px",
              textDecoration: "none",
              width: "100%",
              boxSizing: "border-box",
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
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "var(--az-muted-text)", marginTop: "0.75rem", textAlign: "center" }}>
            No commitment. No pressure. Just a conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
