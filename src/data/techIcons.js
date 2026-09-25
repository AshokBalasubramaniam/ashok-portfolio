import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiRust,
  SiDocker,
  SiGit,
  SiJavascript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbApi, TbBrandCSharp, TbBrandWindows } from "react-icons/tb";
import { FiCode } from "react-icons/fi";

// Technology name → icon + brand colour, shared by project cards, previews and the detail modal.
const techIcons = {
  "React.js": { icon: SiReact, color: "#61dafb" },
  Vite: { icon: SiVite, color: "#a78bfa" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38bdf8" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  "Node.js": { icon: SiNodedotjs, color: "#83cd29" },
  "Express.js": { icon: SiExpress, color: "#d4d4d8" },
  MongoDB: { icon: SiMongodb, color: "#4faa41" },
  HTML: { icon: SiHtml5, color: "#e34f26" },
  CSS: { icon: SiCss, color: "#2965f1" },
  Rust: { icon: SiRust, color: "#f46623" },
  "C#": { icon: TbBrandCSharp, color: "#a179dc" },
  "REST APIs": { icon: TbApi, color: "#a78bfa" },
  AWS: { icon: FaAws, color: "#ff9900" },
  "Windows Automation": { icon: TbBrandWindows, color: "#38bdf8" },
  Docker: { icon: SiDocker, color: "#2496ed" },
  Git: { icon: SiGit, color: "#f05032" },
};

export function getTechIcon(name) {
  return techIcons[name] ?? { icon: FiCode, color: "#a1a1aa" };
}
