/**
 * AZELIA STUDIO — Home Page
 *
 * CTA placement (every ~3 sections):
 * 1. Navbar (fixed)
 * 2. Hero
 * 3. ImpactBridge — punchy statement + CTA immediately after hero
 * 4. UnifiedCTABlock #1 (light) — first offer, right after impact bridge
 * 5. Problem
 * 6. Shift
 * 7. Offer (full includes list)
 * 8. UnifiedCTABlock #2 (full) — MOVED here: between Offer and Process
 * 9. Process
 * 10. SocialProof
 * 11. Bonus
 * 12. Guarantee
 * 13. ForWho
 * 14. UnifiedCTABlock #3 (dark) — after ForWho
 * 15. FAQ
 * 16. Closing + Footer
 */

import Ticker from "@/components/Ticker";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactBridge from "@/components/ImpactBridge";
import UnifiedCTABlock from "@/components/UnifiedCTABlock";
import Problem from "@/components/Problem";
import Shift from "@/components/Shift";
import Offer from "@/components/Offer";
import Process from "@/components/Process";
import SocialProof from "@/components/SocialProof";
import Bonus from "@/components/Bonus";
import Guarantee from "@/components/Guarantee";
import ForWho from "@/components/ForWho";
import FAQ from "@/components/FAQ";
import Closing from "@/components/Closing";
import { WhatsAppBubble, LeadCapturePopup } from "@/components/FloatingElements";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {

  useScrollAnimation();

  return (
    <div style={{ backgroundColor: "var(--az-parchment)" }}>
      {/* Ticker — hidden for now, re-enable by removing display:none */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, display: "none" }}>
        <Ticker />
      </div>

      {/* Navbar — fixed below ticker */}
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Impact Bridge — punchy statement + CTA immediately after hero */}
        <ImpactBridge />

        {/* CTA #1 — first offer card (no extra top margin, flows directly) */}
        <UnifiedCTABlock variant="light" />

        {/* Problem */}
        <Problem />

        {/* Shift */}
        <Shift />

        {/* Offer — full includes list */}
        <Offer />

        {/* CTA #2 — MOVED HERE: between Offer and Process */}
        <UnifiedCTABlock variant="full" />

        {/* Process */}
        <Process />

        {/* Social Proof */}
        <SocialProof />

        {/* Bonus */}
        <Bonus />

        {/* Guarantee */}
        <Guarantee />

        {/* For Who */}
        <ForWho />

        {/* CTA #3 — dark variant after ForWho */}
        <UnifiedCTABlock variant="dark" />

        {/* FAQ */}
        <FAQ />

        {/* Closing + Footer */}
        <Closing />
      </main>

      <WhatsAppBubble />
      <LeadCapturePopup />
    </div>
  );
}
