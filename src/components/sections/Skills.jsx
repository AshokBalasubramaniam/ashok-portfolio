import { motion } from "framer-motion";
import { FiCode, FiZap } from "react-icons/fi";
import { skillCategories } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";

// Appends a 2-digit hex alpha to a #rrggbb colour.
const alpha = (hex, a) => `${hex}${a}`;

function SkillRow({ skill }) {
  return (
    <li className="group grid grid-cols-[minmax(0,11rem)_minmax(0,1fr)_2.25rem] items-center gap-3">
      <span className="flex min-w-0 items-center gap-2.5 text-[13px] leading-tight text-[var(--color-text)]">
        <skill.icon className="shrink-0 text-lg" style={{ color: skill.color }} />
        <span>{skill.name}</span>
      </span>
      <span className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="block h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-cyan)]"
        />
      </span>
      <span className="text-right text-xs tabular-nums text-[var(--color-text-muted)]">{skill.level}%</span>
    </li>
  );
}

function SkillCard({ category, index }) {
  const { from, to } = category.accent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-hover relative h-full overflow-hidden rounded-2xl border p-6"
      style={{
        borderColor: alpha(from, "40"),
        background: `linear-gradient(160deg, ${alpha(from, "1f")} 0%, rgba(13,18,36,0.6) 45%, rgba(8,10,22,0.7) 100%)`,
      }}
    >
      <div className="mb-6 flex items-start gap-3.5">
        <span
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-xl text-white"
          style={{
            backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
            boxShadow: `0 10px 28px -10px ${alpha(to, "aa")}`,
          }}
        >
          <category.icon />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="whitespace-nowrap font-display text-base font-semibold text-white">{category.title}</h3>
            <span
              className="shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
              style={{ color: to, borderColor: alpha(to, "40"), background: alpha(to, "1a") }}
            >
              {category.level}%
            </span>
          </div>
          <p className="mt-1 text-[13px] leading-snug text-[var(--color-text-muted)]">{category.description}</p>
        </div>
      </div>

      <ul className="space-y-3.5">
        {category.skills.map((skill) => (
          <SkillRow key={skill.name} skill={skill} />
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section overflow-hidden bg-[var(--color-bg-soft)]/40">
      {/* Soft corner washes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[var(--color-primary)] opacity-[0.12] blur-[120px]" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[var(--color-accent)] opacity-[0.12] blur-[120px]" />
      </div>

      <div className="container-px relative mx-auto max-w-7xl">
        <div className="relative">
          <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 items-center gap-3 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/[0.06] py-1.5 pl-1.5 pr-5 text-xs font-medium text-[var(--color-primary-light)] xl:flex">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-primary)]/40 text-base">
              <FiCode />
            </span>
            Build <span className="text-white/30">•</span> Develop <span className="text-white/30">•</span> Deploy
          </div>

          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 xl:block">
            <div className="hero-grid absolute -inset-10 opacity-70" aria-hidden="true" />
            <span className="glass relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs text-[var(--color-text-muted)]">
              <FiZap className="text-[var(--color-primary-light)]" /> Always Learning
            </span>
          </div>

          <SectionHeading
            eyebrow="Skills"
            title={
              <>
                Technologies <span className="gradient-text">I work with</span>
              </>
            }
            description="A combination of frontend, backend, database, tools and cloud technologies that I use to build scalable and production-ready applications."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.key} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
