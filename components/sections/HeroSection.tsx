"use client";

import { highlights, typography } from "@/lib/design-tokens";
import { Divider } from "../ui/divider";
import { memo } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animation-variants";
import { useLanguageStore } from "@/stores/language.store";
import { HERO_DATA } from "@/lib/content/hero";

const HeroSection = memo(() => {
  const lang = useLanguageStore((s) => s.lang);
  const hydrated = useLanguageStore((s) => s.hydrated);

  const hero = HERO_DATA[hydrated ? lang : "en"];

  return (
    <motion.div
      className="mt-35 md:mt-40 flex flex-col gap-10 md:gap-7"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUp}>
        <h1 className={`flex flex-col ${typography.hero}`}>
          <span className={highlights.textHighlight}>
            {hero.name.firstName}
          </span>

          <span className={highlights.textHighlight}>{hero.name.lastName}</span>
        </h1>

        <p
          className={cn(
            highlights.taglineHighlight,
            typography.tagline,
            "md:mt-5"
          )}
        >
          {hero.tagline}
        </p>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Divider />
      </motion.div>
    </motion.div>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
