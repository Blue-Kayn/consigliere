import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PropertyCard } from "@/components/property/PropertyCard";
import { prisma } from "@/lib/prisma";

export async function FeaturedProperties() {
  const properties = await prisma.property.findMany({
    where: {
      status: "PUBLISHED",
      featured: true,
    },
    include: {
      images: { orderBy: { order: "asc" }, take: 1 },
    },
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  const featuredProperties = properties.map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    neighborhood: p.neighborhood,
    city: p.city as "London" | "Dubai",
    bedrooms: p.bedrooms,
    bathrooms: p.bathrooms,
    sizeSqm: p.sizeSqm,
    pricePerNight: p.pricePerNight,
    pricePerMonth: p.pricePerMonth,
    salePrice: p.salePrice,
    currency: p.currency as "GBP" | "AED" | "USD" | "EUR",
    listingType: p.listingType as "SHORT_TERM" | "LONG_TERM" | "FOR_SALE",
    featured: p.featured,
    images: p.images.map((img) => ({ url: img.url, alt: img.alt || p.name })),
  }));

  return (
    <section className="py-24 px-8 lg:px-16">
      <div className="flex justify-between items-end mb-12 max-w-[1400px] mx-auto">
        <h2 className="text-2xl lg:text-3xl">Featured Properties</h2>
        <Link
          href="/stay"
          className="btn-text hidden sm:inline-flex items-center gap-2"
        >
          View all properties
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <Link
        href="/stay"
        className="btn-text sm:hidden flex justify-center mt-8 items-center gap-2"
      >
        View all properties
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}
