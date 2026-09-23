"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type HomeService = {
  title: string;
  description: string;
  bullets: string[];
  button?: string;
  image: string;
  imageAlt?: string;
  alt?: string;
};

const defaultServices: HomeService[] = [
  {
    title: "Housekeeping Services",
    description:
      "Our housekeeping support covers hospitality and property environments where reliable personnel and clear service arrangements are required.",
    bullets: [
      "Room attendants",
      "Public-area attendants",
      "Supervisory staff",
      "Residential & office",
      "Government facilities",
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
      "Waiters / Waitresses",
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
    button: "Enquire About Pool & Leisure",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Luxury resort pool and leisure environment",
  },
  {
    title: "Deep Cleaning Services",
    description:
      "Deep cleaning is arranged around your property's requirements, scope, tasks, materials, equipment and schedule.",
    bullets: ["Commercial spaces", "Residential units", "Villas & Estates", "Restaurants"],
    button: "Request Deep Cleaning Quote",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Professional deep cleaning service in a commercial property",
  },
];

export default function ServiceCarousel({
  services = defaultServices,
}: {
  services?: HomeService[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Dynamically recalculate slides count based on screen width
  const updateVisibleSlides = useCallback(() => {
    if (typeof window === "undefined") return;
    const width = window.innerWidth;
    if (width >= 1024) {
      setVisibleSlides(3); // Desktop: 3 cards
    } else if (width >= 640) {
      setVisibleSlides(2); // Tablet: 2 cards
    } else {
      setVisibleSlides(1); // Mobile: 1 card
    }
  }, []);

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, [updateVisibleSlides]);

  const getStep = () => {
    const slide = trackRef.current?.querySelector<HTMLElement>(".service-slide");
    if (!slide || !trackRef.current) return 0;
    const styles = getComputedStyle(trackRef.current);
    const gap = parseFloat(styles.columnGap) || parseFloat(styles.gap) || 0;
    return slide.offsetWidth + gap;
  };

  const move = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;
      const maxIndex = Math.max(0, services.length - visibleSlides);
      indexRef.current = Math.min(maxIndex, Math.max(0, indexRef.current + direction));
      track.scrollTo({ left: indexRef.current * getStep(), behavior: "smooth" });
    },
    [services.length, visibleSlides]
  );

  const next = useCallback(() => move(1), [move]);
  const prev = useCallback(() => move(-1), [move]);

  // Handle auto-slide interval (pauses when hover/touch state is true)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      const maxIndex = Math.max(0, services.length - visibleSlides);
      if (indexRef.current >= maxIndex) {
        indexRef.current = 0;
        trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        next();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [next, services.length, visibleSlides, isPaused]);

  return (
    <div
      className="relative mt-8 w-full bg-transparent"
      aria-label="Services Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Navigation Header / Buttons */}
      <div className="mb-6 flex items-center justify-between px-1">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#DAB672]">
          Our Capabilities
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0B192C] shadow-sm transition-all hover:border-[#DAB672] hover:bg-[#DAB672] hover:text-white focus:outline-none"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0B192C] shadow-sm transition-all hover:border-[#DAB672] hover:bg-[#DAB672] hover:text-white focus:outline-none"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Carousel Track forced into a horizontal row */}
      <div
        ref={trackRef}
        className="no-scrollbar flex w-full overflow-x-auto scroll-smooth pb-6 pt-2"
        style={{
          gap: "24px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {services.map((s, idx) => (
          <article
            key={s.title}
            className="service-slide group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200/80 bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#DAB672]/50"
            style={{
              flex: "0 0 auto",
              width:
                visibleSlides === 3
                  ? "calc(33.333% - 16px)"
                  : visibleSlides === 2
                  ? "calc(50% - 12px)"
                  : "100%",
            }}
          >
            <div>
              {/* Image Section */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={s.image}
                  alt={s.imageAlt || s.alt || s.title}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#DAB672]">0{idx + 1}</span>
                  <h3 className="text-base font-bold text-white md:text-lg">{s.title}</h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5">
                <p className="text-xs leading-relaxed text-gray-600 md:text-sm line-clamp-3">
                  {s.description}
                </p>

                <ul className="mt-4 grid gap-2 text-xs font-medium text-gray-800">
                  {s.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="text-[#DAB672]">➔</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Link Button */}
            <div className="p-5 pt-0">
              <Link
                href={`/our-services/#service-${idx + 1}`}
                className="inline-flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-xs font-semibold text-[#0B192C] transition-all hover:border-[#DAB672] hover:bg-[#DAB672] hover:text-white"
              >
                <span>{s.button || "Explore Service"}</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
