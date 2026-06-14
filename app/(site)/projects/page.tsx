import type { Metadata } from "next";

import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <section className="py-20 sm:py-28">
      {/* Page label */}
      <div className="animate-fade-in flex items-center gap-3 mb-10">
        <span
          className="inline-block h-px w-6"
          style={{ background: "var(--text-primary)" }}
          aria-hidden="true"
        />
        <p
          className="text-xs font-medium tracking-widest uppercase"
          style={{ color: "var(--text-faint)", letterSpacing: "0.15em" }}
        >
          Work
        </p>
      </div>

      {/* Heading */}
      <h1
        className="animate-fade-in-up delay-100 font-semibold leading-tight tracking-tight"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          color: "var(--text-primary)",
          letterSpacing: "-0.025em",
          maxWidth: "28rem",
        }}
      >
        Selected projects.
      </h1>

      {/* Sub-heading */}
      <p
        className="animate-fade-in-up delay-200 mt-4 text-base leading-relaxed max-w-lg"
        style={{ color: "var(--text-secondary)" }}
      >
        A collection of work I&apos;ve built and contributed to.
      </p>

      {/* Divider + count */}
      <div className="animate-fade-in-up delay-300 flex items-center justify-between mt-12 mb-8">
        <div
          className="section-divider flex-1"
          aria-hidden="true"
        />
        <span
          className="ml-4 text-xs tabular-nums shrink-0"
          style={{ color: "var(--text-faint)" }}
        >
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {/* Project grid */}
      <div className="animate-fade-in-up delay-400 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
