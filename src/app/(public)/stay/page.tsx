import { prisma } from "@/lib/prisma";
import { StayContent } from "./StayContent";

export default async function StayPage() {
  const properties = await prisma.property.findMany({
    where: {
      status: "PUBLISHED",
      listingType: { in: ["SHORT_TERM", "LONG_TERM"] },
    },
    include: {
      images: { orderBy: { order: "asc" }, take: 1 },
    },
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });

  const formattedProperties = properties.map((p) => ({
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
    currency: p.currency as "GBP" | "AED" | "USD" | "EUR",
    listingType: p.listingType as "SHORT_TERM" | "LONG_TERM" | "FOR_SALE",
    featured: p.featured,
    images: p.images.map((img) => ({ url: img.url })),
  }));

  return <StayContent properties={formattedProperties} />;
}
