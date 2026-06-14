import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="flex flex-col gap-6 py-16">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
        Portfolio
      </p>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
        Hi, I&apos;m {siteConfig.author.name}
      </h1>
      <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {siteConfig.description}
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          View projects
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
