import type { Language } from "../i18n/languages";

export const CONTACT_HEADING: Record<Language, string> = {
  en: "Reach out anytime",
  fr: "Contactez-moi à tout moment",
  es: "Contáctame en cualquier momento",
} as const;

export const CONTACT_LINKS = [
  {
    label: "Email",
    value: "dprovidence919@gmail.com",
    href: "mailto:dprovidence919@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "/in/davidp919",
    href: "https://www.linkedin.com/in/davidp919/",
  },
  {
    label: "GitHub",
    value: "/pdave-dcn",
    href: "https://github.com/pdave-dcn/",
  },
  { label: "Twitter", value: "@pdv_stack", href: "https://x.com/pdv_stack" },
  {
    label: "Threads",
    value: "@pdv_stack",
    href: "https://www.threads.com/@pdv_stack/",
  },
] as const;
