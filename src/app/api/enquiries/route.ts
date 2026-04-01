import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all enquiries
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const status = searchParams.get("status");
    const type = searchParams.get("type");

    const where: any = {};
    if (status) where.status = status;
    if (type) where.type = type;

    const enquiries = await prisma.enquiry.findMany({
      where,
      include: {
        property: {
          select: { name: true, slug: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(enquiries);
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch enquiries" },
      { status: 500 }
    );
  }
}

// POST new enquiry
export async function POST(request: Request) {
  try {
    const data = await request.json();

    const enquiry = await prisma.enquiry.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || null,
        type: data.type,
        location: data.location || null,
        budget: data.budget || null,
        message: data.message,
        propertyId: data.propertyId || null,
        status: "NEW",
      },
    });

    // TODO: Send notification email to admin

    return NextResponse.json(enquiry, { status: 201 });
  } catch (error) {
    console.error("Error creating enquiry:", error);
    return NextResponse.json(
      { error: "Failed to create enquiry" },
      { status: 500 }
    );
  }
}
