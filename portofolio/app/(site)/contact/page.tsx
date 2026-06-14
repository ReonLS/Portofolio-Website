import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.author.name}.`,
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Contact
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Interested in working together? Reach out via email or social links
        below.
      </p>
      <ul className="mt-8 space-y-3 text-sm">
        <li>
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
          >
            {siteConfig.author.email}
          </a>
        </li>
        <li>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}
