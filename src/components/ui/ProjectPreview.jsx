import { FiChevronRight, FiCheck } from "react-icons/fi";
import { getTechIcon } from "../../data/techIcons";

function TechIconRow({ tech, max = 5 }) {
  return (
    <div className="flex items-center gap-1.5">
      {tech.slice(0, max).map((name) => {
        const { icon: Icon, color } = getTechIcon(name);
        return (
          <span
            key={name}
            title={name}
            className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-[#0b0f1f]/80 text-sm backdrop-blur"
            style={{ color }}
          >
            <Icon />
          </span>
        );
      })}
    </div>
  );
}

// Abstract web-app mock: browser chrome, sidebar, stat tiles and list rows.
function DashboardVisual({ project, large }) {
  const statuses = large
    ? [
        "bg-emerald-400/70",
        "bg-amber-300/70",
        "bg-emerald-400/70",
        "bg-sky-400/70",
        "bg-amber-300/70",
        "bg-emerald-400/70",
      ]
    : ["bg-emerald-400/70", "bg-amber-300/70", "bg-emerald-400/70", "bg-sky-400/70"];

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center ${large ? "px-6 pb-16 pt-14 lg:p-12" : "px-5 pb-16 pt-14"}`}
    >
      <div className={`relative w-full ${large ? "lg:-translate-y-6" : ""}`} style={{ maxWidth: large ? 600 : 460 }}>
        {large && (
          <div className="absolute -right-4 -top-5 z-10 hidden items-center lg:flex gap-2.5 rounded-xl border border-white/10 bg-[#101528]/95 px-3 py-2.5 shadow-xl shadow-black/40 backdrop-blur sm:-right-8">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-400/15 text-xs text-emerald-300">
              <FiCheck />
            </span>
            <span className="space-y-1">
              <span className="block h-1.5 w-20 rounded bg-white/35" />
              <span className="block h-1.5 w-12 rounded bg-white/15" />
            </span>
          </div>
        )}
        <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#0b0f1f]/90 shadow-2xl shadow-black/50">
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="ml-2 rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-white/40">
              {project.shortName}
            </span>
          </div>
          <div className="flex">
            <div className="hidden w-[22%] shrink-0 space-y-2 border-r border-white/[0.06] p-3 sm:block">
              <div className="mb-3 h-2 w-3/4 rounded bg-gradient-to-r from-[var(--color-primary-light)]/70 to-[var(--color-accent)]/50" />
              {[70, 55, 80, 60, 45].map((w, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span
                    className={`h-1.5 w-1.5 rounded-sm ${i === 1 ? "bg-[var(--color-primary-light)]" : "bg-white/15"}`}
                  />
                  <span className="h-1.5 rounded bg-white/10" style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
            <div className="flex-1 space-y-3 p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <span className="h-2 w-24 rounded bg-white/25" />
                <span className="h-4 w-14 rounded-md bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] opacity-80" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`rounded-lg border border-white/[0.06] bg-white/[0.03] ${large ? "p-3" : "p-2"}`}
                  >
                    <span className="mb-1.5 block h-1.5 w-1/2 rounded bg-white/15" />
                    <span
                      className={`block h-2.5 w-2/3 rounded ${i === 0 ? "bg-[var(--color-accent-cyan)]/50" : "bg-white/25"}`}
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                {statuses.map((status, i) => (
                  <div
                    key={i}
                    className={`items-center gap-2 rounded-md border border-white/[0.04] bg-white/[0.02] px-2 ${large ? "py-2" : "py-1.5"} ${i >= 4 ? "hidden lg:flex" : "flex"}`}
                  >
                    <span className="h-4 w-4 shrink-0 rounded-full bg-white/10" />
                    <span className="h-1.5 flex-1 rounded bg-white/10" />
                    <span className={`h-2.5 w-10 rounded-full ${status}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {large && (
          <div className="absolute -bottom-16 -left-4 z-10 hidden w-60 lg:block rounded-xl border border-white/10 bg-[#101528]/95 p-3.5 shadow-2xl shadow-black/50 backdrop-blur sm:-left-8">
            <div className="flex items-center gap-2.5">
              <span className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-[var(--color-primary)]/60 to-[var(--color-accent-cyan)]/40" />
              <span className="flex-1 space-y-1">
                <span className="block h-1.5 w-24 rounded bg-white/35" />
                <span className="block h-1.5 w-16 rounded bg-white/15" />
              </span>
            </div>
            <div className="mt-3 space-y-1.5">
              <span className="block h-1.5 w-full rounded bg-white/10" />
              <span className="block h-1.5 w-4/5 rounded bg-white/10" />
            </div>
            <div className="mt-3 flex gap-2">
              <span className="h-5 flex-1 rounded-md bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] opacity-80" />
              <span className="h-5 flex-1 rounded-md border border-white/10" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Technical visual for backend / automation services: terminal + pipeline.
function TerminalVisual({ project, large }) {
  const lines = [
    { prompt: true, text: "cargo run --release" },
    { tag: "INFO", text: "service listening", tone: "text-[var(--color-accent-cyan)]" },
    { tag: "→", text: "session.init", ok: true },
    { tag: "→", text: "automation.connect  (C#)", ok: true },
    { tag: "→", text: "screenshot.capture", ok: true },
    { tag: "→", text: "session.terminate", ok: true },
  ];
  const pipeline = project.architecture?.layers ?? [];

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-4 ${large ? "px-6 pb-16 pt-14 lg:p-12" : "px-5 pb-16 pt-14"}`}
    >
      <div className="w-full max-w-[520px] overflow-hidden rounded-xl border border-white/10 bg-[#070a16]/95 shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[10px] text-white/40">{project.shortName} — rust</span>
        </div>
        <pre className="px-4 py-3 font-mono text-[10.5px] leading-[1.75] sm:text-[11.5px]">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-2 whitespace-nowrap">
              {line.prompt ? (
                <>
                  <span className="text-[var(--color-primary-light)]">$</span>
                  <span className="text-white/85">{line.text}</span>
                </>
              ) : (
                <>
                  <span className={line.tone ?? "text-white/35"}>{line.tag}</span>
                  <span className="text-white/65">{line.text}</span>
                  {line.ok && <span className="ml-auto text-emerald-400/80">ok</span>}
                </>
              )}
            </div>
          ))}
        </pre>
      </div>

      {large && pipeline.length > 0 && (
        <div className="hidden max-w-[520px] flex-wrap items-center justify-center gap-1 sm:flex">
          {pipeline.map((layer, i) => (
            <span key={layer.label} className="flex items-center gap-1">
              <span className="rounded-md border border-white/10 bg-[#0b0f1f]/80 px-2 py-1 font-mono text-[10px] text-white/60">
                {layer.label}
              </span>
              {i < pipeline.length - 1 && <FiChevronRight className="text-[10px] text-white/25" />}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Project preview: the real screenshot when available, otherwise a generated
 * technology-based visual. `children` render as overlays (badges, hover links).
 */
export default function ProjectPreview({ project, className = "", children, showTech = true, size = "md" }) {
  const large = size === "lg";
  const hasImage = Boolean(project.image);

  return (
    <div className={`relative h-full w-full overflow-hidden bg-[#080b18] ${className}`}>
      {hasImage ? (
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-left-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      ) : (
        <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-[1.02]">
          {/* Ambient gradient + faint grid */}
          <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_20%_0%,rgba(139,92,246,0.22),transparent_60%),radial-gradient(70%_60%_at_100%_100%,rgba(34,211,238,0.12),transparent_60%)]" />
          <div className="hero-grid absolute inset-0 opacity-50" />
          {project.visual === "terminal" ? (
            <TerminalVisual project={project} large={large} />
          ) : (
            <DashboardVisual project={project} large={large} />
          )}
        </div>
      )}

      {/* Dark overlay for legibility of badges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060f]/85 via-transparent to-[#05060f]/30" />

      {!hasImage && showTech && (
        <div className="absolute bottom-4 left-4">
          <TechIconRow tech={project.tech} />
        </div>
      )}

      {children}
    </div>
  );
}
