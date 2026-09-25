import {
  FiArrowDown,
  FiChevronRight,
  FiMonitor,
  FiLink,
  FiServer,
  FiDatabase,
  FiUser,
  FiCpu,
  FiCloud,
} from "react-icons/fi";

const layerIcons = {
  Frontend: FiMonitor,
  Client: FiUser,
  "REST API": FiLink,
  Backend: FiServer,
  "Rust Service": FiServer,
  Database: FiDatabase,
  "Automation Layer": FiCpu,
  "Cloud VM": FiCloud,
};

/**
 * Layered architecture. `variant="flow"` renders a compact horizontal chain
 * (used in the featured project); the default renders a vertical stack.
 */
export default function ArchitectureDiagram({ architecture, variant = "stack" }) {
  const layers = architecture?.layers ?? [];

  if (variant === "flow") {
    return (
      <div className="flex flex-wrap items-center gap-1.5">
        {layers.map((layer, i) => {
          const Icon = layerIcons[layer.label] ?? FiServer;
          return (
            <span key={layer.label} className="flex items-center gap-1.5">
              <span
                title={layer.detail}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs font-medium text-[var(--color-text)]"
              >
                <Icon className="text-[var(--color-primary-light)]" />
                {layer.label}
              </span>
              {i < layers.length - 1 && <FiChevronRight className="text-xs text-white/30" />}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <ol className="mx-auto flex max-w-md flex-col items-stretch">
      {layers.map((layer, i) => {
        const Icon = layerIcons[layer.label] ?? FiServer;
        return (
          <li key={layer.label} className="flex flex-col items-center">
            <div className="flex w-full items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[var(--color-primary)]/25 to-[var(--color-accent)]/20 text-[var(--color-primary-light)]">
                <Icon />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">{layer.label}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{layer.detail}</p>
              </div>
            </div>
            {i < layers.length - 1 && (
              <span className="flex h-7 items-center text-xs text-white/30" aria-hidden="true">
                <FiArrowDown />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
