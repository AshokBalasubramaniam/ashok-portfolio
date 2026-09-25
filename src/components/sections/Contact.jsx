import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

// Point this at your backend endpoint once one exists, e.g. via a .env value:
// VITE_CONTACT_API_URL="https://api.example.com/contact"
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL;

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    if (!CONTACT_API_URL) {
      // No backend configured yet — fall back to opening the user's mail client.
      const mailBody = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        form.subject || "Portfolio contact form"
      )}&body=${mailBody}`;
      setStatus("success");
      setForm(initialForm);
      return;
    }

    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section bg-[var(--color-bg-soft)]/40">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a role, project or question in mind? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <GlassCard className="flex h-full flex-col gap-6 p-8">
              <ContactRow icon={FiMail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow icon={FiPhone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s+/g, "")}`} />
              <ContactRow icon={FiMapPin} label="Location" value={profile.location} />
              {profile.social.linkedin && (
                <ContactRow icon={FiLinkedin} label="LinkedIn" value="View Profile" href={profile.social.linkedin} />
              )}
              <ContactRow icon={FiGithub} label="GitHub" value="View Profile" href={profile.social.github} />
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} required />
                <Field
                  label="Message"
                  name="message"
                  as="textarea"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />

                <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto">
                  <FiSend /> {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-sm text-emerald-400">
                    Thanks for reaching out — I&apos;ll get back to you soon!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try emailing me directly.
                  </p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--color-primary)]/15 text-lg text-[var(--color-primary-light)]">
        <Icon />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">{label}</p>
        <p className="text-sm font-medium text-white">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

function Field({ label, name, type = "text", as = "input", ...rest }) {
  const Tag = as;
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--color-text-muted)]">{label}</span>
      <Tag
        name={name}
        type={as === "input" ? type : undefined}
        className="w-full rounded-xl border border-[var(--color-border)] bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-primary-light)]"
        {...rest}
      />
    </label>
  );
}
