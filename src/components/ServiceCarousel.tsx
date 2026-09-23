"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";

export type HomeService = {title:string;description:string;bullets:string[];image:string;alt:string};

export default function ServiceCarousel({services}:{services:HomeService[]}) {
  const trackRef=useRef<HTMLDivElement>(null);
  const indexRef=useRef(services.length);
  const timerRef=useRef<number | null>(null);

  const slide=(direction:1|-1)=>{
    const track=trackRef.current;
    if(!track||!services.length)return;
    const first=track.querySelector<HTMLElement>(".service-slide");
    if(!first)return;
    const distance=first.offsetWidth;
    indexRef.current+=direction;
    track.scrollTo({left:distance*indexRef.current,behavior:"smooth"});
    if(timerRef.current)window.clearTimeout(timerRef.current);
    timerRef.current=window.setTimeout(()=>{
      const n=services.length;
      if(indexRef.current>=n*2){indexRef.current=n;track.scrollTo({left:distance*n,behavior:"auto"});}
      else if(indexRef.current<n){indexRef.current=n*2-1;track.scrollTo({left:distance*(n*2-1),behavior:"auto"});}
    },500);
  };

  const next=useCallback(()=>slide(1),[services.length]);
  const previous=useCallback(()=>slide(-1),[services.length]);

  useEffect(()=>{
    const track=trackRef.current;
    if(!track||!services.length)return;
    const first=track.querySelector<HTMLElement>(".service-slide");
    if(!first)return;
    track.scrollTo({left:first.offsetWidth*services.length,behavior:"auto"});
    indexRef.current=services.length;
  },[services.length]);

  useEffect(()=>{
    const timer=window.setInterval(next,4500);
    return()=>window.clearInterval(timer);
  },[next]);

  const loopedServices=[...services,...services,...services];

  return <div className="service-carousel mt-10 w-full" aria-label="Our hospitality and cleaning services">
    <div className="service-carousel-controls">
      <button type="button" onClick={previous} aria-label="Previous service" className="service-arrow"><ChevronLeft size={22}/></button>
      <button type="button" onClick={next} aria-label="Next service" className="service-arrow"><ChevronRight size={22}/></button>
    </div>
    <div ref={trackRef} className="service-track" aria-live="polite">
      {loopedServices.map((service,index)=><article key={service.title+"-"+index} className="service-slide card overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image src={service.image} alt={service.alt} fill sizes="100vw" className="object-cover"/>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-black md:text-2xl">{service.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#405066] md:text-base">{service.description}</p>
          <ul className="mt-4 grid gap-2 text-sm font-semibold text-[#122136] md:grid-cols-2">
            {service.bullets.map(item=><li key={item} className="flex gap-2"><span className="text-[#DAB672]" aria-hidden="true">➔</span><span>{item}</span></li>)}
          </ul>
          <Link href="/our-services/" className="mt-5 inline-block font-bold text-[#122136] hover:text-[#DAB672]">Explore Service →</Link>
        </div>
      </article>)}
    </div>
  </div>;
}