"use client";

import { useState, createElement } from "react";
import { getTechIcon } from "@/lib/tech-icons";

type TooltipProps = {
  label: string;
  tooltip: string;
};

export function Tooltip({ label, tooltip }: TooltipProps) {
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
          color: "var(--text-muted)",
          background: "var(--bg-surface)",
          letterSpacing: "0.02em",
          cursor: "help",
        }}
      >
        {Icon && createElement(Icon, {
          size: 13,
          className: "shrink-0",
          style: { color: "var(--text-muted)" },
          "aria-hidden": "true"
        })}
        <span>{label}</span>
      </div>
      {hovered && (
        <div
          className="animate-fade-in-up absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 text-xs pointer-events-none"
          style={{
            background: "var(--text-primary)",
            color: "var(--bg-surface)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {tooltip}
          {/* Subtle triangle arrow */}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent"
            style={{
              borderTopColor: "var(--text-primary)",
            }}
          />
        </div>
      )}
    </div>
  );
}
