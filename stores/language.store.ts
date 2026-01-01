import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Language } from "@/lib/i18n/languages";
import { getDefaultLanguage } from "@/lib/i18n/getDefaultLanguage";

type LanguageState = {
  lang: Language;
  setLang: (lang: Language) => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      lang: getDefaultLanguage(),
      setLang: (lang) => set({ lang }),
    }),
    {
      name: "language-preference",
    }
  )
);
