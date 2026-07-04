/**
 * AZELIA STUDIO — For Who Section
 * Quiet Luxury Editorial: olive bg, two-column grid,
 * green cards for ✓, muted for ✗
 */

const forYou = [
  "You're an interior designer or wedding planner growing your business",
  "You rely on referrals, Instagram or DMs and want something steadier",
  "Your current site (or lack of one) isn't bringing the enquiries your work deserves",
  "You want a professional online home without spending weeks building it yourself",
];

const notForYou = [
  "You're winding down, too busy to take on new clients, or leaving the industry",
  "You're a large brand that already has a well-designed site that converts",
  "You're looking for the cheapest option rather than the one that brings clients",
];

export default function ForWho() {
  return (
    <section
      style={{
        backgroundColor: "var(--az-olive)",
        padding: "6rem 0",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.25rem" }}
      >
        {/* Header */}
        <div className="az-fade-up" style={{ marginBottom: "3rem" }}>
          <div className="az-label" style={{ color: "var(--az-sage-light)", marginBottom: "1rem" }}>
            Is this right for you?
          </div>
          <h2
            className="az-display"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "var(--az-cream)",
            }}
          >
            Honest about who this is for.
          </h2>
        </div>

        {/* Two columns */}
        <div
          className="forwho-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
        >
          {/* For you */}
          <div className="az-fade-up">
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.82rem",
                color: "var(--az-sage-light)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              This is for you if:
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {forYou.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.875rem",
                    alignItems: "flex-start",
                    backgroundColor: "rgba(168, 184, 154, 0.15)",
                    padding: "1rem 1.25rem",
                    borderRadius: "2px",
                    borderLeft: "3px solid var(--az-sage-light)",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "var(--az-sage-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="var(--az-olive)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.95rem",
                      color: "var(--az-cream)",
                      lineHeight: 1.55,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Not for you */}
          <div className="az-fade-up" style={{ transitionDelay: "80ms" }}>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.82rem",
                color: "rgba(253, 250, 244, 0.4)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              This probably isn't for you if:
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {notForYou.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.875rem",
                    alignItems: "flex-start",
                    backgroundColor: "rgba(44, 36, 22, 0.2)",
                    padding: "1rem 1.25rem",
                    borderRadius: "2px",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(253, 250, 244, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2.5 2.5L7.5 7.5M7.5 2.5L2.5 7.5" stroke="rgba(253,250,244,0.4)" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.95rem",
                      color: "rgba(253, 250, 244, 0.5)",
                      lineHeight: 1.55,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 760px) {
          .forwho-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
