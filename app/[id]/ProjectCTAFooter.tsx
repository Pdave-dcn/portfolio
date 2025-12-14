import { memo } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { typography } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

interface ProjectCTAFooterProps {
  demoUrl: string;
  repoUrl: string;
}

const ProjectCTAFooter = memo(({ demoUrl, repoUrl }: ProjectCTAFooterProps) => {
  return (
    <div className="py-12 md:py-16">
      <h2 className={cn(typography.heading, "mb-6")}>
        Interested in this project?
      </h2>
      <p className={cn(typography.body, "mb-8")}>
        Check out the live demo or explore the source code.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group inline-flex items-center gap-2 px-6 py-3",
            "bg-foreground text-background font-medium",
            "hover:bg-foreground/90",
            "transition-colors duration-200 rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
          )}
        >
          <span>View Live Demo</span>
          <ExternalLink
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </Link>

        <Link
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group inline-flex items-center gap-2 px-6 py-3",
            "border border-foreground/40 font-medium",
            "hover:border-foreground/60 hover:bg-foreground/5",
            "transition-all duration-200 rounded-md"
          )}
        >
          <span>View Repository</span>
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </Link>
      </div>
    </div>
  );
});

ProjectCTAFooter.displayName = "ProjectCTAFooter";

export default ProjectCTAFooter;
