import type {Metadata} from "next";

export const metadata:Metadata={
title:"Hospitality & Deep Cleaning Services Dubai | Durrat Al Noor",
description:"Discover housekeeping, F&B staffing, kitchen support, pool and leisure staffing, and deep cleaning in Dubai and the UAE. Request a tailored quotation.",
openGraph:{title:"Hospitality & Deep Cleaning Services Dubai | Durrat Al Noor",description:"Housekeeping, F&B staffing, kitchen support, pool and leisure staffing, and deep cleaning across Dubai and the UAE.",url:"/our-services/",type:"website"}
};

const faqSchema={"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"What hospitality staffing services do you provide?","acceptedAnswer":{"@type":"Answer","text":"We support housekeeping, food and beverage, kitchen and stewarding, pool and leisure, and other applicable hospitality staffing requirements."}},
{"@type":"Question","name":"Do you provide housekeeping services for residences and offices?","acceptedAnswer":{"@type":"Answer","text":"Yes. Housekeeping and cleaning support can be arranged for hotels, residences, offices, schools, government facilities and other agreed environments."}},
{"@type":"Question","name":"Can I request temporary or casual staff?","acceptedAnswer":{"@type":"Answer","text":"Yes. Casual staffing is available for applicable roles and temporary operational requirements."}},
{"@type":"Question","name":"Do you provide full-time employment support?","acceptedAnswer":{"@type":"Answer","text":"Yes. Full-time employment support can be discussed for applicable roles based on your requirements and agreed terms."}},
{"@type":"Question","name":"What areas do you cover?","acceptedAnswer":{"@type":"Answer","text":"We are based in Al Karama, Dubai and support clients in Dubai and across the UAE, subject to the service requirements."}},
{"@type":"Question","name":"How is deep cleaning quoted?","acceptedAnswer":{"@type":"Answer","text":"The scope, tasks, materials, equipment and schedule are discussed around your property's requirements before the quotation is agreed."}},
{"@type":"Question","name":"How do I request a quotation?","acceptedAnswer":{"@type":"Answer","text":"Use the enquiry form on our Contact Us page or contact us by phone or WhatsApp to discuss your requirements."}}
]};

export default function Layout({children}:{children:React.ReactNode}){return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/></>}