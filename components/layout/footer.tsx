import { siteConfig } from "@/lib/site";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className="mt-auto">
      {/* Center-fade gradient top border */}
      <div
        aria-hidden="true"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, var(--border-default) 30%, var(--border-default) 70%, transparent)",
        }}
      />

      <div
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg-subtle))",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 py-8">
          {/* Centered signature */}
          <div className="flex items-center justify-center gap-8">
            {/* Left decorative fade line */}
            <span
              aria-hidden="true"
              style={{
                display: "block",
                height: "1px",
                width: "6rem",
                background:
                  "linear-gradient(to left, var(--border-default), transparent)",
              }}
            />

            <p className="flex items-baseline gap-3 whitespace-nowrap">
              <span
                className="text-sm"
                style={{ color: "var(--text-faint)" }}
              >
                Created by
              </span>
              <span
                className={`text-sm font-semibold tracking-widest uppercase ${styles.authorName}`}
                style={{ letterSpacing: "0.15em" }}
              >
                {siteConfig.author.name}
              </span>
            </p>

            {/* Right decorative fade line */}
            <span
              aria-hidden="true"
              style={{
                display: "block",
                height: "1px",
                width: "6rem",
                background:
                  "linear-gradient(to right, var(--border-default), transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
