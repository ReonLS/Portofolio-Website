import Link from "next/link";

import { Tooltip } from "@/components/ui/tooltip";

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

const stack = [
  { label: "Go (Golang)", tooltip: "Primary language — REST APIs & CLI tools" },
  { label: "REST API", tooltip: "Designing clean, stateless endpoints" },
  { label: "MySQL", tooltip: "Relational database design & optimization" },
  { label: "MariaDB", tooltip: "High-performance database clustering" },
  { label: "Docker", tooltip: "Containerization for production & local dev" },
  { label: "JWT", tooltip: "Stateless security & token authentication" },
  { label: "RBAC", tooltip: "Role-Based Access Control authorization" },
  { label: "Unit Testing", tooltip: "Testing handlers, services, and repositories" },
  { label: "Swagger", tooltip: "Interactive REST API documentation" },
];

export function Hero() {
  return (
    <section className="grid gap-16 py-20 sm:py-28 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
      {/* ── Left column: copy ── */}
      <div className="flex flex-col">
        {/* Label */}
        <div className="animate-fade-in flex items-center gap-3 mb-8">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--text-primary)" }}
            aria-hidden="true"
          />
          <p
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--text-faint)", letterSpacing: "0.15em" }}
          >
            Software Engineer - Backend
          </p>
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-in-up delay-100 font-semibold leading-none tracking-tight"
          style={{
            fontSize: "clamp(3.2rem, 7.5vw, 5rem)",
            color: "var(--text-primary)",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
          }}
        >
          Rexi Leon
          <br />
          Saputra.
        </h1>

        <p
          className="animate-fade-in-up delay-200 mt-4 text-lg font-medium"
          style={{ color: "var(--text-muted)", letterSpacing: "-0.02em" }}
        >
          Building the systems that power the web.
        </p>

        {/* Divider */}
        <div
          className="animate-fade-in-up delay-300 section-divider my-7"
          style={{ maxWidth: "18rem" }}
          aria-hidden="true"
        />

        {/* Description */}
        <p
          className="animate-fade-in-up delay-300 text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)", maxWidth: "28rem" }}
        >
          Final-year Computer Science student at Binus with hands-on backend development experience in Go. Focused on building scalable APIs, database architecture, and reliable infrastructure.
        </p>

        {/* Stack pills */}
        <ul className="animate-fade-in-up delay-400 mt-6 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li key={tech.label}>
              <Tooltip label={tech.label} tooltip={tech.tooltip} />
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-500 mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center justify-center px-7 text-xs font-medium tracking-widest uppercase transition-opacity duration-200 hover:opacity-70"
            style={{
              background: "var(--text-primary)",
              color: "var(--bg-surface)",
              letterSpacing: "0.12em",
            }}
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center px-7 text-xs font-medium tracking-widest uppercase transition-opacity duration-200 hover:opacity-60"
            style={{
              border: "1px solid var(--border-default)",
              color: "var(--text-primary)",
              letterSpacing: "0.12em",
            }}
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* ── Right column: terminal block ── */}
      <div
        className="animate-fade-in-up delay-300 hidden lg:flex flex-col"
        aria-hidden="true"
      >
        {/* Terminal window */}
        <div
          style={{
            border: "1px solid var(--border-light)",
            background: "var(--bg-surface)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
          }}
        >
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
            {/* Line numbers + code */}
            {codeLines.map((line, idx) => (
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
                  {line.tokens.length === 0 ? (
                    <>&nbsp;</>
                  ) : (
                    line.tokens.map((token, ti) => (
                      <span key={ti} style={{ color: token.color }}>
                        {token.text}
                      </span>
                    ))
                  )}
                </span>
              </div>
            ))}

            {/* Blinking cursor */}
            <div className="flex items-baseline gap-5 mt-1">
              <span
                className="select-none shrink-0 w-4 text-right tabular-nums"
                style={{ color: "var(--border-default)" }}
              >
                {codeLines.length + 1}
              </span>
              <span
                className="inline-block h-3.5 w-1.5 animate-pulse"
                style={{ background: "var(--text-muted)" }}
              />
            </div>
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

      </div>
    </section>
  );
}
