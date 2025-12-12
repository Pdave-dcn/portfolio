"use client";

import { Divider } from "@/components/ui/divider";
import { fadeUp, staggerContainer } from "@/lib/animation-variants";
import { highlights, typography } from "@/lib/design-tokens";
import { HERO_DATA } from "@/lib/project-page-data";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <motion.div
      className="mt-35 md:mt-40 lg:mt-35 flex flex-col gap-20 md:gap-30"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUp}>
        <h1 className={`${typography.hero} ${highlights.textHighlight}`}>
          {HERO_DATA.title}
        </h1>
        <p className={`mt-2 md:mt-2.5 lg:mt-3 ${typography.tagline}`}>
          {HERO_DATA.tagline}
        </p>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Divider muted />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
