import { useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { navLinks } from "../../data/navigation";
import { profile } from "../../data/profile";
import useActiveSection from "../../hooks/useActiveSection";
import useScrolled from "../../hooks/useScrolled";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(10);
  const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between sm:h-20">
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight text-[var(--color-text)] sm:text-2xl"
        >
          <span className="gradient-text">{profile.firstName}</span>
          <span>.dev</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-[var(--color-text-muted)] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-white/5 ring-1 ring-[var(--color-primary)]/40" />
                  )}
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={profile.resumeUrl} download className="btn-primary text-sm">
            <FiDownload /> Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] text-xl text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <div className="glass container-px mx-auto flex max-w-7xl flex-col gap-1 pb-6 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                activeId === link.href.replace("#", "")
                  ? "bg-white/5 text-white"
                  : "text-[var(--color-text-muted)] hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 justify-center text-sm"
          >
            <FiDownload /> Download CV
          </a>
        </div>
      )}
    </header>
  );
}
