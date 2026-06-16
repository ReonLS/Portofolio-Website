import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "goshelf",
    title: "GoShelf",
    description:
      "A secure, production-grade product catalogue API in Go, built with clean architecture, JWT authentication, and RBAC authorization.",
    tags: ["Go (Golang)", "REST API", "JWT", "MySQL", "Docker", "Swagger"],
    href: "https://github.com/ReonLS/GoShelf",
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
