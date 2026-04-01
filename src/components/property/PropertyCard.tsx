"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface PropertyImage {
  url: string;
  alt?: string;
}

interface Property {
  id: string;
  slug: string;
  name: string;
  neighborhood: string;
  city: "London" | "Dubai" | "LONDON" | "DUBAI";
  bedrooms: number;
  bathrooms: number;
  sizeSqm?: number | null;
  pricePerNight?: number | null;
  pricePerMonth?: number | null;
  salePrice?: number | null;
  currency: "GBP" | "AED" | "USD" | "EUR";
  listingType: "SHORT_TERM" | "LONG_TERM" | "FOR_SALE";
  featured?: boolean;
  images: PropertyImage[];
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const getTag = () => {
    if (property.featured) return "Featured";
    if (property.listingType === "FOR_SALE") return "For Sale";
    if (property.listingType === "LONG_TERM") return "Long-Term";
    return null;
  };

  const getPrice = () => {
    if (property.listingType === "SHORT_TERM" && property.pricePerNight) {
      return (
        <>
          {formatPrice(property.pricePerNight, property.currency)}{" "}
          <span className="font-normal text-[var(--gray-400)]">/ night</span>
        </>
      );
    }
    if (property.listingType === "LONG_TERM" && property.pricePerMonth) {
      return (
        <>
          {formatPrice(property.pricePerMonth, property.currency)}{" "}
          <span className="font-normal text-[var(--gray-400)]">/ month</span>
        </>
      );
    }
    if (property.listingType === "FOR_SALE" && property.salePrice) {
      return formatPrice(property.salePrice, property.currency);
    }
    return "Price on Request";
  };

  const tag = getTag();
  const cityDisplay = property.city.charAt(0) + property.city.slice(1).toLowerCase();

  return (
    <Link
      href={`/property/${property.slug}`}
      className="property-card block"
    >
      <div className="property-image relative h-80 overflow-hidden">
        <Image
          src={property.images[0]?.url || "/placeholder.jpg"}
          alt={property.images[0]?.alt || property.name}
          fill
          className="object-cover"
        />

        {tag && (
          <span className="absolute top-5 left-5 bg-white px-4 py-2 text-[0.65rem] font-semibold tracking-[0.1em] uppercase">
            {tag}
          </span>
        )}

        <button
          className="absolute top-5 right-5 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          onClick={(e) => {
            e.preventDefault();
            // TODO: Add to favorites
          }}
        >
          <Heart size={18} />
        </button>
      </div>

      <div className="py-6">
        <div className="text-[0.7rem] text-[var(--gold)] tracking-[0.15em] uppercase mb-2">
          {property.neighborhood}, {cityDisplay}
        </div>
        <h3 className="font-serif text-xl mb-2">{property.name}</h3>
        <div className="text-sm text-[var(--gray-500)] mb-4">
          {property.bedrooms} Bedroom{property.bedrooms !== 1 ? "s" : ""} ·{" "}
          {property.bathrooms} Bathroom{property.bathrooms !== 1 ? "s" : ""}
          {property.sizeSqm && ` · ${property.sizeSqm}m²`}
        </div>
        <div className="text-base font-medium">{getPrice()}</div>
      </div>
    </Link>
  );
}
