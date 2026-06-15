import { Hero } from "@/components/sections/hero";
import { ProjectCard } from "@/components/sections/project-card";
import { getFeaturedProjects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />

      {featuredProjects.length > 0 && (
        <>
          {/* Section divider */}
          <div
            className="section-divider mb-12"
            aria-hidden="true"
          />

          <section className="pb-20">
            {/* Section header */}
            <div className="flex items-baseline justify-between mb-8">
              <div className="flex items-center gap-3">
                <span
                  className="inline-block h-px w-6"
                  style={{ background: "var(--text-primary)" }}
                  aria-hidden="true"
                />
                <h2
                  className="text-xs font-medium tracking-widest uppercase"
                  style={{
                    color: "var(--text-faint)",
                    letterSpacing: "0.15em",
                  }}
                >
                  Featured Projects
                </h2>
              </div>
            </div>

            {/* Project grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}
