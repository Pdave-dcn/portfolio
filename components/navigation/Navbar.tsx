"use client";

import Link from "next/link";
import { ModeToggle } from "../ui/theme-toggle";

export function Navbar() {
  return (
    <nav className="w-full py-4 border-b flex justify-between items-center">
      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <ModeToggle />
    </nav>
  );
}
