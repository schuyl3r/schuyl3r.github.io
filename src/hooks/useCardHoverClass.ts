"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const LIFT_HOVER =
  "transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]";

const REDUCED_MOTION_HOVER =
  "transition-opacity duration-200 ease-out hover:opacity-80";

export function useCardHoverClass(): string {
  const prefersReducedMotion = usePrefersReducedMotion();
  return prefersReducedMotion ? REDUCED_MOTION_HOVER : LIFT_HOVER;
}
