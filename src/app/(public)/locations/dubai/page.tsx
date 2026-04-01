import Link from "next/link";
import { PropertyCard } from "@/components/property/PropertyCard";
import { ArrowLeft } from "lucide-react";

// Mock data
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
    slug: "index-tower-residence",
    name: "Index Tower Residence",
    neighborhood: "DIFC",
    city: "Dubai" as const,
    bedrooms: 2,
    bathrooms: 2,
    sizeSqm: 150,
    pricePerNight: 800,
    currency: "USD" as const,
    listingType: "SHORT_TERM" as const,
    featured: false,
    images: [{ url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80" }],
  },
  {
    id: "3",
    slug: "marina-view-penthouse",
    name: "Marina View Penthouse",
    neighborhood: "Dubai Marina",
    city: "Dubai" as const,
    bedrooms: 3,
    bathrooms: 3,
    sizeSqm: 280,
    pricePerNight: 1500,
    currency: "USD" as const,
    listingType: "SHORT_TERM" as const,
    featured: false,
    images: [{ url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" }],
  },
];

const neighborhoods = [
  "Palm Jumeirah",
  "Downtown Dubai",
  "DIFC",
  "Dubai Marina",
  "Emirates Hills",
  "Jumeirah Bay",
  "Business Bay",
  "Al Barari",
];

export default function DubaiPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-48 pb-24 px-8 lg:px-16 text-white text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80') center/cover`,
        }}
      >
        <Link href="/locations" className="btn-text text-white inline-flex items-center gap-2 mb-8">
          <ArrowLeft size={16} />
          All Locations
        </Link>
        <h1 className="text-4xl lg:text-5xl mb-4">Dubai</h1>
        <p className="font-editorial text-lg lg:text-xl max-w-2xl mx-auto opacity-90">
          Where ambition meets opportunity. From beachfront villas on the Palm
          to sleek penthouses overlooking the Burj Khalifa, Dubai offers
          unparalleled luxury and investment potential.
        </p>
      </section>

      {/* Investment Banner */}
      <section className="py-8 px-8 lg:px-16 bg-[var(--gold)] text-white">
        <div className="flex flex-wrap justify-center gap-12 text-center">
          <div>
            <div className="text-2xl font-serif">0%</div>
            <div className="text-xs tracking-wider">Income Tax</div>
          </div>
          <div>
            <div className="text-2xl font-serif">0%</div>
            <div className="text-xs tracking-wider">Capital Gains Tax</div>
          </div>
          <div>
            <div className="text-2xl font-serif">8-20%</div>
            <div className="text-xs tracking-wider">Net Rental Yields*</div>
          </div>
          <div>
            <div className="text-2xl font-serif">10yr</div>
            <div className="text-xs tracking-wider">Golden Visa</div>
          </div>
        </div>
        <div className="text-center mt-4 text-[0.65rem] opacity-80 italic">
          *Higher yields (up to 20%) available for off-plan investments
        </div>
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
          <h2 className="text-2xl">Properties in Dubai</h2>
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
