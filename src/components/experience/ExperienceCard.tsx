import type { ExperienceEntry } from "@/types/content";

interface ExperienceCardProps {
  entry: ExperienceEntry;
}

export function ExperienceCard({ entry }: ExperienceCardProps) {
  return (
    <article className="rounded-2xl border border-border p-6 transition-[border-color,box-shadow] hover:border-subtle hover:shadow-sm sm:p-8">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {entry.company}
          </h3>
          <p className="text-sm text-muted">{entry.role}</p>
        </div>
        <p className="font-mono text-sm text-muted">{entry.dates}</p>
      </div>
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
    </article>
  );
}
