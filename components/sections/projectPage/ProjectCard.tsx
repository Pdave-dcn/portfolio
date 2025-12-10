import { memo } from "react";
import Link from "next/link";
import { typography } from "@/lib/design-tokens";
import { Project } from "@/lib/project-page-data";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = memo(({ project, className }: ProjectCardProps) => {
  const { type, tags, name, subtitle, description, links } = project;

  return (
    <article
      className={cn("w-full", className)}
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className="border-b border-muted-foreground flex flex-col gap-15 py-5 mt-3 md:py-7 md:mt-4.5 lg:mt-5">
        {/* Project Type & Tags */}
        <div className="w-full flex justify-between items-center text-xs text-muted-foreground opacity-70">
          <span aria-label="Project type">{type}</span>
          <div className="flex gap-2" role="list" aria-label="Project tags">
            {tags.map((tag) => (
              <span key={tag} role="listitem">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Title & Description */}
        <div className="flex flex-col gap-4.5">
          <div className="flex flex-col gap-1 lg:gap-2">
            <h2
              id={`project-${project.id}-title`}
              className={typography.heading}
            >
              {name}
            </h2>
            <p className={cn(typography.bodyLarge, "md:text-2xl text-pretty")}>
              {subtitle}
            </p>
          </div>

          <p
            className={cn(
              typography.body,
              "text-muted-foreground opacity-70 text-pretty lg:w-[60%]"
            )}
          >
            {description}
          </p>
        </div>

        {/* Project Links */}
        <nav aria-label={`Links for ${name}`}>
          <div className="text-sm font-semibold">
            <ul className="flex gap-4 items-center list-none">
              <li>
                <Link
                  href={links.demo}
                  className="hover:text-foreground/80 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background rounded-sm transition-colors"
                  target={links.demo.startsWith("http") ? "_blank" : undefined}
                  rel={
                    links.demo.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={`View demo of ${name}${
                    links.demo.startsWith("http") ? " (opens in new tab)" : ""
                  }`}
                >
                  Demo
                </Link>
              </li>
              <li aria-hidden>
                <span className="text-muted-foreground">|</span>
              </li>
              <li>
                <Link
                  href={links.repo}
                  className="hover:text-foreground/80 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background rounded-sm transition-colors"
                  target={links.repo.startsWith("http") ? "_blank" : undefined}
                  rel={
                    links.repo.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={`View repository of ${name}${
                    links.repo.startsWith("http") ? " (opens in new tab)" : ""
                  }`}
                >
                  Repo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";
