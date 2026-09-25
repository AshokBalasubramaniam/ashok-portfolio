import { motion } from "framer-motion";
import {
  FiUser,
  FiCode,
  FiDatabase,
  FiCloud,
  FiZap,
  FiTarget,
  FiBriefcase,
  FiLayers,
  FiFolder,
} from "react-icons/fi";
import { SiReact, SiNodedotjs, SiMongodb, SiRust } from "react-icons/si";
import { stats, interests, careerGoal } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";

const statIcons = [FiBriefcase, FiLayers, FiFolder, FiCode];
const interestIcons = [FiCode, FiDatabase, FiCloud, FiZap];

const coreStack = [
  { name: "React.js", Icon: SiReact, color: "#61dafb" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#83cd29" },
  { name: "MongoDB", Icon: SiMongodb, color: "#4faa41" },
  { name: "Rust", Icon: SiRust, color: "#f46623" },
];

function IconBadge({ Icon, size = "md" }) {
  const sizes = size === "lg" ? "h-14 w-14 rounded-2xl text-2xl" : "h-9 w-9 rounded-full text-base";
  return (
    <span
      className={`grid shrink-0 place-items-center border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] ${sizes}`}
    >
      <Icon />
    </span>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-light)]">
      {children}
    </h3>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Getting to <span className="gradient-text">know me</span>
            </>
          }
          description="A quick look at my background, what I work with, and where I'm headed."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: story */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary-light)]">
              <FiUser /> Full Stack Developer
            </span>

            <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              Building scalable web applications
              <br />
              <span className="gradient-text">with modern technologies</span>
            </h3>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--color-text-muted)]">
              <p>
                I&apos;m a Full Stack Developer with 2+ years of experience specializing in{" "}
                <strong className="text-white">MERN stack and Rust</strong>, with hands-on experience developing and
                maintaining production-grade applications.
              </p>
              <p>
                My work spans the complete software lifecycle — designing responsive{" "}
                <strong className="text-white">React</strong> interfaces, building scalable{" "}
                <strong className="text-white">Node.js</strong> APIs, developing high-performance{" "}
                <strong className="text-white">Rust</strong> services, designing{" "}
                <strong className="text-white">MongoDB</strong> data models, implementing{" "}
                <strong className="text-white">JWT</strong>-based authentication, and deploying reliable backend
                systems.
              </p>
            </div>

            <div className="mt-8">
              <SubHeading>Development Interests</SubHeading>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {interests.map((interest, i) => (
                  <li key={interest} className="flex items-center gap-3 text-sm text-[var(--color-text)]">
                    <IconBadge Icon={interestIcons[i % interestIcons.length]} />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <SubHeading>Career Goal</SubHeading>
              <div className="glass flex items-start gap-4 rounded-2xl p-5">
                <IconBadge Icon={FiTarget} size="lg" />
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{careerGoal}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: stats + stack */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="grid flex-1 auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2">
              {stats.map((stat, i) => {
                const Icon = statIcons[i % statIcons.length];
                return (
                  <div key={stat.label} className="glass glass-hover flex items-center gap-5 rounded-2xl p-6">
                    <IconBadge Icon={Icon} size="lg" />
                    <div className="min-w-0">
                      <span
                        className={`block whitespace-nowrap font-display font-bold gradient-text ${
                          stat.value.length > 5 ? "text-2xl" : "text-3xl"
                        }`}
                      >
                        {stat.value}
                      </span>
                      <span
                        className={`mt-1 block text-sm ${
                          stat.description ? "font-medium text-white" : "text-[var(--color-text-muted)]"
                        }`}
                      >
                        {stat.label}
                      </span>
                      {stat.description && (
                        <span className="mt-1 block text-xs leading-snug text-[var(--color-text-muted)]">
                          {stat.description}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="glass flex flex-col gap-5 rounded-2xl p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-light)]">
                Tech Stack I Work With
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {coreStack.map(({ name, Icon, color }) => (
                  <div
                    key={name}
                    className="glass-hover flex flex-col items-center justify-center gap-3 rounded-xl border border-[var(--color-border)] bg-white/[0.02] px-3 py-6"
                  >
                    <Icon className="text-4xl lg:text-5xl" style={{ color }} />
                    <span className="text-sm font-medium text-white">{name}</span>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-2 border-[var(--color-primary)] pl-5 text-sm italic leading-relaxed text-[var(--color-text-muted)]">
                I enjoy working across the entire stack — from building user interfaces to designing backend systems
                and deploying them to production.
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
