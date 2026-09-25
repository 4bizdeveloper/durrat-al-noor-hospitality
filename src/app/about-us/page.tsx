import Image from "next/image";
import Link from "next/link";
import { Target, Eye, ShieldCheck, Award, HeartHandshake, Clock, Heart } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About Durrat Al Noor Hospitality | Leading Staffing & Cleaning in Dubai, UAE",
  description:
    "Learn about Durrat Al Noor Hospitality, Dubai's premier provider of professional hospitality staffing, housekeeping, and deep cleaning services across the UAE.",
  keywords: [
    "Hospitality Staffing Dubai",
    "Housekeeping Services UAE",
    "Deep Cleaning Dubai",
    "Durrat Al Noor Hospitality",
    "Hotel Staffing Agency UAE",
  ],
  alternates: {
    canonical: "https://durratalnoor.com/about",
  },
  openGraph: {
    title: "About Durrat Al Noor Hospitality | Dubai, UAE",
    description:
      "Dubai-based provider of hospitality staffing, housekeeping, and deep cleaning support across the UAE.",
    url: "https://durratalnoor.com/about",
    siteName: "Durrat Al Noor Hospitality",
    locale: "en_AE",
    type: "website",
  },
};

const values = [
  {
    title: "Integrity",
    desc: "We value honest communication and a responsible approach to commitments.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    desc: "We pay attention to the everyday details that contribute to a positive service experience.",
    icon: Award,
  },
  {
    title: "Respect",
    desc: "We value the people we work with and the environments in which we operate.",
    icon: HeartHandshake,
  },
  {
    title: "Reliability",
    desc: "We focus on organised working arrangements and clear service expectations.",
    icon: Clock,
  },
  {
    title: "Care",
    desc: "We recognise that hospitality is about how people are treated, supported and welcomed.",
    icon: Heart,
  },
];

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Durrat Al Noor Hospitality",
      "alternateName": "Pearl of Light Hospitality",
      "url": "https://durratalnoor.com",
      "logo": "https://durratalnoor.com/logo.png",
      "description":
        "Provider of professional hospitality staffing, housekeeping, and deep cleaning services across Dubai and the UAE.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE",
      },
      "areaServed": "United Arab Emirates",
      "knowsAbout": [
        "Housekeeping Services",
        "Food & Beverage Staffing",
        "Kitchen & Stewarding",
        "Pool & Leisure Services",
        "Deep Cleaning Services",
      ],
    },
  };

  return (
    <main className="w-full overflow-x-hidden bg-slate-50 text-slate-900">
      {/* Search Engine & AI Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - Left Aligned Layout */}
      <section className="relative flex min-h-[90vh] sm:min-h-screen w-full items-center overflow-hidden bg-[#0B192C] px-4 py-16 sm:py-20 lg:py-24 text-white sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 z-0 h-full w-full bg-[url('/hsopitality-uae.webp')] bg-cover bg-center"
          aria-hidden="true"
        />
        {/* Soft overlay ensuring text visibility without over-darkening the hero */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0B192C]/90 via-[#0B192C]/75 to-[#0B192C]/95" />
        
        <div className="container relative z-20 mx-auto max-w-7xl text-left">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full bg-[#DAB672]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#DAB672] backdrop-blur-md">
              • About Us
            </p>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              About Durrat Al Noor Hospitality
            </h1>
            <p className="mt-6 text-base text-slate-100 sm:text-lg leading-relaxed">
              Empowering Dubai & UAE's finest service environments with dedicated staff, tailored operational solutions, and precision care. We specialize in premium hospitality staffing, housekeeping, and deep cleaning services designed for hotels, restaurants, and luxury commercial spaces across the Emirates.
            </p>

            {/* CTA Button with Custom Gradient */}
            <div className="mt-8 flex justify-start">
              <Link
                href="/contact-us"
                style={{
                  background: "linear-gradient(90deg, #E5C68D 0%, #FDF2E2 100%)",
                }}
                className="inline-flex items-center rounded-full px-8 py-3.5 text-base font-bold text-[#0B192C] shadow-lg transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#E5C68D] focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24">
        <Reveal>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Text Column */}
              <div className="text-left lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DAB672]">
                  Who We Are
                </span>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0B192C] sm:text-4xl">
                  Hospitality Begins with People
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-800 sm:text-lg">
                  Durrat Al Noor Hospitality is a Dubai-based provider of hospitality staffing, housekeeping and deep cleaning services for clients across the UAE.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-800 sm:text-lg">
                  We support hotels, restaurants, residential properties, businesses and other service environments through five core areas: Housekeeping Services, Food &amp; Beverage Staffing, Kitchen &amp; Stewarding, Pool &amp; Leisure Services, and Deep Cleaning Services.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-800 sm:text-lg">
                  Our name, meaning <strong className="font-semibold text-[#0B192C]">"Pearl of Light,"</strong> reflects our aspiration to bring care and a positive contribution to the hospitality industry.
                </p>
              </div>

              {/* Logo Column (Right Side) */}
              <div className="flex justify-center items-center lg:col-span-5">
                <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-square transition-transform duration-300 transform-gpu hover:scale-105">
                  <Image
                    src="/durrat_al_noor_hospitality_Logo.png"
                    alt="Durrat Al Noor Hospitality Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Supporting People Section */}
      <section className="bg-slate-100/70 py-16 md:py-24">
        <Reveal>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-[#0B192C] sm:text-4xl">
                  Supporting the People Behind Every Experience
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-800 sm:text-lg">
                  A prepared room, attentive restaurant service and a carefully maintained space all depend on the people working behind the scenes.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-800 sm:text-lg">
                  We help clients identify the support their operation requires, from guest-facing service personnel to housekeeping and kitchen teams. Each engagement begins with a discussion of the setting, responsibilities, schedule and expected scope.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-800 sm:text-lg">
                  Our approach places importance on practical coordination, clear expectations and respect for clients, employees and guests.
                </p>
              </div>
              <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] w-full overflow-hidden rounded-3xl shadow-xl transition-transform duration-300 transform-gpu hover:scale-[1.01]">
                <Image
                  src="/hospitality-about.webp"
                  alt="Hotel hospitality service management in Dubai UAE"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Mission, Vision & Values */}
      <section className="bg-white py-16 md:py-24">
        <Reveal>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DAB672]">
                Mission, Vision &amp; Values
              </span>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0B192C] sm:text-4xl">
                Guided by Purpose & Excellence
              </h2>
            </div>

            {/* Mission & Vision Row */}
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="group rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#DAB672] hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B192C] text-[#DAB672]">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B192C]">Mission</h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-slate-800">
                  To provide reliable hospitality and cleaning support through capable people, attentive coordination and a clear understanding of our clients' requirements.
                </p>
              </div>

              <div className="group rounded-2xl border border-slate-200/80 bg-[#0B192C] p-8 shadow-sm transition-all duration-300 hover:border-[#DAB672] hover:shadow-md text-white">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#DAB672]">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Vision</h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-slate-100">
                  To become a trusted hospitality partner across the UAE, building lasting relationships through service quality, professional conduct and care for people.
                </p>
              </div>
            </div>

            {/* Our Values - 5 Cards in Single Row on Desktop */}
            <div className="mt-16">
              <h3 className="text-center text-2xl font-black text-[#0B192C]">
                Our Values
              </h3>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {values.map(({ title, desc, icon: Icon }) => (
                  <div
                    key={title}
                    className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 transform-gpu hover:-translate-y-1 hover:border-[#DAB672] hover:bg-white hover:shadow-md"
                  >
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B192C]/10 text-[#0B192C]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="mt-4 text-lg font-bold text-[#0B192C]">
                        {title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* A Service Arrangement That Fits */}
      <section className="py-16 md:py-24">
        <Reveal>
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center rounded-3xl bg-[#F2EEE5] p-8 sm:p-12 md:p-16 shadow-sm border border-[#e5dec9]">
              <h2 className="text-2xl font-black tracking-tight text-[#0B192C] sm:text-4xl">
                A Service Arrangement That Fits
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-800 sm:text-lg">
                Casual staffing, full-time employment support and internship programmes are available for applicable roles. We discuss the roles, location, working hours and duration involved before agreeing on a service arrangement.
              </p>

              <div className="my-8 h-px w-24 bg-[#DAB672]/60" />

              <h3 className="text-xl font-bold text-[#0B192C] sm:text-2xl">
                Meet the Team Behind Durrat Al Noor
              </h3>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/our-team/"
                  className="rounded-full bg-[#DAB672] px-8 py-3.5 text-sm font-bold text-[#0B192C] transition-all duration-300 transform-gpu hover:bg-[#c9a35e] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#DAB672] focus:ring-offset-2"
                >
                  Meet Our Team
                </Link>
                <Link
                  href="/our-services/"
                  className="rounded-full border-2 border-[#0B192C] bg-transparent px-8 py-3.5 text-sm font-bold text-[#0B192C] transition-all duration-300 transform-gpu hover:border-[#DAB672] hover:bg-[#0B192C] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:ring-offset-2"
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