"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { clsx } from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="text-sm font-mono font-semibold tracking-tight text-[var(--text)] hover:text-[var(--accent)] transition-colors"
        >
          MN
        </Link>

        <div className="flex items-center gap-3">
          {/* Desktop links */}
          <ul className="hidden sm:flex items-center gap-7">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    "text-sm font-medium transition-colors",
                    pathname === href
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="sm:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]
                       text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={clsx(
                "block w-5 h-px bg-current transition-all duration-300 origin-center",
                mobileOpen && "rotate-45 translate-y-[6px]"
              )}
            />
            <span
              className={clsx(
                "block w-5 h-px bg-current transition-all duration-300",
                mobileOpen && "opacity-0 scale-x-0"
              )}
            />
            <span
              className={clsx(
                "block w-5 h-px bg-current transition-all duration-300 origin-center",
                mobileOpen && "-rotate-45 -translate-y-[6px]"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={clsx(
          "sm:hidden overflow-hidden transition-all duration-300 border-t border-[var(--border)] bg-[var(--bg)]",
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  "text-sm font-medium transition-colors",
                  pathname === href
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
