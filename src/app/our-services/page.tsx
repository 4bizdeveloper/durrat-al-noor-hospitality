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
    image: "/hose-keeping-service.webp",
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
    image: "/food-and-beverage-staffing-service.webp",
    imageAlt: "Elegant restaurant service and hospitality staff",
  },
  {
    title: "Kitchen & Stewarding",
    description:
      "Kitchen support personnel help maintain smooth daily operations across food preparation and stewarding environments.",
    bullets: ["Kitchen stewards", "Commis chefs", "Culinary support"],
    button: "Enquire About Kitchen Support",
    image: "/kitchen-stevarding-service.webp",
    imageAlt: "Professional commercial kitchen staff",
  },
  {
    title: "Pool & Leisure Services",
    description:
      "Pool and leisure personnel support hospitality and recreation environments with the required roles and agreed schedules.",
    bullets: ["Pool lifeguards", "Beach lifeguards", "Recreation attendants"],
    button: "Enquire About Pool & Leisure Staffing",
    image: "/pool-leisure-service.webp",
    imageAlt: "Luxury resort pool and leisure environment",
  },
  {
    title: "Deep Cleaning Services",
    description:
      "Deep cleaning is arranged around your property's requirements, scope, tasks, materials, equipment and schedule.",
    bullets: ["Commercial", "Residential", "Villas", "Restaurants"],
    button: "Request a Deep Cleaning Quote",
    image: "/deep-cleaning-service.webp",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What hospitality staffing services do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support housekeeping, food and beverage, kitchen and stewarding, pool and leisure, and other applicable hospitality staffing requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide housekeeping services for residences and offices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Housekeeping and cleaning support can be arranged for hotels, residences, offices, schools, government facilities and other agreed environments.",
      },
    },
    {
      "@type": "Question",
      name: "Can I request temporary or casual staff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Casual staffing is available for applicable roles and temporary operational requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide full-time employment support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Full-time employment support can be discussed for applicable roles based on your requirements and agreed terms.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are based in Al Karama, Dubai and support clients in Dubai and across the UAE, subject to the service requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How is deep cleaning quoted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The scope, tasks, materials, equipment and schedule are discussed around your property's requirements before the quotation is agreed.",
      },
    },
    {
      "@type": "Question",
      name: "How do I request a quotation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the enquiry form on our Contact Us page or contact us by phone or WhatsApp to discuss your requirements.",
      },
    },
  ],
};

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);

  // JSON-LD Structured Data Schema for Search Engines, Voice Assistants (AEO) & Generative Search Engines (GEO)
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="w-full bg-[#FAF9F6] text-slate-900 antialiased selection:bg-[#DEBC7A] selection:text-slate-950">
        {/* HERO SECTION - FULL SCREEN RESPONSIVE */}
        <section className="relative flex min-h-[90vh] sm:min-h-screen w-full items-center justify-center overflow-hidden bg-[#0F2137] pt-28 pb-16 text-white sm:pt-32 sm:pb-20">
          <Image
            src="/hsopitality-uae.webp"
            alt="Durrat Al Noor Hospitality Services Dubai"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center brightness-[0.70] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2137]/90 via-[#0F2137]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2137] via-transparent to-transparent opacity-80" />

          <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#DEBC7A]/40 bg-[#DEBC7A]/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#EBD09C] shadow-sm backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#DEBC7A]" />
                Our Services
              </span>
              <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Hospitality &amp; Cleaning Services in Dubai and the UAE
              </h1>
              <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-100 sm:text-lg">
                Reliable staffing and property support solutions engineered for hotels, restaurants, offices, and residential spaces across Dubai.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center justify-center rounded-full bg-[#DEBC7A] px-8 py-4 text-base font-bold text-slate-950 transition-all duration-300 hover:bg-[#C5A361] hover:shadow-xl hover:shadow-[#DEBC7A]/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#DEBC7A] focus:ring-offset-2 focus:ring-offset-[#0F2137]"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES LIST SECTION */}
        <section className="py-16 sm:py-20 md:py-28">
          <Reveal>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-14 max-w-3xl sm:mb-20">
                <span className="text-xs font-black uppercase tracking-widest text-[#9A7432]">
                  Service Overview
                </span>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Practical support for people, properties and daily operations.
                </h2>
                <p className="mt-4 text-base font-normal leading-relaxed text-slate-800 sm:text-lg">
                  Durrat Al Noor Hospitality provides five core services to support
                  people, properties and daily operations. Choose a service below
                  to review the scope and request support.
                </p>
              </div>

              <div className="space-y-16 sm:space-y-20 lg:space-y-28">
                {data.map((service, index) => (
                  <article
                    id={`service-${index + 1}`}
                    key={service.title}
                    className={`flex flex-col gap-8 rounded-3xl border border-slate-200/90 bg-white p-6 scroll-mt-32 shadow-sm transition-all duration-300 hover:border-slate-300/80 hover:shadow-xl sm:p-8 lg:items-center lg:gap-12 lg:p-12 ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-black text-[#9A7432]">
                        0{index + 1}
                      </span>
                      <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base font-normal leading-relaxed text-slate-800 sm:text-lg">
                        {service.description}
                      </p>

                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {service.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-center rounded-xl border border-slate-200/80 bg-slate-100/90 px-4 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200/60"
                          >
                            <span
                              className="mr-3 text-base font-black text-[#9A7432]"
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
                          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#DEBC7A] hover:text-slate-950 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-slate-950"
                        >
                          {service.button}
                        </Link>
                      </div>
                    </div>

                    {/* IMAGE CONTAINER */}
                    <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md sm:h-[360px] lg:h-[420px] lg:w-[48%] lg:shrink-0">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        quality={90}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 48vw"
                        className="object-cover transition-transform duration-700 hover:scale-105 contrast-[1.05] saturate-[1.05]"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* STAFFING OPTIONS */}
        <section className="border-y border-slate-200/80 bg-white py-16 sm:py-20 md:py-28">
          <Reveal>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <span className="text-xs font-black uppercase tracking-widest text-[#9A7432]">
                  Solutions
                </span>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Staffing Options
                </h2>
              </div>

              <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-3">
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
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-8 transition-all duration-300 hover:border-[#DEBC7A]/80 hover:bg-white hover:shadow-xl hover:shadow-[#DEBC7A]/10"
                    key={title}
                  >
                    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                    <p className="mt-3 text-sm font-normal leading-relaxed text-slate-800 sm:text-base">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA BANNER SECTION */}
        <section className="bg-[#0F2137] py-16 text-white sm:py-20">
          <Reveal>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                    Ready to discuss your requirements?
                  </h2>
                  <p className="mt-2 text-base text-slate-100">
                    Get in touch with our Dubai team today for custom staffing and cleaning arrangements.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center justify-center rounded-full bg-[#DEBC7A] px-7 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-[#C5A361] hover:shadow-lg hover:shadow-[#DEBC7A]/20 active:scale-[0.98]"
                  >
                    Request a Quote
                  </Link>
                  <a
                    href="https://wa.me/971582774427"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-500 bg-slate-800/80 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-[#DEBC7A] hover:text-[#DEBC7A] active:scale-[0.98]"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FAQS SECTION */}
        <section className="py-16 sm:py-20 md:py-28">
          <Reveal>
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <span className="text-xs font-black uppercase tracking-widest text-[#9A7432]">
                  Got Questions?
                </span>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-3 text-base font-normal text-slate-800 sm:text-lg">
                  Common questions about our hospitality and cleaning services in Dubai.
                </p>
              </div>

              <div className="mt-10 space-y-4 sm:mt-12">
                {faqs.map((faq, index) => {
                  const isOpen = open === index;
                  return (
                    <div
                      key={faq.question}
                      className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-colors duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 transition-colors hover:text-[#9A7432] focus:outline-none sm:p-6"
                      >
                        <span className="pr-4 text-base leading-snug sm:text-lg">{faq.question}</span>
                        <span className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 font-black text-[#9A7432] transition-transform duration-200">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm font-normal leading-relaxed text-slate-800 sm:px-6 sm:pb-6 sm:text-base">
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
      </div>
    </>
  );
}