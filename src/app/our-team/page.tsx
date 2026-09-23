import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Leadership & Team | Durrat Al Noor Hospitality Dubai",
  description:
    "Meet the experienced leadership, sales, and HR team behind Durrat Al Noor Hospitality in Dubai. Committed to excellence in hospitality staffing and service quality.",
  keywords: [
    "Durrat Al Noor Hospitality",
    "Hospitality Team Dubai",
    "Dubai Hospitality Leadership",
    "Staffing Solutions Dubai",
    "Dipak Shrestha",
    "Dipak Pandaya",
    "Alisha Gautam",
    "UAE Hotel Staffing Services",
  ],
  alternates: {
    canonical: "https://durratalnoor.com/our-team",
  },
  openGraph: {
    title: "Leadership & Team | Durrat Al Noor Hospitality Dubai",
    description:
      "Meet the leadership, sales, and HR professionals behind Durrat Al Noor Hospitality in Dubai.",
    url: "https://durratalnoor.com/our-team",
    siteName: "Durrat Al Noor Hospitality",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://durratalnoor.com/dipak_shrestha.png",
        width: 1200,
        height: 630,
        alt: "Durrat Al Noor Hospitality Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership & Team | Durrat Al Noor Hospitality Dubai",
    description:
      "Meet the leadership, sales, and HR professionals behind Durrat Al Noor Hospitality in Dubai.",
    images: ["https://durratalnoor.com/dipak_shrestha.png"],
  },
};

const people = [
  {
    name: "Dipak Shrestha",
    role: "Managing Director",
    bio: "Dipak Shrestha leads Durrat Al Noor Hospitality, guiding the company's strategic vision with a steadfast commitment to high service quality, client satisfaction, and workforce excellence across the UAE hospitality sector.",
    image: "/dipak_shrestha.png",
  },
  {
    name: "Dipak Pandaya",
    role: "Sales Director",
    bio: "Dipak Pandaya focuses on strategic business development and long-term client relationships, connecting premier commercial hospitality needs with tailored, efficient staffing and service solutions.",
    image: "/dipak_pandya.jpeg",
  },
  {
    name: "Alisha Gautam",
    role: "HR Manager",
    bio: "Alisha Gautam supports the core workforce at Durrat Al Noor Hospitality through talent recruitment, employee well-being, and structured team development to maintain rigorous service standards.",
    image: "/alisha_gautham.jpeg",
  },
];

export default function Team() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://durratalnoor.com/our-team/#webpage",
        url: "https://durratalnoor.com/our-team",
        name: "Leadership & Team | Durrat Al Noor Hospitality Dubai",
        description:
          "Meet the leadership, sales, and HR team driving excellence at Durrat Al Noor Hospitality Dubai.",
        inLanguage: "en-AE",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://durratalnoor.com/#website",
          url: "https://durratalnoor.com",
          name: "Durrat Al Noor Hospitality",
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://durratalnoor.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Our Team",
              item: "https://durratalnoor.com/our-team",
            },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": "https://durratalnoor.com/#organization",
        name: "Durrat Al Noor Hospitality",
        url: "https://durratalnoor.com",
        logo: "https://durratalnoor.com/logo.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: "25.2048",
            longitude: "55.2708",
          },
          geoRadius: "50000",
        },
      },
      ...people.map((person) => ({
        "@type": "Person",
        "@id": `https://durratalnoor.com/our-team/#${person.name.toLowerCase().replace(/\s+/g, "-")}`,
        name: person.name,
        jobTitle: person.role,
        description: person.bio,
        image: `https://durratalnoor.com${person.image}`,
        worksFor: {
          "@id": "https://durratalnoor.com/#organization",
        },
        knowsAbout: [
          "Hospitality Management",
          "Staffing Solutions",
          "Dubai Workforce Management",
        ],
      })),
    ],
  };

  return (
    <main className="w-full overflow-x-hidden bg-[#FAFAFA] text-[#0B192C] selection:bg-[#DAB672] selection:text-[#0B192C]">
      {/* Schema / JSON-LD for Search Engines, Voice Assistants & AI Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative flex min-h-[380px] sm:min-h-[440px] md:min-h-[480px] w-full items-center justify-center overflow-hidden bg-[#0B192C] py-20 md:py-28">
        {/* Crisp Unblurred Next.js Optimized Image */}
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2000&q=85"
            alt="Durrat Al Noor Hospitality Headquarters Dubai background"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center transform-gpu scale-100 transition-transform duration-1000 ease-out hover:scale-105"
          />
        </div>

        {/* High-Contrast Gradient Layer - No Backdrop Blur applied */}
        <div
          className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B192C]/95 via-[#0B192C]/80 to-[#0B192C]/65"
          aria-hidden="true"
        />

        {/* Hero Content Wrapper */}
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-[#DAB672]/20 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#EBD19B] border border-[#DAB672]/40 shadow-sm">
              Our Leadership
            </span>
            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              The Dedicated People Behind Durrat Al Noor Hospitality
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              Delivering premier hospitality and cleaning management services
              across Dubai through experienced leadership, strategic management, and dedicated support.
            </p>
          </div>
        </div>
      </section>

      {/* Main Team Directory Section */}
      <section
        className="py-16 sm:py-20 lg:py-28 bg-white"
        id="team-members"
        aria-label="Leadership Team Directory"
      >
        <Reveal>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <header className="mx-auto max-w-3xl text-center md:text-left md:mx-0 mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#B38536]">
                Our Leadership & Specialists
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight leading-tight">
                Leadership, Client Relationships & Workforce Support
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-800 font-medium">
                Our team brings together strategic management, active client communication, and robust human resources to ensure top-tier hospitality and facility management solutions.
              </p>
            </header>

            {/* Team Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {people.map((person) => (
                <article
                  key={person.name}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#DAB672] hover:shadow-2xl"
                >
                  {/* Card Image Container */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={person.image}
                      alt={`${person.name} - ${person.role} at Durrat Al Noor Hospitality Dubai`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Card Details */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <span className="inline-block rounded-md bg-[#DAB672]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8A631F]">
                        {person.role}
                      </span>
                      <h3 className="mt-3 text-xl sm:text-2xl font-bold text-[#0B192C] group-hover:text-[#B38536] transition-colors duration-200">
                        {person.name}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
                        {person.bio}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#F4EFE6] py-16 sm:py-20 border-t border-b border-[#E0D5C1]">
        <Reveal>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight">
                  Speak with Our Team
                </h2>
                <p className="mt-3 text-base sm:text-lg text-slate-800 font-semibold">
                  Tell us about your hospitality staffing or service requirements in Dubai.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center justify-center rounded-full bg-[#DAB672] px-8 py-3.5 text-base font-bold text-[#0B192C] shadow-md transition-all duration-200 hover:bg-[#c6a059] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#DAB672] focus:ring-offset-2 active:scale-95"
                >
                  Contact Us
                </Link>
                <Link
                  href="/our-services/"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#0B192C] px-8 py-3.5 text-base font-bold text-[#0B192C] transition-all duration-200 hover:bg-[#0B192C] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:ring-offset-2 active:scale-95"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}