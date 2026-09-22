"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

const links = [["Home", "/"], ["About Us", "/about-us/"], ["Our Services", "/our-services/"], ["Our Team", "/our-team/"]];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Logo = ({ mobile = false }: { mobile?: boolean }) => (
    <Image src="/logo.png" alt="Durrat Al Noor Hospitality Logo" width={mobile ? 160 : 190} height={mobile ? 50 : 60} priority={!mobile} className={mobile ? "h-10 w-auto object-contain" : "h-10 w-auto object-contain md:h-12"} />
  );

  return (
    <header className={["fixed inset-x-0 top-0 z-50 border-b transition-all duration-300", scrolled ? "border-[#122136] bg-white shadow-md" : "border-transparent bg-transparent"].join(" ")}>
      <div className="container flex h-[78px] items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Durrat Al Noor Hospitality home"><Logo /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href} className={["text-sm font-bold transition-colors", scrolled ? "text-[#122136] hover:text-[#0B192C]" : "text-white/95 hover:text-white"].join(" ")}>{label}</Link>)}
          <Link href="/contact-us/" className="gold-button rounded-full px-5 py-2.5 text-sm font-bold">Contact Us</Link>
        </nav>
        <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)} className={["rounded-xl border p-2 lg:hidden", scrolled ? "border-[#122136]/20 text-[#122136]" : "border-white/30 text-white"].join(" ")}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <><button type="button" aria-label="Close navigation overlay" className="fixed inset-0 top-[78px] bg-black/40 lg:hidden" onClick={() => setOpen(false)} /><aside className="fixed left-0 top-0 z-[60] h-screen w-[min(86vw,360px)] bg-[#0a192f] shadow-2xl lg:hidden"><div className="flex h-[78px] items-center justify-between border-b border-white/10 px-5"><Logo mobile /><button type="button" aria-label="Close navigation" onClick={() => setOpen(false)} className="rounded-lg p-2 text-white"><X size={22} /></button></div><nav className="px-5 py-4" aria-label="Mobile navigation">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="flex items-center justify-between border-b border-white/10 py-4 font-bold text-white">{label}<ChevronRight className="text-[#d4af37]" size={18} /></Link>)}<Link onClick={() => setOpen(false)} href="/contact-us/" className="mt-5 block rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#E6C280] px-5 py-3 text-center font-bold text-[#122136] shadow-md">Contact Us</Link></nav></aside></>}
    </header>
  );
}