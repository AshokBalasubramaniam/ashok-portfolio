import { FiArrowUp } from "react-icons/fi";
import useScrolled from "../../hooks/useScrolled";

export default function BackToTop() {
  const visible = useScrolled(400);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="btn-primary fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full !p-0 shadow-lg sm:bottom-8 sm:right-8"
    >
      <FiArrowUp className="text-lg" />
    </button>
  );
}
