import { memo } from "react";
import Link from "next/link";
import { CTA_DATA } from "@/lib/homepage-data";
import { typography, spacing } from "@/lib/design-tokens";
import { Divider } from "../ui/divider";

const CTASection = memo(() => {
  return (
    <div className={`flex flex-col ${spacing.sectionGap}`}>
      <div>
        <h2
          className={`mt-2 flex flex-col leading-8 ${typography.sectionHeading}`}
        >
          <span>{CTA_DATA.heading.line1}</span>
          <span>{CTA_DATA.heading.line2}</span>
        </h2>
        <p className={`text-pretty mt-2.5 ${typography.ctaSubheading}`}>
          {CTA_DATA.subheading}
        </p>
      </div>

      <div className={`flex flex-col gap-4.5 md:gap-7 ${typography.ctaLink}`}>
        {CTA_DATA.links.map((link) => (
          <Link key={link.href} href={link.href}>
            <Divider />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
});

CTASection.displayName = "CTASection";

export default CTASection;
