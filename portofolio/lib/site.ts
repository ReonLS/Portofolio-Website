export const siteConfig = {
  name: "Portfolio",
  title: "Portfolio — Developer",
  description:
    "Personal portfolio showcasing projects, skills, and experience.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  author: {
    name: "Your Name",
    email: "hello@example.com",
  },
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ] as const,
} as const;
