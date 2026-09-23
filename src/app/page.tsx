"use client";

import Image from "next/image";
import Link from "next/link";
import ServiceCarousel, { HomeService } from "@/components/ServiceCarousel";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services: HomeService[] = [
  {
    title: "Housekeeping Services",
    description:
      "Reliable housekeeping and cleaning support for hospitality and property environments.",
    bullets: [
      "Room attendants",
      "Public-area teams",
      "Supervisory support",
      "Residential & office cleaning",
      "Schools & government facilities",
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    alt: "Professional hotel housekeeping service",
  },
  {
    title: "Food & Beverage Staffing",
    description:
      "F&B personnel to support restaurants, hotels, banquets and events around your operation.",
    bullets: [
      "Waiters & waitresses",
      "Restaurant service",
      "Banquet staff",
      "Bar support",
      "Event personnel",
    ],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    alt: "Restaurant food and beverage service",
  },
  {
    title: "Kitchen & Stewarding",
    description:
      "Kitchen support personnel for food preparation, stewarding and smooth daily operations.",
    bullets: ["Kitchen stewards", "Commis chefs", "Culinary support"],
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    alt: "Professional commercial kitchen",
  },
  {
    title: "Pool & Leisure Services",
    description:
      "Pool and recreation personnel for hospitality and leisure environments with agreed schedules.",
    bullets: [
      "Pool lifeguards",
      "Beach lifeguards",
      "Recreation attendants",
    ],
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury resort pool and leisure area",
  },
  {
    title: "Deep Cleaning Services",
    description:
      "Deep cleaning arranged around your property's scope, tasks, materials, equipment and schedule.",
    bullets: [
      "Commercial buildings",
      "Residential properties",
      "Villas",
      "Restaurants",
    ],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    alt: "Professional deep cleaning service",
  },
];

export default function Home() {
  // Container refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);

  // Scroll Progress Hooks
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: featureScroll } = useScroll({
    target: featureRef,
    offset: ["start end", "end start"],
  });

  // Smooth Reversible Scroll Transforms (hardware accelerated transform-gpu)
  const heroVideoY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const aboutImageScale = useTransform(aboutScroll, [0, 0.5, 1], [0.92, 1, 0.96]);
  const aboutTextY = useTransform(aboutScroll, [0, 0.5, 1], [25, 0, -15]);

  const cardLeftY = useTransform(featureScroll, [0, 0.5, 1], [35, 0, -15]);
  const cardRightY = useTransform(featureScroll, [0, 0.5, 1], [50, 0, -25]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Durrat Al Noor Hospitality & Cleaning Services",
    "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80",
    "telephone": "+971582774427",
    "email": "info@durratalnoor.ae",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Karama",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2487,
      "longitude": 55.3023
    },
    "url": "https://durratalnoor.ae",
    "priceRange": "$$",
    "areaServed": [
      { "@type": "City", "name": "Dubai" },
      { "@type": "Country", "name": "United Arab Emirates" }
    ],
    "description": "Hospitality staffing, housekeeping, food and beverage, kitchen support, pool and leisure staffing, and deep cleaning services in Dubai and across the UAE.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hospitality & Cleaning Services",
      "itemListElement": services.map((s, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.description
        },
        "position": idx + 1
      }))
    }
  };

  return (
    <div className="w-full overflow-x-clip scroll-smooth antialiased bg-white text-slate-900 selection:bg-[#DAB672] selection:text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section with Parallax Background */}
      <section
        ref={heroRef}
        aria-label="Hero Section"
        className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#0B192C] pb-16 pt-32 text-white md:pt-40"
      >
        <motion.div
          style={{ y: heroVideoY }}
          className="absolute inset-0 z-0 h-full w-full transform-gpu will-change-transform"
        >
          <div className="absolute inset-0 h-full w-full bg-[url('/images/hero-fallback.jpg')] bg-cover bg-center" />
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero-fallback.jpg"
            aria-label="Durrat Al Noor Hospitality background video"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          >
            <source src="/bg-video-2.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Kept original light level of overlay - untouched */}
        <div className="hero-overlay absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-[#0B192C]/80 via-[#0B192C]/70 to-[#0B192C]/90" />
        
        <motion.div
          style={{ opacity: heroOpacity }}
          className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex w-full flex-col justify-center transform-gpu"
        >
          <header className="max-w-4xl">
            <span className="eyebrow inline-block rounded-full bg-[#DAB672]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#DAB672] border border-[#DAB672]/30 backdrop-blur-sm">
              People. Service. Excellence.
            </span>
            <h1 className="mt-6 hero-title text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white leading-[1.15] drop-shadow-sm">
              Hospitality Staffing &amp; Cleaning Services in Dubai
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="/our-services/"
                className="gold-button inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#DAB672] px-8 py-4 text-slate-950 font-bold shadow-lg shadow-[#DAB672]/20 transition-all hover:bg-[#e0c082] hover:scale-[1.02] active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#DAB672] focus:ring-offset-2 focus:ring-offset-[#0B192C]"
                aria-label="Explore Our Services"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact-us/"
                className="gold-button inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-[#DAB672] bg-slate-900/40 backdrop-blur-md px-8 py-4 text-white font-bold transition-all hover:bg-[#DAB672] hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-[#DAB672] focus:ring-offset-2 focus:ring-offset-[#0B192C]"
                aria-label="Contact Us"
              >
                Contact Us
              </Link>
            </div>
          </header>
        </motion.div>
      </section>

      {/* About Section with Scroll-Driven Image Scale & Text Motion */}
      <section
        ref={aboutRef}
        aria-label="About Us"
        className="section py-20 md:py-28 bg-slate-50 text-slate-900 relative z-20 border-b border-slate-200/60"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content Column */}
            <motion.article
              style={{ y: aboutTextY }}
              className="lg:col-span-7 flex flex-col justify-center transform-gpu"
            >
              <p className="eyebrow text-xs uppercase tracking-widest text-[#B88E3E] font-extrabold">
                Hospitality Support Built Around Your Operation
              </p>
              <h2 className="heading mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Service shaped around your property.
              </h2>
              
              <p className="copy mt-6 text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                Thoughtful service starts with the right people.
              </p>
              
              <p className="copy mt-4 text-base sm:text-lg leading-relaxed text-slate-800">
                Durrat Al Noor Hospitality provides housekeeping, food and beverage staffing, kitchen and stewarding support, pool and leisure personnel, and deep cleaning services in Dubai and across the UAE. From daily operations to temporary staffing requirements, we help hotels, restaurants, businesses and residential clients find support suited to their needs.
              </p>

              <p className="copy mt-4 text-base sm:text-lg leading-relaxed text-slate-800">
                Every property has its own service standards, schedules and priorities. We take time to understand yours. Whether you need housekeeping personnel, restaurant service staff or deep cleaning for your building, our team works with you to define the required roles, scope and service arrangements.
              </p>

              <p className="copy mt-4 text-base sm:text-lg leading-relaxed text-slate-800">
                Based in Al Karama, Dubai, Durrat Al Noor Hospitality brings people and operational support together with a focus on clear communication, professional conduct and care.
              </p>

              <div className="mt-8">
                <Link
                  href="/about-us/"
                  className="inline-flex min-h-[48px] items-center gap-2 font-extrabold text-slate-900 underline decoration-[#DAB672] decoration-2 underline-offset-8 transition-colors hover:text-[#B88E3E] focus:outline-none focus:ring-2 focus:ring-[#DAB672] rounded-md px-1"
                >
                  Learn More About Us <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.article>

            {/* Right Image Column with Scroll Scaling */}
            <div className="lg:col-span-5 flex items-center">
              <motion.div
                style={{ scale: aboutImageScale }}
                className="relative min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] w-full overflow-hidden rounded-3xl shadow-xl hover-image transform-gpu ring-1 ring-slate-900/5"
              >
                <Image
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80"
                  alt="Hospitality property in Dubai"
                  fill
                  priority={true}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={85}
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section
        aria-label="Our Services Carousel"
        className="section py-20 md:py-28 bg-white text-slate-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-xs uppercase tracking-widest text-[#B88E3E] font-extrabold">
            Our Hospitality &amp; Cleaning Services
          </p>
          <h2 className="heading mt-3 max-w-4xl text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Practical support for people, properties and daily operations.
          </h2>
          <div className="mt-10">
            <ServiceCarousel services={services} />
          </div>
          <div className="mt-14 flex w-full justify-center">
            <Link
              href="/our-services/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-[#DAB672] bg-white px-8 py-3.5 font-bold text-slate-900 shadow-sm transition-all hover:bg-[#DAB672] hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-[#DAB672]"
            >
              Explore All Five Services <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section with Asynchronous Scroll Motion */}
      <section
        ref={featureRef}
        aria-label="Service Features and Approach"
        className="section py-20 md:py-28 bg-slate-50 text-slate-900 overflow-hidden border-t border-slate-200/60"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2">
          
          <motion.div
            style={{ y: cardLeftY }}
            className="card rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-sm flex flex-col justify-center transform-gpu"
          >
            <p className="eyebrow text-xs uppercase tracking-widest text-[#B88E3E] font-extrabold">
              Flexible Staffing Arrangements
            </p>
            <h2 className="heading mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Support that fits your schedule.
            </h2>
            <p className="copy mt-5 text-base sm:text-lg leading-relaxed text-slate-800">
              We offer casual staffing, full-time employment support and internship programmes for applicable roles. Tell us the personnel you need, the intended duration and your preferred schedule so we can discuss a suitable arrangement.
            </p>
          </motion.div>
          
          <motion.div
            style={{ y: cardRightY }}
            className="rounded-3xl bg-[#0B192C] p-8 sm:p-12 text-white shadow-xl flex flex-col justify-center transform-gpu ring-1 ring-white/10"
          >
            <p className="eyebrow text-xs uppercase tracking-widest text-[#DAB672] font-bold">
              A Clear Approach to Service
            </p>
            <ol className="mt-8 grid gap-6">
              {[
                [
                  "1. Understand your needs",
                  "We discuss your property, service priorities, staffing requirements and schedule.",
                ],
                [
                  "2. Agree the details",
                  "The scope, personnel, availability and pricing are confirmed before service begins.",
                ],
                [
                  "3. Coordinate the work",
                  "Our team stays in contact to support the agreed arrangements and discuss changing requirements.",
                ],
              ].map(([t, d]) => (
                <li key={t} className="border-b border-slate-800/80 pb-5 last:border-0 last:pb-0">
                  <h3 className="font-extrabold text-lg sm:text-xl text-white">{t}</h3>
                  <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-slate-300">
                    {d}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section
        aria-label="Contact Call to Action"
        className="section py-16 md:py-24 bg-white text-[#122136] border-t border-slate-200/80"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow text-xs uppercase tracking-widest text-[#B88E3E] font-extrabold">
              Looking for Hospitality or Cleaning Support?
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-[#122136] leading-tight">
              Tell us what you need and where you need it.
            </h2>
            <p className="mt-4 text-slate-800 font-semibold text-base sm:text-lg">
              We will review your enquiry and discuss the next steps.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 shrink-0">
            <Link
              href="/contact-us/"
              className="gold-button inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#DAB672] px-8 py-4 font-bold text-slate-950 shadow-md transition-all hover:bg-[#e0c082] hover:scale-[1.02] active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#DAB672]"
            >
              Discuss Your Requirements
            </Link>
            <a
              href="https://wa.me/971582774427"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-[#122136] px-8 py-4 font-bold text-[#122136] transition-all hover:bg-[#122136] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#122136]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}