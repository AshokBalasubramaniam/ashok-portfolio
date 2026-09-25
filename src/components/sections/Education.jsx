import { motion } from "framer-motion";
import { FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";
import { education } from "../../data/education";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

export default function Education() {
  return (
    <section id="education" className="section bg-[var(--color-bg-soft)]/40">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--color-primary)]/15 text-xl text-[var(--color-primary-light)]">
                  <FiBookOpen />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-white">{item.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-[var(--color-primary-light)]">
                    {item.institution}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[var(--color-text-muted)]">
                    <span className="flex items-center gap-1">
                      <FiCalendar /> {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin /> {item.location}
                    </span>
                  </div>
                  {item.detail && (
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.detail}</p>
                  )}
                  {item.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span key={skill} className="chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
