/**
 * AZELIA STUDIO — Closing Section + Footer
 * Quiet Luxury Editorial: olive bg closing, parchment footer
 */

import { openCalendlyPopup } from "@/hooks/useCalendly";
const WA_NUMBER = "+447716477864";
const WA_URL = `https://wa.me/${WA_NUMBER.replace(/\D/g, "")}`;

export default function Closing() {
  return (
    <>
      {/* Closing CTA */}
      <section
        style={{
          backgroundColor: "var(--az-olive)",
          padding: "7rem 0",
          textAlign: "center",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1.25rem" }}
        >
          <div className="az-label az-fade-up" style={{ color: "var(--az-sage-light)", marginBottom: "1.5rem" }}>
            Ready?
          </div>
          <h2
            className="az-display az-fade-up"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "var(--az-cream)",
              marginBottom: "1.5rem",
              transitionDelay: "80ms",
            }}
          >
            Your next client is already looking for you.
          </h2>
          <p
            className="az-body az-fade-up"
            style={{
              fontSize: "1.05rem",
              color: "rgba(253, 250, 244, 0.8)",
              marginBottom: "3rem",
              transitionDelay: "160ms",
            }}
          >
            Let's make sure that when they find you, they have somewhere that makes saying yes easy. Book a free strategy call, no pressure, no commitment, and we'll map out exactly what your site needs to start bringing in the right enquiries.
          </p>

          <div
            className="az-fade-up"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
              maxWidth: "380px",
              margin: "0 auto",
              transitionDelay: "240ms",
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
                backgroundColor: "var(--az-cream)",
                color: "var(--az-olive)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                letterSpacing: "0.04em",
                padding: "0.9rem 2rem",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "background-color 0.2s ease, transform 0.16s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--az-parchment)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--az-cream)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Book Your Free&nbsp;Strategy Call
            </a>
          </div>

          <p
            className="az-fade-up"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              color: "rgba(253, 250, 244, 0.5)",
              marginTop: "1.25rem",
              transitionDelay: "320ms",
            }}
          >
            Only 4 build slots left this month. Risk-free to start.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "var(--az-parchment)",
          borderTop: "1px solid rgba(122, 140, 110, 0.2)",
          padding: "3rem 0",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "1.25rem",
                color: "var(--az-ink)",
                letterSpacing: "0.04em",
              }}
            >
              Azelia Studio
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.82rem",
                color: "var(--az-muted-text)",
              }}
            >
              Website design for design-led businesses.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
            }}
          >
            <a
              href="mailto:azeliastudio@outlook.com"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                color: "var(--az-sage)",
                textDecoration: "none",
              }}
            >
              azeliastudio@outlook.com
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                color: "var(--az-sage)",
                textDecoration: "none",
              }}
            >
              WhatsApp {WA_NUMBER}
            </a>
          </div>

          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(107, 99, 85, 0.6)",
              marginTop: "0.5rem",
            }}
          >
            © {new Date().getFullYear()} Azelia Studio. All rights reserved.
          </div>
        </div>

        <style>{`
          @media (min-width: 640px) {
            footer .container > div:first-child {
              flex-direction: row !important;
              justify-content: space-between !important;
              align-items: center !important;
            }
          }
        `}</style>
      </footer>
    </>
  );
}
