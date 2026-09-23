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

  return (
    <div>
      <section className="relative flex min-h-[100dvh] min-h-screen w-full items-center justify-center overflow-hidden bg-[#0B192C] pb-12 pt-28 text-white md:pt-36">
        <div
          className="absolute inset-0 z-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2000&q=85)",
          }}
        />
        <div className="hero-overlay absolute inset-0 z-10 h-full w-full" />
        <div className="container relative z-20 flex w-full flex-col justify-center">
          <p className="eyebrow">Our Services</p>
          <h1 className="mt-4 hero-title">
            Hospitality &amp; Cleaning Services in Dubai and the UAE
          </h1>
          <div className="mt-8">
            <Link
              href="/contact-us/"
              className="gold-button inline-block rounded-full px-7 py-4 font-bold"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section"><Reveal>
        <div className="container">
          <div className="mb-10 max-w-4xl">
            <p className="eyebrow">Service Overview</p>
            <h2 className="heading mt-3">
              Practical support for people, properties and daily operations.
            </h2>
            <p className="copy mt-5">
              Durrat Al Noor Hospitality provides five core services to support
              people, properties and daily operations. Choose a service below
              to review the scope and request support.
            </p>
          </div>

          {data.map((service, index) => (
            <article
              id={`service-${index + 1}`}
              key={service.title}
              className={`scroll-mt-24 flex flex-col gap-10 border-b border-[#ded7ca] py-16 lg:items-center lg:gap-14 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="min-w-0 flex-1">
                <p className="eyebrow">0{index + 1}</p>
                <h2 className="mt-2 text-3xl font-black">{service.title}</h2>
                <p className="copy mt-4">{service.description}</p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-xl bg-white p-3 text-sm font-semibold shadow-sm"
                    >
                      <span
                        className="mr-2 text-[#DAB672]"
                        aria-hidden="true"
                      >
                        ➔
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact-us/"
                  className="gold-button mt-7 inline-block rounded-full px-6 py-3 font-bold"
                >
                  {service.button}
                </Link>
              </div>

              <div className="relative h-[300px] w-full overflow-hidden rounded-[28px] shadow-xl sm:h-[360px] lg:h-[420px] lg:w-[48%] lg:shrink-0 hover-image">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width:1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </Reveal></section>

      <section className="section bg-white"><Reveal>
        <div className="container">
          <h2 className="heading">Staffing Options</h2>
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
              <div className="card p-7" key={title}>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="copy mt-3 text-base">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal></section>

      <section className="section"><Reveal>
        <div className="container max-w-4xl">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 className="heading mt-3">
            Common questions about our services.
          </h2>

          <div className="mt-8 grid gap-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-[#e6dfd2] bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(open === index ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left font-bold hover:text-[#DAB672]"
                >
                  {faq.question}
                  <span className="text-2xl text-[#DAB672]">
                    {open === index ? "−" : "+"}
                  </span>
                </button>

                {open === index && (
                  <p className="px-5 pb-5 leading-7 text-[#405066]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal></section>

      <section className="section bg-[#0B192C] text-white"><Reveal>
        <div className="container flex flex-wrap items-center justify-between gap-5">
          <h2 className="text-3xl font-black">
            Ready to discuss your requirements?
          </h2>
          <div className="flex gap-3">
            <Link
              href="/contact-us/"
              className="gold-button rounded-full px-7 py-3 font-bold"
            >
              Request a Quote
            </Link>
            <a
              href="https://wa.me/971582774427"
              className="rounded-full border border-white/30 px-7 py-3 font-bold hover:border-[#DAB672] hover:text-[#DAB672]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </Reveal></section>
    </div>
  );
}
