"use client";

import { motion } from "motion/react";
import { memo } from "react";
import { INTRO_DATA } from "@/lib/homepage-data";
import { typography } from "@/lib/design-tokens";
import { Divider } from "../ui/divider";
import {
  fadeUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

const IntroParagraph = memo(() => {
  return (
    <motion.div
      className="flex flex-col gap-20 lg:gap-28"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
    >
      {/* Desktop version */}
      <motion.p
        variants={fadeUp}
        className={`hidden lg:grid lg:grid-cols-2 gap-10 mt-7 text-pretty ${typography.bodyLarge}`}
      >
        {INTRO_DATA.desktop.map((paragraph, index) => (
          <span key={index}>{paragraph}</span>
        ))}
      </motion.p>

      {/* Mobile/Tablet version */}
      <motion.p
        variants={fadeUp}
        className={`md:grid md:grid-cols-2 lg:hidden flex flex-col gap-3 mt-7 text-pretty ${typography.body}`}
      >
        {INTRO_DATA.mobile.map((paragraph, index) => (
          <span key={index}>{paragraph}</span>
        ))}
      </motion.p>

      <motion.div variants={fadeUp}>
        <Divider thick />
      </motion.div>
    </motion.div>
  );
});

IntroParagraph.displayName = "IntroParagraph";

export default IntroParagraph;
