"use client";

import React from "react";
import { Phone } from "lucide-react";

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="transition-transform duration-300 group-hover:scale-110"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.6 5.93L.1 24l6.34-1.66a11.9 11.9 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.23-6.16-3.45-8.41Zm-8.44 18.25h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.76.98 1-3.66-.23-.38a9.85 9.85 0 1 1 8.38 4.65Zm5.41-7.38c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.52s1.09 2.92 1.24 3.12c.15.2 2.14 3.27 5.19 4.59.73.31 1.3.5 1.74.64.73.23 1.39.2 1.91.12.58-.09 1.78-.73 2.03-1.44.25-.71.25-1.32.18-1.44-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

export default function FloatingActions() {
  const phoneNumber = "+971582774427";
  const whatsappUrl = "https://wa.me/971582774427";

  return (
    <>
      {/* Search Engine & AI Crawler Structured Data (Geo/AEO/SEO optimized) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "telephone": phoneNumber,
            "contactType": "customer service",
            "areaServed": "AE",
            "availableLanguage": ["en", "ar"],
            "url": whatsappUrl
          }),
        }}
      />

      <nav
        aria-label="Direct Communications"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[70] flex flex-col gap-3.5 items-center pointer-events-auto select-none will-change-transform"
      >
        {/* Call Action Button */}
        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call direct phone line at +971 58 277 4427"
          title="Direct Phone Call"
          className="group relative grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-gradient-to-tr from-[#8A6229] via-[#E5C158] to-[#9A7432] border border-[#7A5218]/30 text-[#0F172A] shadow-[0_8px_25px_rgba(138,98,41,0.35),0_4px_10px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
        >
          {/* Continuous Pulse Effect - Deep Warm Gold Glow */}
          <span className="absolute inset-0 rounded-full bg-[#B38728]/40 animate-ping pointer-events-none opacity-80" />
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8A6229]/35 to-[#E5C158]/45 animate-pulse pointer-events-none blur-[1px]" />

          {/* Icon with Zoom Effect on Hover */}
          <Phone
            size={22}
            strokeWidth={2.4}
            className="relative z-10 transition-transform duration-300 group-hover:scale-110 text-[#0F172A]"
          />
        </a>

        {/* WhatsApp Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp at +971 58 277 4427"
          title="WhatsApp Chat"
          className="group relative grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-gradient-to-tr from-[#8A6229] via-[#E5C158] to-[#9A7432] border border-[#7A5218]/30 text-[#0F172A] shadow-[0_8px_25px_rgba(138,98,41,0.35),0_4px_10px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
        >
          {/* Continuous Pulse Effect - Deep Warm Gold Glow */}
          <span className="absolute inset-0 rounded-full bg-[#B38728]/40 animate-ping pointer-events-none opacity-80 [animation-delay:500ms]" />
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8A6229]/35 to-[#E5C158]/45 animate-pulse pointer-events-none blur-[1px] [animation-delay:500ms]" />

          {/* Icon with Zoom Effect on Hover */}
          <div className="relative z-10 text-[#0F172A]">
            <WhatsAppIcon size={22} />
          </div>
        </a>
      </nav>
    </>
  );
}