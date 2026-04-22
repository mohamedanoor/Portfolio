import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

const areas = [
  {
    label: "Web Development",
    body: "Building production web applications with modern tooling. Currently focused on a development agency serving healthcare and professional services firms.",
  },
  {
    label: "Business Operations",
    body: "Managing day-to-day operations at a personal care agency in Maine — staffing, client relations, compliance, and systems.",
  },
  {
    label: "Systems Thinking",
    body: "Computer Science and Political Science background — comfortable with both technical architecture and the organizational structures it needs to support.",
  },
];

export default function Highlights() {
  return (
    <section className="pb-28 px-6 md:px-12 max-w-5xl mx-auto">
      <FadeIn>
        <p className="text-[10px] font-mono tracking-[0.18em] text-[var(--accent)] uppercase mb-10">
          What I Do
        </p>
      </FadeIn>

      {/* Three-panel grid separated by thin borders */}
      <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-lg overflow-hidden">
        {areas.map(({ label, body }, i) => (
          <FadeIn key={label} delay={i * 100}>
            <div className="bg-[var(--bg)] p-8 h-full">
              <div className="w-7 h-px bg-[var(--accent)] mb-6" />
              <p className="text-[var(--text)] font-semibold mb-3 text-sm">
                {label}
              </p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={300}>
        <div className="mt-12 flex justify-end">
          <Link
            href="/about"
            className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
          >
            More about me →
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
