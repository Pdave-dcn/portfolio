"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import { ThemePicker } from "../ui/theme-toggle";
import { LanguagePicker } from "../layout/LanguagePicker";
import { ResumeDownload } from "../layout/ResumeDownload";
import { useLanguageStore } from "@/stores/language.store";
import { NAVBAR_COPY } from "@/lib/content/navbar";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
] as const;

export const Navbar = memo(() => {
  const lang = useLanguageStore((state) => state.lang);
  const copy = NAVBAR_COPY[lang];

  const navItems = useMemo(
    () =>
      NAV_LINKS.map((link) => {
        const label = copy[link.key];
        const ariaLabel = copy.ariaLabel[link.key];

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-label={ariaLabel}
              className={cn(
                "relative px-2 md:px-3 py-1.5 rounded-md text-sm md:text-base font-medium",
                "transition-all duration-200",
                "neon:text-accent"
              )}
            >
              {label}
            </Link>
          </li>
        );
      }),
    [copy]
  );

  return (
    <nav
      className="w-full py-4 md:py-6 flex justify-between items-start md:items-start"
      aria-label={copy.ariaLabel.main}
    >
      <ul className="flex items-center gap-1 md:gap-2 px-2 py-1 md:py-1.5 bg-background rounded-full list-none">
        {navItems}
      </ul>

      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <ResumeDownload />
        <div className="p-1.5 bg-background rounded-full">
          <LanguagePicker />
        </div>
        <div className="p-1.5 bg-background rounded-full">
          <ThemePicker />
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
