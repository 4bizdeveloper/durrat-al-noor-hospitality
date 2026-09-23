import { Phone } from "lucide-react";

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.6 5.93L.1 24l6.34-1.66a11.9 11.9 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.23-6.16-3.45-8.41Zm-8.44 18.25h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.76.98 1-3.66-.23-.38a9.85 9.85 0 1 1 8.38 4.65Zm5.41-7.38c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.52s1.09 2.92 1.24 3.12c.15.2 2.14 3.27 5.19 4.59.73.31 1.3.5 1.74.64.73.23 1.39.2 1.91.12.58-.09 1.78-.73 2.03-1.44.25-.71.25-1.32.18-1.44-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

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
        <WhatsAppIcon />
      </a>
    </div>
  );
}
