export default function GlowBackground({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="glow-orb animate-blob left-[-10%] top-[-10%] h-72 w-72 bg-[var(--color-primary)] sm:h-96 sm:w-96" />
      <div className="glow-orb animate-blob right-[-10%] top-1/3 h-72 w-72 bg-[var(--color-accent)] [animation-delay:4s] sm:h-96 sm:w-96" />
      <div className="glow-orb animate-blob bottom-[-10%] left-1/3 h-72 w-72 bg-[var(--color-accent-cyan)] [animation-delay:8s] sm:h-96 sm:w-96" />
    </div>
  );
}
