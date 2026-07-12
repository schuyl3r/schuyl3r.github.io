"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { useCardHoverClass } from "@/hooks/useCardHoverClass";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const ref = useRef<HTMLElement>(null);
  const hoverClass = useCardHoverClass();

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <article
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card rounded-2xl border border-border ${hoverClass} ${className}`}
    >
      {children}
    </article>
  );
}
