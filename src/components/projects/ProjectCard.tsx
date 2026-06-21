import { ArrowUpRight, Award } from "lucide-react";
import type { ProjectEntry } from "@/types/content";

interface ProjectCardProps {
  project: ProjectEntry;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-border p-6">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-foreground">
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
      <p className="text-sm text-muted">{project.description}</p>
      <p className="mt-2 text-xs text-muted">{project.stack}</p>
      {project.note && (
        <p className="mt-3 flex items-start gap-2 text-xs text-muted">
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
