import { FiGithub, FiLinkedin, FiMail, FiCode } from "react-icons/fi";

export const profile = {
  name: "Ashok Balasubramaniam",
  firstName: "Ashok",
  title: "Full Stack Developer",
  tagline:
    "Building Modern Web Applications & High-Performance Backend Systems",
  summary:
    "Full Stack Developer with 2+ years of experience specializing in MERN stack and Rust, with hands-on experience developing and maintaining production-grade applications. My work spans the complete software lifecycle — designing responsive React interfaces, building scalable Node.js APIs, developing high-performance Rust services, designing MongoDB data models, implementing JWT-based authentication, and deploying reliable backend systems.",
  location: "Chennai, Tamil Nadu, India",
  email: "ashokbalu9677@gmail.com",
  phone: "+91 6374946050",
  resumeUrl: "/Ashok_Balasubramaniam_Resume.pdf",
  social: {
    github: "https://github.com/AshokBalasubramaniam",
    // TODO: add your LinkedIn profile URL here
    linkedin: "",
    leetcode: "https://leetcode.com/u/ashokak1122",
    email: "mailto:ashokbalu9677@gmail.com",
  },
};

export const socialLinks = [
  { name: "GitHub", href: profile.social.github, icon: FiGithub },
  { name: "LeetCode", href: profile.social.leetcode, icon: FiCode },
  { name: "Email", href: profile.social.email, icon: FiMail },
  ...(profile.social.linkedin
    ? [{ name: "LinkedIn", href: profile.social.linkedin, icon: FiLinkedin }]
    : []),
];

export const stats = [
  { label: "Years of Experience", value: "2+" },
  {
    label: "Core Stack",
    value: "MERN + Rust",
    description: "Full stack development and backend systems",
  },
  { label: "Projects Completed", value: "2+" },
  { label: "LeetCode Problems Solved", value: "300+" },
];

export const interests = [
  "Full Stack Web Development",
  "Backend Systems & APIs",
  "Cloud & DevOps",
  "Problem Solving & Optimization",
];

export const careerGoal =
  "To continue growing as a full stack engineer, build scalable and reliable software systems, and contribute to impactful products while solving real-world engineering challenges.";
