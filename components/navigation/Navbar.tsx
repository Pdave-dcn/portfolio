"use client";

import Link from "next/link";
import { ModeToggle } from "../ui/theme-toggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <nav className="w-full py-4 md:py-6 flex justify-between items-center">
      <ul className="flex items-center gap-5 md:gap-6 px-3 py-1 md:py-2 bg-background rounded-full list-none font-medium">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-label={`Navigate to ${link.label.toLowerCase()} page`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="p-1 bg-background">
        <ModeToggle />
      </div>
    </nav>
  );
}
