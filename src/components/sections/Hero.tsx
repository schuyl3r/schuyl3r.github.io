"use client";

import { ArrowDown, Award, Download, Trophy } from "lucide-react";
import { HeroName } from "@/components/hero/HeroName";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { smoothScrollTo } from "@/lib/smoothScrollTo";

export function Hero() {
  return (
    <section id="hero" className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      <Container>
        <FadeIn>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted">
            <span
              aria-hidden
              className="relative flex h-2 w-2 items-center justify-center"
            >
              <span className="absolute h-full w-full rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            </span>
            Open to frontend roles
          </p>
          <p className="mb-3 text-sm font-medium tracking-wide text-muted uppercase">
            Frontend Engineer
          </p>
          <HeroName />
          <p className="mt-4 max-w-xl text-lg text-muted">
            I build clean, performant interfaces and the systems behind
            them.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            I look for what&apos;s been rebuilt five times across a codebase
            and build it once. At Samsung, that meant collapsing a
            multilingual feature scattered across multiple touchpoints into
            a single form wrapper, and eliminating duplicate API calls that
            were quietly costing the admin panel its load time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href="#experience"
              className="group"
              onClick={(event) => {
                event.preventDefault();
                smoothScrollTo("experience");
              }}
            >
              View Experience
              <ArrowDown
                className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:translate-y-0.5"
                aria-hidden
              />
            </Button>
            <Button
              href="/resume.pdf"
              download
              variant="secondary"
              className="group"
            >
              <Download
                className="h-4 w-4 text-subtle transition-colors group-hover:text-foreground"
                aria-hidden
              />
              Download Résumé
            </Button>
          </div>
          <ul className="mt-12 space-y-2 border-t border-border pt-6">
            <li className="flex items-center gap-2.5 text-sm text-muted">
              <Trophy className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              Team Member of the Month — Samsung R&amp;D, November 2025
            </li>
            <li className="flex items-center gap-2.5 text-sm text-muted">
              <Award className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              Best Paper Award — 2022 International Conference on Asian
              Language Processing
            </li>
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
