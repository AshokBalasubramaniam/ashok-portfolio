import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import ProjectPreview from "./ProjectPreview";
import { CategoryBadge, TechBadge, ProjectLinks, SectionLabel } from "./ProjectBits";

const MAX_TECH = 5;

export default function ProjectCard({ project, index = 0, onViewDetails }) {
  const extraTech = project.tech.length - MAX_TECH;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
      className="project-card group flex h-full flex-col overflow-hidden rounded-[22px]"
    >
      <div className="p-2.5 pb-0">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/9]">
          <ProjectPreview project={project}>
            <CategoryBadge project={project} className="absolute left-4 top-4" />

            <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-[#05060f]/80 text-white backdrop-blur transition-colors hover:border-[var(--color-primary-light)]"
                >
                  <FiGithub />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} live demo`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-[#05060f]/80 text-white backdrop-blur transition-colors hover:border-[var(--color-primary-light)]"
                >
                  <FiExternalLink />
                </a>
              )}
            </div>
          </ProjectPreview>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">{project.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.tagline}</p>

        <div className="mt-5 grid gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:grid-cols-2">
          <div>
            <SectionLabel className="mb-1.5">Problem</SectionLabel>
            <p className="line-clamp-3 text-[13px] leading-relaxed text-[var(--color-text-muted)]">{project.problem}</p>
          </div>
          <div className="sm:border-l sm:border-white/[0.06] sm:pl-4">
            <SectionLabel className="mb-1.5 !text-[var(--color-accent-cyan)]">Solution</SectionLabel>
            <p className="line-clamp-3 text-[13px] leading-relaxed text-[var(--color-text-muted)]">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, MAX_TECH).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {extraTech > 0 && (
            <span className="inline-flex items-center rounded-lg border border-white/[0.08] px-2.5 py-1 text-xs text-[var(--color-text-muted)]">
              +{extraTech}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          <ProjectLinks project={project} compact />
          <button
            type="button"
            onClick={() => onViewDetails(project)}
            className="project-cta btn-primary ml-auto !px-5 !py-2 text-xs"
          >
            View Details <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
