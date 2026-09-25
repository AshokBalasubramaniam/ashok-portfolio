import { FiGithub, FiExternalLink } from "react-icons/fi";
import { getTechIcon } from "../../data/techIcons";

export function CategoryBadge({ project, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-[#05060f]/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-light)] backdrop-blur ${className}`}
    >
      {project.categories.join(" · ")}
    </span>
  );
}

export function TechBadge({ name, size = "sm" }) {
  const { icon: Icon, color } = getTechIcon(name);
  const sizing = size === "lg" ? "gap-2 px-3 py-2 text-sm" : "gap-1.5 px-2.5 py-1 text-xs";
  return (
    <span
      className={`inline-flex items-center rounded-lg border border-white/[0.08] bg-white/[0.03] font-medium text-[var(--color-text)] ${sizing}`}
    >
      <Icon style={{ color }} className="shrink-0" />
      {name}
    </span>
  );
}

export function SectionLabel({ children, className = "" }) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-light)] ${className}`}
    >
      {children}
    </p>
  );
}

// GitHub + Live Demo (or a quiet "Not deployed" marker — never a fake link).
export function ProjectLinks({ project, compact = false }) {
  const size = compact ? "!px-4 !py-2 text-xs" : "text-sm";
  return (
    <>
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer" className={`btn-outline ${size}`}>
          <FiGithub /> GitHub
        </a>
      )}
      {project.demo ? (
        <a href={project.demo} target="_blank" rel="noreferrer" className={`btn-outline ${size}`}>
          <FiExternalLink /> Live Demo
        </a>
      ) : (
        <span
          className={`inline-flex items-center gap-2 rounded-full border border-dashed border-white/10 px-4 py-2 font-medium text-[var(--color-text-muted)]/80 ${
            compact ? "text-xs" : "text-sm"
          }`}
        >
          Not deployed
        </span>
      )}
    </>
  );
}
