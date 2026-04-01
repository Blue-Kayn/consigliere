import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateSlug } from "@/lib/utils";

// GET all properties with filters
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const city = searchParams.get("city");
    const listingType = searchParams.get("listingType");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const bedrooms = searchParams.get("bedrooms");
    const status = searchParams.get("status");
    const featured = searchParams.get("featured");

    const where: any = {};

    if (city) where.city = city;
    if (listingType) where.listingType = listingType;
    if (status) where.status = status;
    if (featured === "true") where.featured = true;
    if (bedrooms) where.bedrooms = { gte: parseInt(bedrooms) };

    // Price filtering based on listing type
    if (minPrice || maxPrice) {
      if (listingType === "SHORT_TERM") {
        where.pricePerNight = {};
        if (minPrice) where.pricePerNight.gte = parseInt(minPrice);
        if (maxPrice) where.pricePerNight.lte = parseInt(maxPrice);
      } else if (listingType === "LONG_TERM") {
        where.pricePerMonth = {};
        if (minPrice) where.pricePerMonth.gte = parseInt(minPrice);
        if (maxPrice) where.pricePerMonth.lte = parseInt(maxPrice);
      } else if (listingType === "FOR_SALE") {
        where.salePrice = {};
        if (minPrice) where.salePrice.gte = parseInt(minPrice);
        if (maxPrice) where.salePrice.lte = parseInt(maxPrice);
      }
    }

    const properties = await prisma.property.findMany({
      where,
      include: {
        images: { orderBy: { order: "asc" } },
        amenities: { include: { amenity: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}

// POST new property
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Generate slug from name
    const slug = generateSlug(data.name);

    // Check if slug already exists
    const existingProperty = await prisma.property.findUnique({
      where: { slug },
    });

    const finalSlug = existingProperty
      ? `${slug}-${Date.now()}`
      : slug;

    const property = await prisma.property.create({
      data: {
        name: data.name,
        slug: finalSlug,
        tagline: data.tagline || null,
        description: data.description,
        city: data.city,
        neighborhood: data.neighborhood,
        propertyType: data.propertyType,
        listingType: data.listingType,
        bookingMode: data.bookingMode,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        sleeps: data.sleeps || null,
        sizeSqm: data.sizeSqm || null,
        pricePerNight: data.pricePerNight || null,
        pricePerMonth: data.pricePerMonth || null,
        salePrice: data.salePrice || null,
        currency: data.currency,
        cleaningFee: data.cleaningFee || null,
        featured: data.featured || false,
        status: data.status || "DRAFT",
        images: {
          create: (data.images || []).map((img: any, index: number) => ({
            url: img.url,
            alt: img.alt || null,
            order: index,
            isHero: index === 0,
          })),
        },
      },
      include: {
        images: true,
      },
    });

    return NextResponse.json(property, { status: 201 });
  } catch (error) {
    console.error("Error creating property:", error);
    return NextResponse.json(
      { error: "Failed to create property" },
      { status: 500 }
    );
  }
}
