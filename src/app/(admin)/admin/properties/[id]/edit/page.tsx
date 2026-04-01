import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PropertyForm } from "@/components/forms/PropertyForm";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function EditPropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const propertyData = await prisma.property.findUnique({
    where: { id },
    include: {
      images: { orderBy: { order: "asc" } },
      amenities: { include: { amenity: true } },
    },
  });

  if (!propertyData) {
    notFound();
  }

  const property = {
    id: propertyData.id,
    name: propertyData.name,
    tagline: propertyData.tagline || "",
    description: propertyData.description,
    city: propertyData.city,
    neighborhood: propertyData.neighborhood,
    propertyType: propertyData.propertyType,
    listingType: propertyData.listingType,
    bookingMode: propertyData.bookingMode,
    bedrooms: propertyData.bedrooms,
    bathrooms: propertyData.bathrooms,
    sleeps: propertyData.sleeps || 0,
    sizeSqm: propertyData.sizeSqm || 0,
    pricePerNight: propertyData.pricePerNight || 0,
    pricePerMonth: propertyData.pricePerMonth || 0,
    salePrice: propertyData.salePrice || 0,
    currency: propertyData.currency,
    cleaningFee: propertyData.cleaningFee || 0,
    images: propertyData.images.map((img) => ({ url: img.url, alt: img.alt || "" })),
    amenities: propertyData.amenities.map((pa) => pa.amenity.name),
    featured: propertyData.featured,
    status: propertyData.status,
  };
  return (
    <div>
      <Link
        href="/admin/properties"
        className="btn-text inline-flex items-center gap-2 mb-6"
      >
        <ArrowLeft size={16} />
        Back to Properties
      </Link>

      <h1 className="text-2xl font-serif mb-8">Edit Property</h1>

      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <PropertyForm property={property} />
      </div>
    </div>
  );
}
