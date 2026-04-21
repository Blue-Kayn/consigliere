import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateReference, calculateNights } from "@/lib/utils";

// GET all bookings
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const status = searchParams.get("status");
    const propertyId = searchParams.get("propertyId");

    const where: any = {};
    if (status) where.status = status;
    if (propertyId) where.propertyId = propertyId;

    const bookings = await prisma.booking.findMany({
      where,
      include: {
        property: {
          select: { name: true, slug: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

// POST new booking
export async function POST(request: Request) {
  try {
    const data = await request.json();

    const checkIn = new Date(data.checkIn);
    const checkOut = new Date(data.checkOut);
    const nights = calculateNights(checkIn, checkOut);

    // Get property for pricing
    const property = await prisma.property.findUnique({
      where: { id: data.propertyId },
    });

    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    const pricePerNight = property.pricePerNight || 0;
    const subtotal = pricePerNight * nights;
    const cleaningFee = property.cleaningFee || 0;
    const serviceFee = 0;
    const total = subtotal + cleaningFee;

    const booking = await prisma.booking.create({
      data: {
        reference: generateReference(),
        propertyId: data.propertyId,
        guestName: data.guestName,
        guestEmail: data.guestEmail,
        guestPhone: data.guestPhone || null,
        numberOfGuests: data.numberOfGuests,
        checkIn,
        checkOut,
        nights,
        subtotal,
        cleaningFee,
        serviceFee,
        total,
        currency: property.currency,
        specialRequests: data.specialRequests || null,
        status: "PENDING",
      },
      include: {
        property: {
          select: { name: true, slug: true },
        },
      },
    });

    // TODO: Create Stripe payment intent
    // TODO: Send confirmation email

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
