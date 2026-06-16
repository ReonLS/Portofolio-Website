# Rexi Leon Saputra — Portfolio

Personal portfolio website built with **Next.js 16**, **React 19**, **TypeScript 5**, and **Tailwind CSS v4**.

## Stack

| | |
|---|---|
| Framework | Next.js 16.2.9 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Typography | Clash Display (local variable font) |
| Icons | react-icons 5 |

## Getting Started

```bash
npm install
npm run dev        # → http://localhost:3000
```

```bash
npm run lint       # ESLint
npx tsc --noEmit   # Type check
npm run build      # Production build
```

## Project Structure

```
app/(site)/        # Pages: Home, About, Projects, Contact
components/        # layout/, sections/, ui/
data/projects.ts   # Static project data — edit here to add projects
lib/site.ts        # Site config: name, email, social links, nav
lib/fonts.ts       # Font setup (Clash Display)
app/globals.css    # Design tokens + animation utilities
```

## Adding a Project

Edit `data/projects.ts`:

```ts
{
  slug: "my-project",
  title: "My Project",
  description: "...",
  tags: ["Go", "Docker"],
  href: "https://github.com/...",
  featured: true,   // true → shows on Home page
}
```

## Notes

- Dark mode via `data-theme="dark"` on `<html>` — **do not use Tailwind's `dark:` variant**
- All colors use CSS custom property tokens from `globals.css` — no hardcoded values
- No test suite configured; use `npm run lint` + `npx tsc --noEmit` as the correctness gate