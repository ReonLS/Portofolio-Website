"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
} | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Sync React state with what the inline script already set on <html>
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const attr = document.documentElement.getAttribute(
      "data-theme"
    ) as Theme | null;
    const resolved = stored ?? attr ?? "light";
    setTheme(resolved);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";

    const apply = () => {
      setTheme(next);
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    };

    // View Transition API: browser snapshots before+after as textures,
    // cross-fades them as a single GPU-composited layer — no individual
    // element flicker or async color wash.
    if ("startViewTransition" in document) {
      (document as Document & { startViewTransition: (cb: () => void) => void })
        .startViewTransition(apply);
    } else {
      apply();
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
