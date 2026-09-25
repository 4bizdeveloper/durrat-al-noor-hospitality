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
    // Focus towards top for high-positioned faces
    imagePosition: "object-top",
  },
  {
    name: "Dipak Pandaya",
    role: "Sales Director",
    bio: "Dipak Pandaya focuses on strategic business development and long-term client relationships, connecting premier commercial hospitality needs with tailored, efficient staffing and service solutions.",
    image: "/dipak_pandya.jpeg",
    imagePosition: "object-center",
  },
  {
    name: "Alisha Gautam",
    role: "HR Manager",
    bio: "Alisha Gautam supports the core workforce at Durrat Al Noor Hospitality through talent recruitment, employee well-being, and structured team development to maintain rigorous service standards.",
    image: "/alisha_gautham.jpeg",
    // Focus slightly lower than top if needed, or top
    imagePosition: "object-top",
  },
];

const highlights = [
  {
    title: "Tailored Workforce Solutions",
    description:
      "Flexible, scalable staffing solutions customized for 5-star hotels, luxury resorts, and commercial venues across Dubai and the UAE.",
  },
  {
    title: "Rigorous Training & Compliance",
    description:
      "Every team member undergoes comprehensive hospitality and hygiene training aligned with UAE international standards.",
  },
  {
    title: "Dedicated Account Management",
    description:
      "Our active sales and HR directors ensure smooth ongoing communication, fast placement turnarounds, and top workforce retention.",
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
        "@id": `https://durratalnoor.com/our-team/#${person.name
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
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
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0B192C] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
          <Image
            src="/hsopitality-uae.webp"
            alt="Durrat Al Noor Hospitality Headquarters Dubai background"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center transform-gpu scale-100 transition-transform duration-1000 ease-out hover:scale-105"
          />
        </div>

        <div
          className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B192C]/95 via-[#0B192C]/80 to-[#0B192C]/65"
          aria-hidden="true"
        />

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

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-bold text-[#0B192C] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#E5C68D] focus:ring-offset-2 active:scale-95"
                style={{
                  background:
                    "linear-gradient(90deg, #E5C68D 0%, #FDF2E2 100%)",
                }}
              >
                Contact Us
              </Link>
            </div>
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

            {/* Responsive Row Container */}
            <div className="flex flex-col gap-8 sm:gap-10">
              {people.map((person) => (
                <article
                  key={person.name}
                  className="group flex flex-col md:flex-row items-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#DAB672] hover:shadow-xl"
                >
                  {/* Photo Wrapper */}
                  <div className="relative w-full md:w-96 lg:w-[420px] shrink-0 h-[360px] sm:h-[400px] md:h-[420px] flex items-center justify-center rounded-2xl overflow-hidden">
                    <Image
                      src={person.image}
                      alt={`${person.name} - ${person.role} at Durrat Al Noor Hospitality Dubai`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 384px, 420px"
                      className={`object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105 ${
                        person.imagePosition || "object-top"
                      }`}
                      loading="lazy"
                    />
                  </div>

                  {/* Details Container */}
                  <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <div>
                      <span className="inline-block rounded-md bg-[#DAB672]/15 px-3.5 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8A631F]">
                        {person.role}
                      </span>
                      <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0B192C] group-hover:text-[#B38536] transition-colors duration-200">
                        {person.name}
                      </h3>
                      <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 font-normal max-w-3xl">
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

      {/* SEO Content Section - Why Choose Our Team */}
      <section className="bg-[#FAFAFA] py-16 sm:py-20 border-t border-slate-200/80">
        <Reveal>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="max-w-3xl mb-12">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#B38536]">
                Hospitality Excellence in Dubai
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight">
                Why Partner with Durrat Al Noor Hospitality?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                As one of the trusted hospitality and commercial staffing providers in Dubai, our experienced management team ensures that every deployment meets the highest luxury standards of the UAE hotel sector.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#DAB672]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#DAB672]/15 text-[#8A631F] font-bold text-lg mb-5">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B192C] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
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