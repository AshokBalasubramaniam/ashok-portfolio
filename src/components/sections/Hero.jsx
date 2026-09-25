import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiMongodb, SiRust } from "react-icons/si";
import { profile, socialLinks } from "../../data/profile";

// Satellite nodes around the identity card. `x`/`y` are percentages of the
// square visual, and `path` is the connection curve in the same 0–100 space.
const stackNodes = [
  {
    name: "React",
    role: "Interfaces",
    Icon: SiReact,
    color: "#61dafb",
    x: 14,
    y: 10,
    path: "M14 10 C 30 10, 32 34, 50 50",
    delay: "0s",
  },
  {
    name: "Node.js",
    role: "APIs",
    Icon: SiNodedotjs,
    color: "#83cd29",
    x: 86,
    y: 16,
    path: "M86 16 C 70 16, 68 36, 50 50",
    delay: "1.2s",
  },
  {
    name: "MongoDB",
    role: "Data",
    Icon: SiMongodb,
    color: "#4faa41",
    x: 14,
    y: 90,
    path: "M14 90 C 30 90, 34 66, 50 50",
    delay: "2.4s",
  },
  {
    name: "Rust",
    role: "Performance",
    Icon: SiRust,
    color: "#dea584",
    x: 86,
    y: 84,
    path: "M86 84 C 70 84, 66 64, 50 50",
    delay: "3.6s",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

function StackStrong({ children }) {
  return <strong className="font-semibold text-white">{children}</strong>;
}

function IdentityVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      {/* Ambient depth: faint grid fading out from the centre, plus one soft glow */}
      <div
        className="hero-grid absolute inset-0 rounded-[2.5rem] opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)] opacity-[0.18] blur-[90px]"
        aria-hidden="true"
      />

      {/* Connection lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {stackNodes.map((node, i) => (
          <g key={node.name}>
            <path
              d={node.path}
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={node.path}
              fill="none"
              stroke="url(#hero-line)"
              strokeWidth="1"
              strokeDasharray="3 5"
              vectorEffect="non-scaling-stroke"
              className={reduceMotion ? "" : "hero-dash"}
            />
            {!reduceMotion && (
              <circle r="0.7" fill="#c4b5fd" opacity="0">
                <animateMotion
                  dur="4.5s"
                  begin={`${i * 1.1}s`}
                  repeatCount="indefinite"
                  path={node.path}
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.15;0.85;1"
                  dur="4.5s"
                  begin={`${i * 1.1}s`}
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        ))}
      </svg>

      {/* Central identity card */}
      <div className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="hero-card relative overflow-hidden rounded-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <span className="font-mono text-[11px] text-[var(--color-text-muted)]">
              {profile.firstName.toLowerCase()}.ts
            </span>
          </div>

          <pre className="px-5 py-5 font-mono text-[11px] leading-[1.85] xl:text-[13px]">
            <code>
              <span className="text-[#c4b5fd]">const</span>{" "}
              <span className="text-white">{profile.firstName.toLowerCase()}</span>{" "}
              <span className="text-white/40">=</span> <span className="text-white/60">{"{"}</span>
              {"\n"}
              {"  "}
              <span className="text-[#93c5fd]">role</span>
              <span className="text-white/40">:</span>{" "}
              <span className="text-[#67e8f9]">&quot;{profile.title}&quot;</span>
              <span className="text-white/40">,</span>
              {"\n"}
              {"  "}
              <span className="text-[#93c5fd]">stack</span>
              <span className="text-white/40">:</span>{" "}
              <span className="text-white/60">[</span>
              <span className="text-[#67e8f9]">&quot;MERN&quot;</span>
              <span className="text-white/40">, </span>
              <span className="text-[#67e8f9]">&quot;Rust&quot;</span>
              <span className="text-white/60">]</span>
              <span className="text-white/40">,</span>
              {"\n"}
              {"  "}
              <span className="text-[#93c5fd]">experience</span>
              <span className="text-white/40">:</span>{" "}
              <span className="text-[#fda4af]">2</span>
              <span className="text-white/40">,</span>
              {"\n"}
              {"  "}
              <span className="text-[#93c5fd]">ships</span>
              <span className="text-white/40">:</span>{" "}
              <span className="text-[#c4b5fd]">true</span>
              {"\n"}
              <span className="text-white/60">{"}"}</span>
              <span className="hero-caret ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[3px] bg-[var(--color-primary-light)]/80" />
            </code>
          </pre>

          <div className="flex items-center gap-2 border-t border-white/[0.06] px-4 py-3 text-[11px] text-[var(--color-text-muted)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            {profile.location.split(",")[0]}, India
          </div>
        </motion.div>
      </div>

      {/* Stack nodes */}
      {stackNodes.map(({ name, role, Icon, color, x, y, delay }, i) => (
        <div
          key={name}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 + i * 0.1 }}
          >
          <div
            className="hero-node animate-float-soft flex items-center gap-3 rounded-xl py-2.5 pl-2.5 pr-4"
            style={{ animationDelay: delay }}
          >
            <span
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-lg"
              style={{ color }}
            >
              <Icon />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-white">{name}</span>
              <span className="block text-[11px] text-[var(--color-text-muted)]">{role}</span>
              </span>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      {/* Cinematic backdrop: two restrained washes of the accent palette */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[var(--color-primary)] opacity-[0.12] blur-[140px]" />
        <div className="absolute -right-40 top-1/3 h-[480px] w-[480px] rounded-full bg-[var(--color-accent)] opacity-[0.10] blur-[140px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--color-bg)]" />
      </div>

      <div className="container-px relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-xl">
          <motion.div {...fadeUp(0)} className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-[var(--color-primary-light)] to-transparent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-primary-light)]">
              2+ Years Experience · MERN · Rust
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="hero-name">{profile.firstName}</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-5 font-display text-2xl font-medium tracking-tight text-white/85 sm:text-3xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            {...fadeUp(0.24)}
            className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
          >
            I build fast, secure web applications end to end — responsive interfaces in{" "}
            <StackStrong>React</StackStrong>, scalable APIs with <StackStrong>Node.js</StackStrong> and{" "}
            <StackStrong>MongoDB</StackStrong>, and high-performance services in{" "}
            <StackStrong>Rust</StackStrong>.
          </motion.p>

          <motion.div {...fadeUp(0.32)} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn-outline">
              <FiMail /> Contact Me
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-12 flex items-center gap-5 border-t border-white/[0.06] pt-6"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]/70">Find me</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={link.name}
                  className="grid h-9 w-9 place-items-center rounded-full text-base text-[var(--color-text-muted)] transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="hidden sm:block">
          <IdentityVisual />
        </div>
      </div>
    </section>
  );
}
