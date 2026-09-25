import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiMapPin,
  FiCalendar,
  FiUser,
  FiLayers,
  FiTrendingUp,
  FiCpu,
} from "react-icons/fi";
import { experience } from "../../data/experience";
import SectionHeading from "../ui/SectionHeading";

function MetaItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-[var(--color-primary-light)]">
        <Icon />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text-muted)]/80">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-white">{value}</p>
      </div>
    </div>
  );
}

function ExperienceCard({ job, index }) {
  const isCurrent = job.current;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`exp-card group relative rounded-3xl ${isCurrent ? "exp-card-current" : ""}`}
    >
      <div className="grid lg:grid-cols-[7fr_3fr]">
        {/* Main content — ~70% */}
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {isCurrent && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" /> Current Role
              </span>
            )}
            {job.badge && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent-cyan)]/25 bg-[var(--color-accent-cyan)]/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-cyan)]">
                <FiCpu /> {job.badge}
              </span>
            )}
            {!isCurrent && (
              <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                Where it started
              </span>
            )}
          </div>

          <h3
            className={`font-display font-bold tracking-tight text-white ${
              isCurrent ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            }`}
          >
            {job.role}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--color-text-muted)]">
            <span className="flex items-center gap-1.5 font-medium text-[var(--color-primary-light)]">
              <FiBriefcase /> {job.company}
            </span>
            <span className="flex items-center gap-1.5">
              <FiCalendar /> {job.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <FiMapPin /> {job.location}
            </span>
          </div>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-text)]/90">{job.summary}</p>

          <ul className={`mt-6 grid gap-x-8 gap-y-3 ${isCurrent ? "xl:grid-cols-2" : ""}`}>
            {job.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                <span
                  className={`mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full ${
                    isCurrent
                      ? "bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-accent)]"
                      : "bg-white/30"
                  }`}
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Metadata + technologies — ~30% */}
        <aside className="border-t border-white/[0.06] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <MetaItem icon={FiUser} label="Role" value={job.role} />
            <MetaItem icon={FiBriefcase} label="Company" value={job.company} />
            <MetaItem icon={FiCalendar} label="Duration" value={job.duration} />
            <MetaItem icon={FiMapPin} label="Location" value={job.location} />
          </div>

          <div className="mt-8">
            <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-light)]">
              <FiLayers /> Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {job.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-[var(--color-text)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </motion.article>
  );
}

function CareerProgression({ from, to }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center py-6"
      aria-label={`Career progression from ${from} to ${to}`}
    >
      <span className="h-6 w-px bg-gradient-to-b from-transparent to-white/15" />
      <div className="glass flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 rounded-2xl px-5 py-2.5 text-center text-xs sm:rounded-full sm:text-sm">
        <span className="flex items-center gap-1.5 font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-light)]">
          <FiTrendingUp /> Career Progression
        </span>
        <span className="hidden h-4 w-px bg-white/10 sm:block" />
        <span className="text-[var(--color-text-muted)]">{from}</span>
        <span className="gradient-text font-semibold">→</span>
        <span className="font-medium text-white">{to}</span>
      </div>
      <span className="h-6 w-px bg-gradient-to-b from-white/15 to-transparent" />
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              My Professional <span className="gradient-text">Journey</span>
            </>
          }
          description="Building production software across frontend, backend, automation and enterprise systems."
        />

        <div>
          {experience.map((job, index) => (
            <div key={job.role}>
              {index > 0 && <CareerProgression from={job.role} to={experience[index - 1].role} />}
              <ExperienceCard job={job} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
