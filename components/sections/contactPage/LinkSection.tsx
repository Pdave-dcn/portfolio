"use client";

import { memo } from "react";
import { Divider } from "@/components/ui/divider";
import { typography } from "@/lib/design-tokens";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT_LINKS } from "@/lib/contact-page.data";
import { motion } from "motion/react";
import {
  fadeUp,
  staggerContainer,
  staggerContainerFast,
  viewportOptions,
} from "@/lib/animation-variants";

const LinkSection = memo(() => {
  return (
    <motion.section
      className="mt-16 md:mt-20"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUp}>
        <Divider />
      </motion.div>

      <div className="py-12 md:py-16 space-y-8 md:space-y-10">
        <h2 className={cn(typography.heading)}>Reach out Anytime</h2>

        <motion.div
          className="space-y-1"
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {CONTACT_LINKS.map((link) => (
            <motion.div variants={fadeUp} key={link.href}>
              <Link
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center justify-between py-4 border-b border-muted-foreground/20 hover:border-foreground/40 transition-colors"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-sm text-muted-foreground opacity-70 w-20">
                    {link.label}
                  </span>
                  <span className="text-base md:text-lg font-medium">
                    {link.value}
                  </span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div variants={fadeUp}>
        <Divider thick />
      </motion.div>
    </motion.section>
  );
});

LinkSection.displayName = "LinkSection";

export default LinkSection;
