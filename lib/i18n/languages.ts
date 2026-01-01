export const LANGUAGES = ["en", "fr", "es"] as const;

export type Language = (typeof LANGUAGES)[number];
