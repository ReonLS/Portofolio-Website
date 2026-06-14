import type { Metadata } from "next";

import { ContactLinkList } from "@/components/sections/contact-link-list";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.author.name}.`,
};

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: siteConfig.author.email,
    href: `mailto:${siteConfig.author.email}`,
    description: "Send me a message directly",
    external: false,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/ReonLS",
    href: siteConfig.links.github,
    description: "See my open source work",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/rexileonsaputra",
    href: siteConfig.links.linkedin,
    description: "Connect professionally",
    external: true,
  },
];

export default function ContactPage() {
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
          Contact
        </p>
      </div>

      {/* Heading */}
      <h1
        className="animate-fade-in-up delay-100 font-semibold leading-tight tracking-tight"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          color: "var(--text-primary)",
          letterSpacing: "-0.025em",
          maxWidth: "28rem",
        }}
      >
        Let&apos;s work together.
      </h1>

      {/* Sub-text */}
      <p
        className="animate-fade-in-up delay-200 mt-4 text-base leading-relaxed max-w-lg"
        style={{ color: "var(--text-secondary)" }}
      >
        Interested in working together? Reach out via any of the channels below.
      </p>

      {/* Divider */}
      <div
        className="animate-fade-in-up delay-300 section-divider mt-12 mb-10"
        style={{ maxWidth: "20rem" }}
        aria-hidden="true"
      />

      {/* Contact link cards — Client Component for hover state */}
      <div className="animate-fade-in-up delay-400">
        <ContactLinkList links={contactLinks} />
      </div>
    </section>
  );
}
