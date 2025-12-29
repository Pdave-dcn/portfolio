"use client";

import { Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemePicker() {
  const { setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const themes = [
    { id: "light", label: "Light" },
    { id: "dark", label: "Dark" },
    { id: "sunset", label: "Sunset" },
    { id: "neon", label: "Neon" },
    { id: "tech", label: "Tech" },
    { id: "system", label: "System" },
  ];

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Palette className="h-5 w-5 cursor-pointer neon:text-accent" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {themes.map((t) => (
            <DropdownMenuItem key={t.id} onClick={() => setTheme(t.id)}>
              {t.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {isHovered && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-xs uppercase tracking-widest font-medium neon:text-accent text-foreground/60 bg-background border border-border/30 px-3 py-1">
            Themes
          </span>
        </div>
      )}
    </div>
  );
}
