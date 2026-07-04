"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const REVEAL_DISTANCE_PX = 180;
const TRAVEL_PX = 16;

export function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const element = ref.current;
    if (!element) return;

    let ticking = false;
    const compute = () => {
      const viewportHeight = window.innerHeight;
      const atMaxScroll =
        window.scrollY + viewportHeight >=
        document.documentElement.scrollHeight - 1;

      if (atMaxScroll) {
        setProgress(1);
        ticking = false;
        return;
      }

      const rect = element.getBoundingClientRect();
      const raw = (viewportHeight - rect.top) / REVEAL_DISTANCE_PX;
      setProgress(Math.min(1, Math.max(0, raw)));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [prefersReducedMotion]);

  const displayProgress = prefersReducedMotion ? 1 : progress;

  return (
    <div
      ref={ref}
      style={{
        opacity: displayProgress,
        transform: `translateY(${(1 - displayProgress) * TRAVEL_PX}px)`,
        transitionDelay:
          prefersReducedMotion || delay === 0 ? undefined : `${delay}ms`,
      }}
      className={`transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
    >
      {children}
    </div>
  );
}
