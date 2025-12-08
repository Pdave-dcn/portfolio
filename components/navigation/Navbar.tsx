"use client";

import Link from "next/link";
import { ModeToggle } from "../ui/theme-toggle";

export function Navbar() {
  return (
    <nav className="w-full py-4 md:py-6 flex justify-between items-center">
      <ul className="flex items-center gap-5 md:gap-6 px-3 py-1 md:py-2 bg-background rounded-full list-none">
        <li>
          <Link href="/" aria-label="Navigate to home page">
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" aria-label="Navigate to projects page">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" aria-label="Navigate to contact page">
            Contact
          </Link>
        </li>
      </ul>

      <div className="p-1 bg-background">
        <ModeToggle />
      </div>
    </nav>
  );
}
