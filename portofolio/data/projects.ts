import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "example-project",
    title: "Example Project",
    description:
      "A sample project placeholder. Replace with your own case study.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://github.com",
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
