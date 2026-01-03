"use client";

import { motion } from "motion/react";
import { memo } from "react";
import { INTRO_DATA } from "@/lib/content/intro";
import { typography } from "@/lib/design-tokens";
import { Divider } from "../ui/divider";
import {
  fadeUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";
import { useLanguageStore } from "@/stores/language.store";

const IntroParagraph = memo(() => {
  const lang = useLanguageStore((s) => s.lang);
  const hydrated = useLanguageStore((s) => s.hydrated);

  const intro = INTRO_DATA[hydrated ? lang : "en"];
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
        {intro.desktop.map((paragraph, index) => (
          <span key={index}>{paragraph}</span>
        ))}
      </motion.p>

      {/* Mobile/Tablet version */}
      <motion.p
        variants={fadeUp}
        className={`md:grid md:grid-cols-2 lg:hidden flex flex-col gap-3 mt-7 text-pretty ${typography.body}`}
      >
        {intro.mobile.map((paragraph, index) => (
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
