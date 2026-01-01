import { memo } from "react";
import { typography } from "@/lib/design-tokens";
import { SKILLS_DATA } from "@/lib/content/skills";
import { useLanguageStore } from "@/stores/language.store";

const SkillsHeader = memo(() => {
  const lang = useLanguageStore((s) => s.lang);
  const skills = SKILLS_DATA[lang];
  return (
    <div className="flex justify-between items-start">
      <h2 className={`flex gap-2 ${typography.heading}`}>
        <span>{skills.heading.line1}</span>
        <div className="flex gap-2">
          <span className="neon:text-accent">{skills.heading.line2}</span>
          <span className="tech:text-primary">{skills.heading.line3}</span>
        </div>
      </h2>
    </div>
  );
});

SkillsHeader.displayName = "SkillsHeader";

export default SkillsHeader;
