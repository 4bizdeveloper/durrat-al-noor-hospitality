"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Our Services", href: "/our-services/" },
  { label: "Our Team", href: "/our-team/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll gracefully when mobile menu is open without scroll displacement
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Schema Markup for Structural SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://durratalnoor.com/#organization",
                "name": "Durrat Al Noor Hospitality",
                "url": "https://durratalnoor.com",
                "logo": "https://durratalnoor.com/logo.png"
              },
              {
                "@type": "SiteNavigationElement",
                "@id": "https://durratalnoor.com/#navigation",
                "name": "Main Navigation",
                "hasPart": NAV_LINKS.map((link) => ({
                  "@type": "WebPage",
                  "name": link.label,
                  "url": `https://durratalnoor.com${link.href}`
                }))
              }
            ]
          })
        }}
      />

      <header
        className={[
          "fixed inset-x-0 top-0 z-40 transition-colors duration-300 ease-out",
          scrolled
            ? "border-b border-[#DAB672] bg-white/95 shadow-md backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        ].join(" ")}
      >
        <div className="container mx-auto flex h-[58px] items-center justify-between px-4 sm:h-[62px] sm:px-6 lg:h-[68px] lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Durrat Al Noor Hospitality home"
          >
            <Image
              src="/logo.png"
              alt="Durrat Al Noor Hospitality Logo"
              width={180}
              height={50}
              priority
              className="h-8 w-auto max-w-[150px] object-contain sm:h-[38px] sm:max-w-[175px] lg:h-[42px] lg:max-w-[190px]"
              sizes="(max-width: 640px) 150px, (max-width: 1024px) 175px, 190px"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.filter((link) => link.href !== "/contact-us/").map(
              ({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={[
                    "relative text-sm font-semibold tracking-wide transition-colors duration-200 py-1.5",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#DAB672] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full",
                    scrolled
                      ? "text-[#0F172A] hover:text-[#B8860B]"
                      : "text-white hover:text-[#DAB672]"
                  ].join(" ")}
                >
                  {label}
                </Link>
              )
            )}
            <Link
              href="/contact-us/"
              className="gold-button transform rounded-full bg-gradient-to-r from-[#DAB672] to-[#B8860B] px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#DAB672] focus:ring-offset-2"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile/Tablet Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={[
              "rounded-xl border p-2.5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#DAB672] lg:hidden",
              scrolled
                ? "border-[#0F172A]/20 text-[#0F172A] hover:bg-slate-100"
                : "border-white/30 text-white hover:bg-white/10"
            ].join(" ")}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile & Tablet Drawer rendered via Portal outside header context */}
      {mounted &&
        createPortal(
          <div
            className={[
              "fixed inset-0 z-[99999] lg:hidden transition-opacity duration-300",
              open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
            ].join(" ")}
          >
            {/* Backdrop overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Flyout Sidebar from Right */}
            <aside
              className={[
                "absolute right-0 top-0 h-full w-[min(86vw,360px)] transform bg-[#0A192F] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col overflow-y-auto overscroll-contain",
                open ? "translate-x-0" : "translate-x-full"
              ].join(" ")}
              aria-label="Mobile navigation menu"
            >
              {/* Drawer Header */}
              <div className="flex h-[58px] items-center justify-between border-b border-[#DAB672]/30 px-5 sm:h-[62px]">
                <Image
                  src="/logo.png"
                  alt="Durrat Al Noor Hospitality Logo"
                  width={150}
                  height={42}
                  className="h-7 w-auto object-contain"
                  sizes="150px"
                />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-white hover:bg-white/10 hover:text-[#DAB672] focus:outline-none focus:ring-2 focus:ring-[#DAB672]"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="px-5 py-4" aria-label="Mobile Navigation Links">
                {NAV_LINKS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-white/10 py-4 text-base font-semibold text-slate-100 transition-colors duration-200 hover:text-[#DAB672]"
                  >
                    <span>{label}</span>
                    <ChevronRight
                      size={18}
                      className="text-[#DAB672] transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                ))}
              </nav>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}