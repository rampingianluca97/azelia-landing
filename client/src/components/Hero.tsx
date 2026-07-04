/**
 * AZELIA STUDIO — Hero Section
 * FIXED: More padding-top so headline is vertically centered in viewport.
 * alignItems: center so content sits in the middle of the screen.
 */

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663411960285/niVgumLaoaWhy7ZXfDsnG9/azelia-hero-bg-WZEsAZzyCK5xXZb5p5ezy7.webp";
import { openCalendlyPopup } from "@/hooks/useCalendly";

export default function Hero() {
  const scrollToHow = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",      /* vertically centred */
        justifyContent: "flex-start",
        paddingTop: "6rem",        /* navbar height only (ticker hidden) */
        paddingBottom: "4rem",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          zIndex: 0,
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg, rgba(20,17,10,0.80) 0%, rgba(30,26,18,0.87) 60%, rgba(44,36,22,0.93) 100%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.25rem",
          width: "100%",
        }}
      >
        {/* Main headline — desktop capped smaller via CSS class */}
        <h1
          className="az-display az-fade-up hero-headline"
          style={{
            fontSize: "clamp(3.5rem, 13vw, 7.5rem)",
            color: "#FDFAF4",
            marginBottom: "1.1rem",
            lineHeight: 0.98,
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          Your work gets noticed.
          <br />
          <em style={{ color: "var(--az-sage-light)", fontStyle: "italic" }}>
            Let's make it get booked.
          </em>
        </h1>

        {/* Subheadline */}
        <p
          className="az-fade-up"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1rem, 3vw, 1.2rem)",
            color: "rgba(253, 250, 244, 0.85)",
            maxWidth: "520px",
            marginBottom: "2.25rem",
            transitionDelay: "100ms",
            lineHeight: 1.65,
          }}
        >
          Bespoke websites for{" "}
          <strong style={{ color: "#FDFAF4", fontWeight: 700 }}>interior designers</strong> and{" "}
          <strong style={{ color: "#FDFAF4", fontWeight: 700 }}>wedding planners</strong> that turn interest into{" "}
          <strong style={{ color: "#FDFAF4", fontWeight: 700 }}>real enquiries</strong>. No more chasing leads that go nowhere.
        </p>

        {/* CTA buttons */}
        <div
          className="az-fade-up"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            maxWidth: "380px",
            transitionDelay: "180ms",
          }}
        >
          <a
            href="#" onClick={openCalendlyPopup}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--az-sage)",
              color: "#FDFAF4",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "1.05rem 2rem",
              borderRadius: "2px",
              textDecoration: "none",
              transition: "background-color 0.2s ease, transform 0.16s ease",
              width: "100%",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--az-olive)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--az-sage)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Book Your Free&nbsp;Strategy Call
          </a>
          <button
            onClick={scrollToHow}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              color: "rgba(253, 250, 244, 0.7)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: "0.88rem",
              letterSpacing: "0.04em",
              padding: "0.85rem 2rem",
              borderRadius: "2px",
              border: "1.5px solid rgba(253, 250, 244, 0.22)",
              cursor: "pointer",
              transition: "border-color 0.2s ease, background-color 0.2s ease",
              width: "100%",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(253, 250, 244, 0.5)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(253, 250, 244, 0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(253, 250, 244, 0.22)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            }}
          >
            See how it works ↓
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-bg-mark { display: block !important; }
          /* Desktop only: cap headline */
          .hero-headline {
            font-size: clamp(3rem, 5.5vw, 5rem) !important;
            line-height: 1.02 !important;
          }
          /* Desktop only: force CTA buttons to single line */
          a[href] br, button br {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
