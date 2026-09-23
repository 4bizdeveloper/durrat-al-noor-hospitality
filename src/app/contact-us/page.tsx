"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Clock, Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      e.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  // Schema Markup for Search Engines, AI Engines (AEO) & Geo-location (GEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Durrat Al Noor Hospitality & Cleaning",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85",
    telePhone: "+971582774427",
    email: "info@durratalnoorhospitality.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "104, Crystal Building, Al Karama",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2487",
      longitude: "55.3023",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    url: "https://durratalnoorhospitality.com/contact",
    priceRange: "$$",
  };

  return (
    <div className="w-full bg-[#FAF9F6] text-[#0F172A] selection:bg-[#DAB672] selection:text-white">
      {/* Search Engine & AI Knowledge Graph Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - Sharp, High-Contrast & Clear Background */}
      <section className="relative flex w-full min-h-[420px] items-center justify-center overflow-hidden bg-[#0B192C] py-16 sm:py-20 lg:py-28 text-white">
        <div
          className="absolute inset-0 z-0 h-full w-full bg-cover bg-center transition-transform duration-1000 ease-out will-change-transform hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85')",
          }}
          aria-hidden="true"
        />
        {/* Crisp multi-stop dark overlay for crisp image visibility with high contrast readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B192C]/90 via-[#0B192C]/75 to-[#0B192C]/60" />

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-[#DAB672]/20 border border-[#DAB672]/40 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F3E5AB]">
              Contact Us
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
              Let Us Discuss Your Hospitality &amp; Cleaning Requirements
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg lg:text-xl font-normal leading-relaxed">
              Partner with Dubai’s leading provider for professional housekeeping, hospitality staffing, and specialized cleaning solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 lg:py-24" id="contact-details">
        <Reveal>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-14 max-w-3xl">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B38738]">
                How We Can Help
              </span>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B192C] sm:text-3xl lg:text-4xl">
                Tell us about your property and requirements.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#334155] sm:text-lg font-normal">
                Looking for housekeeping, hospitality staffing, or deep cleaning services in Dubai or anywhere across the UAE? Share your project details, staff count required, or cleaning schedule, and our team will prepare a custom proposal tailored to your needs.
              </p>
            </div>

            <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-start">
              {/* Contact Info Cards */}
              <div className="grid gap-6 lg:col-span-5">
                <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#DAB672] hover:shadow-lg sm:p-7">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B192C]">Call or WhatsApp</h3>
                  <a
                    href="tel:+971582774427"
                    className="mt-3 inline-flex items-center gap-3.5 text-base sm:text-lg font-bold text-[#0F172A] transition-colors hover:text-[#B38738]"
                    aria-label="Call or WhatsApp us at +971 58 277 4427"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DAB672]/15 text-[#B38738] transition-colors group-hover:bg-[#DAB672] group-hover:text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span>+971 58 277 4427</span>
                  </a>
                </div>

                <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#DAB672] hover:shadow-lg sm:p-7">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B192C]">Email Us</h3>
                  <a
                    href="mailto:info@durratalnoorhospitality.com"
                    className="mt-3 inline-flex items-center gap-3.5 text-base sm:text-lg font-bold text-[#0F172A] break-all transition-colors hover:text-[#B38738]"
                    aria-label="Email info@durratalnoorhospitality.com"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DAB672]/15 text-[#B38738] transition-colors group-hover:bg-[#DAB672] group-hover:text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>info@durratalnoorhospitality.com</span>
                  </a>
                </div>

                <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#DAB672] hover:shadow-lg sm:p-7">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B192C]">Our Office</h3>
                  <div className="mt-4 flex items-start gap-3.5 text-sm sm:text-base text-[#334155]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DAB672]/15 text-[#B38738] transition-colors group-hover:bg-[#DAB672] group-hover:text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <address className="not-italic pt-1 font-medium leading-normal text-[#1E293B]">
                      104, Crystal Building, Al Karama, Dubai, United Arab Emirates
                    </address>
                  </div>
                  <div className="mt-4 flex items-center gap-3.5 text-sm sm:text-base text-[#334155]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DAB672]/15 text-[#B38738]">
                      <Clock className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-[#1E293B]">Monday to Friday, 9:00 AM–6:00 PM (UAE Time)</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8 md:p-10 lg:col-span-7">
                <h3 className="text-2xl font-bold tracking-tight text-[#0B192C] sm:text-3xl">
                  Request a Quote
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#475569]">
                  Please complete the form below. Fields marked with an asterisk (<span className="text-rose-600 font-bold">*</span>) are required.
                </p>

                <form onSubmit={submit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C]">
                      <span>Full Name <span className="text-rose-600">*</span></span>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="h-12 rounded-xl border border-slate-300 bg-[#FAF9F6] px-4 font-normal text-[#0F172A] placeholder-slate-400 transition-all focus:border-[#DAB672] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DAB672]/40"
                      />
                    </label>

                    <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C]">
                      <span>Company Name</span>
                      <input
                        type="text"
                        placeholder="Company / Property Name"
                        className="h-12 rounded-xl border border-slate-300 bg-[#FAF9F6] px-4 font-normal text-[#0F172A] placeholder-slate-400 transition-all focus:border-[#DAB672] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DAB672]/40"
                      />
                    </label>

                    <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C]">
                      <span>Email Address <span className="text-rose-600">*</span></span>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        className="h-12 rounded-xl border border-slate-300 bg-[#FAF9F6] px-4 font-normal text-[#0F172A] placeholder-slate-400 transition-all focus:border-[#DAB672] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DAB672]/40"
                      />
                    </label>

                    <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C]">
                      <span>Phone Number <span className="text-rose-600">*</span></span>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 000 0000"
                        className="h-12 rounded-xl border border-slate-300 bg-[#FAF9F6] px-4 font-normal text-[#0F172A] placeholder-slate-400 transition-all focus:border-[#DAB672] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DAB672]/40"
                      />
                    </label>

                    <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C]">
                      <span>Service Location <span className="text-rose-600">*</span></span>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Downtown Dubai / Abu Dhabi"
                        className="h-12 rounded-xl border border-slate-300 bg-[#FAF9F6] px-4 font-normal text-[#0F172A] placeholder-slate-400 transition-all focus:border-[#DAB672] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DAB672]/40"
                      />
                    </label>

                    <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C]">
                      <span>Preferred Start Date</span>
                      <input
                        type="date"
                        className="h-12 rounded-xl border border-slate-300 bg-[#FAF9F6] px-4 font-normal text-[#0F172A] transition-all focus:border-[#DAB672] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DAB672]/40"
                      />
                    </label>

                    <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C] sm:col-span-2">
                      <span>Service Required <span className="text-rose-600">*</span></span>
                      <select
                        required
                        className="h-12 rounded-xl border border-slate-300 bg-[#FAF9F6] px-4 font-normal text-[#0F172A] transition-all focus:border-[#DAB672] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DAB672]/40"
                      >
                        <option value="">Select a service category</option>
                        <option value="Housekeeping">Housekeeping Services</option>
                        <option value="F&B">F&amp;B Staffing</option>
                        <option value="Kitchen">Kitchen Support</option>
                        <option value="Pool">Pool Maintenance</option>
                        <option value="Deep Cleaning">Deep Cleaning</option>
                        <option value="Multiple">Multiple Services</option>
                        <option value="Other">Other Customized Solutions</option>
                      </select>
                    </label>

                    <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C] sm:col-span-2">
                      <span>Your Requirements <span className="text-rose-600">*</span></span>
                      <textarea
                        required
                        rows={5}
                        placeholder="Describe your property size, frequency, and specific requirements..."
                        className="rounded-xl border border-slate-300 bg-[#FAF9F6] p-4 font-normal text-[#0F172A] placeholder-slate-400 transition-all focus:border-[#DAB672] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DAB672]/40"
                      />
                    </label>
                  </div>

                  <p className="text-xs leading-relaxed text-[#475569]">
                    We respect your privacy and use your contact information exclusively to evaluate and fulfill your enquiry. Read our{" "}
                    <Link
                      href="/privacy-policy/"
                      className="font-bold text-[#0B192C] underline decoration-[#DAB672] underline-offset-2 transition-colors hover:text-[#B38738]"
                    >
                      Privacy Policy
                    </Link>{" "}
                    for full details.
                  </p>

                  {status === "success" && (
                    <div
                      role="status"
                      className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-900 border border-emerald-300"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                      <span>Thank you! Your enquiry has been received. Our team will get in touch with you shortly.</span>
                    </div>
                  )}

                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex items-center gap-3 rounded-xl bg-rose-50 p-4 text-sm font-semibold text-rose-900 border border-rose-300"
                    >
                      <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />
                      <span>Something went wrong. Please try submitting again or contact us directly via Phone/WhatsApp.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#DAB672] px-8 py-4 text-base font-bold text-[#0B192C] shadow-md transition-all duration-300 hover:bg-[#c9a35e] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#DAB672] focus:ring-offset-2 active:scale-[0.98]"
                  >
                    <span>Send Enquiry</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}