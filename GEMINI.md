# AGENTS.md

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Project Overview

A personal portfolio website for **Rexi Leon Saputra**, a backend software engineer. Built with **Next.js 16** (App Router), **React 19**, **TypeScript 5**, and **Tailwind CSS v4**.

Key characteristics:
- Multi-page site: Home, About, Projects, Contact
- Dark/light theme with system preference detection and no flash-of-wrong-theme (FOWT)
- Monochromatic design system with CSS custom properties as design tokens
- All project data is static — stored in `data/projects.ts`, no database or external API

## Tech Stack

| Layer          | Technology                         |
|----------------|------------------------------------|
| Framework      | Next.js 16.2.9 (App Router)        |
| UI Library     | React 19.2.4                       |
| Language       | TypeScript 5 (strict mode)         |
| Styling        | Tailwind CSS v4 + vanilla CSS tokens |
| Linting        | ESLint 9 (`eslint-config-next`)    |
| Package Manager| npm (uses `package-lock.json`)     |

## Directory Structure

```
app/                    # Next.js App Router
  (site)/               # Route group — shares a site layout (header/footer)
    page.tsx            # Home page
    about/              # /about route
    projects/           # /projects route
      [slug]/           # /projects/[slug] dynamic route
    contact/            # /contact route
    layout.tsx          # Site layout (header + footer wrapper)
  layout.tsx            # Root layout (html/body, fonts, ThemeProvider, metadata)
  globals.css           # Global styles, design tokens, utility classes
  error.tsx             # Global error boundary
  loading.tsx           # Global loading UI
  not-found.tsx         # 404 page
  robots.ts             # Robots.txt route handler
  sitemap.ts            # Sitemap route handler

components/
  layout/               # Header, Footer
  sections/             # Page-level section components (Hero, ProjectCard, ContactLinkList)
  ui/                   # Reusable UI primitives (ThemeToggle)

data/
  projects.ts           # Static project data — edit here to add/update projects

lib/
  fonts.ts              # Next.js font configuration (font CSS variables)
  site.ts               # Global site config (name, URL, nav links, author info)
  theme-provider.tsx    # Client-side ThemeProvider context

types/
  project.ts            # Project TypeScript interface
```

## Setup Commands

```bash
# Install dependencies
npm install

# Set environment variables (optional — defaults to localhost:3000)
# Create a .env.local file:
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Development Workflow

```bash
# Start the development server (hot reload on http://localhost:3000)
npm run dev

# Type-check (uses TypeScript's noEmit mode)
npx tsc --noEmit

# Lint
npm run lint
```

## Build and Deployment

```bash
# Production build (outputs to .next/)
npm run build

# Start production server
npm run start
```

There is no CI/CD pipeline configured yet. Deployment is manual.

## Testing Instructions

There is currently **no test suite** configured in this project. If adding tests:
- Place test files alongside source files or in a `__tests__/` directory
- Use a framework compatible with React 19 (e.g., Vitest + React Testing Library)
- Run `npm run lint` and `npx tsc --noEmit` as the current correctness gate before committing

## Code Style Guidelines

### TypeScript
- **Strict mode** is enabled — no implicit `any`, no unchecked nulls
- Use `type` imports: `import type { Foo } from "..."` for type-only imports
- Path alias `@/*` maps to the project root (e.g., `@/lib/site`, `@/components/sections/hero`)

### Components
- All components are **React Server Components by default**
- Add `"use client"` only when browser APIs (e.g., `localStorage`, event handlers, `useState`) are required
- Components live in `components/` grouped by `layout/`, `sections/`, or `ui/`
- Section components are large, page-specific blocks; UI components are small, reusable primitives

### Styling
- **Design tokens** are CSS custom properties defined in `app/globals.css` — always use them instead of hardcoded values (e.g., `var(--text-primary)` not `#171717`)
- Tailwind utility classes are used for layout and spacing; token-based `style` props are used for color values that must respond to theme switches
- Dark mode is controlled via `[data-theme="dark"]` attribute on `<html>` (set by an inline script in the root layout to prevent FOWT) — **not** via Tailwind's `dark:` variant
- Animation utility classes (`animate-fade-in-up`, `animate-slide-in-left`, etc.) and stagger delays (`.delay-100` … `.delay-500`) are defined in `globals.css`
- The `link-hover` class provides an animated underline grow effect for links

### Theme System
- The `ThemeProvider` (`lib/theme-provider.tsx`) is a Client Component that provides `useTheme()` context
- Theme is persisted in `localStorage` under the key `'theme'` with values `'light'` or `'dark'`
- An inline `<script>` in `app/layout.tsx` reads `localStorage` before React hydrates to prevent flash
- View Transition API is used for smooth theme switching (see `globals.css`)

### Adding / Editing Content

#### Projects
Edit `data/projects.ts` — add a new entry to the `projects` array:
```ts
{
  slug: "my-project",        // Used as the URL: /projects/my-project
  title: "My Project",
  description: "...",
  tags: ["Go", "Docker"],
  href: "https://github.com/...",  // External link
  featured: true,            // Shows on the home page hero section
}
```

#### Site Metadata / Navigation
Edit `lib/site.ts` — update `siteConfig` for name, URL, author info, and nav links.

#### Fonts
Configured in `lib/fonts.ts` using `next/font`. Fonts are exposed as CSS variables and applied via the `fontVariables` string on `<html>`.

## Pull Request Guidelines

- Run `npm run lint` and `npx tsc --noEmit` before committing — both must pass
- Keep commits focused; one logical change per commit
- Prefer Server Components; reach for `"use client"` only when necessary
- All color values must use CSS custom property tokens from `globals.css`

## Common Gotchas

- **Dark mode**: Do **not** use Tailwind's `dark:` variant. Theme is switched via `data-theme="dark"` on `<html>`. Use `var(--token)` CSS variables or the `[data-theme="dark"]` selector in CSS instead.
- **Next.js 16 is different**: APIs (async `params`, metadata patterns, route handlers) differ from older versions. Always check `node_modules/next/dist/docs/` before assuming how an API works.
- **No test runner**: `npm test` is not configured. Use `npm run lint` + `npx tsc --noEmit` as your sanity check.
- **Static data only**: There is no database. All content (projects, links) lives in `data/` and `lib/site.ts`.
- **`@/*` path alias**: Resolves to the project root, not `src/`. For example: `@/data/projects` → `<root>/data/projects.ts`.
