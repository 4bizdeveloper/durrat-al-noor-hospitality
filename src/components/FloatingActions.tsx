import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-[10px] right-[10px] z-[70] flex flex-col gap-2">
      <a aria-label="Call us" href="tel:+971582774427" className="relative grid h-11 w-11 place-items-center rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#E6C280] text-[#122136] shadow-xl transition hover:-translate-y-1 hover:brightness-110">
        <span className="pulse-ring" />
        <span className="pulse-ring delay" />
        <Phone size={20} strokeWidth={2.4} />
      </a>
      <a aria-label="WhatsApp us" href="https://wa.me/971582774427" target="_blank" rel="noreferrer" className="relative grid h-11 w-11 place-items-center rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#E6C280] text-[#122136] shadow-xl transition hover:-translate-y-1 hover:brightness-110">
        <span className="pulse-ring" />
        <span className="pulse-ring delay" />
        <FaWhatsapp size={22} />
      </a>
    </div>
  );
}