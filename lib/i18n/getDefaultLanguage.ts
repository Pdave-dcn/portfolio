import { LANGUAGES, type Language } from "./languages";

export const getDefaultLanguage = (): Language => {
  if (typeof window === "undefined") return "en";

  const browserLang = navigator.language.slice(0, 2);
  if (LANGUAGES.includes(browserLang as Language)) {
    return browserLang as Language;
  }

  return "en";
};
