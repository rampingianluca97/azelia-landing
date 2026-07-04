/**
 * AZELIA STUDIO — Navbar
 * FIXED: "Book Now" button always visible (mobile + desktop).
 * Ticker is above this in the DOM, so navbar sits below it.
 * No eyebrow text in hero to avoid duplicate brand name.
 */
import { useEffect, useState } from "react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663411960285/niVgumLaoaWhy7ZXfDsnG9/azelia-logo-icon-a4HewB6goFD25KZz3cgLEb.png";
import { openCalendlyPopup } from "@/hooks/useCalendly";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: "0", /* ticker hidden — sits at very top */
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background-color 0.35s ease, box-shadow 0.35s ease, top 0.2s ease",
        backgroundColor: scrolled ? "rgba(253, 250, 244, 0.97)" : "rgba(253, 250, 244, 0.0)",
        boxShadow: scrolled ? "0 1px 0 rgba(122, 140, 110, 0.18)" : "none",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0.9rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo + Brand */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <img
            src={LOGO_URL}
            alt="Azelia Studio"
            style={{
              height: "40px",
              width: "40px",
              objectFit: "contain",
            }}
          />
          <div className="nav-brand-text">
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "1.1rem",
                color: scrolled ? "var(--az-ink)" : "rgba(253,250,244,0.95)",
                letterSpacing: "0.04em",
                lineHeight: 1.1,
                transition: "color 0.3s ease",
              }}
            >
              Azelia Studio
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.6rem",
                fontWeight: 400,
                color: scrolled ? "var(--az-sage)" : "rgba(168,184,154,0.8)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                transition: "color 0.3s ease",
              }}
            >
              Website Design
            </div>
          </div>
        </a>

        {/* Right side: scarcity + CTA button */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
          {/* Scarcity — hidden on very small screens */}
          <span
            className="nav-scarcity"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.88rem",
              color: "var(--az-terracotta)",
              fontWeight: 800,
              display: "none",
              whiteSpace: "nowrap",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              backgroundColor: "rgba(181,97,58,0.1)",
              padding: "0.3rem 0.75rem",
              borderRadius: "2px",
              border: "1px solid rgba(181,97,58,0.3)",
            }}
          >
            4 SLOTS LEFT
          </span>

          {/* Book Now — ALWAYS visible */}
          <button
            onClick={openCalendlyPopup}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              color: "#FDFAF4",
              backgroundColor: "var(--az-sage)",
              padding: "0.6rem 1.1rem",
              borderRadius: "2px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease, transform 0.16s ease",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--az-olive)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--az-sage)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Book a Call
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 500px) {
          .nav-scarcity { display: inline !important; }
        }
      `}</style>
    </nav>
  );
}
