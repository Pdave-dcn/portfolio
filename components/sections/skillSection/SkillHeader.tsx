import { memo } from "react";
import { typography } from "@/lib/design-tokens";

const SkillsHeader = memo(({ title }: { title: string }) => {
  return (
    <div className="flex justify-between items-start">
      <h2 className={`flex gap-2 ${typography.heading}`}>{title}</h2>
    </div>
  );
});

SkillsHeader.displayName = "SkillsHeader";

export default SkillsHeader;
