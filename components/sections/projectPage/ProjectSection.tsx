"use client";

import { motion } from "motion/react";
import { ProjectCard } from "@/components/sections/projectPage/ProjectCard";
import { PROJECTS } from "@/lib/project-page-data";
import { memo, useMemo } from "react";
import {
  fadeUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

const ProjectSection = memo(() => {
  const displayedProjects = useMemo(
    () => PROJECTS.filter((project) => project.featured),
    []
  );

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
    >
      {displayedProjects.map((project) => (
        <motion.div key={project.id} variants={fadeUp}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.section>
  );
});

ProjectSection.displayName = "ProjectSection";

export default ProjectSection;
