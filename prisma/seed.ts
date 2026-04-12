import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Seed Admin User
  const adminEmail = process.env.ADMIN_EMAIL || "admin@theconsigliere.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "ConsiglierAdmin2024!";
  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: { password: hashedPassword, role: "ADMIN" },
    create: {
      email: adminEmail,
      name: "Admin",
      password: hashedPassword,
      role: "ADMIN",
    },
  });
  console.log(`Admin user seeded: ${adminEmail}`);

  // Create amenities
  const amenities = [
    // Essentials
    { name: "High-Speed WiFi", icon: "wifi", category: "Essentials" },
    { name: "Air Conditioning", icon: "thermometer", category: "Essentials" },
    { name: "Central Heating", icon: "flame", category: "Essentials" },
    { name: "Smart TV", icon: "tv", category: "Essentials" },
    { name: "Washer & Dryer", icon: "washing-machine", category: "Essentials" },

    // Kitchen
    { name: "Fully Equipped Kitchen", icon: "chef-hat", category: "Kitchen" },
    { name: "Dishwasher", icon: "utensils", category: "Kitchen" },
    { name: "Coffee Machine", icon: "coffee", category: "Kitchen" },
    { name: "Wine Fridge", icon: "wine", category: "Kitchen" },

    // Comfort
    { name: "Egyptian Cotton Linens", icon: "bed", category: "Comfort" },
    { name: "Designer Toiletries", icon: "sparkles", category: "Comfort" },
    { name: "Bathrobe & Slippers", icon: "shirt", category: "Comfort" },
    { name: "Blackout Curtains", icon: "moon", category: "Comfort" },

    // Building
    { name: "24/7 Concierge", icon: "bell-concierge", category: "Building" },
    { name: "Gym Access", icon: "dumbbell", category: "Building" },
    { name: "Pool Access", icon: "waves", category: "Building" },
    { name: "Spa Access", icon: "spa", category: "Building" },
    { name: "Private Parking", icon: "car", category: "Building" },
    { name: "Doorman", icon: "user", category: "Building" },
    { name: "Elevator", icon: "arrow-up", category: "Building" },

    // Services
    { name: "Daily Housekeeping", icon: "sparkles", category: "Services" },
    { name: "Airport Transfer", icon: "plane", category: "Services" },
    { name: "Private Chef", icon: "chef-hat", category: "Services" },
    { name: "Chauffeur Service", icon: "car", category: "Services" },

    // Outdoor
    { name: "Private Terrace", icon: "sun", category: "Outdoor" },
    { name: "Garden Access", icon: "trees", category: "Outdoor" },
    { name: "Private Pool", icon: "waves", category: "Outdoor" },
    { name: "Balcony", icon: "door-open", category: "Outdoor" },

    // Views
    { name: "City Views", icon: "building", category: "Views" },
    { name: "Park Views", icon: "trees", category: "Views" },
    { name: "Water Views", icon: "waves", category: "Views" },
  ];

  for (const amenity of amenities) {
    await prisma.amenity.upsert({
      where: { id: amenity.name.toLowerCase().replace(/\s+/g, "-") },
      update: {},
      create: {
        id: amenity.name.toLowerCase().replace(/\s+/g, "-"),
        ...amenity,
      },
    });
  }
  console.log(`Created ${amenities.length} amenities`);

  // Create sample properties
  const properties = [
    {
      name: "The Grosvenor Suite",
      slug: "the-grosvenor-suite",
      tagline: "Elegant living in the heart of Mayfair",
      description: `A stunning period property with soaring ceilings and original features, just steps from Green Park. This beautifully appointed three-bedroom apartment offers the perfect blend of historic charm and contemporary luxury.

The property features a grand reception room with original fireplace, a fully equipped designer kitchen, three generous bedrooms (master with en-suite), and two additional bathrooms. Floor-to-ceiling windows flood the space with natural light.

Located in one of Mayfair's most prestigious addresses, you'll have immediate access to Bond Street's boutiques, Green Park's gardens, and Mayfair's finest restaurants and galleries.`,
      city: "LONDON",
      neighborhood: "Mayfair",
      propertyType: "APARTMENT",
      listingType: "SHORT_TERM",
      bookingMode: "INSTANT_BOOK",
      bedrooms: 3,
      bathrooms: 2,
      sleeps: 6,
      sizeSqm: 180,
      pricePerNight: 2500,
      currency: "GBP",
      cleaningFee: 250,
      status: "PUBLISHED",
      featured: true,
      images: [
        { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Living Room", order: 0, isHero: true },
        { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", alt: "Kitchen", order: 1 },
        { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", alt: "Bedroom", order: 2 },
        { url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80", alt: "Bathroom", order: 3 },
      ],
      amenityIds: ["high-speed-wifi", "air-conditioning", "smart-tv", "fully-equipped-kitchen", "washer-&-dryer", "24/7-concierge", "gym-access", "daily-housekeeping"],
    },
    {
      name: "Chelsea Townhouse",
      slug: "chelsea-townhouse",
      tagline: "A quintessentially British residence",
      description: `An exquisite Georgian townhouse in the heart of Chelsea, offering exceptional living space across four elegant floors. Recently renovated to the highest standards while preserving its original character.

The property boasts a grand drawing room, formal dining room, bespoke kitchen with garden views, five bedrooms including a spectacular master suite, and a private landscaped garden - a rare find in central London.

Situated on one of Chelsea's most sought-after garden squares, within walking distance of the King's Road, Sloane Square, and the River Thames.`,
      city: "LONDON",
      neighborhood: "Chelsea",
      propertyType: "TOWNHOUSE",
      listingType: "LONG_TERM",
      bookingMode: "REQUEST_TO_BOOK",
      bedrooms: 5,
      bathrooms: 4,
      sizeSqm: 400,
      pricePerMonth: 35000,
      currency: "GBP",
      status: "PUBLISHED",
      featured: true,
      images: [
        { url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", alt: "Exterior", order: 0, isHero: true },
        { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Living Room", order: 1 },
      ],
      amenityIds: ["high-speed-wifi", "central-heating", "fully-equipped-kitchen", "private-parking", "garden-access"],
    },
    {
      name: "Palm Jumeirah Villa",
      slug: "palm-jumeirah-villa",
      tagline: "Beachfront luxury on the iconic Palm",
      description: `An extraordinary beachfront villa on the prestigious Palm Jumeirah, offering panoramic views of the Arabian Gulf and Dubai's stunning skyline. This architectural masterpiece represents the pinnacle of Dubai luxury living.

Spanning over 650 square meters, the villa features five opulent bedroom suites, multiple living areas, a cinema room, private infinity pool, and direct beach access. The contemporary design seamlessly blends indoor and outdoor spaces.

Experience resort-style living with access to world-class amenities including private beaches, championship golf courses, and Dubai's finest restaurants.`,
      city: "DUBAI",
      neighborhood: "Palm Jumeirah",
      propertyType: "VILLA",
      listingType: "FOR_SALE",
      bookingMode: "ENQUIRY_ONLY",
      bedrooms: 5,
      bathrooms: 6,
      sizeSqm: 650,
      salePrice: 45000000,
      currency: "AED",
      status: "PUBLISHED",
      featured: true,
      images: [
        { url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", alt: "Exterior", order: 0, isHero: true },
        { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Living Room", order: 1 },
      ],
      amenityIds: ["air-conditioning", "private-pool", "gym-access", "private-parking", "24/7-concierge", "water-views"],
    },
    {
      name: "DIFC Tower Residence",
      slug: "difc-tower-residence",
      tagline: "Sophisticated city living in Dubai's financial heart",
      description: `A sleek, contemporary apartment in the prestigious Index Tower, offering unparalleled views of the Dubai skyline. Perfect for business travelers and discerning guests seeking the ultimate urban luxury experience.

The residence features an open-plan living area with floor-to-ceiling windows, a fully equipped modern kitchen, two elegant bedrooms, and two designer bathrooms. Premium finishes throughout reflect the building's world-class standards.

Located in the Dubai International Financial Centre, you're steps from Gate Avenue's restaurants, galleries, and the vibrant business community.`,
      city: "DUBAI",
      neighborhood: "DIFC",
      propertyType: "APARTMENT",
      listingType: "SHORT_TERM",
      bookingMode: "INSTANT_BOOK",
      bedrooms: 2,
      bathrooms: 2,
      sleeps: 4,
      sizeSqm: 150,
      pricePerNight: 800,
      currency: "USD",
      cleaningFee: 100,
      status: "PUBLISHED",
      featured: false,
      images: [
        { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80", alt: "Living Room", order: 0, isHero: true },
      ],
      amenityIds: ["high-speed-wifi", "air-conditioning", "smart-tv", "gym-access", "pool-access", "city-views"],
    },
    {
      name: "Notting Hill Garden Flat",
      slug: "notting-hill-garden-flat",
      tagline: "Charming retreat in colorful Notting Hill",
      description: `A beautifully designed garden flat in a classic Victorian building on one of Notting Hill's most photographed streets. The perfect base for exploring London's most characterful neighborhood.

The apartment features a light-filled open-plan living and dining area, a well-appointed kitchen, two comfortable bedrooms, and access to a shared garden. Thoughtful design and curated furnishings create a welcoming atmosphere.

Portobello Road Market, boutique shops, and acclaimed restaurants are all on your doorstep.`,
      city: "LONDON",
      neighborhood: "Notting Hill",
      propertyType: "APARTMENT",
      listingType: "SHORT_TERM",
      bookingMode: "REQUEST_TO_BOOK",
      bedrooms: 2,
      bathrooms: 1,
      sleeps: 4,
      sizeSqm: 85,
      pricePerNight: 650,
      currency: "GBP",
      cleaningFee: 95,
      status: "PUBLISHED",
      featured: false,
      images: [
        { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", alt: "Bedroom", order: 0, isHero: true },
      ],
      amenityIds: ["high-speed-wifi", "central-heating", "fully-equipped-kitchen", "garden-access", "washer-&-dryer"],
    },
    {
      name: "Marina View Penthouse",
      slug: "marina-view-penthouse",
      tagline: "Spectacular penthouse overlooking Dubai Marina",
      description: `A stunning duplex penthouse in one of Dubai Marina's most prestigious towers, offering breathtaking panoramic views of the marina, Palm Jumeirah, and the Arabian Gulf.

This exceptional property features three bedrooms across two levels, a dramatic double-height living room, private rooftop terrace with plunge pool, and direct access to world-class amenities including infinity pool, spa, and private beach.

Experience the energy of Dubai Marina's waterfront promenade with hundreds of restaurants, cafes, and luxury boutiques at your feet.`,
      city: "DUBAI",
      neighborhood: "Dubai Marina",
      propertyType: "PENTHOUSE",
      listingType: "SHORT_TERM",
      bookingMode: "INSTANT_BOOK",
      bedrooms: 3,
      bathrooms: 3,
      sleeps: 6,
      sizeSqm: 280,
      pricePerNight: 1500,
      currency: "USD",
      cleaningFee: 200,
      status: "PUBLISHED",
      featured: true,
      images: [
        { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", alt: "Living Room", order: 0, isHero: true },
      ],
      amenityIds: ["air-conditioning", "high-speed-wifi", "smart-tv", "private-pool", "gym-access", "spa-access", "water-views", "private-terrace"],
    },
  ];

  for (const propertyData of properties) {
    const { images, amenityIds, ...property } = propertyData;

    const created = await prisma.property.upsert({
      where: { slug: property.slug },
      update: {},
      create: {
        ...property,
        images: {
          create: images.map((img, index) => ({
            url: img.url,
            alt: img.alt,
            order: img.order ?? index,
            isHero: img.isHero ?? false,
          })),
        },
        amenities: {
          create: amenityIds.map((amenityId) => ({
            amenityId: amenityId,
          })),
        },
      },
    });
    console.log(`Created property: ${created.name}`);
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
