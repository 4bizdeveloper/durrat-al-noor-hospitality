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
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dipak Pandaya",
    role: "Sales Director",
    bio: "Dipak Pandaya focuses on business development and client relationships, helping connect hospitality requirements with suitable service solutions.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Alisha Gautam",
    role: "HR Manager",
    bio: "Alisha Gautam supports the people behind Durrat Al Noor Hospitality through recruitment, employee coordination and team development.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Team() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#0B192C] py-16 text-white md:py-24">
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

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {people.map((person) => (
              <article className="card overflow-hidden" key={person.name}>
                <img
                  src={person.image}
                  alt={person.name}
                  className="aspect-square w-full object-cover"
                />
                <div className="p-7">
                  <p className="eyebrow">{person.role}</p>
                  <h2 className="mt-2 text-2xl font-black">{person.name}</h2>
                  <p className="copy mt-4 text-base">{person.bio}</p>
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
