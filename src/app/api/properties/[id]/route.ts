import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET single property
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const property = await prisma.property.findUnique({
      where: { id },
      include: {
        images: { orderBy: { order: "asc" } },
        amenities: { include: { amenity: true } },
      },
    });

    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(property);
  } catch (error) {
    console.error("Error fetching property:", error);
    return NextResponse.json(
      { error: "Failed to fetch property" },
      { status: 500 }
    );
  }
}

// PUT update property
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json();

    // Delete existing images and recreate
    await prisma.propertyImage.deleteMany({
      where: { propertyId: id },
    });

    const property = await prisma.property.update({
      where: { id },
      data: {
        name: data.name,
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
        status: data.status,
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

    return NextResponse.json(property);
  } catch (error) {
    console.error("Error updating property:", error);
    return NextResponse.json(
      { error: "Failed to update property" },
      { status: 500 }
    );
  }
}

// DELETE property
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.property.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting property:", error);
    return NextResponse.json(
      { error: "Failed to delete property" },
      { status: 500 }
    );
  }
}
