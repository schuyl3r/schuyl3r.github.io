"use client";

import { Building2, TrendingUp } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import type { ExperienceEntry } from "@/types/content";

interface ExperienceCardProps {
  entry: ExperienceEntry;
}

export function ExperienceCard({ entry }: ExperienceCardProps) {
  return (
    <SpotlightCard className="p-6 sm:p-8">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-center gap-3">
          <Building2 className="h-5 w-5 shrink-0 text-subtle" aria-hidden />
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {entry.company}
            </h3>
            <p className="text-sm text-muted">{entry.role}</p>
          </div>
        </div>
        <p className="font-mono text-sm text-muted">{entry.dates}</p>
      </div>
      {entry.highlight && (
        <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
          <TrendingUp className="h-3.5 w-3.5" aria-hidden />
          {entry.highlight}
        </p>
      )}
      <ul className="space-y-2">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm text-muted">
            <span
              aria-hidden
              className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-subtle"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
}
