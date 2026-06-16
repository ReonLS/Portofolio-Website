"use client";

import { useState, useEffect } from "react";

// Decorative code lines for the terminal block
const codeLines = [
  { tokens: [{ text: "package ", color: "var(--text-muted)" }, { text: "main", color: "var(--text-secondary)" }] },
  { tokens: [] },
  { tokens: [{ text: "import ", color: "var(--text-muted)" }, { text: "\"github.com/gin-gonic/gin\"", color: "var(--text-secondary)" }] },
  { tokens: [] },
  { tokens: [{ text: "func ", color: "var(--text-muted)" }, { text: "main", color: "var(--text-primary)" }, { text: "() {", color: "var(--text-muted)" }] },
  { tokens: [{ text: "  r := ", color: "var(--text-muted)" }, { text: "gin", color: "var(--text-secondary)" }, { text: ".Default()", color: "var(--text-muted)" }] },
  { tokens: [{ text: "  r.GET(", color: "var(--text-muted)" }, { text: "\"/api/health\"", color: "var(--text-secondary)" }, { text: ", func(c *", color: "var(--text-muted)" }, { text: "gin", color: "var(--text-secondary)" }, { text: ".Context) {", color: "var(--text-muted)" }] },
  { tokens: [{ text: "    c.JSON(", color: "var(--text-muted)" }, { text: "200", color: "var(--text-primary)" }, { text: ", ", color: "var(--text-muted)" }, { text: "gin.H", color: "var(--text-secondary)" }, { text: "{\"status\": ", color: "var(--text-muted)" }, { text: "\"ok\"", color: "var(--text-secondary)" }, { text: "})", color: "var(--text-muted)" }] },
  { tokens: [{ text: "  })", color: "var(--text-muted)" }] },
  { tokens: [{ text: "  r.Run(", color: "var(--text-muted)" }, { text: "\":8080\"", color: "var(--text-secondary)" }, { text: ")", color: "var(--text-muted)" }] },
  { tokens: [{ text: "}", color: "var(--text-muted)" }] },
];

type Token = { text: string; color: string };
type Phase = "typing" | "paused" | "deleting";

/** Total character count of a line's tokens. */
function lineLength(lineIdx: number): number {
  return codeLines[lineIdx].tokens.map((t) => t.text).join("").length;
}

/** Render only the first `charCount` characters across multiple tokens, preserving syntax colors. */
function renderPartialTokens(tokens: Token[], charCount: number) {
  let remaining = charCount;
  return tokens.map((token, i) => {
    if (remaining <= 0) return null;
    const visibleText = token.text.slice(0, remaining);
    remaining -= token.text.length;
    return (
      <span key={i} style={{ color: token.color }}>
        {visibleText}
      </span>
    );
  });
}

/** Sharp on/off cursor block, like a real text editor cursor. */
function Cursor() {
  return (
    <span
      className="inline-block h-3.5 w-1.5 align-middle ml-px"
      style={{
        background: "var(--text-muted)",
        animation: "cursorBlink 1s step-end infinite",
      }}
    />
  );
}

export function TerminalBlock() {
  const [typedLines, setTypedLines] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for reduced motion preference on mount
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setTypedLines(codeLines.length);
      setPhase("paused");
    }
  }, []);

  // Main animation loop
  useEffect(() => {
    if (reducedMotion) return;

    // ── TYPING phase ──
    if (phase === "typing") {
      // All lines typed → pause before deleting
      if (typedLines >= codeLines.length) {
        const pauseTimer = setTimeout(() => setPhase("deleting"), 2000);
        return () => clearTimeout(pauseTimer);
      }

      const currentLineText = codeLines[typedLines].tokens
        .map((t) => t.text)
        .join("");

      const delay = currentLineText.length === 0 ? 80 : 25;

      const timer = setTimeout(() => {
        if (typedChars < currentLineText.length) {
          setTypedChars((c) => c + 1);
        } else {
          setTypedLines((l) => l + 1);
          setTypedChars(0);
        }
      }, delay);

      return () => clearTimeout(timer);
    }

    // ── DELETING phase ──
    if (phase === "deleting") {
      // All lines deleted → pause before retyping
      if (typedLines <= 0 && typedChars <= 0) {
        const pauseTimer = setTimeout(() => setPhase("typing"), 500);
        return () => clearTimeout(pauseTimer);
      }

      // Faster deletion: 15ms per char, 40ms for empty lines
      const currentLine = typedLines > 0 ? typedLines - 1 : 0;
      const isOnEmptyLine =
        typedLines < codeLines.length &&
        codeLines[typedLines].tokens.length === 0;
      const delay = isOnEmptyLine ? 40 : 15;

      const timer = setTimeout(() => {
        if (typedChars > 0) {
          // Delete char by char on current line
          setTypedChars((c) => c - 1);
        } else if (typedLines > 0) {
          // Move up to previous line, set chars to full length of that line
          const prevLineLen = lineLength(currentLine);
          setTypedLines((l) => l - 1);
          setTypedChars(prevLineLen);
        }
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [typedLines, typedChars, phase, reducedMotion]);

  // During deletion, the "active" line is the one being erased
  // During typing, it's the one being typed
  const activeLine =
    phase === "deleting" && typedLines > 0 && typedChars === 0
      ? typedLines - 1
      : typedLines;

  const showFinalCursor =
    phase === "typing" && typedLines >= codeLines.length;

  return (
    <div
      style={{
        border: "1px solid var(--border-light)",
        background: "var(--bg-surface)",
        boxShadow: "var(--shadow-lg), inset 0 1px 0 var(--border-hairline)",
      }}
    >
      {/* Inline keyframe for sharp cursor blink */}
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          borderBottom: "1px solid var(--border-light)",
          background: "var(--bg-subtle)",
        }}
      >
        {/* Traffic lights (monochrome) */}
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ background: "var(--border-default)" }}
          />
        ))}
        <span
          className="ml-3 text-xs font-mono"
          style={{ color: "var(--text-faint)", letterSpacing: "0.05em" }}
        >
          main.go
        </span>
      </div>

      {/* Code body */}
      <div className="px-5 py-5 font-mono text-xs leading-6 overflow-x-auto">
        {codeLines.map((line, idx) => {
          const isFullyTyped = idx < typedLines;
          const isCurrentLine = idx === activeLine && idx === typedLines;
          const isNotYetTyped = idx > typedLines;

          return (
            <div key={idx} className="flex items-baseline gap-5">
              {/* Line number */}
              <span
                className="select-none shrink-0 w-4 text-right tabular-nums"
                style={{ color: "var(--border-default)" }}
              >
                {idx + 1}
              </span>
              {/* Tokens */}
              <span>
                {isFullyTyped ? (
                  // Fully typed line — render all tokens
                  line.tokens.length === 0 ? (
                    <>&nbsp;</>
                  ) : (
                    line.tokens.map((token, ti) => (
                      <span key={ti} style={{ color: token.color }}>
                        {token.text}
                      </span>
                    ))
                  )
                ) : isCurrentLine ? (
                  // Currently typing/deleting line — render partial tokens + cursor
                  <>
                    {line.tokens.length === 0 ? (
                      <>&nbsp;</>
                    ) : (
                      renderPartialTokens(line.tokens, typedChars)
                    )}
                    {!showFinalCursor && <Cursor />}
                  </>
                ) : isNotYetTyped ? (
                  // Not yet typed — show empty space to preserve height
                  <>&nbsp;</>
                ) : null}
              </span>
            </div>
          );
        })}

        {/* Blinking cursor on final line after typing is complete */}
        {showFinalCursor && (
          <div className="flex items-baseline gap-5 mt-1">
            <span
              className="select-none shrink-0 w-4 text-right tabular-nums"
              style={{ color: "var(--border-default)" }}
            >
              {codeLines.length + 1}
            </span>
            <Cursor />
          </div>
        )}
      </div>

      {/* Status bar */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{
          borderTop: "1px solid var(--border-light)",
          background: "var(--bg-subtle)",
        }}
      >
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--text-secondary)" }}
          />
          <span
            className="text-xs font-mono"
            style={{ color: "var(--text-faint)" }}
          >
            server running on :8080
          </span>
        </div>
        <span
          className="text-xs font-mono"
          style={{ color: "var(--text-faint)" }}
        >
          Go
        </span>
      </div>
    </div>
  );
}
