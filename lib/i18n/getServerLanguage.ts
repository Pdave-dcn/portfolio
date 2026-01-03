import { headers } from "next/headers";
import { LANGUAGES, type Language } from "./languages";

export const getServerLanguage = async (): Promise<Language> => {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");

  if (acceptLanguage) {
    const primaryLang = acceptLanguage.split(",")[0].trim();

    const langCode = primaryLang.split("-")[0].split("_")[0].toLowerCase();

    if (LANGUAGES.includes(langCode as Language)) {
      return langCode as Language;
    }
  }

  return "en";
};
