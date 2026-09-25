"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Utensils,
  ChefHat,
  Waves,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  ArrowUpRight,
  MessageSquare,
  Building2,
} from "lucide-react";

export type HomeService = {
  title: string;
  description: string;
  bullets: string[];
  button?: string;
  image: string;
  imageAlt?: string;
  icon: React.ElementType;
};

const services: HomeService[] = [
  {
    title: "Housekeeping Services",
    description:
      "Room attendants, public-area teams and supervisory support, alongside cleaning services for hotels, residences, offices, schools and government facilities.",
    bullets: [
      "Room attendants & public-area teams",
      "Supervisory & inspectorial support",
      "Hotels, residences, offices & schools",
      "Government facilities maintenance",
    ],
    button: "Explore Housekeeping",
    image:
      "/hose-keeping-service.webp",
    imageAlt: "Housekeeping services in Dubai",
    icon: Sparkles,
  },
  {
    title: "Food & Beverage Staffing",
    description:
      "Waiters, waitresses, banquet staff and bar and service support for restaurants, hotels and events.",
    bullets: [
      "Waiters & waitresses",
      "Banquet & event staff",
      "Bar & service support",
      "Restaurant & hotel staffing",
    ],
    button: "Explore F&B Staffing",
    image:
      "/food-and-beverage-staffing-service.webp",
    imageAlt: "Food and beverage staffing services in Dubai",
    icon: Utensils,
  },
  {
    title: "Kitchen & Stewarding",
    description:
      "Kitchen stewards, commis chefs and culinary support personnel to assist your kitchen operations.",
    bullets: [
      "Kitchen stewards",
      "Commis chefs",
      "Culinary support personnel",
      "Kitchen operation assistance",
    ],
    button: "Explore Kitchen Support",
    image:
      "/kitchen-stevarding-service.webp",
    imageAlt: "Kitchen and stewarding services in Dubai",
    icon: ChefHat,
  },
  {
    title: "Pool & Leisure Services",
    description:
      "Pool lifeguards, beach lifeguards and recreation attendants for hospitality and leisure environments.",
    bullets: [
      "Pool lifeguards",
      "Beach lifeguards",
      "Recreation attendants",
      "Leisure environment support",
    ],
    button: "Explore Pool & Leisure",
    image:
      "/pool-leisure-service.webp",
    imageAlt: "Pool and leisure staffing services in Dubai",
    icon: Waves,
  },
  {
    title: "Deep Cleaning Services",
    description:
      "Deep cleaning for commercial buildings, residential buildings, villas and restaurants, with the scope agreed around your property's requirements.",
    bullets: [
      "Commercial buildings",
      "Residential buildings & villas",
      "Restaurants & kitchens",
      "Custom agreed scope",
    ],
    button: "Explore Deep Cleaning",
    image:
      "/deep-cleaning-service.webp",
    imageAlt: "Deep cleaning services in Dubai",
    icon: ShieldCheck,
  },
];

// Animation variants (Entrance only - no disappearances)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden antialiased bg-white text-slate-900 selection:bg-[#DAB672] selection:text-slate-950">
      {/* HERO SECTION */}
      <section
        aria-label="Hero Section"
        className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#0B192C] pb-16 pt-32 text-white md:pt-40"
      >
        <div className="absolute inset-0 z-0 h-full w-full">
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
        </div>

        <div className="hero-overlay absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-[#0B192C]/85 via-[#0B192C]/75 to-[#0B192C]/95" />

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex w-full flex-col justify-center">
          <motion.header
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-[#DAB672]/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#F2C94C] border border-[#DAB672]/40 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#F2C94C]" />
                People. Service. Excellence.
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-6 hero-title text-3xl font-black tracking-tight sm:text-5xl md:text-6xl text-white leading-[1.15] drop-shadow-md"
            >
              Hospitality Staffing &amp; Cleaning Services in Dubai
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-row flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                href="/our-services/"
                className="gold-button inline-flex items-center justify-center gap-2 rounded-full bg-[#DAB672] px-5 py-3 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg shadow-[#DAB672]/20 transition-all hover:bg-[#e0c082] hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#DAB672] focus:ring-offset-2 focus:ring-offset-[#0B192C]"
                aria-label="Explore Our Services"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact-us/"
                className="gold-button inline-flex items-center justify-center gap-2 rounded-full border border-[#DAB672] bg-slate-950/60 backdrop-blur-md px-5 py-3 text-xs sm:text-sm font-extrabold text-white transition-all hover:bg-[#DAB672] hover:text-slate-950 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#DAB672] focus:ring-offset-2 focus:ring-offset-[#0B192C]"
                aria-label="Request a Quote"
              >
                <span>Request a Quote</span>
                <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </motion.header>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        aria-label="About Us"
        className="section py-20 md:py-28 bg-slate-50 text-slate-900 relative z-20 border-b border-slate-200/60"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <motion.article
              className="lg:col-span-7 flex flex-col justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="eyebrow flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C5E00] font-black"
              >
                <Building2 size={15} />
                Hospitality Support Built Around Your Operation
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="copy mt-6 text-lg sm:text-xl font-bold text-slate-950 leading-snug"
              >
                Thoughtful service starts with the right people.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="copy mt-4 text-sm sm:text-base leading-relaxed text-slate-700 font-medium"
              >
                Durrat Al Noor Hospitality provides housekeeping, food and beverage staffing, kitchen and stewarding support, pool and leisure personnel, and deep cleaning services in Dubai and across the UAE.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="copy mt-4 text-sm sm:text-base leading-relaxed text-slate-700 font-medium"
              >
                From daily operations to temporary staffing requirements, we help hotels, restaurants, businesses and residential clients find support suited to their needs.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="copy mt-4 text-sm sm:text-base leading-relaxed text-slate-700 font-medium"
              >
                Every property has its own service standards, schedules and priorities. We take time to understand yours.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="copy mt-4 text-sm sm:text-base leading-relaxed text-slate-700 font-medium"
              >
                Whether you need housekeeping personnel, restaurant service staff or deep cleaning for your building, our team works with you to define the required roles, scope and service arrangements.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="copy mt-4 text-sm sm:text-base leading-relaxed text-slate-700 font-medium flex items-center gap-2"
              >
                <MapPin size={16} className="text-[#8C5E00] shrink-0" />
                <span>
                  Based in <strong>Al Karama, Dubai</strong>, Durrat Al Noor Hospitality brings people and operational support together with a focus on clear communication, professional conduct and care.
                </span>
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-8">
                <Link
                  href="/about-us/"
                  className="group inline-flex min-h-[44px] items-center gap-2 font-black text-slate-950 underline decoration-[#DAB672] decoration-2 underline-offset-8 transition-colors hover:text-[#8C5E00] focus:outline-none focus:ring-2 focus:ring-[#DAB672] rounded-md px-1"
                >
                  <span>Learn More About Us &rarr;</span>
                </Link>
              </motion.div>
            </motion.article>

            <motion.div
              className="lg:col-span-5 flex items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={scaleIn}
            >
              <div className="relative min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-900/10 bg-slate-200">
                <Image
                  src="/hospitality-1.png"
                  alt="Durrat Al Noor Hospitality Dubai"
                  fill
                  priority={true}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={85}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        aria-label="Our Services"
        className="section py-20 md:py-28 bg-white text-slate-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="eyebrow text-xs uppercase tracking-widest text-[#8C5E00] font-black"
          >
            Our Hospitality &amp; Cleaning Services
          </motion.p>

          <motion.div
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {services.slice(0, 3).map((s) => {
              const IconComponent = s.icon;
              return (
                <motion.article
                  key={s.title}
                  variants={fadeInUp}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#DAB672] hover:shadow-2xl"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={s.image}
                        alt={s.imageAlt || s.title}
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/40 to-transparent" />
                      <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="absolute bottom-3.5 left-4 right-4">
                        <h3 className="text-lg font-black text-white transition-colors duration-200 group-hover:text-[#DAB672] drop-shadow-md">
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <p className="text-xs font-medium leading-relaxed text-slate-700 sm:text-sm">
                        {s.description}
                      </p>

                      <ul className="mt-5 space-y-2.5 text-xs font-semibold text-slate-900">
                        {s.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2.5">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#DAB672]/20 text-[#8C5E00]">
                              <CheckCircle2 size={12} strokeWidth={2.5} />
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          <motion.div
            className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {services.slice(3, 5).map((s) => {
              const IconComponent = s.icon;
              return (
                <motion.article
                  key={s.title}
                  variants={fadeInUp}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#DAB672] hover:shadow-2xl"
                >
                  <div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 md:aspect-[21/9]">
                      <Image
                        src={s.image}
                        alt={s.imageAlt || s.title}
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/40 to-transparent" />
                      <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="absolute bottom-4 left-5 right-5">
                        <h3 className="text-lg font-black text-white transition-colors duration-200 group-hover:text-[#DAB672] md:text-xl drop-shadow-md">
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <p className="text-xs font-medium leading-relaxed text-slate-700 sm:text-sm">
                        {s.description}
                      </p>

                      <ul className="mt-5 grid grid-cols-1 gap-2.5 text-xs font-semibold text-slate-900 sm:grid-cols-2">
                        {s.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2.5">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#DAB672]/20 text-[#8C5E00]">
                              <CheckCircle2 size={12} strokeWidth={2.5} />
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-10 text-center"
          >
            <Link
              href="/our-services/"
              className="inline-flex items-center gap-2 font-black text-slate-950 underline decoration-[#DAB672] decoration-2 underline-offset-8 transition-colors hover:text-[#8C5E00]"
            >
              <span>Explore All Five Services &rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

{/* FLEXIBLE STAFFING & SERVICE APPROACH SECTION */}
      <section
        aria-label="Service Features and Approach"
        className="section py-12 sm:py-16 md:py-24 bg-slate-50 text-slate-900 overflow-hidden border-t border-slate-200/60"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Flexible Staffing Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-[#DAB672]/60 hover:shadow-md"
          >
            <div>
              <p className="eyebrow inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#8C5E00] font-black">
                <Clock size={15} className="text-[#8C5E00] shrink-0" />
                <span>Flexible Staffing Arrangements</span>
              </p>
              
              <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-black text-slate-950 tracking-tight leading-snug">
                Tailored workforce solutions for every schedule
              </h3>

              <p className="copy mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 font-medium">
                We offer casual staffing, full-time employment support, and internship programmes for applicable roles. Tell us the personnel you need, the intended duration, and your preferred schedule so we can discuss a suitable arrangement tailored specifically to your operation.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-800">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DAB672]/20 text-[#8C5E00]">
                ✓
              </span>
              <span>Casual, Full-Time & Seasonal Coverage</span>
            </div>
          </motion.div>

          {/* Clear Approach Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0B192C] via-[#0F233D] to-[#081220] p-6 sm:p-8 md:p-10 lg:p-12 text-white shadow-xl flex flex-col justify-between ring-1 ring-white/10 relative overflow-hidden"
          >
            {/* Ambient Background Accent Light */}
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#DAB672]/10 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <p className="eyebrow inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#F2C94C] font-extrabold">
                <ShieldCheck size={15} className="shrink-0 text-[#F2C94C]" />
                <span>A Clear Approach to Service</span>
              </p>

              <motion.ol
                className="mt-6 sm:mt-8 grid gap-5 sm:gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {[
                  [
                    "01. Understand your needs",
                    "We discuss your property, service priorities, staffing requirements, and schedule.",
                  ],
                  [
                    "02. Agree the details",
                    "The scope, personnel, availability, and pricing are confirmed before service begins.",
                  ],
                  [
                    "03. Coordinate the work",
                    "Our team stays in contact to support the agreed arrangements and discuss changing requirements.",
                  ],
                ].map(([t, d]) => (
                  <motion.li
                    key={t}
                    variants={fadeInUp}
                    className="border-b border-slate-800/80 pb-4 sm:pb-5 last:border-0 last:pb-0"
                  >
                    <h4 className="font-black text-base sm:text-lg md:text-xl text-white tracking-tight">
                      {t}
                    </h4>
                    <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
                      {d}
                    </p>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </motion.div>
        </div>
      </section>

{/* CALL TO ACTION SECTION */}
      <section
        aria-label="Contact Call to Action"
        className="section relative py-12 sm:py-16 lg:py-20 bg-slate-50 overflow-hidden border-t border-slate-200/80"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0B192C] via-[#0F233D] to-[#081220] p-6 sm:p-10 md:p-12 lg:p-14 shadow-2xl ring-1 ring-white/15"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Ambient Background Lights & Visual Accents */}
            <div className="absolute -top-20 -right-20 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-[#DAB672]/20 blur-2xl sm:blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-[#DAB672]/10 blur-2xl sm:blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#DAB672_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px] opacity-10 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
              {/* Text Content */}
              <motion.div variants={fadeInUp} className="max-w-2xl w-full">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#DAB672]/15 px-3.5 py-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest text-[#F2C94C] border border-[#DAB672]/30 backdrop-blur-md">
                  <Phone className="h-3.5 w-3.5 text-[#F2C94C] shrink-0" />
                  <span>Looking for Hospitality or Cleaning Support?</span>
                </div>

                <h2 className="mt-4 sm:mt-5 text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
                  Ready to Elevate Your Service Operations?
                </h2>

                <p className="mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed text-slate-300 font-medium max-w-xl mx-auto lg:mx-0">
                  Tell us what you need and where you need it. We will review your enquiry and discuss the next steps.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full lg:w-auto shrink-0"
              >
                {/* Discuss Requirements Button */}
                <Link
                  href="/contact-us/"
                  className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 rounded-full bg-[#DAB672] px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg shadow-[#DAB672]/20 transition-all duration-300 hover:bg-[#e0c082] hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#DAB672] w-full sm:w-auto"
                >
                  <Building2 className="h-4 w-4 text-slate-950 shrink-0" />
                  <span className="whitespace-nowrap">Discuss Your Requirements</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </Link>

                {/* WhatsApp Button (Updated to Gold styling) */}
                <a
                  href="https://wa.me/971582774427"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 rounded-full bg-[#DAB672] px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg shadow-[#DAB672]/20 transition-all duration-300 hover:bg-[#e0c082] hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#DAB672] w-full sm:w-auto"
                >
                  <svg
                    className="h-4.5 w-4.5 sm:h-5 sm:w-5 fill-slate-950 transition-transform duration-300 group-hover:rotate-12 shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.454h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.174-1.236-6.158-3.48-8.402" />
                  </svg>
                  <span className="whitespace-nowrap">WhatsApp Us</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}