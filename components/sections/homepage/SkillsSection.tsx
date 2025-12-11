"use client";

import { memo } from "react";
import { techIcons } from "@/lib/tech-icons";
import { SKILLS_DATA, STRENGTHS_DATA } from "@/lib/homepage-data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Divider } from "../../ui/divider";
import { typography } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

const SkillsSection = memo(() => {
  return (
    <div className="mt-2 md:mt-5 flex flex-col gap-8 md:gap-15">
      <div className="flex justify-between items-start">
        <h2 className={`flex flex-col ${typography.heading}`}>
          <span>{SKILLS_DATA.heading.line1}</span>
          <div>
            <span className="neon:text-accent">
              {SKILLS_DATA.heading.line2}
            </span>
            <span>{SKILLS_DATA.heading.line3}</span>
          </div>
        </h2>

        <Link
          href="/projects"
          className={cn(
            "group relative flex items-center gap-1.5 py-2 px-3 -mr-3",
            "text-sm md:text-base font-medium",
            "text-muted-foreground/80 md:text-muted-foreground/60",
            "hover:text-foreground",
            "transition-colors duration-200",
            // Animated underline
            "after:absolute after:bottom-1 after:left-3 after:right-3",
            "after:h-px after:bg-foreground",
            "after:origin-left after:scale-x-0",
            "hover:after:scale-x-100",
            "after:transition-transform after:duration-300 after:ease-out"
          )}
          aria-label="View all projects"
        >
          <span className="hidden md:inline">View</span>
          <span>Projects</span>
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </Link>
      </div>

      <Divider />

      <div className="flex justify-center md:block">
        <ul
          className="flex flex-wrap justify-center 
               grid-cols-3 gap-y-6 
               md:grid md:grid-cols-4 md:gap-y-8 lg:grid-cols-8"
        >
          {techIcons.map((tech) => (
            <li
              key={tech.name}
              className="flex flex-col items-center justify-start text-center p-2 w-1/3 md:w-auto"
            >
              <span
                role="img"
                aria-label={tech.name}
                className="size-10 md:size-12 lg:size-15 flex items-center justify-center mb-1 text-foreground"
              >
                {tech.svg}
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      <div className="flex justify-between items-start lg:items-center -mt-5 md:-mt-12">
        <h3 className={typography.subheading}>
          {SKILLS_DATA.strengthsHeading}
        </h3>

        <ul
          className={`flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 list-none ${typography.body}`}
        >
          {STRENGTHS_DATA.map((group, groupIndex) => (
            <li
              key={groupIndex}
              className={groupIndex === 0 ? "mt-3.5 md:mt-0" : ""}
            >
              <ul className="space-y-1">
                {group.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="before:content-['•'] before:mr-1 md:before:mr-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:-mt-10">
        <Divider thick />
      </div>
    </div>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
