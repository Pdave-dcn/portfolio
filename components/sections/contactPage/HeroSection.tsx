"use client";

import { fadeUp, staggerContainer } from "@/lib/animation-variants";
import { HERO_DATA } from "@/lib/contact-page.data";
import { highlights, typography } from "@/lib/design-tokens";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <motion.section
      className="mt-35 md:mt-40 lg:mt-35"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUp}>
        <h1 className={`${typography.hero} ${highlights.textHighlight}`}>
          {HERO_DATA.title}
        </h1>
        <p className={`${typography.tagline} ${highlights.textHighlight}`}>
          {HERO_DATA.tagline}
        </p>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
