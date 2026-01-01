"use client";

import { Languages } from "lucide-react";
import { useState } from "react";
import { useLanguageStore } from "@/stores/language.store";
import type { Language } from "@/lib/i18n/languages";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LANGUAGE_OPTIONS: { id: Language; label: string }[] = [
  { id: "en", label: "English" },
  { id: "fr", label: "Français" },
  { id: "es", label: "Español" },
];

export const LanguagePicker = () => {
  const { lang, setLang } = useLanguageStore();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Select language"
          >
            <Languages className="h-5 w-5 cursor-pointer neon:text-accent" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {LANGUAGE_OPTIONS.map((language) => (
            <DropdownMenuItem
              key={language.id}
              onClick={() => setLang(language.id)}
              className={lang === language.id ? "bg-accent/10" : ""}
            >
              {language.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {isHovered && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-xs uppercase tracking-widest font-medium neon:text-accent text-foreground/60 bg-background border border-border/30 px-3 py-1">
            Language
          </span>
        </div>
      )}
    </div>
  );
};

LanguagePicker.displayName = "LanguagePicker";
