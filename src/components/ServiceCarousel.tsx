"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";

export type HomeService = {title:string;description:string;bullets:string[];image:string;alt:string};

export default function ServiceCarousel({services}:{services:HomeService[]}) {
  const trackRef=useRef<HTMLDivElement>(null);
  const indexRef=useRef(0);

  const slide=(direction:1|-1)=>{
    const track=trackRef.current;
    if(!track)return;
    const first=track.querySelector<HTMLElement>(".service-slide");
    if(!first)return;
    const gap=parseFloat(getComputedStyle(track).gap)||0;
    const distance=first.offsetWidth+gap;
    const max=Math.max(services.length-1,0);
    indexRef.current=(indexRef.current+direction+services.length)%services.length;
    if(indexRef.current===0&&direction===1){track.scrollTo({left:0,behavior:"smooth"});return;}
    if(indexRef.current===max&&direction===-1){track.scrollTo({left:distance*max,behavior:"smooth"});return;}
    track.scrollTo({left:distance*indexRef.current,behavior:"smooth"});
  };

  const next=useCallback(()=>slide(1),[services.length]);
  const previous=useCallback(()=>slide(-1),[services.length]);

  useEffect(()=>{
    const timer=window.setInterval(next,4500);
    return()=>window.clearInterval(timer);
  },[next]);

  return <div className="service-carousel mt-10 w-full" aria-label="Our hospitality and cleaning services">
    <div className="service-carousel-controls">
      <button type="button" onClick={previous} aria-label="Previous service" className="service-arrow"><ChevronLeft size={22}/></button>
      <button type="button" onClick={next} aria-label="Next service" className="service-arrow"><ChevronRight size={22}/></button>
    </div>
    <div ref={trackRef} className="service-track" onMouseEnter={()=>{}} aria-live="polite">
      {services.map(service=><article key={service.title} className="service-slide card overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image src={service.image} alt={service.alt} fill sizes="(max-width:640px) 82vw, 360px" className="object-cover"/>
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
