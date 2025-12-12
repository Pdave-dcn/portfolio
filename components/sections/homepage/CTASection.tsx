"use client";

import { memo } from "react";
import Link from "next/link";
import { CTA_DATA } from "@/lib/homepage-data";
import { typography, spacing } from "@/lib/design-tokens";
import { Divider } from "../../ui/divider";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  fadeUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

const CTASection = memo(() => {
  return (
    <motion.section
      className={`flex flex-col ${spacing.sectionGap}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
    >
      <motion.div
        variants={fadeUp}
        className="py-12 md:py-16 space-y-8 md:space-y-10"
      >
        <div>
          <h2
            className={cn(
              typography.sectionHeading,
              "mt-2 flex flex-col leading-8"
            )}
          >
            <span>{CTA_DATA.heading.line1}</span>
            <div>
              <span>{CTA_DATA.heading.line2}</span>
              <span className="neon:text-accent">{CTA_DATA.heading.line3}</span>
            </div>
          </h2>
          <p className={`text-pretty mt-2.5 ${typography.ctaSubheading}`}>
            {CTA_DATA.subheading}
          </p>
        </div>

        <div className="space-y-1">
          {CTA_DATA.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between py-4 border-b border-muted-foreground/20 neon:border-accent/20 hover:border-foreground/40 neon:hover:border-accent/40 transition-colors "
              aria-label={`Navigate to ${link.label.toLowerCase()} page`}
            >
              <span className={cn(typography.ctaLink)}>{link.label}</span>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground neon:text-accent/40 group-hover:text-foreground neon:group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Divider thick />
      </motion.div>
    </motion.section>
  );
});

CTASection.displayName = "CTASection";

export default CTASection;
