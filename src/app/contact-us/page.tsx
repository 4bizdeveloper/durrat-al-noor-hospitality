"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Clock, Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  // Auto-hide success or error status messages after 5 seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  // Restrict phone input to numbers, leading '+', spaces, and dashes
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Allows digits, optional leading +, spaces, and hyphens
    const filteredVal = val.replace(/[^\d+ -]/g, "");
    setPhone(filteredVal);
  };

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get("fullName"),
      companyName: formData.get("companyName"),
      email: formData.get("email"),
      phone: phone, // using validated numeric state
      location: formData.get("location"),
      startDate: formData.get("startDate"),
      service: formData.get("service"),
      requirements: formData.get("requirements"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (res.ok) {
        form.reset();
        setPhone("");
        setStatus("success");
      } else {
        const detail = data?.error || data?.details || "Failed to send email message.";
        setErrorMessage(detail);
        setStatus("error");
      }
    } catch (err: unknown) {
      const errDetail = err instanceof Error ? err.message : String(err);
      setErrorMessage(`Network error: ${errDetail}`);
      setStatus("error");
    }
  }

  // Schema Markup for Search Engines, AI Engines (AEO) & Geo-location (GEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Durrat Al Noor Hospitality & Cleaning",
    image: "/hsopitality-uae.webp",
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
      <title>Contact Durrat Al Noor Hospitality | Al Karama, Dubai</title>
      <meta
        name="description"
        content="Contact Durrat Al Noor Hospitality in Al Karama, Dubai. Call +971 58 277 4427 for hospitality staffing, housekeeping and deep cleaning enquiries."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative flex w-full min-h-screen items-center justify-center overflow-hidden bg-[#0B192C] pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28 text-white">
        <div
          className="absolute inset-0 z-0 h-full w-full bg-cover bg-center transition-transform duration-1000 ease-out will-change-transform hover:scale-105"
          style={{
            backgroundImage: "url('/hsopitality-uae.webp')",
          }}
          aria-hidden="true"
        />
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

            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold text-[#0B192C] shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#E5C68D] active:scale-95"
                style={{
                  background: "linear-gradient(90deg, #E5C68D 0%, #FDF2E2 100%)",
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 lg:py-24" id="contact-details">
        <Reveal>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
            
            {/* Header Description */}
            <div className="max-w-3xl">
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

            {/* Top Full-Width Section: 2 Columns */}
            <div className="grid gap-6 md:grid-cols-2 items-stretch">
              
              {/* Column 1: Call/WhatsApp & Email combined vertically */}
              <div className="group flex flex-col justify-center gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#DAB672] hover:shadow-lg sm:p-7">
                
                {/* Call or WhatsApp */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B192C]">Call or WhatsApp</h3>
                  <a
                    href="tel:+971582774427"
                    className="mt-2 inline-flex items-center gap-3 text-sm sm:text-base font-bold text-[#0F172A] transition-colors hover:text-[#B38738]"
                    aria-label="Call or WhatsApp us at +971 58 277 4427"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DAB672]/15 text-[#B38738] transition-colors group-hover:bg-[#DAB672] group-hover:text-white">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>+971 58 277 4427</span>
                  </a>
                </div>

                <hr className="border-slate-100" />

                {/* Email Us */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B192C]">Email Us</h3>
                  <a
                    href="mailto:info@durratalnoorhospitality.com"
                    className="mt-2 inline-flex items-center gap-3 text-sm sm:text-base font-bold text-[#0F172A] break-all transition-colors hover:text-[#B38738]"
                    aria-label="Email info@durratalnoorhospitality.com"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DAB672]/15 text-[#B38738] transition-colors group-hover:bg-[#DAB672] group-hover:text-white">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span>info@durratalnoorhospitality.com</span>
                  </a>
                </div>

              </div>

              {/* Column 2: Our Office */}
              <div className="group flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#DAB672] hover:shadow-lg sm:p-7">
                <h3 className="text-base sm:text-lg font-bold text-[#0B192C]">Our Office</h3>
                <div className="mt-3 flex items-start gap-3 text-sm sm:text-base text-[#334155]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DAB672]/15 text-[#B38738] transition-colors group-hover:bg-[#DAB672] group-hover:text-white">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <address className="not-italic pt-1 font-medium leading-normal text-[#1E293B]">
                    104, Crystal Building, Al Karama, Dubai, United Arab Emirates
                  </address>
                </div>
                <div className="mt-3 flex items-center gap-3 text-sm sm:text-base text-[#334155]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DAB672]/15 text-[#B38738]">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span className="font-medium text-[#1E293B]">Monday to Friday, 9:00 AM–6:00 PM (UAE Time)</span>
                </div>
              </div>

            </div>

            {/* Bottom Full-Width Section: Inquiry Form */}
            <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8 md:p-10">
              <h3 className="text-2xl font-bold tracking-tight text-[#0B192C] sm:text-3xl">
                Request a Quote
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#475569]">
                Please complete the form below. Fields marked with an asterisk (<span className="text-rose-600 font-bold">*</span>) are required.
              </p>

              <form onSubmit={submit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2 items-stretch">
                  <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C]">
                    <span>Full Name <span className="text-rose-600">*</span></span>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="John Doe"
                      className="h-12 rounded-xl border border-slate-300 bg-[#FAF9F6] px-4 font-normal text-[#0F172A] placeholder-slate-400 transition-all focus:border-[#DAB672] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DAB672]/40"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C]">
                    <span>Company Name</span>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company / Property Name"
                      className="h-12 rounded-xl border border-slate-300 bg-[#FAF9F6] px-4 font-normal text-[#0F172A] placeholder-slate-400 transition-all focus:border-[#DAB672] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DAB672]/40"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C]">
                    <span>Email Address <span className="text-rose-600">*</span></span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="h-12 rounded-xl border border-slate-300 bg-[#FAF9F6] px-4 font-normal text-[#0F172A] placeholder-slate-400 transition-all focus:border-[#DAB672] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DAB672]/40"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C]">
                    <span>Phone Number <span className="text-rose-600">*</span></span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="+971 50 000 0000"
                      className="h-12 rounded-xl border border-slate-300 bg-[#FAF9F6] px-4 font-normal text-[#0F172A] placeholder-slate-400 transition-all focus:border-[#DAB672] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DAB672]/40"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C]">
                    <span>Service Location <span className="text-rose-600">*</span></span>
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="e.g. Downtown Dubai / Abu Dhabi"
                      className="h-12 rounded-xl border border-slate-300 bg-[#FAF9F6] px-4 font-normal text-[#0F172A] placeholder-slate-400 transition-all focus:border-[#DAB672] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DAB672]/40"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C]">
                    <span>Preferred Start Date</span>
                    <input
                      type="date"
                      name="startDate"
                      className="h-12 rounded-xl border border-slate-300 bg-[#FAF9F6] px-4 font-normal text-[#0F172A] transition-all focus:border-[#DAB672] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#DAB672]/40"
                    />
                  </label>

                  {/* Centered vertically to match full height of Your Requirements */}
                  <div className="flex flex-col justify-center sm:col-span-1">
                    <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C]">
                      <span>Service Required <span className="text-rose-600">*</span></span>
                      <select
                        name="service"
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
                  </div>

                  <label className="flex flex-col gap-2 text-sm font-bold text-[#0B192C] sm:col-span-1">
                    <span>Your Requirements <span className="text-rose-600">*</span></span>
                    <textarea
                      name="requirements"
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
                    className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-900 border border-emerald-300 animate-in fade-in duration-300"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                    <span>Thank you! Your enquiry has been received. Our team will get in touch with you shortly.</span>
                  </div>
                )}

                {status === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-xl bg-rose-50 p-4 text-sm font-semibold text-rose-900 border border-rose-300 break-words animate-in fade-in duration-300"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0 text-rose-600 mt-0.5" />
                    <div>
                      <p className="font-bold">Error Sending Enquiry</p>
                      <p className="mt-1 text-xs font-mono font-normal opacity-90">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#DAB672] px-8 py-4 text-base font-bold text-[#0B192C] shadow-md transition-all duration-300 hover:bg-[#c9a35e] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#DAB672] focus:ring-offset-2 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <span>Sending...</span>
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </Reveal>
      </section>
    </div>
  );
}