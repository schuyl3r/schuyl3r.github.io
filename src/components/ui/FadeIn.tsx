"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
}

export function FadeIn({ children, className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasIntersected, setHasIntersected] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const isVisible = prefersReducedMotion || hasIntersected;

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
