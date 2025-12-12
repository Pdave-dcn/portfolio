"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import { ThemePicker } from "../ui/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const Navbar = memo(() => {
  const navItems = useMemo(
    () =>
      NAV_LINKS.map((link) => {
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-label={`Navigate to ${link.label.toLowerCase()} section`}
              className={cn(
                "relative px-3 py-1.5 rounded-md text-sm md:text-base font-medium",
                "transition-all duration-200",
                "neon:text-accent"
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      }),
    []
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
