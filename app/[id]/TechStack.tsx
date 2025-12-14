import { memo, useMemo } from "react";
import { typography } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { TECH_ICONS, Technology } from "@/lib/tech-icons";

interface TechStackProps {
  technologies: readonly string[];
}

const TechStack = memo(({ technologies }: TechStackProps) => {
  // Create a lookup table: { [name]: Technology }
  const techIconMap = useMemo(() => {
    return TECH_ICONS.reduce<Record<string, Technology>>((acc, tech) => {
      acc[tech.name] = tech;
      return acc;
    }, {});
  }, []);

  return (
    <div className="py-12 md:py-16">
      <h2 className={cn(typography.subheading, "mb-8")}>Technologies</h2>

      <div className="flex flex-wrap gap-3">
        {technologies.map((techName) => {
          const tech = techIconMap[techName];

          if (!tech) return null;

          return (
            <Badge
              key={tech.name}
              variant="secondary"
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-sm",
                "md:gap-2.5 md:px-4 md:py-2 md:text-base",
                "lg:gap-3 lg:px-5 lg:py-2.5 lg:text-lg"
              )}
            >
              <span
                className={cn(
                  "size-4",
                  "md:size-5",
                  "lg:size-6",
                  "text-current"
                )}
              >
                {tech.svg}
              </span>

              <span>{tech.name}</span>
            </Badge>
          );
        })}
      </div>
    </div>
  );
});

TechStack.displayName = "TechStack";

export default TechStack;
