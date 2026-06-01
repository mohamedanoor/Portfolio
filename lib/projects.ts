export interface Project {
  id: number;
  name: string;
  description: string;
  /** Set to undefined to hide the Live Site link */
  liveUrl?: string;
  /** Set to undefined to hide the GitHub link */
  githubUrl?: string;
  tags: string[];
  /** Displayed as a small badge — e.g. "In Progress", "Live", "Case Study" */
  status?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Holding Care",
    description:
      "Full-service website for a home health care company in Portland, Maine. Built with Next.js, TypeScript, and Tailwind CSS — featuring service pages, a careers section, and contact forms connected to Resend.",
    liveUrl: "https://holdingcare.co",
    githubUrl: "https://github.com/mohamedanoor/holding-care",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Healthcare"],
    status: "Live",
  },
  {
    id: 2,
    name: "LuminCards",
    description: "A full-stack web app that transforms any text, topic, or uploaded document into structured study flashcards using Claude AI. Features three study modes, user authentication, deck sharing, PDF export, and a study analytics dashboard.",
    liveUrl:"https://lumincards.app",
    githubUrl: "https://github.com/mohamedanoor/FlashAI",
    tags:["Python", "Flask", "PostgreSQL", "Claude AI", "JavaScript"],
    status: "Live",
  },
  {
    id: 3,
    name: "Crescent Studio",
    description: "Agency website for a Portland, Maine digital services company offering web design, development, SEO, and digital marketing. Built with Next.js and Tailwind CSS featuring dark/light mode toggle and contact form via Resend.",
    liveUrl: "https://crescentstudio.co",
    githubUrl: "https://github.com/mohamedanoor/Crescent-Studio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    status: "Live",
}
  // Add more projects here as they're completed:
  // {
  //   id: 2,
  //   name: "Agency Site",
  //   description: "...",
  //   liveUrl: "https://...",
  //   githubUrl: "https://github.com/mohamedanoorr/...",
  //   tags: ["Next.js", "TypeScript"],
  //   status: "In Progress",
  // },
];
