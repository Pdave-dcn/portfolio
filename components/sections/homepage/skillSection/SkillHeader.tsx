import { memo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { typography } from "@/lib/design-tokens";
import { SKILLS_DATA } from "@/lib/homepage-data";
import { cn } from "@/lib/utils";

const SkillsHeader = memo(() => {
  return (
    <div className="flex justify-between items-start">
      <h2 className={`flex flex-col ${typography.heading}`}>
        <span>{SKILLS_DATA.heading.line1}</span>
        <div>
          <span className="neon:text-accent">{SKILLS_DATA.heading.line2}</span>
          <span className="tech:text-primary">{SKILLS_DATA.heading.line3}</span>
        </div>
      </h2>

      <Link
        href="/projects"
        className={cn(
          "group relative flex items-center gap-1.5 py-2 px-3 -mr-3",
          "text-sm md:text-base font-medium",
          "text-muted-foreground/80 md:text-muted-foreground/60",
          "hover:text-foreground",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background rounded-sm",
          // Animated underline
          "after:absolute after:bottom-1 after:left-3 after:right-3",
          "after:h-px after:bg-foreground",
          "after:origin-left after:scale-x-0",
          "hover:after:scale-x-100",
          "after:transition-transform after:duration-300 after:ease-out"
        )}
        aria-label="View all projects"
      >
        <span className="hidden md:inline">{SKILLS_DATA.cta.word1}</span>
        <span>{SKILLS_DATA.cta.word2}</span>
        <ArrowUpRight
          size={16}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
        />
      </Link>
    </div>
  );
});

SkillsHeader.displayName = "SkillsHeader";

export default SkillsHeader;
