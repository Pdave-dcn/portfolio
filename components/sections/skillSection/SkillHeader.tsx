import { memo } from "react";
import { typography } from "@/lib/design-tokens";
import { SKILLS_DATA } from "@/lib/content/skills";
import { useLanguageStore } from "@/stores/language.store";

const SkillsHeader = memo(() => {
  const lang = useLanguageStore((s) => s.lang);
  const skills = SKILLS_DATA[lang];
  return (
    <div className="flex justify-between items-start">
      <h2 className={`flex gap-2 ${typography.heading}`}>{skills.heading}</h2>
    </div>
  );
});

SkillsHeader.displayName = "SkillsHeader";

export default SkillsHeader;
