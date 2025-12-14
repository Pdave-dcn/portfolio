import { memo } from "react";
import { typography } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { ArrowRight, Dot, Check, ArrowUpRight } from "lucide-react";

interface BulletListSectionProps {
  title: string;
  items: readonly string[];
  bulletIcon?: "arrow" | "dot" | "check" | "arrowUp";
}

const BULLET_ICONS = {
  arrow: ArrowRight,
  dot: Dot,
  check: Check,
  arrowUp: ArrowUpRight,
} as const;

const BulletListSection = memo(
  ({ title, items, bulletIcon = "dot" }: BulletListSectionProps) => {
    const Icon = BULLET_ICONS[bulletIcon];

    return (
      <div className="py-12 md:py-16">
        <h2 className={cn(typography.subheading, "mb-8")}>{title}</h2>

        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className={cn(typography.body, "flex items-start gap-3")}
            >
              <Icon
                className="mt-1 size-4 md:size-5 text-foreground shrink-0"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

BulletListSection.displayName = "BulletListSection";

export default BulletListSection;
