import aprilLogo from "@/assets/april.png";
import neuroallyLogo from "@/assets/neuroally.png";
import plinthLogo from "@/assets/plinth.png";
import PlinthContent from "@/components/content/plinth";

import type { StaticImageData } from "next/image";

export interface ProjectProps {
  name: string;
  description: string;
  company?: string;
  client?: string;
  date?: string;
  status?: "active" | "completed" | "sunset";
  websiteUrl?: string;
  githubUrl?: string;
  logo?: StaticImageData;
  content?: React.ReactNode;
}

const personalProjects: ProjectProps[] = [
  {
    name: "Plinth",
    description:
      "A React component library for rendering interactive 3D card stacks. Handles the spatial math — perspective, step offsets, face transforms, hover physics — and exposes styling hooks so each face can look however you like. Published on npm as @beauhawkinson/plinth.",
    date: "May 2026",
    websiteUrl: "https://beauhawkinson-plinth.vercel.app/",
    githubUrl: "https://github.com/beauhawkinson/plinth",
    logo: plinthLogo,
    content: <PlinthContent />,
  },
  {
    name: "April",
    description:
      "A full-stack SaaS boilerplate built on TanStack Start with a focus on developer experience and production-readiness. Features multi-provider authentication (Google, GitHub, Passkeys, Ethereum/SIWE), Stripe billing with plans and trials, a fully functional task management module, and deep UI customization including OKLCH-based theming, sidebar layout variants, font sizing, and pointer preferences — all persisted per user. Built with React 19, Drizzle ORM, Tailwind v4, better-auth, Wagmi, and Bun.",
    date: "April 2026",
    websiteUrl: "https://beauhawkinson-april.vercel.app",
    githubUrl: "https://github.com/beauhawkinson/april",
    logo: aprilLogo,
  },
];

const freelanceProjects: ProjectProps[] = [
  {
    name: "Porterhouse MX",
    description:
      "A full-stack e-commerce apparel store for premium motocross gear. Built with TanStack Start, PostgreSQL, and Drizzle ORM for type-safe database queries. Features Google OAuth authentication via better-auth, Stripe payment processing with webhook-driven order management, product variants (sizes), and inventory tracking. Orders are fulfilled directly from the Stripe Dashboard, with real-time stock updates and refund handling.",
    client: "Porterhouse MX",
    status: "active",
    websiteUrl: "https://porterhouse-mx.vercel.app/",
    githubUrl: "https://github.com/beauhawkinson/porterhouse-mx",
  },
  {
    name: "NEUROally",
    description:
      "A task management application designed to support neurodivergent users in tracking and completing tasks that might previously have been daunting. Featuring sophisticated notification reminders tailored to user preferences and workflow optimization. Built as a freelance collaboration with another engineer for COGNI Solutions. When we joined Omni in 2024, COGNI came with us as a client.",
    client: "COGNI Solutions",
    date: "July 2024",
    websiteUrl: "https://neuroally.app/",
    logo: neuroallyLogo,
  },
  {
    name: "Chisago Hardware",
    description:
      "A full-stack business website for Chisago Hardware & Just Ask Rental, a local hardware store established in 1975. Features a live open/closed status indicator, equipment rental catalog with 229+ items across departments, a bento-grid services section with animated modals, product showcases for grilling and pet food brands, a photo gallery, and hours & directions. Built with TanStack Start, React 19, Drizzle ORM, Tailwind v4, and Bun backed by PostgreSQL.",
    date: "January 2023",
    websiteUrl: "https://chisagohardware.com/",
    githubUrl: "https://github.com/Twonarly1/chisago-hardware",
  },
  {
    name: "Freeride MN",
    description:
      "A comprehensive community-driven MTB platform for Minnesota riders built with Next.js and Sanity CMS. Featured a consolidated hub for local riding experiences including event calendars, trail databases with integrated mapping, user-contributed blog posts, and community forums. Included multi-threaded discussions, real-time event management, and user authentication via Supabase. Built to strengthen Minnesota's mountain biking culture by connecting riders, sharing knowledge, and organizing local experiences.",
    client: "Freeride MN",
    date: "2023–2026",
    status: "sunset",
  },
  {
    name: "Freeride Indoor",
    description:
      "An early-stage landing page to build community support for a year-round indoor mountain biking facility in Minnesota. Targeted outreach to bikers, investors, partners, and trail builders to gather feedback and resources. Featured park layout mockups, detailed information on partnership opportunities, and a contact form to collect inquiries from stakeholders interested in shaping a weatherproof MTB destination.",
    client: "Freeride MN",
    date: "2024–2026",
    status: "sunset",
  },
];

const clientProjects: ProjectProps[] = [
  {
    name: "IGDI-APEL",
    description:
      "Transforms early literacy evaluation by providing educators with a powerful, research-backed assessment tool. Developed in collaboration with the University of Minnesota, this platform enables educators to assess children's emergent literacy skills with accuracy across multiple languages including English, Spanish, and Hmong.",
    client: "IGDILab @ University of Minnesota",
    company: "Omni",
    websiteUrl: "https://myigdis.com/",
  },
  {
    name: "IGDILab Website",
    description:
      "A comprehensive website for the Individual Growth and Development Indicators Laboratory at the University of Minnesota. The site showcases research initiatives, assessment tools, and educational resources for early childhood development and literacy assessment.",
    client: "IGDILab @ University of Minnesota",
    company: "Omni",
    websiteUrl: "https://igdilab.com/",
  },
];

const omniProducts: ProjectProps[] = [
  {
    name: "Runa",
    description:
      "Project management done right. Beautiful Kanban boards, seamless collaboration, and powerful workflows. Everything a team needs to ship faster — completely free and open source.",
    company: "Omni",
    websiteUrl: "https://runa.omni.dev/",
    githubUrl: "https://github.com/omnidotdev/runa",
  },
  {
    name: "Backfeed",
    description:
      "A user feedback reporting platform that aggregates user data for products, services, and experiences. Backfeed provides a centralized location to iterate on projects with user-driven insights, featuring feedback aggregation, prioritization tools, roadmap planning, and community discussion sections.",
    company: "Omni",
    websiteUrl: "https://backfeed.omni.dev/",
    githubUrl: "https://github.com/omnidotdev/backfeed",
  },
];

export { clientProjects, freelanceProjects, omniProducts, personalProjects };
