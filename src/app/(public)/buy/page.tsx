import Link from "next/link";
import Image from "next/image";
import { PropertyCard } from "@/components/property/PropertyCard";

const services = [
  {
    title: "Off-Market Access",
    description:
      "Many of the best properties never reach the open market. Our network provides access to exclusive, private sales before they're listed.",
  },
  {
    title: "Investment Analysis",
    description:
      "Detailed ROI projections, rental yield analysis, and market timing advice. We help you understand exactly what you're buying and why.",
  },
  {
    title: "Transaction Management",
    description:
      "Negotiation, due diligence, legal coordination, and completion. We manage every step so you simply approve decisions.",
  },
];

const stats = [
  { number: "0%", label: "Income Tax" },
  { number: "0%", label: "Capital Gains Tax" },
  { number: "8-20%", label: "Net Rental Yields", hasDisclaimer: true },
  { number: "10yr", label: "Golden Visa" },
];

const properties = [
  {
    id: "1",
    slug: "oceanfront-villa",
    name: "Oceanfront Villa",
    neighborhood: "Palm Jumeirah",
    city: "Dubai" as const,
    bedrooms: 5,
    bathrooms: 6,
    sizeSqm: 650,
    salePrice: 45000000,
    currency: "AED" as const,
    listingType: "FOR_SALE" as const,
    featured: false,
    images: [{ url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" }],
  },
  {
    id: "2",
    slug: "burj-vista-penthouse",
    name: "Burj Vista Penthouse",
    neighborhood: "Downtown Dubai",
    city: "Dubai" as const,
    bedrooms: 4,
    bathrooms: 5,
    sizeSqm: 450,
    salePrice: 18500000,
    currency: "AED" as const,
    listingType: "FOR_SALE" as const,
    featured: false,
    images: [{ url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80" }],
  },
  {
    id: "3",
    slug: "chester-square-house",
    name: "Chester Square House",
    neighborhood: "Belgravia",
    city: "London" as const,
    bedrooms: 6,
    bathrooms: 5,
    sizeSqm: 550,
    salePrice: null,
    currency: "GBP" as const,
    listingType: "FOR_SALE" as const,
    featured: false,
    images: [{ url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80" }],
  },
];

export default function BuyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-48 pb-24 px-8 lg:px-16 text-white text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80') center/cover`,
        }}
      >
        <h1 className="text-4xl lg:text-5xl mb-4">Strategic Property Acquisition</h1>
        <p className="font-editorial text-lg lg:text-xl max-w-2xl mx-auto mb-12 opacity-90">
          Whether you&apos;re building a portfolio, seeking a family home, or
          diversifying into new markets — we source opportunities others can&apos;t
          access.
        </p>
        <Link href="/contact" className="btn btn-gold">
          Discuss Your Requirements
        </Link>
      </section>

      {/* Services */}
      <section className="py-24 px-8 lg:px-16 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Our Acquisition Services</h2>
          <p className="font-editorial text-lg text-[var(--gray-500)]">
            End-to-end support from strategy to completion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-12 bg-[var(--cream)] text-center"
            >
              <h3 className="text-2xl mb-4">{service.title}</h3>
              <p className="text-[var(--gray-600)] mb-8 leading-relaxed">
                {service.description}
              </p>
              <Link href="/contact" className="btn-text">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Dubai Investment */}
      <section className="py-24 px-8 lg:px-16 bg-[var(--charcoal)] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[1200px] mx-auto items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl mb-6">
              Dubai: The Strategic Choice
            </h2>
            <p className="font-editorial text-lg text-[var(--gray-400)] mb-8 leading-relaxed">
              Zero income tax. Zero capital gains tax. 10-year Golden Visa
              eligibility. Dubai isn&apos;t just a lifestyle destination — it&apos;s a
              financial strategy. We help clients structure acquisitions that
              optimize both returns and residency benefits.
            </p>
            <Link href="/contact" className="btn btn-gold">
              Discuss Dubai Investment
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 border border-white/10"
              >
                <div className="font-serif text-4xl lg:text-5xl text-[var(--gold)] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[var(--gray-400)] tracking-[0.1em] uppercase">
                  {stat.label}
                </div>
                {stat.hasDisclaimer && (
                  <div className="text-[0.65rem] text-[var(--gray-500)] mt-2 italic">
                    *Higher yields (up to 20%) for off-plan investments
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties for Sale */}
      <section className="py-24 px-8 lg:px-16">
        <div className="flex justify-between items-end mb-12 max-w-[1400px] mx-auto">
          <h2 className="text-2xl lg:text-3xl">Properties for Sale</h2>
          <Link href="/buy/all" className="btn-text">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-40 px-8 lg:px-16 text-white text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80') center/cover fixed`,
        }}
      >
        <h2 className="text-3xl lg:text-5xl mb-6">
          Let&apos;s Discuss Your Strategy
        </h2>
        <p className="font-editorial text-lg lg:text-xl max-w-xl mx-auto mb-10 opacity-90">
          Every acquisition begins with understanding your goals. Schedule a
          confidential consultation.
        </p>
        <Link href="/contact" className="btn btn-gold">
          Request Consultation
        </Link>
      </section>
    </>
  );
}
