"use client";

import { useEffect, useRef } from "react";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { TimelineEntry } from "@/components/experience/TimelineEntry";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill) return;

    if (prefersReducedMotion) {
      fill.style.height = "100%";
      return;
    }

    let ticking = false;
    const compute = () => {
      const rect = list.getBoundingClientRect();
      const reach = window.innerHeight * 0.7;
      const progress = Math.min(
        1,
        Math.max(0, (reach - rect.top) / rect.height),
      );
      fill.style.height = `${progress * 100}%`;
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

  return (
    <section id="experience" className="py-20">
      <Container>
        <FadeIn>
          <SectionHeading>Experience</SectionHeading>
        </FadeIn>
        <div ref={listRef} className="relative">
          <div
            aria-hidden
            className="absolute top-7 bottom-7 left-[4px] w-px bg-border"
          />
          <div
            aria-hidden
            ref={fillRef}
            className="absolute top-7 left-[4px] w-px bg-accent"
            style={{ height: 0, maxHeight: "calc(100% - 3.5rem)" }}
          />
          <div className="space-y-8">
            {experience.map((entry, index) => (
              <FadeIn
                key={`${entry.company}-${entry.role}`}
                delay={index * 40}
              >
                <TimelineEntry>
                  <ExperienceCard entry={entry} />
                </TimelineEntry>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
