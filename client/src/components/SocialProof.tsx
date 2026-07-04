/**
 * AZELIA STUDIO — Social Proof / Recent Work Section
 * No real testimonials yet — shows "Recent Work" with portfolio images.
 * Quiet Luxury Editorial: cream bg, editorial grid, sage accents.
 * Testimonials will replace this section when ready.
 */

const PORTFOLIO_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663411960285/niVgumLaoaWhy7ZXfDsnG9/azelia-portfolio-1-EtVchtNr2GVfbbXy68VEfz.webp";
const PORTFOLIO_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663411960285/niVgumLaoaWhy7ZXfDsnG9/azelia-portfolio-2-8rgX7NSZLHaeY6rJoZiuv2.webp";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663411960285/niVgumLaoaWhy7ZXfDsnG9/azelia-hero-bg-WZEsAZzyCK5xXZb5p5ezy7.webp";

const portfolioImages = [
  {
    src: PORTFOLIO_1,
    caption: "Interior Design Studio",
    location: "London",
    aspect: "4/3",
  },
  {
    src: PORTFOLIO_2,
    caption: "Wedding Planner",
    location: "Surrey",
    aspect: "4/3",
  },
  {
    src: HERO_BG,
    caption: "Design Consultancy",
    location: "UK",
    aspect: "4/3",
  },
];

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      style={{
        backgroundColor: "var(--az-cream)",
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
        <div
          className="az-fade-up"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            marginBottom: "3.5rem",
          }}
        >
          <div className="az-label" style={{ color: "var(--az-sage)", marginBottom: "1.25rem" }}>
            Recent work
          </div>
          <h2
            className="az-display"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "var(--az-ink)",
              maxWidth: "520px",
              lineHeight: 1.1,
            }}
          >
            Design-led businesses,
            <br />
            <em style={{ color: "var(--az-sage)", fontStyle: "italic" }}>built to be found.</em>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              color: "var(--az-muted-text)",
              marginTop: "1rem",
              fontStyle: "italic",
            }}
          >
            Client testimonials will appear here, launching with our first cohort.
          </p>
        </div>

        {/* Portfolio grid — editorial layout */}
        <div
          className="portfolio-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
          }}
        >
          {portfolioImages.map((img, i) => (
            <div
              key={i}
              className="az-fade-up"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "2px",
                aspectRatio: img.aspect,
                boxShadow: "0 4px 24px rgba(74, 82, 64, 0.08)",
              }}
            >
              <img
                src={img.src}
                alt={`${img.caption}, ${img.location}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.5rem 1.25rem 1.25rem",
                  background: "linear-gradient(to top, rgba(44,36,22,0.55) 0%, transparent 100%)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(253, 250, 244, 0.9)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {img.caption}
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.9rem",
                    color: "rgba(253, 250, 244, 0.65)",
                    fontStyle: "italic",
                  }}
                >
                  {img.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .portfolio-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
