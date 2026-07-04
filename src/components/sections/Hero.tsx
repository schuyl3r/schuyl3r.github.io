"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { smoothScrollTo } from "@/lib/smoothScrollTo";

export function Hero() {
  return (
    <section id="hero" className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      <Container>
        <FadeIn>
          <p className="mb-3 text-sm font-medium tracking-wide text-muted uppercase">
            Frontend Engineer
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Schuyler Ng
          </h1>
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
              onClick={(event) => {
                event.preventDefault();
                smoothScrollTo("experience");
              }}
            >
              View Experience
            </Button>
            <Button href="/resume.pdf" download variant="secondary">
              Download Résumé
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
