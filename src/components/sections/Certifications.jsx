import { motion } from "framer-motion";
import { FiAward, FiExternalLink, FiCalendar } from "react-icons/fi";
import { certifications } from "../../data/education";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Licenses & certifications"
          description="Verified credentials that back up my skills."
        />

        {certifications.length === 0 ? (
          <GlassCard className="mx-auto max-w-lg p-10 text-center">
            <FiAward className="mx-auto mb-4 text-3xl text-[var(--color-primary-light)]" />
            <p className="text-sm text-[var(--color-text-muted)]">
              No certifications added yet. Add entries to{" "}
              <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs">src/data/education.js</code>{" "}
              to display them here.
            </p>
          </GlassCard>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard className="flex h-full flex-col p-6">
                  <FiAward className="mb-3 text-2xl text-[var(--color-primary-light)]" />
                  <h3 className="font-display text-base font-semibold text-white">{cert.name}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{cert.issuer}</p>
                  <span className="mt-3 flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                    <FiCalendar /> {cert.date}
                  </span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--color-primary-light)] hover:underline"
                    >
                      View Credential <FiExternalLink />
                    </a>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
