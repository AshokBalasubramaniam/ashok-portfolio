import {
  FiSearch,
  FiGrid,
  FiTag,
  FiRefreshCw,
  FiSmartphone,
  FiTruck,
  FiLock,
  FiUsers,
  FiUserPlus,
  FiList,
  FiInbox,
  FiCheckSquare,
  FiShield,
  FiSettings,
  FiPlay,
  FiRepeat,
  FiCamera,
  FiServer,
  FiLink,
  FiTrash2,
  FiMonitor,
} from "react-icons/fi";
import { profile } from "./profile";
import mapzhaImage from "../assets/mapzha.png";
import medicinedonorImage from "../assets/medicinedonor.png";
// `categories` drives the filter bar; the first entry is shown as the card badge.
// `image` is a real screenshot; when null, `visual` picks a generated preview
// ("dashboard" for web apps, "terminal" for backend/automation services).
// `demo` is null until the project has a live deployment.
// `github` is the project repo; it falls back to the profile link when the repo is not public.
export const projects = [
  {
    id: "mapzha-marketplace",
    name: "MAPZHA — Electronics Marketplace",
    shortName: "MAPZHA",
    categories: ["Full Stack"],
    featured: false,
    tagline:
      "A modern marketplace platform for buying and selling verified second-hand smartphones, laptops, tablets, accessories and other electronics.",
    problem:
      "Buying and selling second-hand electronics can be difficult because buyers need reliable product information and sellers need a simple way to manage listings.",
    solution:
      "Built a responsive marketplace experience with product discovery, seller listings, category browsing and streamlined buying and selling workflows.",
    features: [
      {
        title: "Product Search",
        description: "Search across phones, laptops, tablets and more.",
        icon: FiSearch,
      },
      {
        title: "Category Browsing",
        description: "Browse devices by category and brand.",
        icon: FiGrid,
      },
      {
        title: "Seller Listings",
        description: "Recently added listings from sellers.",
        icon: FiTag,
      },
      {
        title: "Sell Your Device",
        description: "Quote, pickup and payment in three steps.",
        icon: FiRefreshCw,
      },
      {
        title: "Order Tracking",
        description: "Dedicated flow to track orders.",
        icon: FiTruck,
      },
      {
        title: "Responsive UI",
        description: "Designed to work across screen sizes.",
        icon: FiSmartphone,
      },
    ],
    architecture: {
      kind: "web",
      layers: [
        { label: "Frontend", detail: "React.js · TypeScript · Tailwind CSS" },
        { label: "REST API", detail: "HTTP / JSON" },
        { label: "Backend", detail: "Node.js · Express.js" },
        { label: "Database", detail: "MongoDB" },
      ],
    },
    challenges: [
      "Structuring product, category and listing data so the same models serve both buyers and sellers.",
      "Keeping search, category and listing views consistent and fast to scan across screen sizes.",
      "Designing buy and sell flows that stay simple while collecting the information each side needs.",
    ],
    learnings: [
      "Modelling marketplace data with two very different user journeys in mind.",
      "Building a reusable, typed component library with React, TypeScript and Tailwind CSS.",
      "Separating the frontend and API layers so each can evolve independently.",
    ],
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    image: mapzhaImage,
    visual: "dashboard",
    github: "https://github.com/AshokBalasubramaniam/Mobilesales",
    demo: "https://mobilesalesweb.netlify.app/",
  },
  {
    id: "medicine-donor-system",
    name: "Online Medicine Donor System",
    shortName: "MediDonor",
    categories: ["Full Stack"],
    featured: true,
    tagline:
      "A web platform designed to connect medicine donors with patients in need and simplify donation requests and approvals.",
    problem:
      "Patients who need medicines may struggle to find available donations, while unused medicines can go to waste.",
    solution:
      "Built a role-based platform connecting donors, patients and administrators through structured donation and request workflows.",
    features: [
      {
        title: "User Authentication",
        description: "Secure sign-up and login.",
        icon: FiLock,
      },
      {
        title: "Role-Based Access",
        description: "Separate donor, patient and admin views.",
        icon: FiUsers,
      },
      {
        title: "Donor Registration",
        description: "Donors register and manage their profile.",
        icon: FiUserPlus,
      },
      {
        title: "Medicine Listings",
        description: "Available medicines listed by donors.",
        icon: FiList,
      },
      {
        title: "Donation Requests",
        description: "Patients request the medicines they need.",
        icon: FiInbox,
      },
      {
        title: "Request Management",
        description: "Track requests through approval.",
        icon: FiCheckSquare,
      },
      {
        title: "Admin Management",
        description: "Admins verify users and donations.",
        icon: FiSettings,
      },
      {
        title: "Secure Workflows",
        description: "Protected actions for every role.",
        icon: FiShield,
      },
    ],
    architecture: {
      kind: "web",
      layers: [
        { label: "Frontend", detail: "React.js · HTML · CSS" },
        { label: "REST API", detail: "HTTP / JSON" },
        { label: "Backend", detail: "Rust" },
        { label: "Database", detail: "MongoDB" },
      ],
    },
    challenges: [
      "Designing role-based access so donors, patients and administrators only see and do what they should.",
      "Modelling the donation lifecycle — listing, request, approval — as a clear set of states.",
      "Keeping user workflows secure end to end, from authentication to protected API actions.",
    ],
    learnings: [
      "Designing authorization rules up front makes multi-role applications far easier to extend.",
      "Treating workflows as explicit states keeps both the API and the UI predictable.",
      "Building a Rust backend for a web application and connecting it to a React frontend.",
    ],
    tech: ["HTML", "CSS", "React.js", "Rust", "MongoDB"],
    image: medicinedonorImage,
    visual: "dashboard",
    github: "https://github.com/AshokBalasubramaniam/medicine-donor_2.0",
    demo: "https://medicinedonor.netlify.app/",
  },
  {
    id: "uisession-automation",
    name: "UI Session Automation Service",
    shortName: "uisession",
    categories: ["Backend", "Automation"],
    featured: false,
    tagline:
      "A backend automation service for creating and managing remote UI sessions on cloud virtual machines.",
    problem:
      "Running UI automation on headless cloud VMs requires reliable session initialization, control, screenshot capture and cleanup.",
    solution:
      "Built a backend service using Rust to manage the complete lifecycle of remote UI sessions and integrate with a C# UI automation layer.",
    features: [
      {
        title: "Session Initialization",
        description: "Start remote UI sessions on demand.",
        icon: FiPlay,
      },
      {
        title: "Lifecycle Management",
        description: "Control sessions from start to finish.",
        icon: FiRepeat,
      },
      {
        title: "Screenshot Capture",
        description: "Capture the VM screen via API.",
        icon: FiCamera,
      },
      {
        title: "VM Session Management",
        description: "Manage sessions on cloud VMs.",
        icon: FiServer,
      },
      {
        title: "API Communication",
        description: "REST APIs trigger every operation.",
        icon: FiLink,
      },
      {
        title: "Automatic Cleanup",
        description: "Sessions terminate after tasks finish.",
        icon: FiTrash2,
      },
      {
        title: "Headless UI Support",
        description: "Automation without a graphical interface.",
        icon: FiMonitor,
      },
    ],
    architecture: {
      kind: "service",
      layers: [
        { label: "Client", detail: "API consumer" },
        { label: "REST API", detail: "HTTP endpoints" },
        { label: "Rust Service", detail: "Session lifecycle" },
        { label: "Automation Layer", detail: "C# · Windows Automation" },
        { label: "Cloud VM", detail: "AWS · headless" },
      ],
    },
    challenges: [
      "Establishing remote UI sessions on a VM that has no graphical interface attached.",
      "Coordinating a Rust service with a separate C# automation layer across a process boundary.",
      "Guaranteeing that every session is cleaned up, even when a task fails part-way through.",
    ],
    learnings: [
      "Designing APIs around a resource lifecycle — create, use, capture, terminate.",
      "Integrating services written in different languages through clear, narrow interfaces.",
      "Why automatic resource cleanup matters when working with cloud infrastructure.",
    ],
    tech: ["Rust", "C#", "REST APIs", "AWS", "Windows Automation"],
    image: null,
    visual: "terminal",
    github: profile.social.github,
    demo: null,
  },
];

export const projectFilters = ["All", "Full Stack", "Frontend", "Backend", "Mobile", "Automation"];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
