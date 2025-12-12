"use client";

import { motion } from "motion/react";
import { ProjectCard } from "@/components/ui/Project-card";
import { PROJECTS } from "@/lib/project-data";
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
      <motion.h2 variants={fadeUp} className={cn(typography.heading)}>
        Featured Projects
      </motion.h2>

      <div>
        <motion.div variants={fadeUp} className="lg:mt-8">
          <Divider />
        </motion.div>

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
