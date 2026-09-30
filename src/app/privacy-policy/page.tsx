import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Durrat Al Noor Hospitality Services Dubai UAE",
  description:
    "Learn how Durrat Al Noor Hospitality collects, protects, and manages personal data for hotel staffing, housekeeping, and facility management services across Dubai and the UAE.",
  alternates: {
    canonical: "https://durrat-al-noor-hospitality.vercel.app/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Durrat Al Noor Hospitality",
    description:
      "Privacy information and data management policies for Durrat Al Noor Hospitality enquiries and services in Dubai, UAE.",
    url: "https://durrat-al-noor-hospitality.vercel.app/privacy-policy",
    siteName: "Durrat Al Noor Hospitality",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Durrat Al Noor Hospitality",
    description:
      "Our commitment to protecting your personal data and handling service enquiries responsibly across the UAE.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Privacy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://durrat-al-noor-hospitality.vercel.app/privacy-policy",
    description:
      "Official Privacy Policy page for Durrat Al Noor Hospitality services in Dubai, UAE.",
    publisher: {
      "@type": "Organization",
      name: "Durrat Al Noor Hospitality",
      url: "https://durrat-al-noor-hospitality.vercel.app",
      logo: "https://durrat-al-noor-hospitality.vercel.app/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "104, Crystal Building, Al Karama",
        addressLocality: "Dubai",
        addressCountry: "UAE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971 58 277 4427",
        contactType: "customer service",
        email: "info@durratalnoorhospitality.com",
      },
    },
  };

  return (
    <main className="w-full min-h-screen bg-[#f2f3f4] text-[#0b192c] antialiased selection:bg-[#e3c487] selection:text-[#0b192c]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header Section - Dark #0b192c for white navbar menu text contrast */}
      <header className="w-full bg-[#0b192c] pt-32 pb-16 md:pt-40 md:pb-24 border-b border-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#e3c487]/15 via-transparent to-transparent pointer-events-none" />
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e3c487]/15 border border-[#e3c487]/30 text-[#e3c487] text-xs font-semibold tracking-wide uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#e3c487] animate-pulse" />
            Legal & Data Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-4xl font-normal leading-relaxed">
            Transparent data management for clients, partners, and job applicants engaging with Durrat Al Noor Hospitality in Dubai and across the UAE.
          </p>
        </div>
      </header>

      {/* Main Content Sections - Full Width Cards */}
      <article className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-10 md:py-16 space-y-8">
        
        {/* Core Privacy Policy Statement */}
        <section className="w-full bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0b192c] tracking-snug">
            Data Usage & Service Enquiries
          </h2>
          <p className="copy text-slate-700 text-base md:text-lg leading-relaxed">
            Durrat Al Noor Hospitality uses information submitted through this website to review enquiries and respond to requests for services. We handle enquiry information responsibly and only use it for legitimate business communication and service coordination.
          </p>
        </section>

        {/* Scope & Collection Details */}
        <section className="w-full bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0b192c] tracking-snug">
            Information Collection & Scope
          </h2>
          <p className="text-slate-700 text-base md:text-lg">
            When you interact with our website to request hospitality staffing, hotel housekeeping, deep cleaning, or facility management solutions, we collect information necessary to fulfill your specific business requirements.
          </p>
          <ul className="space-y-4 pt-2 text-slate-700 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#0b192c] font-bold text-xl">•</span>
              <span><strong className="text-[#0b192c]">Contact Information:</strong> Names, company names, corporate email addresses, and phone numbers provided during service requests.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0b192c] font-bold text-xl">•</span>
              <span><strong className="text-[#0b192c]">Service Details:</strong> Information related to staffing capacity, property locations, schedules, and specific cleaning or operational requirements.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0b192c] font-bold text-xl">•</span>
              <span><strong className="text-[#0b192c]">Technical Analytics:</strong> Standard non-identifiable web performance data to ensure fast page load speeds and smooth navigation on mobile, tablet, and desktop devices.</span>
            </li>
          </ul>
        </section>

        {/* Protection & Governance */}
        <section className="w-full bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0b192c] tracking-snug">
            Data Protection & Regional Compliance
          </h2>
          <p className="text-slate-700 text-base md:text-lg">
            All records submitted are stored securely in accordance with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection (PDPL). We never sell, lease, or distribute customer details to third-party advertisers or unauthorized external brokers.
          </p>
        </section>

        {/* Questions & Contact */}
        <section className="w-full bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0b192c] tracking-snug">
            Questions & Data Requests
          </h2>
          <p className="copy text-slate-700 text-base md:text-lg">
            For questions about how your information is handled, contact{" "}
            <a
              href="mailto:info@durratalnoorhospitality.com"
              className="text-[#0b192c] hover:text-[#e3c487] underline underline-offset-4 font-semibold transition-colors break-all"
            >
              info@durratalnoorhospitality.com
            </a>
            .
          </p>
        </section>

        {/* FULL WIDTH Dark Blue Contact & Information Banner */}
        <section className="w-full bg-[#0b192c] text-white rounded-2xl p-6 sm:p-10 md:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e3c487]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Contact Details Grid */}
            <div className="space-y-6 lg:max-w-3xl">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#e3c487]">
                  Durrat Al Noor Hospitality
                </h3>
                <p className="text-slate-300 text-sm md:text-base mt-1">
                  People. Service. Excellence. Dedicated hospitality staffing and housekeeping support across Dubai and the UAE.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-2">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Head Office
                  </span>
                  <p className="text-slate-200 text-sm">104, Crystal Building, Al Karama, Dubai, UAE</p>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Email Support
                  </span>
                  <a
                    href="mailto:info@durratalnoorhospitality.com"
                    className="text-[#e3c487] hover:underline transition-colors text-sm break-all font-medium"
                  >
                    info@durratalnoorhospitality.com
                  </a>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Phone / WhatsApp
                  </span>
                  <a
                    href="tel:+971582774427"
                    className="text-slate-200 hover:text-[#e3c487] transition-colors text-sm font-medium"
                  >
                    +971 58 277 4427
                  </a>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Operating Hours
                  </span>
                  <p className="text-slate-200 text-sm">Mon - Fri, 9:00 AM – 6:00 PM (GST)</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="shrink-0 pt-4 lg:pt-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#e3c487] hover:bg-[#d8b572] text-[#0b192c] font-bold text-base transition-all duration-200 shadow-lg active:scale-[0.98]"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}