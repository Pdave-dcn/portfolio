import { memo } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { highlights, typography } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import type { Project } from "@/hooks/useProject";

interface ProjectHeaderProps {
  project: Project;
  ctaText: {
    demo: string;
    repo: string;
  };
}

const ProjectHeader = memo(({ project, ctaText }: ProjectHeaderProps) => {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-6">
        <div>
          <div
            className={cn(
              highlights.regularHighlight,
              "flex items-center gap-3 text-xs mb-4"
            )}
          >
            <span>{project.type}</span>
            <span>•</span>
            {project.tags.map((tag, index) => (
              <span key={tag}>
                {tag}
                {index < project.tags.length - 1 && (
                  <span className="ml-3">•</span>
                )}
              </span>
            ))}
          </div>
          <h1
            className={cn(
              typography.heading,
              "mb-4",
              highlights.regularHighlight
            )}
          >
            {project.name}
          </h1>
          <p className={cn(typography.tagline, highlights.taglineHighlight)}>
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* CTA Links */}
      <div className="flex flex-wrap gap-4">
        <Link
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group inline-flex items-center gap-2 px-6 py-3",
            "bg-foreground text-background font-medium",
            "hover:bg-foreground/90",
            "transition-colors duration-200 rounded-md"
          )}
        >
          <span>{ctaText.demo}</span>
          <ExternalLink
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </Link>

        <Link
          href={project.links.repo}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group inline-flex items-center gap-2 px-6 py-3",
            "border border-foreground/40 font-medium",
            "hover:border-foreground/60 hover:bg-foreground/5",
            "transition-all duration-200 rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
          )}
        >
          <span>{ctaText.repo}</span>
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </Link>
      </div>
    </div>
  );
});

ProjectHeader.displayName = "ProjectHeader";

export default ProjectHeader;
