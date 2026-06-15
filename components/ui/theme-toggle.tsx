"use client";

import { useState } from "react";

import { RiSunLine, RiMoonLine } from "react-icons/ri";

import { useTheme } from "@/lib/theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  // Track when thumb is mid-travel for the squish effect
  const [isMoving, setIsMoving] = useState(false);

  const handleToggle = () => {
    setIsMoving(true);
    toggle();
    // Squish lasts slightly longer than half the spring duration
    setTimeout(() => setIsMoving(false), 220);
  };

  // iOS-like: thumb stretches wider mid-travel, then springs back
  const thumbW = isMoving ? 21 : 16;

  // Thumb left: when going right, account for extra width so it doesn't overflow
  const thumbLeft = isDark ? `calc(100% - ${thumbW}px - 3px)` : "3px";

  return (
    <button
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={handleToggle}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        width: "44px",
        height: "24px",
        borderRadius: "9999px",
        border: "1px solid",
        borderColor: "var(--border-default)",
        background: isDark ? "var(--text-primary)" : "var(--bg-muted)",
        cursor: "pointer",
        padding: 0,
        flexShrink: 0,
        // Track fades smoothly — longer than thumb so color settles after thumb lands
        transition:
          "background 450ms cubic-bezier(0.4, 0, 0.2, 1), border-color 450ms ease",
      }}
    >
      {/* ── Thumb ── */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "3px",
          left: thumbLeft,
          width: `${thumbW}px`,
          height: "16px",
          borderRadius: "9999px",
          background: isDark ? "var(--bg-base)" : "var(--bg-surface)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
          // Spring easing overshoots slightly → feels alive
          // Width uses a snappier ease so squish resolves before spring bounce
          transition: [
            `left 380ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
            `width 180ms cubic-bezier(0.4, 0, 0.2, 1)`,
            `background 400ms ease`,
          ].join(", "),
        }}
      >
        {/* ── Sun — visible in light mode ── */}
        <RiSunLine
          size={9}
          style={{
            position: "absolute",
            color: "var(--text-muted)",
            // Out → fade + shrink fast; In → delay then bloom in
            opacity: isDark ? 0 : 1,
            transform: isDark
              ? "scale(0.4) rotate(-120deg)"
              : "scale(1) rotate(0deg)",
            transition: isDark
              ? "opacity 120ms ease, transform 150ms ease"
              : "opacity 200ms ease 180ms, transform 300ms cubic-bezier(0.34,1.56,0.64,1) 160ms",
          }}
        />

        {/* ── Moon — visible in dark mode ── */}
        <RiMoonLine
          size={9}
          style={{
            position: "absolute",
            color: "var(--text-primary)",
            opacity: isDark ? 1 : 0,
            transform: isDark
              ? "scale(1) rotate(0deg)"
              : "scale(0.4) rotate(120deg)",
            transition: isDark
              ? "opacity 200ms ease 180ms, transform 300ms cubic-bezier(0.34,1.56,0.64,1) 160ms"
              : "opacity 120ms ease, transform 150ms ease",
          }}
        />
      </span>
    </button>
  );
}
