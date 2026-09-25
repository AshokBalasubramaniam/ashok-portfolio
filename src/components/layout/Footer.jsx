import { navLinks } from "../../data/navigation";
import { profile, socialLinks } from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-bg-soft)]">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold">
            <span className="gradient-text">{profile.firstName}</span>.dev
          </p>
          <p className="mt-3 max-w-xs text-sm text-[var(--color-text-muted)]">
            {profile.tagline}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Navigation
          </h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Connect
          </h3>
          <ul className="space-y-2">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
                >
                  <link.icon /> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Location
          </h3>
          <p className="text-sm text-[var(--color-text-muted)]">{profile.location}</p>
        </div>
      </div>

      <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-[var(--color-border)] py-6 sm:flex-row">
        <p className="text-xs text-[var(--color-text-muted)]">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-[var(--color-text-muted)]">
          Built with React, Vite &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
