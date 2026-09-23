import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ShieldCheck, FileText } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Structured Data Schema for Search Engines (SEO), AI Search (AEO), and Local Geo-Targeting (GEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Durrat Al Noor Hospitality",
    "image": "https://www.durratalnoorhospitality.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "104, Crystal Building, Al Karama",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "telephone": "+971582774427",
    "email": "info@durratalnoorhospitality.com",
    "url": "https://www.durratalnoorhospitality.com",
    "openingHours": "Mo-Fr 09:00-18:00",
    "description": "Hospitality staffing, housekeeping and deep cleaning services in Dubai and across the UAE."
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us/" },
    { label: "Our Services", href: "/our-services/" },
    { label: "Our Team", href: "/our-team/" },
    { label: "Contact Us", href: "/contact-us/" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms & Conditions", href: "/terms-and-conditions/" },
  ];

  return (
    <footer 
      className="relative w-full border-t-2 border-[#DAB672] bg-[#0B192C] text-slate-100 overflow-x-hidden antialiased"
      itemScope 
      itemType="https://schema.org/WPFooter"
    >
      {/* Search Engine & AI Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5" itemScope itemType="https://schema.org/Organization">
            <Link href="/" className="inline-block transition-transform duration-200 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[#DAB672] focus:ring-offset-2 focus:ring-offset-[#0B192C] rounded-md">
              <Image 
                src="/logo.png" 
                alt="Durrat Al Noor Hospitality Logo" 
                width={240} 
                height={75} 
                priority={false}
                sizes="(max-width: 768px) 180px, 240px" 
                className="h-10 max-h-12 w-auto object-contain md:h-11"
                itemProp="logo"
              />
            </Link>
            <p className="max-w-md text-base leading-relaxed text-slate-300 font-normal">
              People. Service. Excellence.
              <br />
              Hospitality staffing, housekeeping and deep cleaning services in Dubai and across the UAE.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav aria-label="Footer Navigation">
            <h3 className="mb-4 text-lg font-semibold tracking-wide text-[#DAB672]">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link 
                    href={href} 
                    className="inline-block text-slate-300 transition-colors duration-150 hover:text-[#E2C07D] focus:outline-none focus:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Details (SEO Geo-Targeted Microdata) */}
          <div itemScope itemType="https://schema.org/LocalBusiness">
            <h3 className="mb-4 text-lg font-semibold tracking-wide text-[#DAB672]">
              Contact Us
            </h3>
            <address className="not-italic space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#DAB672]" aria-hidden="true" />
                <span className="leading-snug">
                  104, Crystal Building, Al Karama, Dubai, UAE
                </span>
              </div>
              <div>
                <a 
                  href="tel:+971582774427" 
                  className="flex items-center gap-3 transition-colors duration-150 hover:text-[#E2C07D] focus:outline-none focus:underline"
                  itemProp="telephone"
                >
                  <Phone size={18} className="shrink-0 text-[#DAB672]" aria-hidden="true" />
                  <span>+971 58 277 4427</span>
                </a>
              </div>
              <div>
                <a 
                  href="mailto:info@durratalnoorhospitality.com" 
                  className="flex items-center gap-3 transition-colors duration-150 hover:text-[#E2C07D] focus:outline-none focus:underline"
                  itemProp="email"
                >
                  <Mail size={18} className="shrink-0 text-[#DAB672]" aria-hidden="true" />
                  <span className="break-all">info@durratalnoorhospitality.com</span>
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-[#DAB672]" aria-hidden="true" />
                <span className="leading-snug">
                  Monday to Friday, 9:00 AM-6:00 PM, UAE time
                </span>
              </div>
            </address>
          </div>

        </div>

        {/* Legal & Compliance Links Section */}
        <div className="mt-10 border-t border-slate-700/60 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-6">
              {legalLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-1.5 transition-colors duration-150 hover:text-[#E2C07D] focus:outline-none focus:underline"
                >
                  {label === "Privacy Policy" ? (
                    <ShieldCheck size={14} className="text-[#DAB672]" aria-hidden="true" />
                  ) : (
                    <FileText size={14} className="text-[#DAB672]" aria-hidden="true" />
                  )}
                  <span>{label}</span>
                </Link>
              ))}
            </div>

            {/* Copyright & Developer Credits */}
            <div className="text-center sm:text-right text-slate-400">
              <p>
                © <span suppressHydrationWarning>{currentYear}</span> Durrat Al Noor Hospitality. All rights reserved.
              </p>
              <p className="mt-1">
                Developed by{" "}
                <a
                  href="https://www.4bizinternational.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#DAB672] transition-colors duration-150 hover:text-[#E2C07D] hover:underline focus:outline-none focus:underline"
                >
                  4biz International L.L.C
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}