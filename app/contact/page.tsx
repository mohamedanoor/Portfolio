import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/contact/ContactForm";
import CalendlyEmbed from "@/components/contact/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mohamed Noor — send a message or book a call directly.",
};

export default function Contact() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
      <FadeIn>
        <p className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-6">
          Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[var(--text)] leading-tight mb-4">
          Let&apos;s Talk
        </h1>
        <p className="text-lg text-[var(--text-muted)] max-w-xl mb-16">
          Have a project in mind or want to explore working together? Send a
          message or book time directly on my calendar.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <FadeIn delay={100}>
          <ContactForm />
        </FadeIn>
        <FadeIn delay={200}>
          <CalendlyEmbed />
        </FadeIn>
      </div>

      {/* Direct links */}
      <FadeIn delay={300}>
        <div className="mt-20 pt-10 border-t border-[var(--border)]">
          <p className="text-sm text-[var(--text-muted)] mb-5">
            Prefer a direct line?
          </p>
          <div className="flex flex-wrap gap-8">
            <a
              href="mailto:mohamedabdikadirn@gmail.com"
              className="text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors"
            >
              mohamedabdikadirn@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/mohamedanoor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mohamedanoorr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
