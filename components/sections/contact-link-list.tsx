"use client";

import { useState } from "react";

type ContactLink = {
  id: string;
  label: string;
  value: string;
  href: string;
  description: string;
  external: boolean;
};

export function ContactLinkList({ links }: { links: ContactLink[] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <ul
      className="flex flex-col max-w-lg"
      style={{ gap: "1px", background: "var(--border-light)" }}
    >
      {links.map((link) => (
        <li key={link.id} style={{ background: "var(--bg-base)" }}>
          <a
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between px-5 py-4 transition-colors duration-200"
            style={{
              textDecoration: "none",
              background:
                hoveredId === link.id
                  ? "var(--bg-subtle)"
                  : "var(--bg-surface)",
            }}
            onMouseEnter={() => setHoveredId(link.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex flex-col gap-0.5">
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: "var(--text-faint)", letterSpacing: "0.1em" }}
              >
                {link.label}
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {link.value}
              </span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                {link.description}
              </span>
            </div>

            {/* Arrow icon */}
            <span
              className="transition-transform duration-200"
              style={{
                color: "var(--text-muted)",
                transform:
                  hoveredId === link.id
                    ? "translate(3px, -3px)"
                    : "translate(0,0)",
              }}
              aria-hidden="true"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 13L13 3M13 3H7M13 3V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
