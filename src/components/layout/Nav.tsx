"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { smoothScrollTo } from "@/lib/smoothScrollTo";

const navItems = [
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Nav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            smoothScrollTo("hero");
          }}
          className="font-heading text-sm font-semibold whitespace-nowrap text-foreground"
        >
          Schuyler Ng
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="flex gap-4 font-mono text-sm font-medium sm:gap-6">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    smoothScrollTo(item.id);
                  }}
                  aria-current={isActive ? "true" : undefined}
                  className={`${prefersReducedMotion ? "" : "transition-colors"} ${
                    isActive
                      ? "text-accent"
                      : "text-muted hover:text-accent"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
