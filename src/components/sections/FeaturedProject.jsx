import { motion } from "framer-motion";
import { FiStar, FiArrowRight } from "react-icons/fi";
import ProjectPreview from "../ui/ProjectPreview";
import ArchitectureDiagram from "../ui/ArchitectureDiagram";
import { CategoryBadge, TechBadge, ProjectLinks, SectionLabel } from "../ui/ProjectBits";

const MAX_FEATURES = 6;

// Large 55/45 showcase rendered inside the Projects section, right after the grid.
export default function FeaturedProject({ project, onViewDetails, className = "" }) {
  if (!project) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`project-card project-card-featured group overflow-hidden rounded-[24px] ${className}`}
    >
      <div className="grid lg:grid-cols-[11fr_9fr]">
        {/* Visual — 55% */}
        <div className="p-2.5 lg:pr-0">
          <div className="aspect-square h-full sm:aspect-[16/10] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[520px]">
            <ProjectPreview project={project} size="lg">
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                  <FiStar /> Featured Project
                </span>
                <CategoryBadge project={project} />
              </div>
            </ProjectPreview>
          </div>
        </div>

        {/* Information — 45% */}
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">{project.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">{project.tagline}</p>

          <div className="mt-6 space-y-4">
            <div>
              <SectionLabel className="mb-1.5">Problem</SectionLabel>
              <p className="text-sm leading-relaxed text-[var(--color-text)]/85">{project.problem}</p>
            </div>
            <div>
              <SectionLabel className="mb-1.5 !text-[var(--color-accent-cyan)]">Solution</SectionLabel>
              <p className="text-sm leading-relaxed text-[var(--color-text)]/85">{project.solution}</p>
            </div>
          </div>

          <div className="mt-6">
            <SectionLabel className="mb-3">Key Features</SectionLabel>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
              {project.features.slice(0, MAX_FEATURES).map(({ title, icon: Icon }) => (
                <li key={title} className="flex items-center gap-2.5 text-sm text-[var(--color-text)]">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[var(--color-primary)]/12 text-xs text-[var(--color-primary-light)]">
                    <Icon />
                  </span>
                  {title}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <SectionLabel className="mb-3">Architecture</SectionLabel>
            <ArchitectureDiagram architecture={project.architecture} variant="flow" />
          </div>

          <div className="mt-6">
            <SectionLabel className="mb-3">Technology Stack</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/[0.06] pt-6">
            <ProjectLinks project={project} compact />
            <button
              type="button"
              onClick={() => onViewDetails(project)}
              className="project-cta btn-primary ml-auto !px-5 !py-2 text-xs"
            >
              View Details <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
