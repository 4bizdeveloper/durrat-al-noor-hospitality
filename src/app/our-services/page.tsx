"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useState } from "react";

type Service = {
  title: string;
  description: string;
  bullets: string[];
  button: string;
  image: string;
  imageAlt: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const data: Service[] = [
  {
    title: "Housekeeping Services",
    description:
      "Our housekeeping support covers hospitality and property environments where reliable personnel and clear service arrangements are required.",
    bullets: [
      "Room attendants",
      "Public-area attendants",
      "Supervisory",
      "Residential/office",
      "Government",
      "School cleaning",
    ],
    button: "Enquire About Housekeeping",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Professional hotel room housekeeping service",
  },
  {
    title: "Food & Beverage Staffing",
    description:
      "We provide F&B personnel to support restaurants, hotels, banquets and events according to your operational requirements.",
    bullets: [
      "Waiters/Waitresses",
      "Restaurant service",
      "Banquet staff",
      "Bar support",
      "Event personnel",
    ],
    button: "Enquire About F&B Staffing",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Elegant restaurant service and hospitality staff",
  },
  {
    title: "Kitchen & Stewarding",
    description:
      "Kitchen support personnel help maintain smooth daily operations across food preparation and stewarding environments.",
    bullets: ["Kitchen stewards", "Commis chefs", "Culinary support"],
    button: "Enquire About Kitchen Support",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Professional commercial kitchen staff",
  },
  {
    title: "Pool & Leisure Services",
    description:
      "Pool and leisure personnel support hospitality and recreation environments with the required roles and agreed schedules.",
    bullets: ["Pool lifeguards", "Beach lifeguards", "Recreation attendants"],
    button: "Enquire About Pool & Leisure Staffing",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Luxury resort pool and leisure environment",
  },
  {
    title: "Deep Cleaning Services",
    description:
      "Deep cleaning is arranged around your property's requirements, scope, tasks, materials, equipment and schedule.",
    bullets: ["Commercial", "Residential", "Villas", "Restaurants"],
    button: "Request a Deep Cleaning Quote",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Professional deep cleaning service in a commercial property",
  },
];

const faqs: FAQ[] = [
  {
    question: "What hospitality staffing services do you provide?",
    answer:
      "We support housekeeping, food and beverage, kitchen and stewarding, pool and leisure, and other applicable hospitality staffing requirements.",
  },
  {
    question: "Do you provide housekeeping services for residences and offices?",
    answer:
      "Yes. Housekeeping and cleaning support can be arranged for hotels, residences, offices, schools, government facilities and other agreed environments.",
  },
  {
    question: "Can I request temporary or casual staff?",
    answer:
      "Yes. Casual staffing is available for applicable roles and temporary operational requirements.",
  },
  {
    question: "Do you provide full-time employment support?",
    answer:
      "Yes. Full-time employment support can be discussed for applicable roles based on your requirements and agreed terms.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We are based in Al Karama, Dubai and support clients in Dubai and across the UAE, subject to the service requirements.",
  },
  {
    question: "How is deep cleaning quoted?",
    answer:
      "The scope, tasks, materials, equipment and schedule are discussed around your property's requirements before the quotation is agreed.",
  },
  {
    question: "How do I request a quotation?",
    answer:
      "Use the enquiry form on our Contact Us page or contact us by phone or WhatsApp to discuss your requirements.",
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);

  // JSON-LD Structured Data Schema for SEO, AEO & GEO Engine Parsing
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://durratalnoor.ae/#organization",
        name: "Durrat Al Noor Hospitality",
        url: "https://durratalnoor.ae",
        telephone: "+971582774427",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Al Karama",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Dubai",
          },
          {
            "@type": "Country",
            name: "United Arab Emirates",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "ItemList",
        itemListElement: data.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: {
              "@id": "https://durratalnoor.ae/#organization",
            },
            areaServed: "Dubai, UAE",
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="w-full bg-slate-50 text-slate-800 antialiased selection:bg-[#DEBC7A] selection:text-slate-950">
        {/* HERO SECTION */}
        <section className="relative flex w-full items-center justify-center overflow-hidden bg-[#0B192C] py-20 md:py-28 text-white">
          <Image
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2000&q=85"
            alt="Durrat Al Noor Hospitality Services Dubai"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent opacity-80" />
          
          <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-[#DEBC7A]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#DEBC7A] backdrop-blur-md border border-[#DEBC7A]/30">
                Our Services
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
                Hospitality &amp; Cleaning Services in Dubai and the UAE
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
                Reliable staffing and property support solutions engineered for hotels, restaurants, offices, and residential spaces across Dubai.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center justify-center rounded-full bg-[#DEBC7A] px-8 py-4 text-base font-bold text-slate-950 transition-all hover:bg-[#C5A361] hover:shadow-lg hover:shadow-[#DEBC7A]/25 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#DEBC7A] focus:ring-offset-2 focus:ring-offset-[#0B192C]"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="py-16 md:py-24">
          <Reveal>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-14 max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B89452]">
                  Service Overview
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
                  Practical support for people, properties and daily operations.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  Durrat Al Noor Hospitality provides five core services to support
                  people, properties and daily operations. Choose a service below
                  to review the scope and request support.
                </p>
              </div>

              <div className="space-y-16 lg:space-y-24">
                {data.map((service, index) => (
                  <article
                    id={`service-${index + 1}`}
                    key={service.title}
                    className={`scroll-mt-28 flex flex-col gap-8 rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 lg:p-12 shadow-sm transition-all hover:shadow-md lg:items-center lg:gap-12 ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-black text-[#B89452]">
                        0{index + 1}
                      </span>
                      <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base text-slate-600 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {service.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-center rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 border border-slate-100"
                          >
                            <span
                              className="mr-2.5 text-[#DEBC7A] font-bold"
                              aria-hidden="true"
                            >
                              ➔
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                        <Link
                          href="/contact-us/"
                          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#DEBC7A] hover:text-slate-950 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-slate-900"
                        >
                          {service.button}
                        </Link>
                      </div>
                    </div>

                    <div className="relative h-[260px] sm:h-[340px] lg:h-[400px] w-full overflow-hidden rounded-2xl shadow-md lg:w-[46%] lg:shrink-0">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 46vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* STAFFING OPTIONS */}
        <section className="py-16 md:py-24 bg-white border-y border-slate-200/60">
          <Reveal>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B89452]">
                  Solutions
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
                  Staffing Options
                </h2>
              </div>
              
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  [
                    "Casual Staffing",
                    "Personnel for temporary requirements, events and additional operational demand.",
                  ],
                  [
                    "Full-Time Employment Support",
                    "Staffing arrangements for ongoing roles and regular operations.",
                  ],
                  [
                    "Internship Programmes",
                    "Arrangements based on suitable roles, learning requirements and supervision.",
                  ],
                ].map(([title, description]) => (
                  <div
                    className="rounded-2xl border border-slate-100 bg-slate-50/80 p-8 transition-all hover:border-[#DEBC7A]/50 hover:bg-white hover:shadow-lg hover:shadow-[#DEBC7A]/10"
                    key={title}
                  >
                    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                    <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* FAQS SECTION */}
        <section className="py-16 md:py-24">
          <Reveal>
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B89452]">
                  Got Questions?
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="mt-3 text-slate-600">
                  Common questions about our hospitality and cleaning services in Dubai.
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = open === index;
                  return (
                    <div
                      key={faq.question}
                      className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-[#B89452] focus:outline-none"
                      >
                        <span className="pr-4 text-base sm:text-lg">{faq.question}</span>
                        <span className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#B89452] transition-transform duration-200">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-slate-600 leading-relaxed text-sm sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA FOOTER BANNER */}
        <section className="bg-[#0B192C] py-16 text-white">
          <Reveal>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Ready to discuss your requirements?
                  </h2>
                  <p className="mt-2 text-slate-300 text-sm sm:text-base">
                    Get in touch with our Dubai team today for custom staffing and cleaning arrangements.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center justify-center rounded-full bg-[#DEBC7A] px-7 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-[#C5A361] active:scale-[0.98]"
                  >
                    Request a Quote
                  </Link>
                  <a
                    href="https://wa.me/971582774427"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 px-7 py-3.5 text-sm font-bold text-white transition-all hover:border-[#DEBC7A] hover:text-[#DEBC7A] active:scale-[0.98]"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}