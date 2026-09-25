import { FiMonitor, FiServer, FiDatabase, FiTool, FiCloud, FiSettings } from "react-icons/fi";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiRust,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiLinux,
  SiRailway,
  SiRender,
  SiNetlify,
  SiFirebase,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  TbApi,
  TbDatabaseCog,
  TbLetterA,
} from "react-icons/tb";

export const skillCategories = [
  {
    key: "frontend",
    title: "Frontend Development",
    description: "Building responsive and user-friendly interfaces with modern technologies.",
    icon: FiMonitor,
    accent: { from: "#7c3aed", to: "#a855f7" },
    level: 90,
    skills: [
      { name: "React.js", icon: SiReact, color: "#61dafb", level: 90 },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", level: 85 },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26", level: 90 },
      { name: "CSS3", icon: SiCss, color: "#1572b6", level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8", level: 80 },
      { name: "Redux Toolkit", icon: SiRedux, color: "#a78bfa", level: 75 },
    ],
  },
  {
    key: "backend",
    title: "Backend Development",
    description: "Developing scalable APIs and high-performance backend services.",
    icon: FiServer,
    accent: { from: "#059669", to: "#10b981" },
    level: 85,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#83cd29", level: 85 },
      { name: "Express.js", icon: SiExpress, color: "#d4d4d8", level: 80 },
      { name: "Rust", icon: SiRust, color: "#f46623", level: 75 },
      { name: "REST APIs", icon: TbApi, color: "#a78bfa", level: 85 },
      { name: "JWT Authentication", icon: SiJsonwebtokens, color: "#f472b6", level: 80 },
      { name: "Axum (Rust)", icon: TbLetterA, color: "#e4e4e7", level: 70 },
    ],
  },
  {
    key: "database",
    title: "Database",
    description: "Designing efficient data models and working with databases.",
    icon: FiDatabase,
    accent: { from: "#db2777", to: "#ec4899" },
    level: 80,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#4faa41", level: 85 },
      { name: "MySQL", icon: SiMysql, color: "#4479a1", level: 75 },
      { name: "Redis", icon: SiRedis, color: "#dc382d", level: 65 },
      { name: "Database Design", icon: TbDatabaseCog, color: "#a1a1aa", level: 80 },
    ],
  },
  {
    key: "tools",
    title: "Tools & Development",
    description: "Tools I use for development, testing and collaboration.",
    icon: FiTool,
    accent: { from: "#ea580c", to: "#f59e0b" },
    level: 80,
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032", level: 85 },
      { name: "GitHub", icon: SiGithub, color: "#e4e4e7", level: 85 },
      { name: "Docker", icon: SiDocker, color: "#2496ed", level: 75 },
      { name: "Postman", icon: SiPostman, color: "#ff6c37", level: 80 },
      { name: "Linux", icon: SiLinux, color: "#fcc624", level: 70 },
      { name: "VS Code", icon: VscVscode, color: "#3b9eff", level: 85 },
    ],
  },
  {
    key: "cloud",
    title: "Cloud / Deployment",
    description: "Deploying and maintaining applications on cloud platforms.",
    icon: FiCloud,
    accent: { from: "#2563eb", to: "#3b82f6" },
    level: 70,
    skills: [
      { name: "AWS", icon: FaAws, color: "#ff9900", level: 75 },
      { name: "Render", icon: SiRender, color: "#c4b5fd", level: 70 },
      { name: "Netlify", icon: SiNetlify, color: "#32e6e2", level: 70 },
      { name: "Railway", icon: SiRailway, color: "#e4e4e7", level: 65 },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28", level: 65 },

    ],
  },
  
];
