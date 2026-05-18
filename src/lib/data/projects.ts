export interface ProjectProps {
  name: string;
  description: string;
  company?: string;
  client?: string;
  date?: string;
  status?: "active" | "completed";
  websiteUrl: string;
  githubUrl?: string;
}

const projects: ProjectProps[] = [
  {
    name: "April",
    description:
      "A full-stack SaaS boilerplate built on TanStack Start with a focus on developer experience and production-readiness. Features multi-provider authentication (Google, GitHub, Passkeys, Ethereum/SIWE), Stripe billing with plans and trials, a fully functional task management module, and deep UI customization including OKLCH-based theming, sidebar layout variants, font sizing, and pointer preferences — all persisted per user. Built with React 19, Drizzle ORM, Tailwind v4, better-auth, Wagmi, and Bun.",
    status: "active",
    websiteUrl: "https://beauhawkinson-april.vercel.app",
    githubUrl: "https://github.com/beauhawkinson/april",
  },
  {
    name: "Porterhouse MX",
    description:
      "An ecommerce site for a custom motocross apparel brand. Building out the storefront, product catalog, and checkout flow.",
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
  },
  // {
  //   name: "Freeride MN",
  //   description: "Consolidating MN MTB experiences. Events, trails, blog posts, forums.",
  //   date: "Oct, 2023",
  //   websiteUrl: "https://www.freeridemn.com/",
  // },
  // {
  //   name: "Chisago Hardware",
  //   description: "Build and design the Chisago Hardware website.",
  //   date: "Jan, 2023",
  //   websiteUrl: "https://chisagohardware.com/",
  // },
];

const clientProjects: ProjectProps[] = [
  {
    name: "IGDI-APEL",
    description:
      "Transforms early literacy evaluation by providing educators with a powerful, research-backed assessment tool. Developed in collaboration with the University of Minnesota, this platform enables educators to assess children's emergent literacy skills with accuracy across multiple languages including English, Spanish, and Hmong.",
    client: "IGDILab @ University of Minnesota",
    company: "Omni",
    websiteUrl: "https://myigdis.com/", // confirm the actual URL
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

export { clientProjects, omniProducts, projects };
