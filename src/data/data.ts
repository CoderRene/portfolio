import { Building2, Code2, GitBranch, Globe, MapPin, Server, Smartphone } from "lucide-react";

const CONTACT_EMAIL = "master.isheart@gmail.com";

const roles = [
  "iOS & Android",
  "React Native",
  "Web",
  "React",
  "Node.js",
  "Cloud",
]

const stats = [
  ["3+", "Years of Industry Exp."],
  ["6+", "Years of Programming Exp."],
  ["5+", "Shipped Products"],
  ["4", "Personal Apps"],
]

const skills = {
  mobile: {
    label: "Mobile",
    icon: Smartphone,
    color: "#2979FF",
    items: [
      "React Native (iOS & Android)", 
      "TypeScript", 
      "NativeWind/Tailwind",
      "Expo", 
      "GraphQL + Apollo Client", 
      "Push Notifications", 
      "Offline sync",
      "Camera/OCR",
      "Maps/GPS",
      "iOS/Android publishing",
    ],
  },
  backend: {
    label: "Backend",
    icon: Server,
    color: "#7C3AED",
    items: [
      "Node.js", 
      "Python",
      "FastAPI",
      "REST APIs", 
      "GraphQL",
      "WebSocket",
      "SQL",
      "NoSQL",
      "MongoDB", 
      "Firebase",
    ],
  },
  web: {
    label: "Web & Frontend",
    icon: Globe,
    color: "#06d6a0",
    items: [
      "React",
      "TypeScript", 
      "Tailwind CSS", 
      "HTML5 / CSS3", 
      "Vite", 
      "Zustand", 
      "Redux",
      "React Query",
      "Responsive UI",
    ],
  },
};

const projects = [
  {
    title: "BillWise",
    tagline: "Mobile application developed for managing bills and expenses",
    description:
      "A mobile application developed with React Native and TypeScript for managing bills, group expenses, and payments. The app provides a streamlined interface for organizing expenses, improving visibility into shared costs, and simplifying financial tracking across different devices.",
    tags: ["React Native", "TypeScript", "Bills Management", "Expense Tracking", "Payments Tracking", "Group Management"],
    metrics: [
      { icon: Code2, label: "Open Source" },
      { icon: GitBranch, label: "Personal Project" },
    ],
    links: { github: "https://github.com/CoderRene/billwise", appstore: null, demo: null },
    color: "#2979FF",
    screen: "bills",
  },
  {
    title: "TMedia",
    tagline: "Mobile application developed for storing media files",
    description:
      "A mobile media storage application built with Expo and TypeScript that enables users to securely offload photos and videos to a remote server, helping free up local phone storage while keeping media accessible.",
    tags: ["Expo", "TypeScript", "Media Storage", "Cloud Storage", "Remote Upload", "Photo Management", "Video Management", "Backup"],
    metrics: [
      { icon: Code2, label: "Open Source" },
      { icon: GitBranch, label: "Personal Project" },
    ],
    links: { github: "https://github.com/CoderRene/tmedia-storage", appstore: null, demo: null },
    color: "#7C3AED",
    screen: "storage",
  },
  {
    title: "TMessager",
    tagline: "Secure, family-focused messaging app",
    description:
      "A secure, family-focused messaging app for Android that enables fast, reliable communication in a simple and intuitive interface. Developed primarily in Kotlin (with Java interoperability), this project highlights my ability to design user-centered mobile experiences, implement real-time messaging workflows, and deliver production-style app architecture with a strong focus on performance and privacy.",
    tags: ["Android", "Kotlin", "Java", "Messaging", "Real-time Chat", "Privacy", "Family-focused"],
    metrics: [
      { icon: Code2, label: "Open Source" },
      { icon: GitBranch, label: "Personal Project" },
    ],
    links: { github: "https://github.com/CoderRene/tmessager", appstore: null, demo: null },
    color: "#f72585",
    screen: "messaging",
  },
  {
    title: "GraedeViewer",
    tagline: "Mobile Java-based student portal for tracking grades",
    description:
      "a mobile Java-based student portal that makes it easy for students to access and track their grades online. Focused on delivering a clean, reliable user experience while strengthening backend and web application development skills.",
    tags: ["Android", "Java", "Grading", "Student Portal", "Grade Tracking", "Performance Tracking"],
    metrics: [
      { icon: Code2, label: "Open Source" },
      { icon: GitBranch, label: "Personal Project" },
    ],
    links: { github: "https://github.com/CoderRene/Graede-Viewer", appstore: null, demo: null },
    color: "#06d6a0",
    screen: "grades",
  },
  {
    title: "ICC-Notes",
    tagline: "Java-based personal notes app for college coursework",
    description:
      "A Java-based personal notes application built to organize and manage college coursework in one place. Created to support day-to-day academic workflow by making it easier to capture, store, and review class notes efficiently. Highlights the ability to design and develop a practical productivity tool tailored to a real user need while applying core Java programming skills in a complete, usable application.",
    tags: ["Java", "Notes", "Productivity", "Coursework", "Academic", "Personal Project"],
    metrics: [
      { icon: Code2, label: "Open Source" },
      { icon: GitBranch, label: "Personal Project" },
    ],
    links: { github: "#", appstore: null, demo: null },
    color: "#E8A017",
    screen: "notes",
  },
];

const webProjects = [
  {
    title: "ZechAI",
    tagline: "AI-powered technical spec generator from spreadsheet rows",
    description:
      "A Google Sheets sidebar with a React UI that turns RTM-style rows into polished technical specs. Streams progress over a FastAPI WebSocket and runs a Google ADK multi-agent pipeline, intent detection, gap analysis, then spec generation.",
    tags: ["React", "TypeScript", "FastAPI", "WebSocket", "Google ADK", "Multi-agent AI"],
    metrics: [
      { icon: Code2, label: "Open Source" },
      { icon: GitBranch, label: "Personal Project" },
    ],
    links: { github: "https://github.com/CoderRene/ZechAI", demo: null },
    color: "#2979FF",
    screen: "zechai",
  },
  {
    title: "FlairHaven",
    tagline: "Concept e-commerce platform for digital artwork",
    description:
      "A concept e-commerce site where artists showcase and sell digital art. Focused on a clean browsing experience, product discovery, and a full client–server stack with a dedicated Node.js backend.",
    tags: ["JavaScript", "E-commerce", "Digital Art", "Node.js", "REST API"],
    metrics: [
      { icon: Code2, label: "Open Source" },
      { icon: GitBranch, label: "Personal Project" },
    ],
    links: { github: "https://github.com/CoderRene/FlairHaven", demo: null },
    color: "#7C3AED",
    screen: "flairhaven",
  },
  {
    title: "POS",
    tagline: "Retail point-of-sale for products, sales, and reporting",
    description:
      "A TypeScript POS system built to streamline retail sales, product management, transactions, and reporting with a companion backend for a seamless experience for both cashiers and administrators.",
    tags: ["TypeScript", "POS", "Retail", "Product Management", "Reporting"],
    metrics: [
      { icon: Code2, label: "Open Source" },
      { icon: GitBranch, label: "Personal Project" },
    ],
    links: { github: "https://github.com/CoderRene/pos", demo: null },
    color: "#06d6a0",
    screen: "pos",
  },
  {
    title: "Pokedex",
    tagline: "Interactive Gen 1 Pokédex built with TypeScript",
    description:
      "A TypeScript web app that lists Generation 1 Pokémon with searchable entries and a clean, responsive UI, a focused project for practicing frontend data presentation and interaction patterns.",
    tags: ["TypeScript", "React", "Pokédex", "API", "Responsive UI"],
    metrics: [
      { icon: Code2, label: "Open Source" },
      { icon: GitBranch, label: "Personal Project" },
    ],
    links: { github: "https://github.com/CoderRene/pokedex", demo: null },
    color: "#f72585",
    screen: "pokedex",
  },
];

const shippedApps = [
  {
    title: "TMSuite",
    company: "Webcast Technologies Inc.",
    platform: "Mobile",
    tagline: "Real-time fleet tracking and delivery ops, anywhere",
    description:
      "Production React Native iOS & Android client for transportation management,live fleet map monitoring, trip and prebooking workflows, geofenced pickup/dropoff, delivery KPI dashboards (OTTA/OTD), and realtime GraphQL subscriptions for vehicle location and booking updates. Includes biometric login and QR device pairing.",
    tags: ["React Native", "TypeScript", "GraphQL", "Apollo", "WebSocket", "Maps", "Biometrics", "iOS & Android"],
    metrics: [
      { icon: Building2, label: "Company Product" },
      { icon: Smartphone, label: "iOS & Android" },
    ],
    storeUrl: null as string | null,
    color: "#2979FF",
  },
  {
    title: "CaptureMe",
    company: "Webcast Technologies Inc.",
    platform: "Mobile",
    tagline: "Geotag. Survey. Sync, field data capture for TACTIC",
    description:
      "React Native iOS & Android field app for geotagged survey capture, GPS-accurate map pins, photo evidence, and dynamic project questionnaires with e-signature and DPA consent. Supports offline drafts via MMKV and syncs points to TACTIC v2.0 over dual GraphQL backends when back online.",
    tags: ["React Native", "TypeScript", "GraphQL", "Apollo", "Google Maps", "Geolocation", "Offline Sync", "Camera"],
    metrics: [
      { icon: Building2, label: "Company Product" },
      { icon: MapPin, label: "Geotagging" },
    ],
    storeUrl: null as string | null,
    color: "#06d6a0",
  },
  {
    title: "Drivers App",
    company: "Webcast Technologies Inc.",
    platform: "Mobile",
    tagline: "ePOD, GPS pairing, and shifts, built for driver operations",
    description:
      "React Native iOS & Android driver app for the TMSuite ecosystem, PIN login, GPS vehicle pairing, electronic proof of delivery with camera OCR and e-signature, working hours/shifts, and 360° vehicle checklists. Offline-first drafts via MMKV with background sync when connectivity returns.",
    tags: ["React Native", "GraphQL", "Apollo", "Vision OCR", "Maps", "Offline Sync", "Camera", "Notifee"],
    metrics: [
      { icon: Building2, label: "Company Product" },
      { icon: Smartphone, label: "Driver Ops" },
    ],
    storeUrl: null as string | null,
    color: "#7C3AED",
  },
  {
    title: "Retail Management System",
    company: "Lee Systems Technology Ventures Inc.",
    platform: "Web App",
    tagline: "Retail management system for inventory and sales tracking",
    description:
      "Frontends and supporting backends for retail management system, built to improve UX, performance, and reliability for companies running daily sales and inventory operations.",
    tags: ["ReactJS", "Node.js", "Electron", "Transactions", "UX", "QA"],
    metrics: [
      { icon: Building2, label: "Company Product" },
      { icon: Globe, label: "Web App" },
    ],
    storeUrl: null as string | null,
    color: "#f72585",
  },
];

const experience = [
  {
    company: "Webcast Technologies Inc.",
    role: "React Native Developer",
    period: "Jan 2025 — Present",
    location: "Quezon City, PH",
    description:
      "Part of a team developing and maintaining Android and iOS apps focused on map-based and GPS-enabled features for fleet tracking and location intelligence.",
    highlights: [
      "Build and maintain cross-platform mobile apps with React Native for GPS tracking and navigation",
      "Integrate Google Maps API and mapping SDKs for real-time navigation and geolocation",
      "Ship features for location intelligence products used in logistics and transport",
    ],
    tags: ["React Native", "Android", "iOS", "Google Maps", "GPS"],
    color: "#2979FF",
  },
  {
    company: "Lee Systems Technology Ventures Inc.",
    role: "ReactJS Developer & QA Assistant",
    period: "Dec 2022 — Jan 2025",
    location: "Caloocan City, PH",
    description:
      "Designed, developed, and maintained business software solutions that streamline retail transactions and inventory management for client companies.",
    highlights: [
      "Built and maintained ReactJS frontends and backends for transaction and inventory workflows",
      "Collaborated with cross-functional teams to improve UX, performance, and security",
      "Delivered software solutions tailored to varied business operations",
      "Performed manual and automation testing across product features",
    ],
    tags: ["ReactJS", "JavaScript", "Node.js", "Inventory Management", "Business Solutions"],
    color: "#7C3AED",
  },
  {
    company: "Designblue Manila",
    role: "Internship - QA",
    period: "2022",
    location: "Makati City, PH",
    description:
      "Internship focused on manual QA for client websites and digital experiences at a branding and UX/UI agency.",
    highlights: [
      "Performed manual testing of front-end interfaces across desktop and mobile views",
      "Documented and reported bugs for developers and designers to resolve",
      "Tested CMS workflows to verify content accuracy, functionality, and usability",
    ],
    tags: ["QA", "Manual Testing", "CMS", "UI/UX Testing"],
    color: "#06d6a0",
  },
];

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Mobile", href: "#projects" },
  { label: "Web", href: "#web-projects" },
  { label: "Shipped", href: "#shipped" },
  { label: "Experience", href: "#experience" },
];

export { CONTACT_EMAIL, experience, navLinks, projects, roles, shippedApps, skills, stats, webProjects };
