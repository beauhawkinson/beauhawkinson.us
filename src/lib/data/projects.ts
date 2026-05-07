export interface ProjectProps {
  name: string;
  description: string;
  company?: string;
  client?: string;
  date?: string;
  status?: "active" | "completed";
  links: {
    name: string;
    url: string;
  }[];
}

// Personal projects — independently built
const personalProjects: ProjectProps[] = [
  {
    name: "April",
    description:
      "A full-stack SaaS boilerplate built on TanStack Start with a focus on developer experience and production-readiness. Features multi-provider authentication (Google, GitHub, Passkeys, Ethereum/SIWE), Stripe billing with plans and trials, a fully functional task management module, and deep UI customization including OKLCH-based theming, sidebar layout variants, font sizing, and pointer preferences — all persisted per user. Built with React 19, Drizzle ORM, Tailwind v4, better-auth, Wagmi, and Bun.",
    date: "2025",
    status: "active",
    links: [{ name: "website", url: "https://twonarly.vercel.app" }],
  },
];

// Freelance — independent client work outside of Omni
const freelanceProjects: ProjectProps[] = [
  {
    name: "JP MotorCross",
    description:
      "An ecommerce site for a custom motocross apparel brand. Building out the storefront, product catalog, and checkout flow.",
    client: "JP MotorCross",
    status: "active",
    links: [],
  },
  {
    name: "NEUROally",
    description:
      "A task management application designed to support neurodivergent users in tracking and completing tasks that might previously have been daunting. Featuring sophisticated notification reminders tailored to user preferences and workflow optimization. Originally built as a freelance collaboration with another engineer — the client (COGNI Solutions) later became part of Omni's portfolio when we joined the agency.",
    client: "COGNI Solutions",
    date: "July 2024",
    links: [{ name: "website", url: "https://neuroally.app/" }],
  },
];

// Client work at Omni — University of Minnesota collaborations
const clientProjects: ProjectProps[] = [
  {
    name: "IGDI-APEL",
    description:
      "Transforms early literacy evaluation by providing educators with a powerful, research-backed assessment tool. Developed in collaboration with the University of Minnesota, this platform enables educators to assess children's emergent literacy skills with accuracy across multiple languages including English, Spanish, and Hmong.",
    client: "IGDILab @ University of Minnesota",
    company: "Omni",
    links: [],
  },
  {
    name: "IGDILab Website",
    description:
      "A comprehensive website for the Individual Growth and Development Indicators Laboratory at the University of Minnesota. The site showcases research initiatives, assessment tools, and educational resources for early childhood development and literacy assessment.",
    client: "IGDILab @ University of Minnesota",
    company: "Omni",
    links: [{ name: "website", url: "https://igdilab.com/" }],
  },
];

// In-house products at Omni
const omniProducts: ProjectProps[] = [
  {
    name: "Runa",
    description:
      "Project management done right. Beautiful Kanban boards, seamless collaboration, and powerful workflows. Everything a team needs to ship faster — completely free and open source.",
    company: "Omni",
    links: [
      { name: "website", url: "https://runa.omni.dev/" },
      { name: "code", url: "https://github.com/omnidotdev/runa" },
    ],
  },
  {
    name: "Backfeed",
    description:
      "A user feedback reporting platform that aggregates user data for products, services, and experiences. Backfeed provides a centralized location to iterate on projects with user-driven insights, featuring feedback aggregation, prioritization tools, roadmap planning, and community discussion sections.",
    company: "Omni",
    links: [
      { name: "website", url: "https://backfeed.omni.dev/" },
      { name: "code", url: "https://github.com/omnidotdev/backfeed" },
    ],
  },
];

export { clientProjects, freelanceProjects, omniProducts, personalProjects };
