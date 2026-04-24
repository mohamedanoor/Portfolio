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
