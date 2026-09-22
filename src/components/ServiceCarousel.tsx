import Image from "next/image";
import Link from "next/link";

export type HomeService = {title:string;description:string;bullets:string[];image:string;alt:string};

export default function ServiceCarousel({services}:{services:HomeService[]}) {
  const slides=[...services,...services];
  return <div className="service-carousel mt-10 w-full" aria-label="Our hospitality and cleaning services">
    <div className="service-track">
      {slides.map((service,index)=><article key={`${service.title}-${index}`} className="service-slide card overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image src={service.image} alt={service.alt} fill sizes="(max-width:640px) 82vw, 360px" className="object-cover" priority={index<3}/>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-black">{service.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#405066]">{service.description}</p>
          <ul className="mt-4 grid gap-2 text-sm font-semibold text-[#122136]">
            {service.bullets.map(item=><li key={item} className="flex gap-2"><span className="text-[#DAB672]" aria-hidden="true">➔</span><span>{item}</span></li>)}
          </ul>
          <Link href="/our-services/" className="mt-5 inline-block font-bold text-[#122136] hover:text-[#DAB672]">Explore Service →</Link>
        </div>
      </article>)}
    </div>
  </div>;
}
