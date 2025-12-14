"use client";

import { motion } from "motion/react";
import { memo, useMemo } from "react";
import { TECH_ICONS } from "@/lib/tech-icons";
import { NeonGlow } from "@/components/effects/NeonGlow";
import { cn } from "@/lib/utils";
import {
  fadeUp,
  staggerContainerFaster,
  viewportOptions,
} from "@/lib/animation-variants";

const TechIconsGrid = memo(() => {
  const displayedTechs = useMemo(
    () => TECH_ICONS.filter((icon) => icon.featured),
    []
  );

  const techIconsList = displayedTechs.map((tech) => (
    <motion.li
      key={tech.name}
      variants={fadeUp}
      className="flex flex-col items-center justify-start text-center p-2 w-1/3 md:w-auto"
    >
      <NeonGlow color={tech.color}>
        <span
          role="img"
          aria-label={tech.name}
          className={cn(
            "flex items-center justify-center",
            "size-10 md:size-12 lg:size-15 mb-1 text-foreground"
          )}
        >
          {tech.svg}
        </span>
      </NeonGlow>

      <span className="text-sm font-medium text-muted-foreground sage:text-primary">
        {tech.name}
      </span>
    </motion.li>
  ));

  return (
    <div className="flex justify-center md:block">
      <motion.ul
        className="flex flex-wrap justify-center 
             grid-cols-3 gap-y-6 
             md:grid md:grid-cols-4 md:gap-y-8 lg:grid-cols-8"
        variants={staggerContainerFaster}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {techIconsList}
      </motion.ul>
    </div>
  );
});

TechIconsGrid.displayName = "TechIconsGrid";

export default TechIconsGrid;
