import { Code2, Server, Smartphone, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { SkillGroup as SkillGroupData } from "@/types/content";

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Mobile: Smartphone,
  "Backend & Tools": Server,
};

interface SkillGroupProps {
  group: SkillGroupData;
}

export function SkillGroup({ group }: SkillGroupProps) {
  const Icon = categoryIcons[group.label];

  return (
    <div>
      <h3 className="mb-4 flex items-center gap-2 text-sm font-medium text-muted">
        {Icon && <Icon className="h-4 w-4 text-subtle" aria-hidden />}
        {group.label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  );
}
