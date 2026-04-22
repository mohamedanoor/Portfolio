import { type Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="group flex flex-col border border-[var(--border)] rounded-lg p-8
                 bg-[var(--bg-surface)] hover:border-[var(--accent)]/60
                 transition-colors duration-300 h-full"
    >
      {/* Header */}
      <div className="mb-5">
        {project.status && (
          <span
            className="inline-block text-[10px] font-mono tracking-widest
                       text-[var(--accent)] border border-[var(--accent)]/25
                       bg-[var(--accent)]/5 rounded px-2.5 py-1 mb-4 uppercase"
          >
            {project.status}
          </span>
        )}
        <h3 className="text-base font-semibold text-[var(--text)] leading-snug">
          {project.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1 mb-7">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-7">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono text-[var(--text-muted)]
                       bg-[var(--bg-subtle)] px-3 py-1 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-5 pt-5 border-t border-[var(--border)]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium
                       text-[var(--text-muted)] hover:text-[var(--accent)]
                       transition-colors"
          >
            <ExternalLinkIcon />
            Live Site
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium
                       text-[var(--text-muted)] hover:text-[var(--accent)]
                       transition-colors"
          >
            <GitHubIcon />
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}
