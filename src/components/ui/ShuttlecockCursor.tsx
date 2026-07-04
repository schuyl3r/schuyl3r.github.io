"use client";

import { useEffect, useRef, useState } from "react";

const POSITION_LERP = 0.2;
const INTERACTIVE_SELECTOR = 'a, button, [role="button"]';
const INTERACTIVE_CLASS = "scale-125";

export function ShuttlecockCursor() {
  const [enabled, setEnabled] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const angle = useRef(0);
  const hasPositioned = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setEnabled(fine.matches && !reduced.matches);
    update();

    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor-active");

    const handlePointerMove = (event: PointerEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      if (!hasPositioned.current) {
        hasPositioned.current = true;
        pos.current.x = event.clientX;
        pos.current.y = event.clientY;
        wrapperRef.current?.style.setProperty("opacity", "1");
      }

      const target = event.target as HTMLElement | null;
      const isInteractive = Boolean(target?.closest(INTERACTIVE_SELECTOR));
      shapeRef.current?.classList.toggle(INTERACTIVE_CLASS, isInteractive);
    };

    window.addEventListener("pointermove", handlePointerMove);

    let frame: number;
    const tick = () => {
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      pos.current.x += dx * POSITION_LERP;
      pos.current.y += dy * POSITION_LERP;

      const speed = Math.hypot(dx, dy);
      if (speed > 0.4) {
        angle.current = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
      }

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) rotate(${angle.current}deg)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={wrapperRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] opacity-0 will-change-transform"
    >
      <div
        ref={shapeRef}
        className="-translate-x-1/2 -translate-y-1/2 text-accent drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)] transition-transform duration-150 ease-out"
      >
        <svg width="30" height="41" viewBox="0 0 32 44" fill="none">
          {/* feather fan: jagged scalloped top, like real feather tips */}
          <path
            d="M9 19 L4 30 L8 26 L9 34 L13 29 L16 37 L19 29 L23 34 L24 26 L28 30 L23 19 Q16 21.5 9 19 Z"
            fill="currentColor"
            fillOpacity="0.32"
            stroke="currentColor"
            strokeOpacity="0.9"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          {/* feather veins fanning from the neck to each tip */}
          <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="0.6" strokeLinecap="round">
            <path d="M16 20 L4 30" />
            <path d="M16 20 L9 34" />
            <path d="M16 20 L16 37" />
            <path d="M16 20 L23 34" />
            <path d="M16 20 L28 30" />
          </g>
          {/* net: where the feathers are bound to the base */}
          <g stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.6">
            <path d="M11 15 L21 19" />
            <path d="M21 15 L11 19" />
          </g>
          {/* collar band */}
          <path
            d="M9.5 12.5 Q16 15 22.5 12.5 L22.5 15.5 Q16 18 9.5 15.5 Z"
            fill="#f43f5e"
            fillOpacity="0.9"
          />
          {/* cork: the rounded, leading tip */}
          <ellipse cx="16" cy="7.5" rx="6" ry="6.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
