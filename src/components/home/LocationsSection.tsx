import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const locations = [
  {
    name: "London",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
    residences: 45,
    forSale: 12,
    href: "/locations/london",
  },
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    residences: 32,
    forSale: 24,
    href: "/locations/dubai",
  },
];

export function LocationsSection() {
  return (
    <section className="py-16 sm:py-32 px-6 sm:px-8 lg:px-16 bg-white">
      <div className="text-center mb-12 sm:mb-20">
        <h2 className="text-3xl lg:text-[2.5rem] mb-4">Our Markets</h2>
        <p className="font-editorial text-lg lg:text-xl text-[var(--gray-500)]">
          Deep expertise in two of the world&apos;s most dynamic property markets
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
        {locations.map((location) => (
          <Link
            key={location.name}
            href={location.href}
            className="location-card group relative h-[380px] sm:h-[500px] lg:h-[600px]"
          >
            <Image
              src={location.image}
              alt={location.name}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 lg:p-12 text-white">
              <h3 className="text-3xl lg:text-[2.5rem] mb-2">{location.name}</h3>

              <div className="flex gap-8 mb-6 text-sm opacity-80">
                <span>{location.residences} Residences</span>
                <span>{location.forSale} For Sale</span>
              </div>

              <span className="btn-text text-white inline-flex items-center gap-2">
                Explore {location.name}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
