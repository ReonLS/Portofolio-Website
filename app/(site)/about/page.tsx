import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.author.name}.`,
};

export default function AboutPage() {
  const skillCategories = [
    { name: "Languages", skills: ["Go (Golang)"] },
    { name: "Backend", skills: ["REST", "SQL", "JWT", "RBAC", "Unit Testing"] },
    { name: "Databases", skills: ["MariaDB", "MySQL"] },
    { name: "DevOps & Tools", skills: ["Docker & Compose", "Git", "Postman", "Swagger"] },
    { name: "Platform", skills: ["Ivanti ITSM"] },
  ];

  return (
    <section className="py-20 sm:py-28">
      {/* Page label */}
      <div className="animate-fade-in flex items-center gap-3 mb-10">
        <span
          className="inline-block h-px w-6"
          style={{ background: "var(--text-primary)" }}
          aria-hidden="true"
        />
        <p
          className="text-xs font-medium tracking-widest uppercase"
          style={{ color: "var(--text-faint)", letterSpacing: "0.15em" }}
        >
          About
        </p>
      </div>

      {/* Heading */}
      <h1
        className="animate-fade-in-up delay-100 font-semibold leading-tight tracking-tight mb-8"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          color: "var(--text-primary)",
          letterSpacing: "-0.025em",
          maxWidth: "28rem",
        }}
      >
        The person behind the work.
      </h1>

      {/* Divider */}
      <div
        className="animate-fade-in-up delay-200 section-divider mb-12"
        style={{ maxWidth: "20rem" }}
        aria-hidden="true"
      />

      {/* Body content */}
      <div className="animate-fade-in-up delay-300 grid gap-12 lg:grid-cols-[1.2fr_1fr] max-w-4xl mb-20">
        {/* Left — bio & currently */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "var(--text-faint)", letterSpacing: "0.1em" }}
            >
              Background
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              I am a final-year Computer Science student at Bina Nusantara University specializing in backend development. I have hands-on experience in Go (Golang), including designing REST APIs, security & authentication protocols, databases, and DevOps practices like containerization.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              During my one-year professional delivery experience as a Software Engineer Intern at PT Realta Chakradarma, I took ownership of projects from requirements gathering and technical documentation through production deployment and end-user handover.
            </p>
          </div>

          <div
            className="pt-6"
            style={{ borderTop: "1px solid var(--border-light)" }}
          >
            <p
              className="text-xs font-medium tracking-widest uppercase mb-3"
              style={{ color: "var(--text-faint)", letterSpacing: "0.1em" }}
            >
              Currently
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Expected to graduate in August 2026. Actively looking for Backend Software Engineer opportunities to build robust and scalable systems.
            </p>
          </div>
        </div>

        {/* Right — skills grid */}
        <div className="flex flex-col gap-6">
          <p
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--text-faint)", letterSpacing: "0.1em" }}
          >
            Technical Proficiencies
          </p>
          <div className="flex flex-col gap-5">
            {skillCategories.map((cat) => (
              <div key={cat.name} className="flex flex-col gap-2">
                <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                  {cat.name}
                </span>
                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono"
                      style={{
                        border: "1px solid var(--border-light)",
                        color: "var(--text-secondary)",
                        background: "var(--bg-surface)",
                      }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="animate-fade-in-up delay-400 max-w-4xl mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span
            className="inline-block h-px w-6"
            style={{ background: "var(--text-primary)" }}
            aria-hidden="true"
          />
          <h2
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--text-faint)", letterSpacing: "0.15em" }}
          >
            Experience
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          <div
            className="p-6 transition-colors duration-200"
            style={{
              border: "1px solid var(--border-light)",
              background: "var(--bg-surface)",
            }}
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                  Software Engineer Intern
                </h3>
                <p className="text-xs font-mono mt-0.5" style={{ color: "var(--text-muted)" }}>
                  PT Realta Chakradarma · Banking &amp; Enterprise Client: Bank Tabungan Negara
                </p>
              </div>
              <span className="text-xs font-mono tabular-nums shrink-0" style={{ color: "var(--text-faint)" }}>
                Feb 2025 — Feb 2026
              </span>
            </div>

            <ul className="list-disc pl-4 text-xs leading-relaxed flex flex-col gap-2" style={{ color: "var(--text-secondary)" }}>
              <li>
                Delivered 3 enterprise ITSM projects on Ivanti for Bank Tabungan Negara, participating across business analysis (BA), development (Dev), and quality assurance (QA) phases from requirements gathering to production deployment.
              </li>
              <li>
                Validated third-party REST API integrations using Postman, ensuring accurate event-to-ticket data flow between external systems and Ivanti.
              </li>
              <li>
                Led end-to-end delivery of a custom catalogue module for a 5-person team, owning data modelling, SQL business rules, workflow automation, and UT/SIT/UAT verification.
              </li>
              <li>
                Drove the 1.5-year Change Management project from unit testing (UT) to production, authoring 60+ pages of detailed technical documentation and leading knowledge transfer to 15+ stakeholders across 5 business roles.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="animate-fade-in-up delay-500 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <span
            className="inline-block h-px w-6"
            style={{ background: "var(--text-primary)" }}
            aria-hidden="true"
          />
          <h2
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "var(--text-faint)", letterSpacing: "0.15em" }}
          >
            Education
          </h2>
        </div>

        <div
          className="p-6"
          style={{
            border: "1px solid var(--border-light)",
            background: "var(--bg-surface)",
          }}
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between mb-4">
            <div>
              <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                Bina Nusantara University
              </h3>
              <p className="text-xs font-mono mt-0.5" style={{ color: "var(--text-muted)" }}>
                Bachelor of Computer Science · CGPA: 3.77 / 4.00
              </p>
            </div>
            <span className="text-xs font-mono tabular-nums shrink-0" style={{ color: "var(--text-faint)" }}>
              Expected August 2026
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
              Relevant Coursework
            </span>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Data Structures, Algorithm Design and Analysis, Database Technology, Software Engineering, Operating Systems, Computer Networks, Object Oriented Programming
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
