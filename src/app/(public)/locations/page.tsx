import Image from "next/image";

const locations = [
  {
    name: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
    neighborhoods: "Mayfair · Knightsbridge · Chelsea · Notting Hill · Marylebone · Kensington",
  },
  {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    neighborhoods: "Palm Jumeirah · Downtown · DIFC · Dubai Marina · Emirates Hills · Jumeirah Bay",
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-24 px-8 lg:px-16 bg-[var(--cream)] text-center">
        <h1 className="text-4xl lg:text-5xl mb-4">Our Markets</h1>
        <p className="font-editorial text-lg lg:text-xl text-[var(--gray-600)] max-w-2xl mx-auto">
          Deep local expertise in London and Dubai. We know these cities like a
          local — because we are.
        </p>
      </section>

      {/* Locations Grid */}
      <section className="py-12 px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
          {locations.map((location) => (
            <div
              key={location.name}
              className="location-card relative h-[500px] lg:h-[600px]"
            >
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 lg:p-12 text-white">
                <h3 className="text-3xl lg:text-[2.5rem] mb-2">
                  {location.name}
                </h3>

                <p className="opacity-90">{location.neighborhoods}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
