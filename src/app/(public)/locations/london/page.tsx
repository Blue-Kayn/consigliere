import Link from "next/link";
import { PropertyCard } from "@/components/property/PropertyCard";
import { ArrowLeft } from "lucide-react";

// Mock data
const properties = [
  {
    id: "1",
    slug: "the-grosvenor-suite",
    name: "The Grosvenor Suite",
    neighborhood: "Mayfair",
    city: "London" as const,
    bedrooms: 3,
    bathrooms: 2,
    sizeSqm: 180,
    pricePerNight: 2500,
    currency: "GBP" as const,
    listingType: "SHORT_TERM" as const,
    featured: true,
    images: [{ url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" }],
  },
  {
    id: "2",
    slug: "the-sloane-residence",
    name: "The Sloane Residence",
    neighborhood: "Chelsea",
    city: "London" as const,
    bedrooms: 4,
    bathrooms: 3,
    sizeSqm: 220,
    pricePerMonth: 18000,
    currency: "GBP" as const,
    listingType: "LONG_TERM" as const,
    featured: false,
    images: [{ url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" }],
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

const neighborhoods = [
  "Mayfair",
  "Knightsbridge",
  "Chelsea",
  "Belgravia",
  "Notting Hill",
  "Marylebone",
  "Kensington",
  "Fitzrovia",
];

export default function LondonPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-48 pb-24 px-8 lg:px-16 text-white text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80') center/cover`,
        }}
      >
        <Link href="/locations" className="btn-text text-white inline-flex items-center gap-2 mb-8">
          <ArrowLeft size={16} />
          All Locations
        </Link>
        <h1 className="text-4xl lg:text-5xl mb-4">London</h1>
        <p className="font-editorial text-lg lg:text-xl max-w-2xl mx-auto opacity-90">
          The world&apos;s most international city. From Georgian townhouses in Mayfair
          to contemporary penthouses in Shoreditch, we know London&apos;s finest addresses.
        </p>
      </section>

      {/* Neighborhoods */}
      <section className="py-12 px-8 lg:px-16 bg-[var(--cream)]">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {neighborhoods.map((neighborhood) => (
            <button
              key={neighborhood}
              className="px-6 py-3 border border-[var(--charcoal)] text-sm tracking-wider hover:bg-[var(--charcoal)] hover:text-white transition-colors"
            >
              {neighborhood}
            </button>
          ))}
        </div>
      </section>

      {/* Properties */}
      <section className="py-16 px-8 lg:px-16">
        <div className="flex justify-between items-end mb-12 max-w-[1400px] mx-auto">
          <h2 className="text-2xl">Properties in London</h2>
          <span className="text-sm text-[var(--gray-500)]">
            {properties.length} properties
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </>
  );
}
