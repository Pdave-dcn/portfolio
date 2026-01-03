import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Language } from "@/lib/i18n/languages";

type LanguageState = {
  lang: Language;
  setLang: (lang: Language) => void;
  hydrated: boolean;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      lang: "en",
      setLang: (lang) => set({ lang }),
      hydrated: false,
    }),
    {
      name: "language-preference",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hydrated = true;
        }
      },
    }
  )
);
