/**
 * AZELIA STUDIO — Shift Section (What's Possible)
 * Bold keywords added throughout body copy.
 */

const DESK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663411960285/niVgumLaoaWhy7ZXfDsnG9/azelia-work-desk-crdbj7CJmyPv696TYTibVC.webp";

export default function Shift() {
  return (
    <section
      style={{
        backgroundColor: "var(--az-cream)",
        padding: "7rem 0 6rem",
        borderTop: "1px solid rgba(122, 140, 110, 0.2)",
      }}
    >
      <div
        className="shift-grid"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3.5rem",
          alignItems: "center",
        }}
      >
        {/* Text block */}
        <div>
          <div className="az-label az-fade-up" style={{ color: "var(--az-sage)", marginBottom: "1.25rem" }}>
            The possibility
          </div>
          <h2
            className="az-display az-fade-up"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "var(--az-ink)",
              marginBottom: "2.25rem",
              transitionDelay: "80ms",
              lineHeight: 1.1,
            }}
          >
            Imagine the enquiries
            <br />
            <em style={{ color: "var(--az-sage)", fontStyle: "italic" }}>doing the chasing.</em>
          </h2>

          <div className="az-fade-up" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", transitionDelay: "160ms" }}>
            <p className="az-body" style={{ fontSize: "1.05rem", color: "var(--az-ink)", lineHeight: 1.8 }}>
              Picture <strong>a single page you can send anyone to</strong>. It shows your best work, makes your value obvious in seconds, answers the questions you're tired of repeating, and gives the right client <strong>one clear way to reach out</strong>.
            </p>
            <p className="az-body" style={{ fontSize: "1.05rem", color: "var(--az-ink)", lineHeight: 1.8 }}>
              No more scattered links. No more living in your inbox. Just <strong>a calm, professional online home that quietly does the selling for you</strong> so you can spend your time on the work you actually love.
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "1.3rem",
                color: "var(--az-olive)",
                fontStyle: "italic",
                marginTop: "0.5rem",
              }}
            >
              That's what we build.
            </p>
          </div>
        </div>

        {/* Image */}
        <div
          className="az-fade-up"
          style={{
            borderRadius: "2px",
            overflow: "hidden",
            aspectRatio: "4/3",
            transitionDelay: "240ms",
            boxShadow: "0 12px 48px rgba(74, 82, 64, 0.1)",
          }}
        >
          <img
            src={DESK_IMG}
            alt="Interior design mood board"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .shift-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
