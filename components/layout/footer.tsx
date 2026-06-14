import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto"
      style={{ borderTop: "1px solid var(--border-light)" }}
    >
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          {/* Left — Brand */}
          <div className="flex flex-col gap-1">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--text-primary)", letterSpacing: "0.15em" }}
            >
              {siteConfig.name}
            </span>
            <p className="text-xs" style={{ color: "var(--text-faint)" }}>
              © {year} {siteConfig.author.name}
            </p>
          </div>

          {/* Right — Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover text-xs font-medium tracking-widest uppercase transition-opacity duration-200 hover:opacity-50"
              style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover text-xs font-medium tracking-widest uppercase transition-opacity duration-200 hover:opacity-50"
              style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
