import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "katalog-api",
    title: "Katalog-Api 2026",
    description:
      "A production-grade product listing API in Go where each user can manage their own catalogue, following production-grade practices and clean architecture principles. Enforced JWT-based authentication and RBAC authorization across endpoints.",
    tags: ["Go (Golang)", "REST API", "JWT", "MySQL", "Docker", "Swagger"],
    href: "https://github.com/ReonLS/Katalog-Api",
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
