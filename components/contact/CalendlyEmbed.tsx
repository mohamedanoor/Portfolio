"use client";

import Script from "next/script";

export default function CalendlyEmbed() {
  return (
    <div>
      <h2 className="text-base font-semibold text-[var(--text)] mb-6">
        Book a Call
      </h2>

      {/*
        Calendly supports theming via URL params:
          background_color, text_color, primary_color
        Dark-mode values are baked in here. If you want it to respect the
        user's theme toggle, you'd need JS to swap the data-url on the fly —
        for now it defaults to dark so it matches the site's default.
      */}
      <div
        className="calendly-inline-widget rounded-lg overflow-hidden border border-[var(--border)]"
        data-url={[
          "https://calendly.com/mohamednoorr",
          "?hide_gdpr_banner=1",
          "&hide_event_type_details=0",
          "&background_color=0c1627",
          "&text_color=f1f5f9",
          "&primary_color=3b82f6",
        ].join("")}
        style={{ minWidth: "320px", height: "660px" }}
      />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
