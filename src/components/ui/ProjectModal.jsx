import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiAlertTriangle, FiBookOpen } from "react-icons/fi";
import ProjectPreview from "./ProjectPreview";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { CategoryBadge, TechBadge, ProjectLinks, SectionLabel } from "./ProjectBits";

function Block({ title, children, className = "" }) {
  return (
    <section className={className}>
      <h4 className="mb-4 font-display text-lg font-semibold text-white">{title}</h4>
      {children}
    </section>
  );
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/75 p-3 backdrop-blur-sm sm:p-6"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="project-card relative my-auto w-full max-w-4xl overflow-hidden rounded-[24px]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-[#05060f]/80 text-white backdrop-blur transition-colors hover:border-[var(--color-primary-light)]"
            >
              <FiX />
            </button>

            {/* Header */}
            <div className="px-6 pb-6 pt-8 sm:px-10 sm:pt-10">
              <CategoryBadge project={project} />
              <h3
                id="project-modal-title"
                className="mt-4 pr-12 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {project.name}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
                {project.tagline}
              </p>
            </div>

            {/* Hero preview */}
            <div className="px-3 sm:px-6">
              <div className="aspect-[16/8] overflow-hidden rounded-2xl border border-white/[0.06]">
                <ProjectPreview project={project} size="lg" />
              </div>
            </div>

            <div className="space-y-12 px-6 py-10 sm:px-10">
              {/* Problem / Solution */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                  <SectionLabel className="mb-2">Problem</SectionLabel>
                  <p className="text-sm leading-relaxed text-[var(--color-text)]/90">{project.problem}</p>
                </div>
                <div className="rounded-2xl border border-[var(--color-accent-cyan)]/15 bg-[var(--color-accent-cyan)]/[0.03] p-6">
                  <SectionLabel className="mb-2 !text-[var(--color-accent-cyan)]">Solution</SectionLabel>
                  <p className="text-sm leading-relaxed text-[var(--color-text)]/90">{project.solution}</p>
                </div>
              </div>

              <Block title="Key Features">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {project.features.map(({ title, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-[var(--color-primary)]/30"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[var(--color-primary)]/12 text-[var(--color-primary-light)]">
                        <Icon />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-[var(--color-text-muted)]">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Block>

              <div className="grid gap-10 md:grid-cols-2">
                <Block title="Architecture">
                  <ArchitectureDiagram architecture={project.architecture} />
                </Block>
                <Block title="Technology Stack">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <TechBadge key={tech} name={tech} size="lg" />
                    ))}
                  </div>
                </Block>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <Block title="Challenges">
                  <ul className="space-y-3">
                    {project.challenges.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                        <FiAlertTriangle className="mt-1 shrink-0 text-amber-300/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Block>
                <Block title="What I Learned">
                  <ul className="space-y-3">
                    {project.learnings.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                        <FiBookOpen className="mt-1 shrink-0 text-[var(--color-accent-cyan)]/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Block>
              </div>

              <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.06] pt-8">
                <ProjectLinks project={project} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
