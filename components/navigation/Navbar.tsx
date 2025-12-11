"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemePicker } from "../ui/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const Navbar = memo(() => {
  const pathname = usePathname();

  const navItems = useMemo(
    () =>
      NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-label={`Navigate to ${link.label.toLowerCase()} page`}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "relative px-3 py-1.5 rounded-md text-sm md:text-base font-medium",
                "transition-all duration-200",
                // Active state
                isActive
                  ? "text-foreground neon:text-accent"
                  : "text-muted-foreground/80 md:text-muted-foreground/60 hover:text-foreground",
                // Hover background
                !isActive && "hover:bg-foreground/5",
                // Active indicator
                isActive &&
                  "after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-foreground neon:after:bg-accent after:rounded-full"
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      }),
    [pathname]
  );

  return (
    <nav
      className="w-full py-4 md:py-6 flex justify-between items-center"
      aria-label="Main navigation"
    >
      <ul className="flex items-center gap-1 md:gap-2 px-2 py-1 md:py-1.5 bg-background border border-muted-foreground/10 rounded-full list-none">
        {navItems}
      </ul>

      <div className="p-1.5 bg-background rounded-full">
        <ThemePicker />
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
