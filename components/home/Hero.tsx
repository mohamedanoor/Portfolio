import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12">
      {/* Subtle dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(148,163,184,0.12) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Faint accent glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] -z-10 rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-5xl mx-auto pt-24 pb-20">
        <FadeIn delay={0}>
          <p className="text-xs font-mono tracking-[0.18em] text-[var(--accent)] uppercase mb-8">
            Mohamed Noor — Portland, ME
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-[var(--text)] leading-[1.05] tracking-tight mb-8">
            Web Developer.
            <br />
            <span className="text-[var(--text-muted)]">General Manager.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={180}>
          <p className="text-xl text-[var(--text-muted)] max-w-lg leading-relaxed mb-12">
            Building reliable digital infrastructure for healthcare and
            professional services — with precision.
          </p>
        </FadeIn>

        <FadeIn delay={280}>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3
                         bg-[var(--accent)] text-white text-sm font-medium rounded-md
                         hover:bg-[var(--accent-hover)] transition-colors duration-200"
            >
              View My Work
              <ArrowRight />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3
                         border border-[var(--border)] text-[var(--text)] text-sm font-medium rounded-md
                         hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </FadeIn>

        {/* Metadata strip */}
        <FadeIn delay={420}>
          <div className="mt-24 pt-10 border-t border-[var(--border)] flex flex-wrap gap-10">
            {[
              { label: "Role", value: "GM and Web Developer" },
              { label: "Location", value: "Portland, ME" },
              { label: "Available for", value: "Web Projects" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[10px] font-mono tracking-[0.15em] text-[var(--accent)] uppercase mb-1.5">
                  {label}
                </p>
                <p className="text-sm text-[var(--text)] font-medium">{value}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
