"use client";

import Link from "next/link";
import { useState } from "react";

import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col gap-4 p-6 transition-all duration-200"
      style={{
        background: "var(--bg-surface)",
        border: `1px solid ${hovered ? "var(--border-strong)" : "var(--border-light)"}`,
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.06)"
          : "0 1px 3px rgba(0,0,0,0.02)",
      }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <h2
          className="text-base font-semibold leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          <Link
            href={`/projects/${project.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {project.title}
          </Link>
        </h2>

        {/* Arrow icon — fades in on hover */}
        <span
          className="shrink-0 transition-all duration-200"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
            color: "var(--text-muted)",
          }}
          aria-hidden="true"
        >
          <HiArrowTopRightOnSquare size={16} />
        </span>
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.description}
      </p>

      {/* Tags */}
      {project.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="px-2.5 py-1 text-xs font-medium tracking-wide transition-colors duration-200"
              style={{
                background: hovered ? "var(--bg-muted)" : "var(--bg-subtle)",
                color: "var(--text-muted)",
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
