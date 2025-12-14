import { memo } from "react";
import Link from "next/link";
import { typography } from "@/lib/design-tokens";
import { Project } from "@/lib/project-data";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = memo(({ project, className }: ProjectCardProps) => {
  const { type, tags, name, subtitle, description, links } = project;

  const router = useRouter();

  const projectLinks = [
    { href: links.demo, label: "Demo" },
    { href: links.repo, label: "Repo" },
  ];

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on a link
    if ((e.target as HTMLElement).closest("a")) {
      return;
    }
    router.push(`/${project.id}`);
  };

  return (
    <article
      className={cn("w-full group/card cursor-pointer", className)}
      aria-labelledby={`project-${project.id}-title`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          router.push(`/${project.id}`);
        }
      }}
    >
      <div
        className={cn(
          "flex flex-col gap-15",
          "border-b border-muted-foreground/50 md:border-muted-foreground/30 group-hover/card:border-foreground/60",
          "py-5 mt-3 md:py-7 md:mt-4.5 lg:mt-5",
          "transition-colors duration-300",
          "neon:border-accent/50 neon:md:border-accent/30 neon:group-hover/card:border-accent"
        )}
      >
        {/* Project Type & Tags */}
        <div
          className={cn(
            "w-full flex justify-between items-center",
            "text-xs text-muted-foreground/80 md:text-muted-foreground/50",
            "group-hover/card:text-muted-foreground",
            "transition-colors duration-300",
            "pointer-events-none",
            "neon:text-accent/50 neon:md:text-accent/30 neon:group-hover/card:text-accent"
          )}
        >
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
          <div className="flex flex-col">
            <h2
              id={`project-${project.id}-title`}
              className={cn(
                typography.title,
                "transition-colors duration-300 group-hover/card:text-foreground",
                "pointer-events-none"
              )}
            >
              {name}
            </h2>
            <p
              className={cn(
                typography.bodyLarge,
                "-mt-2 md:text-2xl",
                "pointer-events-none"
              )}
            >
              {subtitle}
            </p>
          </div>

          <p
            className={cn(
              typography.body,
              "text-muted-foreground/80 md:text-muted-foreground/60 group-hover/card:text-muted-foreground md:w-[70%]  lg:w-[60%]",
              "transition-colors duration-300",
              "pointer-events-none",
              "neon:text-accent/50 neon:lg:text-accent/30 neon:group-hover/card:text-accent"
            )}
          >
            {description}
          </p>
        </div>

        {/* Project Links */}
        <nav aria-label={`Links for ${name}`}>
          <div className="flex gap-1 text-xs md:text-sm">
            {projectLinks.map((link, index) => (
              <div key={link.href} className="flex items-center gap-1">
                <Link
                  href={link.href}
                  className={cn(
                    "group/link inline-flex items-center gap-1 py-2 px-3 font-medium",
                    "border-b border-muted-foreground/30 md:border-muted-foreground/20",
                    "hover:border-foreground/50",
                    "transition-colors duration-200"
                  )}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={`View ${link.label.toLowerCase()} of ${name}${
                    link.href.startsWith("http") ? " (opens in new tab)" : ""
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200"
                  />
                </Link>
                {index < projectLinks.length - 1 && (
                  <span
                    className="text-muted-foreground/50 mx-1 neon:text-accent/30"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";
