/**
 * AZELIA STUDIO — 24h Bonus Section
 * Correct gift items: Done-for-you launch + Chatbot Assistant.
 * No false £444 line.
 */

export default function Bonus() {
  return (
    <section
      style={{
        backgroundColor: "var(--az-sage)",
        padding: "5rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div className="az-fade-up" style={{ maxWidth: "680px" }}>
          {/* Urgency pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              backgroundColor: "var(--az-terracotta)",
              color: "var(--az-cream)",
              padding: "0.3rem 0.85rem",
              borderRadius: "2px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.2" />
              <path d="M5 2.5V5L6.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            24-hour offer
          </div>

          <h2
            className="az-display"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "var(--az-cream)",
              marginBottom: "1.5rem",
              lineHeight: 1.15,
            }}
          >
            Book within 24 hours of your call and these are on the house.
          </h2>

          <p
            className="az-body"
            style={{
              fontSize: "1rem",
              color: "rgba(253, 250, 244, 0.85)",
              marginBottom: "2rem",
              lineHeight: 1.7,
            }}
          >
            To help your new site start bringing in enquiries faster, anyone who confirms within 24 hours of their strategy call gets two upgrades included free:
          </p>

          {/* Bonus items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
              {
                icon: "🔍",
                title: "On-page SEO setup.",
                body: "So your site is built to be found on Google from day one.",
                value: "£197",
              },
              {
                icon: "💬",
                title: "Always-On Chatbot Assistant.",
                body: "So visitors get their questions answered instantly, even when you're with a client.",
                value: "£197",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  backgroundColor: "rgba(253, 250, 244, 0.1)",
                  padding: "1.25rem",
                  borderRadius: "2px",
                  borderLeft: "3px solid var(--az-gold)",
                }}
              >
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "var(--az-cream)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem",
                      color: "rgba(253, 250, 244, 0.75)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "var(--az-gold-light)",
                    backgroundColor: "rgba(201,169,110,0.2)",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "2px",
                    flexShrink: 0,
                    marginTop: "2px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Total bonus value */}
          <div
            style={{
              marginTop: "1.5rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              color: "var(--az-cream)",
              fontWeight: 600,
            }}
          >
          Total bonus value:{" "}
          <span style={{ color: "var(--az-gold-light)" }}>£394 included free</span>
          </div>
        </div>
      </div>
    </section>
  );
}
