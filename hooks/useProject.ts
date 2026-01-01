import { useMemo } from "react";
import { useLanguageStore } from "@/stores/language.store";
import { PROJECTS_META } from "@/lib/content/projects/meta";
import { PROJECTS_COPY } from "@/lib/content/projects/copy";
import { Language } from "@/lib/i18n/languages";

export const useProjects = (lang?: Language) => {
  const storeLang = useLanguageStore((state) => state.lang);
  const currentLang = lang ?? storeLang;

  const projects = useMemo(() => {
    return PROJECTS_META.map((meta) => ({
      ...meta,
      ...PROJECTS_COPY[currentLang][meta.id],
    }));
  }, [currentLang]);

  return projects;
};

export type Project = ReturnType<typeof useProjects>[number];

export const useFeaturedProjects = (lang?: Language) => {
  const projects = useProjects(lang);

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    [projects]
  );

  return featuredProjects;
};
