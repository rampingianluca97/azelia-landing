/**
 * AZELIA STUDIO — Calendly Popup Hook
 * Opens the official Calendly popup widget inline.
 * Falls back to opening in a new tab if the widget hasn't loaded yet.
 */

const CALENDLY_URL = "https://calendly.com/azeliastudio/30min";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function openCalendlyPopup(e?: React.MouseEvent) {
  if (e) e.preventDefault();
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    // Fallback: open in new tab if script hasn't loaded
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }
}
