import Link from "next/link";

import { TerminalBlock } from "@/components/sections/terminal-block";
import { Tooltip } from "@/components/ui/tooltip";



const stack = [
  { label: "Go (Golang)" },
  { label: "REST API" },
  { label: "MySQL" },
  { label: "MariaDB" },
  { label: "Docker" },
  { label: "JWT" },
  { label: "RBAC" },
  { label: "Unit Testing" },
  { label: "Swagger" },
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
            style={{ background: "var(--accent-color)" }}
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
          className="animate-fade-in-up delay-300 text-sm leading-relaxed text-justify lg:text-left"
          style={{ color: "var(--text-secondary)", maxWidth: "28rem" }}
        >
          Final-year Computer Science student at Binus with hands-on backend development experience in Go. Focused on building scalable APIs, database architecture, and reliable infrastructure.
        </p>

        {/* Stack pills */}
        <ul className="animate-fade-in-up delay-400 mt-6 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li key={tech.label}>
              <Tooltip label={tech.label} />
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-500 mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/projects"
            className="inline-flex w-full sm:w-auto h-11 items-center justify-center px-7 text-xs font-medium tracking-widest uppercase transition-opacity duration-200 hover:opacity-70"
            style={{
              background: "var(--text-primary)",
              color: "var(--bg-surface)",
              letterSpacing: "0.12em",
            }}
          >
            View Projects
          </Link>
          <a
            href="/files/CV_Rexi-Leon-Saputra.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto h-11 items-center justify-center px-7 text-xs font-medium tracking-widest uppercase transition-opacity duration-200 hover:opacity-60"
            style={{
              border: "1px solid var(--border-default)",
              color: "var(--text-primary)",
              letterSpacing: "0.12em",
            }}
          >
            Download CV
          </a>
        </div>
      </div>

      {/* ── Right column: terminal block ── */}
      <div
        className="animate-fade-in-up delay-300 hidden lg:flex flex-col"
        aria-hidden="true"
      >
        <TerminalBlock />
      </div>
    </section>
  );
}
