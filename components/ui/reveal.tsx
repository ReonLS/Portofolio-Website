"use client";

import { useRef, type ReactNode } from "react";
import { useInView } from "@/lib/use-in-view";

type RevealProps = {
  children: ReactNode;
  animationClass?: string;
  delayClass?: string;
};

export function Reveal({
  children,
  animationClass = "animate-fade-in-up",
  delayClass = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={inView ? `${animationClass} ${delayClass}` : "opacity-0"}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </div>
  );
}
