import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiFolder } from "react-icons/fi";
import { projects, projectFilters, featuredProject } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";
import FeaturedProject from "./FeaturedProject";

const matchesFilter = (project, filter) => filter === "All" || project.categories.includes(filter);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // The featured project gets its own showcase below the grid, so it isn't repeated as a card.
  const gridProjects = useMemo(
    () => projects.filter((p) => p !== featuredProject && matchesFilter(p, activeFilter)),
    [activeFilter],
  );
  const showFeatured = featuredProject && matchesFilter(featuredProject, activeFilter);
  const isEmpty = gridProjects.length === 0 && !showFeatured;

  return (
    <section id="projects" className="section overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-[var(--color-primary)] opacity-[0.08] blur-[120px]" />
        <div className="absolute -left-40 bottom-40 h-96 w-96 rounded-full bg-[var(--color-accent-cyan)] opacity-[0.06] blur-[120px]" />
      </div>

      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Things I&apos;ve <span className="gradient-text">Built</span>
            </>
          }
          description="A collection of projects showcasing my experience across frontend, backend, full-stack development, automation, and mobile applications."
        />

        <div className="-mx-6 mb-10 overflow-x-auto px-6 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          <div
            role="tablist"
            aria-label="Filter projects"
            className="mx-auto flex w-max gap-2 sm:flex-wrap sm:justify-center"
          >
            {projectFilters.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "border-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-[0_8px_24px_-10px_rgba(139,92,246,0.7)]"
                      : "border-white/10 bg-white/[0.02] text-[var(--color-text-muted)] hover:border-[var(--color-primary-light)]/50 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {isEmpty ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mx-auto flex max-w-lg flex-col items-center gap-3 rounded-2xl px-6 py-12 text-center"
          >
            <FiFolder className="text-2xl text-[var(--color-primary-light)]" />
            <p className="font-medium text-white">No {activeFilter.toLowerCase()} projects published yet</p>
            <p className="text-sm text-[var(--color-text-muted)]">
              New work is on the way — check the other categories meanwhile.
            </p>
          </motion.div>
        ) : (
          <>
            {gridProjects.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                <AnimatePresence mode="popLayout">
                  {gridProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} onViewDetails={setSelectedProject} />
                  ))}
                </AnimatePresence>
              </div>
            )}
            {showFeatured && (
              <FeaturedProject
                project={featuredProject}
                onViewDetails={setSelectedProject}
                className={gridProjects.length > 0 ? "mt-6 lg:mt-8" : ""}
              />
            )}
          </>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
