"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EMAIL = "schuylerng@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the mailto button still works
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading>Contact</SectionHeading>
          <p className="font-heading max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something that lasts.
          </p>
          <p className="mt-4 max-w-md text-base text-muted">
            The fastest way to reach me is email — I read everything that
            lands there.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={`mailto:${EMAIL}`} className="group">
              <Mail className="h-4 w-4" aria-hidden />
              {EMAIL}
            </Button>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email address"}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              {copied ? (
                <Check
                  className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                  aria-hidden
                />
              ) : (
                <Copy className="h-4 w-4" aria-hidden />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
            <span aria-live="polite" className="sr-only">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button
              href="https://linkedin.com/in/schuyler-ng"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="group"
            >
              LinkedIn
              <ArrowUpRight
                className="h-3.5 w-3.5 text-subtle transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Button>
            <Button
              href="https://github.com/schuyl3r"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="group"
            >
              GitHub
              <ArrowUpRight
                className="h-3.5 w-3.5 text-subtle transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
