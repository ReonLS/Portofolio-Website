"use client";

import { useEffect, useState, type RefObject } from "react";

export interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useInView(
  ref: RefObject<Element | null>,
  options?: UseInViewOptions
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setInView(true);
        if (options?.triggerOnce) {
          observer.unobserve(el);
        }
      } else if (!options?.triggerOnce) {
        setInView(false);
      }
    }, options);

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [ref, options]);

  return inView;
}
