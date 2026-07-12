"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface TimelineEntryProps {
  children: ReactNode;
}

/** Wraps a card with a timeline node that ignites as it enters the viewport. */
export function TimelineEntry({ children }: TimelineEntryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const active = prefersReducedMotion || inView;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "0px 0px -30% 0px", threshold: 0 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <div ref={ref} className="relative pl-8 sm:pl-12">
      <span
        aria-hidden
        className={`absolute top-7 left-0 h-2.5 w-2.5 rounded-full border-2 transition-[border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          active
            ? "border-accent bg-accent shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_18%,transparent)]"
            : "border-border bg-background"
        }`}
      />
      {children}
    </div>
  );
}
