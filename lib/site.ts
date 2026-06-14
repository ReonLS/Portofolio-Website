export const siteConfig = {
  name: "Rexi Leon Saputra",
  title: "Rexi Leon Saputra — Backend Software Engineer",
  description:
    "Final-year Computer Science student with hands-on backend development experience in Go, including REST API development, authentication systems, containerization, and API documentation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  author: {
    name: "Rexi Leon Saputra",
    email: "rexi.leon.saputra@gmail.com",
  },
  links: {
    github: "https://github.com/ReonLS",
    linkedin: "https://linkedin.com/in/rexileonsaputra",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ] as const,
} as const;
