"use client";

import { motion } from "motion/react";
import { memo } from "react";
import { Divider } from "@/components/ui/divider";
import {
  fadeUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";
import SkillsHeader from "./SkillHeader";
import TechIconsGrid from "./TechIconsGrid";
import StrengthsList from "./StrengthsList";

const SkillsSection = memo(() => {
  return (
    <motion.div
      className="mt-2 md:mt-5 flex flex-col gap-8 md:gap-15"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
    >
      {/* Header with title and CTA link */}
      <motion.div variants={fadeUp}>
        <SkillsHeader />
      </motion.div>

      <motion.div variants={fadeUp}>
        <Divider />
      </motion.div>

      {/* Tech Icons Grid - has its own internal stagger animation */}
      <TechIconsGrid />

      <motion.div variants={fadeUp}>
        <Divider />
      </motion.div>

      {/* Strengths List */}
      <motion.div variants={fadeUp}>
        <StrengthsList />
      </motion.div>

      <motion.div variants={fadeUp} className="md:-mt-10">
        <Divider thick />
      </motion.div>
    </motion.div>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
