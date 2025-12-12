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
    <motion.section
      id="skills"
      className="flex flex-col gap-8 md:gap-15"
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

      <motion.div variants={fadeUp}>
        <Divider thick />
      </motion.div>
    </motion.section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
