import type { ExperienceBriefEntry } from "@/types/content";

interface ExperienceBriefProps {
  entry: ExperienceBriefEntry;
}

export function ExperienceBrief({ entry }: ExperienceBriefProps) {
  return (
    <p className="text-sm text-muted">
      <span className="font-medium text-foreground">{entry.company}</span> —{" "}
      {entry.role}, <span className="font-mono">{entry.dates}</span>.{" "}
      {entry.summary}
    </p>
  );
}
