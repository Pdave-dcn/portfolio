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
import { useLanguageStore } from "@/stores/language.store";
import { SKILLS_DATA } from "@/lib/content/skills";

const SkillsSection = memo(() => {
  const lang = useLanguageStore((s) => s.lang);
  const hydrated = useLanguageStore((s) => s.hydrated);

  const skills = SKILLS_DATA[hydrated ? lang : "en"];
  return (
    <motion.section
      id="skills"
      className="flex flex-col gap-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
    >
      <motion.div variants={fadeUp}>
        <SkillsHeader title={skills.heading} />
      </motion.div>

      <motion.div variants={fadeUp}>
        <Divider />
      </motion.div>

      <div className="space-y-4">
        <TechIconsGrid />
        <StrengthsList skills={skills} />
      </div>

      <motion.div variants={fadeUp}>
        <Divider thick />
      </motion.div>
    </motion.section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
