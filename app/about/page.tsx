import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, education, and focus areas for Mohamed Noor — General Manager and web developer in Portland, Maine.",
};

export default function About() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
      <FadeIn>
        <p className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-6">
          About
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[var(--text)] leading-tight mb-14">
          Background &amp; Approach
        </h1>
      </FadeIn>

      <div className="grid md:grid-cols-5 gap-16">
        {/* Bio */}
        <FadeIn delay={100} className="md:col-span-3 space-y-6">
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            I&apos;m Mohamed Noor — a General Manager and web developer based in
            Portland, Maine. I lead operations at Holding Hands Home Health Care,
            a personal care assistance company serving clients across the Greater Portland Area,
            while running a web development agency focused on serving small businesses - especially in healthcare and
            professional services.
          </p>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            My background spans business operations, software engineering, and
            financial services management. I hold dual degrees in Computer Science
            and Political Science from the University of Southern Maine — a
            foundation that bridges technical execution with strategic thinking.
          </p>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            I&apos;m drawn to problems that sit at the intersection of systems and
            people — where good engineering and clear design can meaningfully
            improve how organizations operate and how clients experience care.
          </p>
        </FadeIn>

        {/* Details sidebar */}
        <FadeIn delay={200} className="md:col-span-2 space-y-10">
          <div>
            <h3 className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-4">
              Education
            </h3>
            <p className="text-[var(--text)] font-medium">
              University of Southern Maine
            </p>
            <p className="text-[var(--text-muted)] text-sm mt-1">
              B.S. Computer Science
            </p>
            <p className="text-[var(--text-muted)] text-sm">
              B.A. Political Science
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-4">
              Languages
            </h3>
            <ul className="space-y-1.5 text-[var(--text-muted)] text-sm">
              <li>English — Fluent</li>
              <li>Arabic — Fluent</li>
              <li>Somali — Fluent</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-4">
              Focus Areas
            </h3>
            <ul className="space-y-1.5 text-[var(--text-muted)] text-sm">
              <li>Healthcare Operations</li>
              <li>Web Development</li>
              <li>Business Systems Design</li>
              <li>Software Engineering</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-4">
              Currently
            </h3>
            <p className="text-[var(--text-muted)] text-sm">
              General Manager — Holding Hands Home Health Care
            </p>
            <p className="text-[var(--text-muted)] text-sm mt-1.5">
              Founder — Web Development Agency (in progress)
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
