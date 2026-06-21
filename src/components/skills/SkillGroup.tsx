import { Badge } from "@/components/ui/Badge";
import type { SkillGroup as SkillGroupData } from "@/types/content";

interface SkillGroupProps {
  group: SkillGroupData;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-medium text-muted">
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
