/**
 * AZELIA STUDIO — Process Section (How It Works)
 * Quiet Luxury Editorial: olive bg, oversized italic Cormorant numbers
 * as recurring Azelia brand motif (same as Problem section), timeline layout
 */

const steps = [
  {
    n: "01",
    title: "Book a free strategy call.",
    body: "We talk through your business, your goals and which package fits.",
  },
  {
    n: "02",
    title: "Fill in a short discovery form.",
    body: "Quick questions so I understand your work and your clients.",
  },
  {
    n: "03",
    title: "Get your first draft.",
    body: "I design it, you review it, we refine it together.",
  },
  {
    n: "04",
    title: "Go live.",
    body: "I handle launch and make sure everything works the way it should.",
  },
];

export default function Process() {
  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: "var(--az-olive)",
        padding: "7rem 0 6rem",
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
        <div className="az-fade-up" style={{ marginBottom: "4.5rem" }}>
          <div
            className="az-label"
            style={{ color: "var(--az-sage-light)", marginBottom: "1.25rem" }}
          >
            The process
          </div>
          <h2
            className="az-display"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "var(--az-cream)",
              lineHeight: 1.1,
            }}
          >
            Simple from start to finish.
          </h2>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {steps.map((step, i) => (
            <div
              key={step.n}
              className="az-fade-up"
              style={{
                display: "grid",
                gridTemplateColumns: "5rem 1fr",
                gap: "0",
                alignItems: "start",
                paddingTop: i === 0 ? 0 : "3rem",
                paddingBottom: "3rem",
                borderBottom: i < steps.length - 1 ? "1px solid rgba(253, 250, 244, 0.1)" : "none",
              }}
            >
              {/* Oversized editorial number — same motif as Problem section */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontStyle: "italic",
                  fontSize: "clamp(4rem, 8vw, 7rem)",
                  color: "var(--az-sage-light)",
                  opacity: 0.22,
                  lineHeight: 0.85,
                  userSelect: "none",
                  letterSpacing: "-0.02em",
                  marginTop: "-0.5rem",
                }}
              >
                {step.n}
              </div>
              <div style={{ paddingTop: "0.25rem", paddingLeft: "0.5rem" }}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                    color: "var(--az-cream)",
                    marginBottom: "0.6rem",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </div>
                <p
                  className="az-body"
                  style={{
                    fontSize: "0.98rem",
                    color: "rgba(253, 250, 244, 0.65)",
                    maxWidth: "520px",
                  }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance line */}
        <div
          className="az-fade-up"
          style={{
            marginTop: "3.5rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(253, 250, 244, 0.12)",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.25rem",
              color: "var(--az-sage-light)",
              maxWidth: "560px",
              lineHeight: 1.5,
            }}
          >
            You stay in the loop the whole way through. Nothing goes live until you're happy with it.
          </p>
        </div>
      </div>
    </section>
  );
}
