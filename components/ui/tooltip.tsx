"use client";

import { useState, createElement } from "react";
import { getTechIcon } from "@/lib/tech-icons";

type TooltipProps = {
  label: string;
};

export function Tooltip({ label }: TooltipProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = getTechIcon(label);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium tracking-wide font-mono transition-colors duration-200"
        style={{
          border: "1px solid var(--border-light)",
          color: hovered ? "var(--text-secondary)" : "var(--text-muted)",
          background: hovered ? "var(--bg-subtle)" : "var(--bg-surface)",
          transition: "background 200ms ease, color 200ms ease",
          letterSpacing: "0.02em",
          cursor: "default",
        }}
      >
        {Icon && createElement(Icon, {
          size: 13,
          className: "shrink-0",
          style: { 
            color: hovered ? "var(--accent-color)" : "var(--text-muted)",
            transform: hovered ? "scale(1.3)" : "scale(1)",
            transition: "transform 200ms ease, color 200ms ease",
          },
          "aria-hidden": "true"
        })}
        <span>{label}</span>
      </div>
    </div>
  );
}
