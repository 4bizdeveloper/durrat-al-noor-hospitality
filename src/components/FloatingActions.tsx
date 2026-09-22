import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col gap-4">
      <a aria-label="Call us" href="tel:+971582774427" className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#E6C280] text-[#122136] shadow-xl transition hover:-translate-y-1 hover:brightness-105">
        <span className="pulse-ring" />
        <span className="pulse-ring delay" />
        <Phone size={22} />
      </a>
      <a aria-label="WhatsApp us" href="https://wa.me/971582774427" target="_blank" rel="noreferrer" className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#E6C280] text-[#122136] shadow-xl transition hover:-translate-y-1 hover:brightness-105">
        <span className="pulse-ring" />
        <span className="pulse-ring delay" />
        <FaWhatsapp size={25} />
      </a>
    </div>
  );
}