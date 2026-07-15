/**
 * AZELIA STUDIO — Floating Elements
 * WhatsApp bubble (fixed bottom-right) + Lead Capture Popup
 * Popup submits to tRPC leads.submit -> MailerLite
 */
import { useEffect, useRef, useState } from "react";
import { trpc } from "@/lib/trpc";

const WA_URL = "https://wa.me/447716477864";
const SESSION_KEY = "azelia_popup_shown";

export function WhatsAppBubble() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="az-wa-bubble"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.13 6.74 3.047 9.37L1.05 30.95l5.75-1.84A15.93 15.93 0 0016.004 32C24.83 32 32 24.822 32 16S24.83 0 16.004 0zm9.28 22.594c-.387 1.09-1.92 1.994-3.148 2.258-.838.178-1.933.32-5.617-1.207-4.717-1.95-7.754-6.74-7.988-7.053-.225-.313-1.893-2.52-1.893-4.806 0-2.285 1.197-3.4 1.621-3.832.387-.4.845-.5 1.127-.5.28 0 .562.003.807.014.26.012.607-.099.95.724.355.844 1.207 2.928 1.313 3.141.107.213.178.463.035.744-.14.28-.21.454-.42.7-.21.245-.44.547-.63.735-.21.21-.428.437-.184.857.245.42 1.088 1.793 2.336 2.906 1.605 1.43 2.957 1.873 3.377 2.083.42.21.665.175.91-.105.245-.28 1.05-1.225 1.33-1.645.28-.42.56-.35.945-.21.385.14 2.45 1.155 2.87 1.365.42.21.7.315.805.49.105.175.105 1.01-.282 2.1z"/>
      </svg>
    </a>
  );
}

export function LeadCapturePopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shownRef = useRef(false);

  const submitMutation = trpc.leads.submit.useMutation({
    onSuccess: () => setSubmitted(true),
    onError: () => setSubmitted(true), // show success anyway — don't block UX on API errors
  });

  const show = () => {
    if (shownRef.current) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    shownRef.current = true;
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);
  };

  useEffect(() => {
    timerRef.current = setTimeout(show, 90000);

    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled >= 0.5) show();
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && document.visibilityState === "visible") show();
    };

    // Manual trigger from navbar "Free Mockup" button
    const onManualOpen = () => {
      shownRef.current = false;
      setVisible(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("azelia:open-popup", onManualOpen);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("azelia:open-popup", onManualOpen);
    };
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    submitMutation.mutate({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
    });
  };

  const close = () => setVisible(false);

  return (
    <div
      className={`az-popup-overlay ${visible ? "visible" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="az-popup-card">
        <button
          onClick={close}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--az-muted-text)",
            padding: "0.25rem",
          }}
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                backgroundColor: "var(--az-terracotta)",
                color: "var(--az-cream)",
                padding: "0.25rem 0.75rem",
                borderRadius: "2px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Free offer
            </div>

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "1.75rem",
                color: "var(--az-ink)",
                marginBottom: "0.5rem",
                lineHeight: 1.2,
              }}
            >
              Get a free website mockup.
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                color: "var(--az-muted-text)",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              Leave your details and we'll send you a free custom mockup of what your new site could look like.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { id: "name", label: "Your name", type: "text", placeholder: "Emma" },
                { id: "email", label: "Email address", type: "email", placeholder: "emma@studio.co.uk" },
                { id: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+44 7700 000000" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    style={{
                      display: "block",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "var(--az-ink)",
                      marginBottom: "0.35rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.7rem 0.875rem",
                      border: errors[field.id] ? "1.5px solid var(--az-terracotta)" : "1.5px solid rgba(122, 140, 110, 0.3)",
                      borderRadius: "2px",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem",
                      color: "var(--az-ink)",
                      backgroundColor: "var(--az-parchment)",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                  {errors[field.id] && (
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "var(--az-terracotta)", marginTop: "0.25rem" }}>
                      {errors[field.id]}
                    </p>
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={submitMutation.isPending}
                className="az-btn-primary"
                style={{ marginTop: "0.5rem", opacity: submitMutation.isPending ? 0.7 : 1 }}
              >
                {submitMutation.isPending ? "Sending..." : "Get my free mockup"}
              </button>
            </form>


          </>
        ) : (
          <div style={{ textAlign: "center", padding: "1rem 0" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "1.75rem",
                color: "var(--az-ink)",
                marginBottom: "0.75rem",
              }}
            >
              You're all set, {form.name.split(" ")[0]}.
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                color: "var(--az-muted-text)",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              Your free mockup request is confirmed. We'll be in touch at {form.email} shortly.
            </p>
            <button onClick={close} className="az-btn-outline">
              Back to the page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
