import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/work/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Mohamed Noor — web development for healthcare and professional services.",
};

export default function Work() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
      <FadeIn>
        <p className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-6">
          Work
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[var(--text)] leading-tight mb-4">
          Selected Projects
        </h1>
        <p className="text-lg text-[var(--text-muted)] max-w-xl mb-16">
          A focused collection of what I&apos;ve built. More to come as the agency
          takes shape.
        </p>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 120}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
