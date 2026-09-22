import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const poppins=Poppins({subsets:["latin"],weight:["300","400","500","600","700","800"],variable:"--font-poppins",display:"swap"});

export const metadata:Metadata={
metadataBase:new URL("https://durratalnoorhospitality.com"),
title:{default:"Durrat Al Noor Hospitality | Dubai, UAE",template:"%s | Durrat Al Noor Hospitality"},
description:"Hospitality staffing, housekeeping, food and beverage staffing, kitchen support, pool and leisure services, and deep cleaning in Dubai and across the UAE.",
keywords:["hospitality staffing Dubai","housekeeping services Dubai","hotel staffing UAE","deep cleaning Dubai","hospitality staffing UAE","cleaning company Dubai","hospitality services Dubai"],
authors:[{name:"Durrat Al Noor Hospitality"}],
creator:"Durrat Al Noor Hospitality",
publisher:"Durrat Al Noor Hospitality",
alternates:{canonical:"https://durratalnoorhospitality.com/"},
robots:{index:true,follow:true},
openGraph:{type:"website",locale:"en_AE",url:"https://durratalnoorhospitality.com/",siteName:"Durrat Al Noor Hospitality",title:"Durrat Al Noor Hospitality | Dubai, UAE",description:"Hospitality staffing, housekeeping and deep cleaning services in Dubai and across the UAE.",images:[{url:"/logo.png",width:1200,height:630,alt:"Durrat Al Noor Hospitality"}]},
twitter:{card:"summary_large_image",title:"Durrat Al Noor Hospitality | Dubai, UAE",description:"Hospitality staffing and cleaning services in Dubai and across the UAE.",images:["/logo.png"]},
icons:{icon:"/logo.png",shortcut:"/logo.png",apple:"/logo.png"}
};

const services=[["Housekeeping Services","Room attendants, public-area teams, supervisory support and property cleaning."],["Food & Beverage Staffing","Waiters, waitresses, banquet, restaurant, bar and event support."],["Kitchen & Stewarding","Kitchen stewards, commis chefs and culinary support personnel."],["Pool & Leisure Services","Pool lifeguards, beach lifeguards and recreation attendants."],["Deep Cleaning Services","Commercial, residential, villa and restaurant deep cleaning."]];

const jsonLd=[
{"@context":"https://schema.org","@type":"Organization","@id":"https://durratalnoorhospitality.com/#organization","name":"Durrat Al Noor Hospitality","url":"https://durratalnoorhospitality.com/","logo":"https://durratalnoorhospitality.com/logo.png","telephone":"+971582774427","email":"info@durratalnoorhospitality.com","address":{"@type":"PostalAddress","streetAddress":"104, Crystal Building, Al Karama","addressLocality":"Dubai","addressCountry":"AE"},"areaServed":{"@type":"Country","name":"United Arab Emirates"}},
{"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://durratalnoorhospitality.com/#localbusiness","name":"Durrat Al Noor Hospitality","url":"https://durratalnoorhospitality.com/","image":"https://durratalnoorhospitality.com/logo.png","telephone":"+971582774427","email":"info@durratalnoorhospitality.com","priceRange":"$$","address":{"@type":"PostalAddress","streetAddress":"104, Crystal Building, Al Karama","addressLocality":"Dubai","addressRegion":"Dubai","addressCountry":"AE"},"areaServed":[{"@type":"City","name":"Dubai"},{"@type":"Country","name":"United Arab Emirates"}],"openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"18:00"},"parentOrganization":{"@id":"https://durratalnoorhospitality.com/#organization"}},
...services.map(([name,description])=>({"@context":"https://schema.org","@type":"Service","serviceType":name,"name":name,"description":description,"provider":{"@id":"https://durratalnoorhospitality.com/#organization"},"areaServed":{"@type":"Country","name":"United Arab Emirates"}}))
];

export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" className={poppins.variable}><body><Header/><main>{children}</main><Footer/><FloatingActions/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></body></html>}