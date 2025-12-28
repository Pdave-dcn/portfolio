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

type TechCategory = "language" | "frontend" | "backend" | "database";

const CATEGORY_LABELS: Record<TechCategory, string> = {
  language: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
};

const TechIconsGrid = memo(() => {
  const groupedTechs = useMemo(() => {
    const displayedTechs = TECH_ICONS.filter((icon) => icon.featured);

    const groups: Record<TechCategory, typeof displayedTechs> = {
      language: [],
      frontend: [],
      backend: [],
      database: [],
    };

    displayedTechs.forEach((tech) => {
      if (tech.category !== "tooling") {
        groups[tech.category as TechCategory].push(tech);
      }
    });

    return groups;
  }, []);

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      variants={staggerContainerFaster}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
    >
      {(Object.keys(groupedTechs) as TechCategory[]).map((category) => {
        const techs = groupedTechs[category];

        if (techs.length === 0) return null;

        return (
          <motion.div
            key={category}
            variants={fadeUp}
            className="border border-border/30 p-8"
          >
            <h3 className="text-xs uppercase tracking-widest font-medium text-foreground/60 mb-8 text-left">
              {CATEGORY_LABELS[category]}
            </h3>

            <ul className="grid grid-cols-2 gap-8">
              {techs.map((tech) => (
                <li
                  key={tech.name}
                  className="flex flex-col items-center justify-start text-center"
                >
                  <NeonGlow color={tech.color}>
                    <span
                      role="img"
                      aria-label={tech.name}
                      className={cn(
                        "flex items-center justify-center",
                        "size-12 md:size-14 lg:size-16 mb-3 text-foreground"
                      )}
                    >
                      {tech.svg}
                    </span>
                  </NeonGlow>

                  <span className="text-xs font-normal text-muted-foreground">
                    {tech.name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </motion.div>
  );
});

TechIconsGrid.displayName = "TechIconsGrid";

export default TechIconsGrid;
