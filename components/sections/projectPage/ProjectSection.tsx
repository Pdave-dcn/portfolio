import { ProjectCard } from "@/components/sections/projectPage/ProjectCard";
import { PROJECTS } from "@/lib/project-page-data";
import { memo, useMemo } from "react";

const ProjectSection = memo(() => {
  const displayedProjects = useMemo(
    () => PROJECTS.filter((project) => project.featured),
    []
  );

  return (
    <div>
      {displayedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
});

ProjectSection.displayName = "ProjectSection";

export default ProjectSection;
