"use client";

import { useLanguageStore } from "@/stores/language.store";
import type { Language } from "@/lib/i18n/languages";
import { useEffect, type ReactNode } from "react";

interface LanguageProviderProps {
  children: ReactNode;
  serverLang: Language;
}

export function LanguageProvider({
  children,
  serverLang,
}: LanguageProviderProps) {
  const { lang, setLang, hydrated } = useLanguageStore();

  useEffect(() => {
    if (hydrated && lang === "en" && serverLang !== "en") {
      setLang(serverLang);
    }
  }, [hydrated, lang, serverLang, setLang]);

  return <>{children}</>;
}
