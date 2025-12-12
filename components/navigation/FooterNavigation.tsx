import { memo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
] as const;

const FooterNavigation = memo(() => {
  return (
    <nav
      className="flex gap-1 mb-10 text-xs md:text-sm"
      aria-label="Footer navigation"
    >
      {FOOTER_LINKS.map((link, index) => (
        <div key={link.href} className="flex items-center gap-1">
          <Link
            href={link.href}
            className={cn(
              "group inline-flex items-center gap-1 py-2 px-3",
              "text-muted-foreground/80 md:text-muted-foreground/60",
              "hover:text-foreground",
              "border-b border-muted-foreground/30 md:border-muted-foreground/20",
              "hover:border-foreground/50",
              "transition-colors duration-200"
            )}
            aria-label={`Navigate to ${link.label.toLowerCase()} page`}
          >
            <span>{link.label}</span>
            <ArrowUpRight
              size={12}
              className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
            />
          </Link>
          {index < FOOTER_LINKS.length - 1 && (
            <span className="text-muted-foreground/50 mx-1" aria-hidden="true">
              /
            </span>
          )}
        </div>
      ))}
    </nav>
  );
});

FooterNavigation.displayName = "FooterNavigation";

export default FooterNavigation;
