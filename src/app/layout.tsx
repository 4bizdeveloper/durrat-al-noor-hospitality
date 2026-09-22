import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata:Metadata={
  metadataBase:new URL("https://durratalnoorhospitality.com"),
  title:{default:"Durrat Al Noor Hospitality | Dubai, UAE",template:"%s | Durrat Al Noor Hospitality"},
  description:"Hospitality staffing, housekeeping and deep cleaning services in Dubai and across the UAE.",
  keywords:["hospitality staffing Dubai","housekeeping services Dubai","deep cleaning Dubai","hotel staffing UAE"],
  icons:{icon:"/logo.png",shortcut:"/logo.png",apple:"/logo.png"},
};

export default function Layout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><Header/><main>{children}</main><Footer/><FloatingActions/></body></html>
}