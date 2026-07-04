/**
 * AZELIA STUDIO — Ticker
 * FIXED: Only 2 key messages, slower (55s), no emojis that wrap,
 * bold on important words, clean single-line text.
 */
import { useEffect, useState } from "react";

const STORAGE_KEY = "azelia_countdown_end";
const DURATION_MS = 24 * 60 * 60 * 1000;

function getCountdownEnd(): number {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return parseInt(stored, 10);
  const end = Date.now() + DURATION_MS;
  localStorage.setItem(STORAGE_KEY, String(end));
  return end;
}

function formatTime(ms: number) {
  if (ms <= 0) return { h: "00", m: "00", s: "00" };
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return {
    h: String(h).padStart(2, "0"),
    m: String(m).padStart(2, "0"),
    s: String(s).padStart(2, "0"),
  };
}

export default function Ticker() {
  const [time, setTime] = useState(() => {
    const end = getCountdownEnd();
    return formatTime(end - Date.now());
  });

  useEffect(() => {
    const end = getCountdownEnd();
    const interval = setInterval(() => {
      setTime(formatTime(end - Date.now()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Two focused messages only — no emojis that can wrap
  const msg1 = `ONLY 4 BUILD SLOTS OPEN THIS MONTH`;
  const msg2 = `OFFER ENDS IN ${time.h}:${time.m}:${time.s}`;
  const separator = `\u00A0\u00A0\u00A0·\u00A0\u00A0\u00A0`;
  const tickerText = `${msg1}${separator}${msg2}${separator}`;

  return (
    <div
      style={{
        backgroundColor: "var(--az-terracotta)",
        color: "#FDFAF4",
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "0.7rem 0",
        position: "relative",
        zIndex: 200,
      }}
    >
      <div
        className="az-ticker-track"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.82rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          animationDuration: "55s",   /* slower */
        }}
      >
        {/* Quadrupled for seamless loop at slow speed */}
        <span style={{ paddingRight: "0" }}>{tickerText}{tickerText}{tickerText}{tickerText}</span>
        <span style={{ paddingRight: "0" }}>{tickerText}{tickerText}{tickerText}{tickerText}</span>
      </div>
    </div>
  );
}
