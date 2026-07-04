"use client";

import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { useCardHoverClass } from "@/hooks/useCardHoverClass";
import type { FeaturedProjectEntry } from "@/types/content";

interface FeaturedProjectCardProps {
  project: FeaturedProjectEntry;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const hoverClass = useCardHoverClass();

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-border ${hoverClass}`}
    >
      <div className="relative aspect-video overflow-hidden rounded-t-2xl">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-base font-semibold text-foreground">
          {project.name}
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <p className="mt-4 flex-1 text-base text-muted">
          {project.description}
        </p>
        <div className="mt-4 flex items-center gap-4 text-[13px] font-medium">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent transition-colors hover:text-foreground"
          >
            Live site
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
          >
            <Code2 className="h-3.5 w-3.5" aria-hidden />
            Repo
          </a>
        </div>
      </div>
    </article>
  );
}
