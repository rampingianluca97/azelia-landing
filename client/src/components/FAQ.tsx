/**
 * AZELIA STUDIO — FAQ Section
 * Bold keywords added to answers. Interactive accordion.
 */
import { useState } from "react";

const faqs = [
  {
    q: "I get most of my clients through referrals. Do I really need a website?",
    a: <>Referrals are great <strong>until they go quiet</strong>, and they always do at some point. A website doesn't replace word of mouth, it backs it up. When someone hears your name, the first thing they do is look you up. <strong>A focused site makes that first impression do the selling for you</strong> even for the referrals.</>,
  },
  {
    q: "How do I know it'll actually bring enquiries?",
    a: <>Because it isn't built to look pretty, <strong>it's built to convert</strong>. Every section has a job: show your value, build trust, answer doubts, and make enquiring effortless. And you start with only a <strong>£149 deposit, fully refunded</strong> if you don't love the first draft, so you can see the direction before you commit.</>,
  },
  {
    q: "Isn't this expensive?",
    a: <>Most design-led studios charge well over a thousand for a custom site, and many charge several. <strong>The Signature site is £597 right now</strong>, with the booking and chat upgrades included. <strong>One new client usually covers it many times over.</strong></>,
  },
  {
    q: "I don't have much time for this.",
    a: <><strong>That's the point.</strong> You fill in one short form, hop on one call, and review the drafts. I do the rest. <strong>Most of the work happens on my side</strong>, not yours.</>,
  },
  {
    q: "What if I don't like it?",
    a: <>You get your <strong>full deposit back</strong> if the first draft isn't right for you. You're never locked in to something you don't love.</>,
  },
  {
    q: "How long does it take?",
    a: <>We agree a timeline on the call, but <strong>most Signature sites are live within a few weeks</strong>, depending on how quickly we get your content and feedback.</>,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        backgroundColor: "var(--az-parchment)",
        padding: "6rem 0",
        borderTop: "1px solid rgba(122, 140, 110, 0.2)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="az-fade-up" style={{ marginBottom: "3rem" }}>
          <div className="az-label" style={{ color: "var(--az-sage)", marginBottom: "1rem" }}>FAQ</div>
          <h2 className="az-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "var(--az-ink)" }}>
            Questions, answered.
          </h2>
        </div>

        <div style={{ maxWidth: "720px" }}>
          {faqs.map((faq, i) => (
            <div key={i} className="az-fade-up" style={{ borderBottom: "1px solid rgba(122, 140, 110, 0.2)" }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1.5rem 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "1.15rem",
                    color: "var(--az-ink)",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    color: "var(--az-sage)",
                    flexShrink: 0,
                    marginTop: "2px",
                    transition: "transform 0.2s ease",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                    display: "flex",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 3V15M3 9H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <div className={`az-accordion-content ${openIndex === i ? "open" : ""}`}>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.95rem",
                    color: "var(--az-muted-text)",
                    lineHeight: 1.7,
                    paddingBottom: "1.5rem",
                    paddingRight: "2rem",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
