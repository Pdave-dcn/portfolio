"use client";

import { motion } from "motion/react";
import { memo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Divider } from "@/components/ui/divider";
import { cn } from "@/lib/utils";
import {
  fadeUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

import BackButton from "./BackButton";
import ProjectHeader from "./ProjectHeader";
import ProjectOverview from "./ProjectOverview";
import TechStack from "./TechStack";
import BulletListSection from "./BulletListSection";
import ProjectCTAFooter from "./ProjectCTAFooter";
import Context from "./Context";
import { useFeaturedProjects } from "@/hooks/useProject";
import { useLanguageStore } from "@/stores/language.store";
import { PROJECT_DETAILS_PAGE } from "@/lib/content/projects/project-details-page";

const ProjectDetailPage = memo(() => {
  const params = useParams();
  const projectId = params?.id as string;

  const lang = useLanguageStore((state) => state.lang);
  const hydrated = useLanguageStore((state) => state.hydrated);

  const pageCopy = PROJECT_DETAILS_PAGE[hydrated ? lang : "en"];

  const project = useFeaturedProjects(lang).find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{pageCopy.notFound.title}</h1>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ← {pageCopy.notFound.backLink}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 md:py-20">
      <div className="w-[95%] lg:w-[80%] mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Back Button */}
          <motion.div variants={fadeUp}>
            <BackButton backActionText={pageCopy.cta.linkText.back} />
          </motion.div>

          {/* Project Header */}
          <motion.div variants={fadeUp}>
            <ProjectHeader project={project} ctaText={pageCopy.cta.linkText} />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Divider />
          </motion.div>

          {/* Overview */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <ProjectOverview
              title={pageCopy.sections.overview.title}
              overview={project.overview}
              screenshots={project.screenshots}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Divider />
          </motion.div>

          {/* Context*/}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <Context context={project?.context} />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Divider />
          </motion.div>

          {/* Technologies */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <TechStack
              title={pageCopy.sections.technologies.title}
              technologies={project.coreTechnologies}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Divider />
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <BulletListSection
              title={pageCopy.sections.highlights.title}
              items={project.highlights}
              bulletIcon="arrow"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Divider />
          </motion.div>

          {/* Challenges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <BulletListSection
              title={pageCopy.sections.challenges.title}
              items={project.challenges}
              bulletIcon="dot"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Divider />
          </motion.div>

          {/* Lessons Learned */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <BulletListSection
              title={pageCopy.sections.lessonsLearned.title}
              items={project.lessonsLearned}
              bulletIcon="check"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Divider />
          </motion.div>

          {/* Future Improvements */}
          {project.futureImprovements &&
            project.futureImprovements.length > 0 && (
              <>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                >
                  <BulletListSection
                    title={pageCopy.sections.improvements.title}
                    items={project.futureImprovements}
                    bulletIcon="arrowUp"
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Divider />
                </motion.div>
              </>
            )}

          {/* Footer CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <ProjectCTAFooter
              heading={pageCopy.sections.ctaFooter.heading}
              ctaText={pageCopy.cta.linkText}
              demoUrl={project.links.demo}
              repoUrl={project.links.repo}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Divider thick />
          </motion.div>

          {/* Back to Home Link */}
          <motion.div variants={fadeUp} className="py-8 text-center">
            <Link
              href="/"
              className={cn(
                "group inline-flex items-center gap-2 text-sm md:text-base",
                "text-muted-foreground/80 hover:text-foreground",
                "transition-colors duration-200"
              )}
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              <span>{pageCopy.notFound.backLink}</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
});

ProjectDetailPage.displayName = "ProjectDetailPage";

export default ProjectDetailPage;
