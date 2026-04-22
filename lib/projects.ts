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
    name: "Holding Hands Home Health Care",
    description:
      "A full-service web platform for a personal care assistance company in Maine. Currently rebuilding from WordPress into a modern stack — with scheduling, staff management, and a client-facing portal.",
    // TODO: replace with the actual current WordPress URL
    liveUrl: undefined,
    githubUrl: "https://github.com/mohamedanoorr",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Healthcare"],
    status: "In Progress",
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
