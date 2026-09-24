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
        className="section py-20 md:py-28 bg-slate-50 text-slate-900 overflow-hidden border-t border-slate-200/60"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-sm flex flex-col justify-center"
          >
            <p className="eyebrow flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C5E00] font-black">
              <Clock size={15} className="text-[#8C5E00]" />
              Flexible Staffing Arrangements
            </p>
            <p className="copy mt-5 text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
              We offer casual staffing, full-time employment support and internship programmes for applicable roles. Tell us the personnel you need, the intended duration and your preferred schedule so we can discuss a suitable arrangement.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="rounded-3xl bg-[#0B192C] p-8 sm:p-12 text-white shadow-xl flex flex-col justify-center ring-1 ring-white/10"
          >
            <p className="eyebrow flex items-center gap-2 text-xs uppercase tracking-widest text-[#F2C94C] font-extrabold">
              <ShieldCheck size={15} />
              A Clear Approach to Service
            </p>
            <motion.ol
              className="mt-8 grid gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                [
                  "Understand your needs",
                  "We discuss your property, service priorities, staffing requirements and schedule.",
                ],
                [
                  "Agree the details",
                  "The scope, personnel, availability and pricing are confirmed before service begins.",
                ],
                [
                  "Coordinate the work",
                  "Our team stays in contact to support the agreed arrangements and discuss changing requirements.",
                ],
              ].map(([t, d]) => (
                <motion.li
                  key={t}
                  variants={fadeInUp}
                  className="border-b border-slate-800/80 pb-5 last:border-0 last:pb-0"
                >
                  <h3 className="font-extrabold text-lg sm:text-xl text-white">
                    {t}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                    {d}
                  </p>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section
        aria-label="Contact Call to Action"
        className="section py-16 md:py-24 bg-white text-[#0B192C] border-t border-slate-200"
      >
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between gap-8 md:flex-row md:items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="max-w-2xl">
            <p className="eyebrow flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C5E00] font-black">
              <Phone size={15} />
              Looking for Hospitality or Cleaning Support?
            </p>
            <p className="mt-4 text-slate-700 font-bold text-sm sm:text-base">
              Tell us what you need and where you need it. We will review your enquiry and discuss the next steps.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-row flex-wrap items-center gap-3 sm:gap-4 shrink-0"
          >
            <Link
              href="/contact-us/"
              className="gold-button inline-flex items-center justify-center gap-2 rounded-full bg-[#DAB672] px-6 py-3.5 text-xs sm:text-sm font-extrabold text-slate-950 shadow-md transition-all hover:bg-[#e0c082] hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#DAB672]"
            >
              <span>Discuss Your Requirements</span>
              <ArrowUpRight size={15} />
            </Link>
            <a
              href="https://wa.me/971582774427"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0B192C] px-6 py-3.5 text-xs sm:text-sm font-extrabold text-[#0B192C] transition-all hover:bg-[#0B192C] hover:text-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
            >
              <span>WhatsApp Us</span>
              <MessageSquare size={15} />
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}