"use client";

import { useState } from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { RiMailLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import type { IconType } from "react-icons";

import { CopyButton } from "@/components/ui/copy-button";

type ContactLink = {
  id: string;
  label: string;
  value: string;
  href: string;
  description: string;
  external: boolean;
};

const iconMap: Record<string, IconType> = {
  email: RiMailLine,
  github: RiGithubLine,
  linkedin: RiLinkedinLine,
};

export function ContactLinkList({ links }: { links: ContactLink[] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <ul
      className="flex flex-col max-w-lg"
      style={{ gap: "1px", background: "var(--border-light)" }}
    >
      {links.map((link) => {
        const IconComponent = iconMap[link.id];
        const isEmail = link.id === "email";

        return (
          <li key={link.id} style={{ background: "var(--bg-base)" }} className="relative">
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
              <div className="flex items-start gap-4">
                {IconComponent && (
                  <div className="mt-1" style={{ color: "var(--text-muted)" }}>
                    <IconComponent size={20} aria-hidden="true" />
                  </div>
                )}
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
              </div>

              {/* Arrow icon or Copy action for email */}
              <div className="flex items-center gap-2" onClick={(e) => isEmail && e.stopPropagation()}>
                {isEmail && (
                  <div className="z-10">
                    <CopyButton textToCopy={link.value} />
                  </div>
                )}
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
                  <HiArrowTopRightOnSquare size={16} />
                </span>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
