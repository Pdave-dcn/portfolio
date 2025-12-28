"use client";

import { motion } from "motion/react";
import { ProjectCard } from "@/components/ui/Project-card";
import {
  PROJECT_SECTION_DATA,
  PROJECTS_WITH_DETAILS as PROJECTS,
} from "@/lib/project-data";
import { memo, useMemo } from "react";
import {
  fadeUp,
  staggerContainer,
  viewportOptionsProjectSection,
} from "@/lib/animation-variants";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/design-tokens";
import { Divider } from "@/components/ui/divider";

const ProjectSection = memo(() => {
  const displayedProjects = useMemo(
    () => PROJECTS.filter((project) => project.featured),
    []
  );

  return (
    <motion.section
      id="projects"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptionsProjectSection}
      className="flex flex-col gap-10"
    >
      <motion.div variants={fadeUp} className="flex flex-col gap-3 lg:gap-6">
        <h2 className={cn(typography.heading)}>{PROJECT_SECTION_DATA.title}</h2>
        <p
          className={cn(
            "w-[90%] md:w-[70%]",
            "text-2xl md:text-[2.3rem] md:text-pretty",
            "leading-tight"
          )}
        >
          {PROJECT_SECTION_DATA.tagline}
        </p>
        <div className="w-[70%]">
          <Divider />
        </div>
      </motion.div>

      <div>
        {displayedProjects.map((project) => (
          <motion.div key={project.id} variants={fadeUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
});

ProjectSection.displayName = "ProjectSection";

export default ProjectSection;
