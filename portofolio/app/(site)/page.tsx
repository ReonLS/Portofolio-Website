import { Hero } from "@/components/sections/hero";
import { ProjectCard } from "@/components/sections/project-card";
import { getFeaturedProjects } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />
      {featuredProjects.length > 0 && (
        <section className="pb-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Featured projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
