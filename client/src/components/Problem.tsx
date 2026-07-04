/**
 * AZELIA STUDIO — Problem Section
 * Bold keywords added. Uppercase labels. Oversized editorial numbers.
 */

export default function Problem() {
  return (
    <section
      style={{
        backgroundColor: "var(--az-olive)",
        padding: "5rem 0 6rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Section header */}
        <div className="az-fade-up" style={{ marginBottom: "4rem" }}>
          <div className="az-label" style={{ color: "var(--az-sage-light)", marginBottom: "1.25rem" }}>
            Sound familiar?
          </div>
          <h2
            className="az-display"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", color: "#FDFAF4", maxWidth: "680px", lineHeight: 1.05 }}
          >
            You're getting found.
            <br />
            <em style={{ color: "var(--az-sage-light)", fontStyle: "italic" }}>
              You're just not getting booked.
            </em>
          </h2>
          <p className="az-body" style={{ fontSize: "1.05rem", color: "rgba(253,250,244,0.85)", maxWidth: "600px", marginTop: "1.5rem", lineHeight: 1.75 }}>
            Your best clients find you through <strong>Instagram, a referral, a saved post</strong>. They like what they see, then drift off, because there was <strong>nowhere to send them that made the decision easy</strong>.
          </p>
        </div>

        {/* Three pain points */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {[
            {
              n: "01",
              label: "UNPREDICTABLE INCOME",
              title: "Some months full. Some months quiet.",
              body: <><strong>Most of it still depends on word of mouth</strong> or sliding into someone's DMs. There's no system working for you when you're not online.</>,
            },
            {
              n: "02",
              label: "WASTED TIME",
              title: "Answering the same questions. Over and over.",
              body: <>Qualifying people who were <strong>never going to book</strong>, spending hours on leads that go nowhere. Time you could spend on actual client work.</>,
            },
            {
              n: "03",
              label: "THE REAL PROBLEM",
              title: "Your work is good enough. The platform isn't.",
              body: <>There is <strong>no clear, focused place</strong> that shows your value, builds trust fast, and tells the right person exactly <strong>what to do next</strong>.</>,
            },
          ].map((item, i) => (
            <div
              key={item.n}
              className="az-fade-up"
              style={{
                display: "grid",
                gridTemplateColumns: "4.5rem 1fr",
                gap: "0",
                alignItems: "start",
                paddingTop: i === 0 ? 0 : "3rem",
                paddingBottom: "3rem",
                borderBottom: i < 2 ? "1px solid rgba(253, 250, 244, 0.1)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontStyle: "italic",
                  fontSize: "clamp(4rem, 8vw, 7rem)",
                  color: "rgba(253, 250, 244, 0.35)",
                  opacity: 1,
                  lineHeight: 0.85,
                  userSelect: "none",
                  letterSpacing: "-0.02em",
                  marginTop: "-0.5rem",
                }}
              >
                {item.n}
              </div>
              <div style={{ paddingLeft: "0.5rem", paddingTop: "0.25rem" }}>
                <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.68rem",
                      color: "rgba(253,180,140,0.9)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.25rem, 2.8vw, 1.65rem)",
                    color: "#FDFAF4",
                    marginBottom: "0.5rem",
                    lineHeight: 1.25,
                  }}
                >
                  {item.title}
                </div>
                <p className="az-body" style={{ fontSize: "0.95rem", color: "rgba(253,250,244,0.65)", maxWidth: "520px", lineHeight: 1.65 }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
