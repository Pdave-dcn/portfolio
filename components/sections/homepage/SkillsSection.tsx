"use client";

import { memo } from "react";
import { techIcons } from "@/lib/tech-icons";
import { SKILLS_DATA, STRENGTHS_DATA } from "@/lib/homepage-data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Divider } from "../../ui/divider";
import { typography } from "@/lib/design-tokens";

const SkillsSection = memo(() => {
  return (
    <div className="mt-2 md:mt-5 flex flex-col gap-8 md:gap-15">
      <div className="flex justify-between items-start">
        <h2 className={`flex flex-col ${typography.heading}`}>
          <span>{SKILLS_DATA.heading.line1}</span>
          <span>{SKILLS_DATA.heading.line2}</span>
        </h2>

        <Link
          href="/projects"
          className="flex items-center gap-1.5 text-sm md:text-base text-muted-foreground font-medium"
        >
          <span className="hidden md:block">View</span> Projects
          <ArrowUpRight size={16} />
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
                aria-hidden
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
        <h3 className="text-[1.5rem] md:text-[2rem] lg:text-[3.7rem] font-semibold md:font-bold lg:font-semibold">
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
