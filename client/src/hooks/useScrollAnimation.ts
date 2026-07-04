/**
 * AZELIA STUDIO — Scroll Animation Hook
 * Adds 'visible' class to elements with 'az-fade-up' when they enter viewport
 */
import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".az-fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
