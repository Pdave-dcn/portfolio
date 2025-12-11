"use client";

import { Palette } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemePicker() {
  const { setTheme } = useTheme();

  const themes = [
    { id: "light", label: "Light" },
    { id: "dark", label: "Dark" },
    { id: "neon", label: "Neon" },
    { id: "system", label: "System" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
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
  );
}
