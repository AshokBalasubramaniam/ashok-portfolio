import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-14 flex flex-col ${alignment}`}
    >
      {eyebrow && <span className="section-label">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-[var(--color-text-muted)] sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
