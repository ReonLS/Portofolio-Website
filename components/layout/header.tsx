"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "color-mix(in srgb, var(--bg-base) 85%, transparent)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderColor: "var(--border-light)",
        transition: "background 300ms ease, border-color 300ms ease",
      }}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo / Name */}
        <Link
          href="/"
          className="group flex items-center gap-2"
          style={{ textDecoration: "none" }}
        >
          <span
            className="text-sm font-semibold tracking-widest uppercase transition-opacity duration-200 group-hover:opacity-60"
            style={{ color: "var(--text-primary)", letterSpacing: "0.15em" }}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Right side: nav + toggle */}
        <div className="flex items-center gap-6">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-8">
              {siteConfig.nav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative text-xs font-medium tracking-widest uppercase transition-opacity duration-200 hover:opacity-60"
                      style={{
                        color: isActive
                          ? "var(--text-primary)"
                          : "var(--text-muted)",
                        textDecoration: "none",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {item.label}
                      {/* Active underline */}
                      <span
                        className="absolute -bottom-0.5 left-0 h-px w-full origin-left transition-transform duration-300"
                        style={{
                          background: "var(--text-primary)",
                          transform: isActive ? "scaleX(1)" : "scaleX(0)",
                        }}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Divider */}
          <span
            className="h-4 w-px"
            style={{ background: "var(--border-default)" }}
            aria-hidden="true"
          />

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>

      {/* Scroll Progress Indicator Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-100 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: "var(--text-primary)",
        }}
      />
    </header>
  );
}
