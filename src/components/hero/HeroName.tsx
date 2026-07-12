"use client";

import { useCallback, useEffect, useRef } from "react";
import { useCanHover } from "@/hooks/useCanHover";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const NAME = "Schuyler Ng";
const BASE_WEIGHT = 600;
const PEAK_WEIGHT = 750;
const RADIUS_PX = 140;
const LIFT_PX = 3;

/**
 * Space Grotesk is a variable font — letters near the cursor gain weight
 * and lift slightly, easing back as it moves away. Pointer-only, skipped
 * for reduced motion and touch devices.
 */
export function HeroName() {
  const ref = useRef<HTMLHeadingElement>(null);
  const frame = useRef<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const canHover = useCanHover();

  const interactive = canHover && !prefersReducedMotion;

  const applyRipple = useCallback((clientX: number, clientY: number) => {
    const heading = ref.current;
    if (!heading) return;
    const letters =
      heading.querySelectorAll<HTMLElement>("[data-letter]");
    letters.forEach((letter) => {
      const rect = letter.getBoundingClientRect();
      const dx = clientX - (rect.left + rect.width / 2);
      const dy = clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);
      const falloff = Math.max(0, 1 - distance / RADIUS_PX);
      const eased = falloff * falloff;
      letter.style.fontWeight = String(
        Math.round(BASE_WEIGHT + (PEAK_WEIGHT - BASE_WEIGHT) * eased),
      );
      letter.style.transform = `translateY(${(-LIFT_PX * eased).toFixed(2)}px)`;
    });
  }, []);

  const pointer = useRef<{ x: number; y: number } | null>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    pointer.current = { x: event.clientX, y: event.clientY };
    if (frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      if (pointer.current) {
        applyRipple(pointer.current.x, pointer.current.y);
      }
    });
  };

  const handleMouseLeave = () => {
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
    ref.current
      ?.querySelectorAll<HTMLElement>("[data-letter]")
      .forEach((letter) => {
        letter.style.fontWeight = "";
        letter.style.transform = "";
      });
  };

  useEffect(() => {
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <h1
      ref={ref}
      aria-label={NAME}
      onMouseMove={interactive ? handleMouseMove : undefined}
      onMouseLeave={interactive ? handleMouseLeave : undefined}
      className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
    >
      {NAME.split("").map((character, index) => (
        <span
          key={`${character}-${index}`}
          data-letter
          aria-hidden
          className="inline-block whitespace-pre transition-[font-weight,transform] duration-200 ease-out"
        >
          {character}
        </span>
      ))}
    </h1>
  );
}
