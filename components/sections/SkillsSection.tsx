"use client";

import { techIcons } from "@/lib/tech-icons";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SkillsSection = () => {
  return (
    <div className="mt-2 md:mt-5 flex flex-col gap-8 md:gap-15">
      <div className="flex justify-between items-start">
        <h2 className="font-bold flex flex-col text-[2.5rem] leading-8.5 md:text-[5rem] lg:text-[6rem] md:leading-20">
          <span>Skills</span>
          <span>&Techs</span>
        </h2>

        <Link
          href={"/projects"}
          className="flex items-center gap-1.5 text-sm md:text-base text-muted-foreground font-medium"
        >
          <span className="hidden md:block">View</span> Projects
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="h-px bg-foreground" />

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

      <div className="h-px bg-foreground" />

      <div className="flex justify-between items-start lg:items-center -mt-5 md:-mt-12">
        <h3 className="text-[1.5rem] md:text-[2rem] lg:text-[3.7rem] font-semibold md:font-bold lg:font-semibold">
          Strengths
        </h3>

        <ul className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 md:text-xl list-none">
          <li className="mt-3.5 md:mt-0">
            <ul className="space-y-1">
              <li className="before:content-['•'] before:mr-1 md:before:mr-2">
                Clean, maintainable code
              </li>
              <li className="before:content-['•'] before:mr-1 md:before:mr-2">
                Thoughtful UI & motion
              </li>
            </ul>
          </li>
          <li>
            <ul className="space-y-1">
              <li className="before:content-['•'] before:mr-1 md:before:mr-2">
                Solid API + data modeling
              </li>
              <li className="before:content-['•'] before:mr-1 md:before:mr-2">
                Quick learner, reliable builder
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="h-[5px] //mt-5 md:-mt-10 bg-foreground" />
    </div>
  );
};

export default SkillsSection;
