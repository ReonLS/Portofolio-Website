import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.author.name}.`,
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        About
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Add your story here — background, skills, and what you are looking for.
      </p>
    </section>
  );
}
