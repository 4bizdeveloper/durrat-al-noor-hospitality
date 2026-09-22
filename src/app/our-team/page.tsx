import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Team | Durrat Al Noor Hospitality Dubai",
  description:
    "Meet Dipak Shrestha, Dipak Pandaya and Alisha Gautam, the leadership, sales and HR team behind Durrat Al Noor Hospitality in Dubai.",
};

const people = [
  {
    name: "Dipak Shrestha",
    role: "Managing Director",
    bio: "Dipak Shrestha leads Durrat Al Noor Hospitality, guiding the company's direction with a focus on service quality, people and client relationships.",
    image: "/dipak_shrestha.jpeg",
  },
  {
    name: "Dipak Pandaya",
    role: "Sales Director",
    bio: "Dipak Pandaya focuses on business development and client relationships, helping connect hospitality requirements with suitable service solutions.",
    image: "/dipak_pandya.jpeg",
  },
  {
    name: "Alisha Gautam",
    role: "HR Manager",
    bio: "Alisha Gautam supports the people behind Durrat Al Noor Hospitality through recruitment, employee coordination and team development.",
    image: "/alisha_gautham.jpeg",
  },
];

export default function Team() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#0B192C] pb-16 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2000&q=85)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#0B192C]/70" />

        <div className="container relative">
          <p className="eyebrow">Our Team</p>

          <h1 className="mt-4 hero-title">
            The People Behind Durrat Al Noor Hospitality
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Our team brings together leadership, client relationships and human
            resources to support our hospitality and cleaning services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="heading">
            Leadership, client relationships and people support.
          </h2>

          <div className="mt-12 grid items-stretch gap-7 md:grid-cols-3">
            {people.map((person) => (
              <article
                key={person.name}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-50">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-[center_20%] transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>

                <div className="flex flex-grow flex-col justify-between p-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                      {person.role}
                    </span>

                    <h3 className="mt-1 text-xl font-bold text-[#0B192C]">
                      {person.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2EEE5] py-16">
        <div className="container flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black">Speak with Our Team</h2>
            <p className="copy mt-2">Tell us about your requirements.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact-us/"
              className="gold-button rounded-full px-6 py-3 font-bold"
            >
              Contact Us
            </Link>

            <Link
              href="/our-services/"
              className="rounded-full border border-[#0B192C] px-6 py-3 font-bold"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
