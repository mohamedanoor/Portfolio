import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mohamed Noor — General Manager & Web Developer",
    template: "%s — Mohamed Noor",
  },
  description:
    "Mohamed Noor is a General Manager and web developer based in Portland, Maine, building digital solutions for healthcare and professional services.",
  openGraph: {
    title: "Mohamed Noor",
    description: "General Manager & Web Developer based in Portland, Maine.",
    url: "https://mohamednoor.dev",
    siteName: "Mohamed Noor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Noor",
    description: "General Manager & Web Developer based in Portland, Maine.",
  },
};

/* Injected before hydration to set dark/light class — prevents flash */
const themeScript = `
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark) || (!stored && true)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (_) {}
`;
// Default is dark (the final '|| (!stored && true)' ensures dark when no stored preference)

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
