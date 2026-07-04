"use client";

import { ArrowUpRight, Award } from "lucide-react";
import { useCardHoverClass } from "@/hooks/useCardHoverClass";
import type { ProjectEntry } from "@/types/content";

interface ProjectCardProps {
  project: ProjectEntry;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hoverClass = useCardHoverClass();

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-border p-6 ${hoverClass}`}
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="font-heading text-base font-semibold text-foreground">
          {project.name}
        </h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-subtle transition-colors hover:text-accent"
            aria-label={`View ${project.name}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
      <p className="line-clamp-3 flex-1 text-base text-muted">
        {project.description}
      </p>
      <p className="mt-4 text-[13px] text-muted">{project.stack.join(", ")}</p>
      {project.note && (
        <p className="mt-4 flex items-start gap-2 text-[13px] text-muted">
          <Award
            className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-subtle"
            aria-hidden
          />
          <span>{project.note}</span>
        </p>
      )}
    </article>
  );
}
