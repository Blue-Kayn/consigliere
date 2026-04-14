import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Heart, Share2, MapPin, Bed, Bath, Maximize, Users } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { ImageCarousel } from "@/components/property/ImageCarousel";
import { BookingEnquiry } from "@/components/property/BookingEnquiry";

export const dynamic = "force-dynamic";

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const property = await prisma.property.findUnique({
    where: { slug },
    include: {
      images: { orderBy: { order: "asc" } },
      amenities: { include: { amenity: true } },
    },
  });

  if (!property) {
    notFound();
  }

  const amenities = property.amenities.map((pa) => pa.amenity.name);
  return (
    <div className="pt-24">
      {/* Back Button */}
      <div className="px-8 lg:px-16 py-6 max-w-[1400px] mx-auto">
        <Link href="/stay" className="btn-text inline-flex items-center gap-2">
          <ArrowLeft size={16} />
          Back to properties
        </Link>
      </div>

      {/* Content */}
      <div className="px-8 lg:px-16 py-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Carousel */}
            <div className="mb-8">
              <ImageCarousel images={property.images} propertyName={property.name} />
            </div>

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="text-[0.7rem] text-[var(--gold)] tracking-[0.15em] uppercase mb-2">
                  {property.neighborhood}, {property.city}
                </div>
                <h1 className="text-3xl lg:text-4xl mb-2">{property.name}</h1>
                <p className="font-editorial text-lg text-[var(--gray-600)] italic">
                  {property.tagline}
                </p>
              </div>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-[var(--gray-300)] flex items-center justify-center hover:border-[var(--charcoal)] transition-colors">
                  <Share2 size={18} />
                </button>
                <button className="w-10 h-10 rounded-full border border-[var(--gray-300)] flex items-center justify-center hover:border-[var(--charcoal)] transition-colors">
                  <Heart size={18} />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-6 border-y border-[var(--gray-300)] mb-8">
              <div className="flex items-center gap-3">
                <Bed size={20} className="text-[var(--gray-500)]" />
                <span>{property.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center gap-3">
                <Bath size={20} className="text-[var(--gray-500)]" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              {property.sleeps && (
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-[var(--gray-500)]" />
                  <span>Sleeps {property.sleeps}</span>
                </div>
              )}
              {property.sizeSqm && (
                <div className="flex items-center gap-3">
                  <Maximize size={20} className="text-[var(--gray-500)]" />
                  <span>{property.sizeSqm}m²</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="text-xl mb-4">About this property</h2>
              <div className="font-editorial text-lg text-[var(--gray-600)] leading-relaxed whitespace-pre-line">
                {property.description}
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-12">
              <h2 className="text-xl mb-6">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-3 py-3 border-b border-[var(--gray-300)]"
                  >
                    <span className="text-[var(--gold)]">—</span>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-xl mb-6">Location</h2>
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={20} className="text-[var(--gold)]" />
                <span>{property.neighborhood}, {property.city}</span>
              </div>
              <div className="aspect-video bg-[var(--warm-gray)] overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                    property.city === "DUBAI" || property.city === "Dubai"
                      ? "55.1,25.0,55.4,25.3"
                      : "-0.2,51.45,0.0,51.55"
                  }&layer=mapnik&marker=${
                    property.city === "DUBAI" || property.city === "Dubai"
                      ? "25.2,55.27"
                      : "51.5,-0.1"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <BookingEnquiry
              propertyId={property.id}
              propertyName={property.name}
              pricePerNight={property.pricePerNight}
              cleaningFee={property.cleaningFee}
              bookingMode={property.bookingMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
