# THE CONSIGLIERE — Complete Build Package for Claude Code

## WHAT YOU'RE BUILDING

A luxury property platform for London and Dubai with:
- **Public Website**: Home, Stay, Buy, Locations, About, Contact pages
- **Admin CMS**: Dashboard to add/edit properties, manage bookings and enquiries
- **Booking System**: Stripe payments for instant bookings, enquiry forms for high-end properties

---

## DESIGN REFERENCE

The complete design is in `consigliere-complete-website.html`. This is your visual reference — replicate this exactly in Next.js/React.

### Design Specifications

**Colors:**
```css
--black: #0d0d0d
--charcoal: #1a1a1a
--white: #ffffff
--cream: #f9f7f4
--warm-gray: #f5f3f0
--gold: #b8986e
--gold-light: #d4bc94
--gold-dark: #96784a
--gray-400: #a0a0a0
--gray-500: #6b6b6b
--gray-600: #4a4a4a
```

**Fonts:**
- Headings: `Cinzel` (Google Fonts) — serif, elegant
- Body: `Inter` (Google Fonts) — clean sans-serif
- Accent/Editorial: `Cormorant Garamond` — for taglines and quotes

**Spacing:**
- Sections: `6rem` to `8rem` vertical padding
- Content max-width: `1400px`
- Generous white space — this is a luxury brand

**Logo:**
- SVG of suited figure with "C" as head
- Included in the HTML file — extract and use as component

---

## FILE STRUCTURE TO CREATE

```
consigliere/
├── public/
│   ├── videos/
│   │   └── hero.mp4                    # Video for homepage hero
│   └── logo.svg                        # The Consigliere logo
│
├── prisma/
│   ├── schema.prisma                   # Database schema (provided below)
│   └── seed.ts                         # Seed data for amenities
│
├── src/
│   ├── app/
│   │   ├── globals.css                 # Tailwind + custom styles
│   │   ├── layout.tsx                  # Root layout with fonts
│   │   │
│   │   ├── (public)/                   # Public pages (with header/footer)
│   │   │   ├── layout.tsx              # Includes Header + Footer
│   │   │   ├── page.tsx                # HOME
│   │   │   ├── stay/
│   │   │   │   └── page.tsx            # STAY - Browse rentals
│   │   │   ├── buy/
│   │   │   │   └── page.tsx            # BUY - Browse sales
│   │   │   ├── locations/
│   │   │   │   ├── page.tsx            # LOCATIONS overview
│   │   │   │   ├── london/page.tsx
│   │   │   │   └── dubai/page.tsx
│   │   │   ├── property/
│   │   │   │   └── [slug]/page.tsx     # Property detail
│   │   │   ├── about/
│   │   │   │   └── page.tsx            # ABOUT
│   │   │   └── contact/
│   │   │       └── page.tsx            # CONTACT with form
│   │   │
│   │   ├── (booking)/
│   │   │   ├── book/[slug]/page.tsx    # Booking flow
│   │   │   └── confirmation/[ref]/page.tsx
│   │   │
│   │   ├── (admin)/                    # Admin area (protected)
│   │   │   └── admin/
│   │   │       ├── layout.tsx          # Admin layout with sidebar
│   │   │       ├── page.tsx            # Dashboard
│   │   │       ├── properties/
│   │   │       │   ├── page.tsx        # List all properties
│   │   │       │   ├── new/page.tsx    # Add new property
│   │   │       │   └── [id]/
│   │   │       │       └── edit/page.tsx
│   │   │       ├── bookings/
│   │   │       │   └── page.tsx        # View all bookings
│   │   │       ├── enquiries/
│   │   │       │   └── page.tsx        # View all enquiries
│   │   │       └── settings/
│   │   │           └── page.tsx
│   │   │
│   │   └── api/
│   │       ├── properties/
│   │       │   ├── route.ts            # GET all, POST new
│   │       │   └── [id]/route.ts       # GET one, PUT, DELETE
│   │       ├── bookings/
│   │       │   └── route.ts
│   │       ├── enquiries/
│   │       │   └── route.ts
│   │       ├── upload/
│   │       │   └── route.ts            # Image upload endpoint
│   │       └── webhooks/
│   │           └── stripe/route.ts
│   │
│   ├── components/
│   │   ├── ui/                         # Base UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   └── slider.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Public site header
│   │   │   ├── Footer.tsx              # Public site footer
│   │   │   ├── AdminSidebar.tsx        # Admin navigation
│   │   │   └── AdminHeader.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── HeroVideo.tsx           # Video hero section
│   │   │   ├── IntroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── LocationsSection.tsx
│   │   │   ├── ApproachSection.tsx
│   │   │   ├── FeaturedProperties.tsx
│   │   │   └── CTASection.tsx
│   │   │
│   │   ├── property/
│   │   │   ├── PropertyCard.tsx
│   │   │   ├── PropertyGrid.tsx
│   │   │   ├── PropertyGallery.tsx
│   │   │   ├── PropertyDetails.tsx
│   │   │   ├── PropertyAmenities.tsx
│   │   │   ├── PropertyMap.tsx
│   │   │   └── BookingSidebar.tsx
│   │   │
│   │   ├── search/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── FilterPanel.tsx
│   │   │   ├── MapView.tsx
│   │   │   └── PropertyList.tsx
│   │   │
│   │   ├── forms/
│   │   │   ├── EnquiryForm.tsx
│   │   │   ├── BookingForm.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── PropertyForm.tsx        # Admin: add/edit property
│   │   │
│   │   └── admin/
│   │       ├── StatsCards.tsx
│   │       ├── RecentBookings.tsx
│   │       ├── RecentEnquiries.tsx
│   │       ├── PropertyTable.tsx
│   │       ├── BookingTable.tsx
│   │       ├── EnquiryTable.tsx
│   │       └── ImageUploader.tsx
│   │
│   ├── lib/
│   │   ├── prisma.ts                   # Prisma client
│   │   ├── stripe.ts                   # Stripe config
│   │   ├── auth.ts                     # Auth config
│   │   ├── uploadthing.ts              # Upload config
│   │   └── utils.ts                    # Helpers (cn, formatPrice, etc.)
│   │
│   └── types/
│       └── index.ts                    # TypeScript types
│
├── .env.local
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## STEP-BY-STEP BUILD ORDER

### STEP 1: Project Setup
```bash
npx create-next-app@latest consigliere --typescript --tailwind --eslint --app --src-dir
cd consigliere

# Install dependencies
npm install prisma @prisma/client
npm install next-auth @auth/prisma-adapter bcryptjs
npm install zod react-hook-form @hookform/resolvers
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-select @radix-ui/react-slider @radix-ui/react-checkbox
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react
npm install framer-motion
npm install react-map-gl mapbox-gl
npm install react-day-picker date-fns
npm install stripe @stripe/stripe-js
npm install uploadthing @uploadthing/react
npm install @types/bcryptjs @types/mapbox-gl --save-dev

# Initialize Prisma
npx prisma init
```

### STEP 2: Configure Tailwind
Update `tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1a1a1a",
        cream: "#f9f7f4",
        "warm-gray": "#f5f3f0",
        gold: {
          DEFAULT: "#b8986e",
          light: "#d4bc94",
          dark: "#96784a",
        },
      },
      fontFamily: {
        serif: ["Cinzel", "serif"],
        sans: ["Inter", "sans-serif"],
        editorial: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

### STEP 3: Global Styles
Update `src/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');

@layer base {
  body {
    @apply font-sans text-charcoal bg-white;
    font-size: 15px;
    line-height: 1.7;
  }

  h1, h2, h3 {
    @apply font-serif font-normal tracking-wide;
    line-height: 1.3;
  }
}

@layer components {
  .btn {
    @apply inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-medium tracking-widest uppercase transition-all duration-300;
  }

  .btn-primary {
    @apply bg-charcoal text-white hover:bg-black;
  }

  .btn-outline {
    @apply bg-transparent border border-charcoal text-charcoal hover:bg-charcoal hover:text-white;
  }

  .btn-gold {
    @apply bg-gold text-white hover:bg-gold-dark;
  }

  .section-padding {
    @apply py-24 px-8 lg:px-16;
  }

  .container-wide {
    @apply max-w-7xl mx-auto;
  }
}
```

### STEP 4: Database Schema
Copy the full Prisma schema (from previous instructions) to `prisma/schema.prisma`, then:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### STEP 5: Build Components (Reference the HTML design)

For each component, reference the corresponding section in `consigliere-complete-website.html`:

| Component | HTML Section to Reference |
|-----------|--------------------------|
| `Header.tsx` | `.header` and `.nav-container` |
| `Footer.tsx` | `.footer` |
| `HeroVideo.tsx` | `.hero` section with video |
| `IntroSection.tsx` | `.intro` section |
| `ServicesSection.tsx` | `.services-section` with `.service-row` |
| `LocationsSection.tsx` | `.locations-section` with `.location-card` |
| `ApproachSection.tsx` | `.approach-section` with `.approach-grid` |
| `PropertyCard.tsx` | `.property-card` |
| `SearchBar.tsx` | `.search-container` |
| `FilterPanel.tsx` | `.filters-bar` |

### STEP 6: Build Pages

**Home Page (`src/app/(public)/page.tsx`):**
```tsx
import { HeroVideo } from "@/components/home/HeroVideo"
import { IntroSection } from "@/components/home/IntroSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { LocationsSection } from "@/components/home/LocationsSection"
import { ApproachSection } from "@/components/home/ApproachSection"
import { FeaturedProperties } from "@/components/home/FeaturedProperties"
import { CTASection } from "@/components/home/CTASection"
import { ContactBar } from "@/components/home/ContactBar"

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <IntroSection />
      <ServicesSection />
      <LocationsSection />
      <ApproachSection />
      <FeaturedProperties />
      <CTASection />
      <ContactBar />
    </>
  )
}
```

### STEP 7: Build Admin Dashboard

**Admin Layout (`src/app/(admin)/admin/layout.tsx`):**
```tsx
import { AdminSidebar } from "@/components/layout/AdminSidebar"
import { AdminHeader } from "@/components/layout/AdminHeader"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="ml-64">
        <AdminHeader />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
```

**Admin Sidebar Navigation:**
```tsx
// src/components/layout/AdminSidebar.tsx
const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Properties", href: "/admin/properties", icon: Building },
  { name: "Bookings", href: "/admin/bookings", icon: Calendar },
  { name: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]
```

**Admin Dashboard (`src/app/(admin)/admin/page.tsx`):**
```tsx
import { StatsCards } from "@/components/admin/StatsCards"
import { RecentBookings } from "@/components/admin/RecentBookings"
import { RecentEnquiries } from "@/components/admin/RecentEnquiries"

export default async function AdminDashboard() {
  // Fetch stats from database
  const stats = await getStats()
  const bookings = await getRecentBookings()
  const enquiries = await getRecentEnquiries()

  return (
    <div>
      <h1 className="text-2xl font-serif mb-8">Dashboard</h1>
      
      <StatsCards stats={stats} />
      
      <div className="grid grid-cols-2 gap-8 mt-8">
        <RecentBookings bookings={bookings} />
        <RecentEnquiries enquiries={enquiries} />
      </div>
    </div>
  )
}
```

### STEP 8: Property Form (Add/Edit)

**Key Features:**
- Multi-step form or tabbed interface
- Image upload with drag-and-drop (Uploadthing)
- Map picker for location (Mapbox)
- Amenities checkboxes
- Pricing fields based on listing type
- Booking mode selection

```tsx
// src/components/forms/PropertyForm.tsx
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { propertySchema } from "@/lib/validations"
import { ImageUploader } from "@/components/admin/ImageUploader"
import { MapPicker } from "@/components/admin/MapPicker"

export function PropertyForm({ property }: { property?: Property }) {
  const form = useForm({
    resolver: zodResolver(propertySchema),
    defaultValues: property || {
      name: "",
      city: "LONDON",
      listingType: "SHORT_TERM",
      bookingMode: "INSTANT_BOOK",
      // ... other defaults
    }
  })

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Tab 1: Basic Info */}
      <section>
        <h2>Basic Information</h2>
        <Input label="Property Name" {...form.register("name")} />
        <Input label="Tagline" {...form.register("tagline")} />
        <Textarea label="Description" {...form.register("description")} />
        <Select label="City" options={["LONDON", "DUBAI"]} {...form.register("city")} />
        <Input label="Neighborhood" {...form.register("neighborhood")} />
        <Select label="Property Type" options={["APARTMENT", "PENTHOUSE", "TOWNHOUSE", "VILLA", "HOUSE"]} />
        <Select label="Listing Type" options={["SHORT_TERM", "LONG_TERM", "FOR_SALE"]} />
        <Select label="Booking Mode" options={["INSTANT_BOOK", "REQUEST_TO_BOOK", "ENQUIRY_ONLY"]} />
      </section>

      {/* Tab 2: Details */}
      <section>
        <h2>Details</h2>
        <Input type="number" label="Bedrooms" {...form.register("bedrooms")} />
        <Input type="number" label="Bathrooms" {...form.register("bathrooms")} />
        <Input type="number" label="Sleeps" {...form.register("sleeps")} />
        <Input type="number" label="Size (m²)" {...form.register("sizeSqm")} />
      </section>

      {/* Tab 3: Pricing */}
      <section>
        <h2>Pricing</h2>
        {listingType === "SHORT_TERM" && (
          <Input type="number" label="Price per Night" {...form.register("pricePerNight")} />
        )}
        {listingType === "LONG_TERM" && (
          <Input type="number" label="Price per Month" {...form.register("pricePerMonth")} />
        )}
        {listingType === "FOR_SALE" && (
          <Input type="number" label="Sale Price" {...form.register("salePrice")} />
        )}
        <Select label="Currency" options={["GBP", "AED", "USD", "EUR"]} />
        <Input type="number" label="Cleaning Fee" {...form.register("cleaningFee")} />
      </section>

      {/* Tab 4: Images */}
      <section>
        <h2>Images</h2>
        <ImageUploader 
          images={form.watch("images")} 
          onUpload={(urls) => form.setValue("images", urls)}
        />
      </section>

      {/* Tab 5: Location */}
      <section>
        <h2>Location</h2>
        <MapPicker 
          value={{ lat: form.watch("latitude"), lng: form.watch("longitude") }}
          onChange={(coords) => {
            form.setValue("latitude", coords.lat)
            form.setValue("longitude", coords.lng)
          }}
        />
      </section>

      {/* Tab 6: Amenities */}
      <section>
        <h2>Amenities</h2>
        <AmenitiesSelector 
          selected={form.watch("amenities")}
          onChange={(ids) => form.setValue("amenities", ids)}
        />
      </section>

      <div className="flex gap-4 mt-8">
        <Button type="submit" variant="primary">
          {property ? "Update Property" : "Create Property"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
```

### STEP 9: Image Upload

```tsx
// src/components/admin/ImageUploader.tsx
"use client"

import { UploadDropzone } from "@uploadthing/react"
import { X } from "lucide-react"

export function ImageUploader({ images, onUpload, onRemove }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-video bg-gray-100 rounded overflow-hidden">
            <img src={img.url} alt="" className="w-full h-full object-cover" />
            <button 
              onClick={() => onRemove(i)}
              className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
            >
              <X size={14} />
            </button>
            {i === 0 && (
              <span className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1">
                HERO
              </span>
            )}
          </div>
        ))}
      </div>
      
      <UploadDropzone
        endpoint="propertyImage"
        onClientUploadComplete={(res) => {
          onUpload([...images, ...res.map(r => ({ url: r.url }))])
        }}
      />
      <p className="text-sm text-gray-500 mt-2">
        First image will be the hero. Drag to reorder.
      </p>
    </div>
  )
}
```

### STEP 10: API Routes

**Properties API (`src/app/api/properties/route.ts`):**
```typescript
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

// GET all properties (with filters)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  
  const city = searchParams.get("city")
  const listingType = searchParams.get("listingType")
  const minPrice = searchParams.get("minPrice")
  const maxPrice = searchParams.get("maxPrice")
  const bedrooms = searchParams.get("bedrooms")
  
  const properties = await prisma.property.findMany({
    where: {
      status: "PUBLISHED",
      ...(city && { city }),
      ...(listingType && { listingType }),
      ...(bedrooms && { bedrooms: { gte: parseInt(bedrooms) } }),
    },
    include: {
      images: { orderBy: { order: "asc" } },
    },
    orderBy: { createdAt: "desc" },
  })
  
  return NextResponse.json(properties)
}

// POST new property (admin only)
export async function POST(request: Request) {
  // Check admin auth
  const session = await getServerSession(authOptions)
  if (session?.user?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  
  const data = await request.json()
  
  const property = await prisma.property.create({
    data: {
      ...data,
      slug: generateSlug(data.name),
      images: {
        create: data.images.map((img, i) => ({
          url: img.url,
          order: i,
          isHero: i === 0,
        }))
      },
      amenities: {
        create: data.amenityIds.map(id => ({
          amenityId: id,
        }))
      }
    },
  })
  
  return NextResponse.json(property)
}
```

---

## ADMIN DASHBOARD DESIGN

```
┌─────────────────────────────────────────────────────────────────────────┐
│ ┌──────────────┐                                                        │
│ │              │  THE CONSIGLIERE                                       │
│ │    LOGO      │  ADMIN                                                 │
│ │              │                                                        │
│ ├──────────────┤─────────────────────────────────────────────────────── │
│ │              │                                                        │
│ │  Dashboard   │  DASHBOARD                                             │
│ │              │  ─────────────────────────────────────────────────────│
│ │  Properties  │                                                        │
│ │    • All     │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌────│
│ │    • Add New │  │   £45,200   │ │     12      │ │      5      │ │  77│
│ │              │  │   Revenue   │ │   Bookings  │ │   Pending   │ │List│
│ │  Bookings    │  │  This Month │ │  This Month │ │  Enquiries  │ │Prop│
│ │              │  └─────────────┘ └─────────────┘ └─────────────┘ └────│
│ │  Enquiries   │                                                        │
│ │              │  RECENT BOOKINGS                         [View All →] │
│ │  Settings    │  ┌─────────────────────────────────────────────────── │
│ │              │  │ Ref      │ Property    │ Guest      │ Dates      │S│
│ │              │  ├──────────┼─────────────┼────────────┼────────────┼─│
│ │              │  │ #CON-123 │ Grosvenor   │ J. Smith   │ Mar 15-22  │✓│
│ │              │  │ #CON-124 │ Palm Villa  │ A. Khan    │ Mar 18-25  │⏳│
│ │              │  │ #CON-125 │ Chelsea Res │ M. Johnson │ Mar 20-27  │✓│
│ │              │  └─────────────────────────────────────────────────── │
│ │              │                                                        │
│ │              │  RECENT ENQUIRIES                        [View All →] │
│ │              │  ┌─────────────────────────────────────────────────── │
│ │              │  │ From         │ Type     │ Property   │ Status     │
│ │              │  ├──────────────┼──────────┼────────────┼────────────│
│ │              │  │ John Doe     │ Purchase │ —          │ NEW 🔴     │
│ │              │  │ Sarah Ahmed  │ Stay     │ Mayfair    │ NEW 🔴     │
│ │              │  │ Mike Chen    │ Stay     │ Dubai Mar  │ RESPONDED  │
│ │              │  └─────────────────────────────────────────────────── │
│ └──────────────┴───────────────────────────────────────────────────────│
└─────────────────────────────────────────────────────────────────────────┘
```

```
PROPERTIES LIST PAGE
┌─────────────────────────────────────────────────────────────────────────┐
│  PROPERTIES                                      [+ Add New Property]  │
│  ───────────────────────────────────────────────────────────────────── │
│                                                                         │
│  ┌─────┬───────────────────┬──────────┬───────────┬──────────┬────────┐│
│  │     │ Property          │ Location │ Type      │ Price    │ Status ││
│  ├─────┼───────────────────┼──────────┼───────────┼──────────┼────────┤│
│  │ [img]│ The Grosvenor    │ London   │ Short-Term│ £2,500/nt│ Published│
│  │ [img]│ Palm Villa       │ Dubai    │ For Sale  │ AED 45M  │ Published│
│  │ [img]│ Chelsea Residence│ London   │ Long-Term │ £18K/mo  │ Draft   ││
│  │ [img]│ Marina Penthouse │ Dubai    │ Short-Term│ $1,500/nt│ Published│
│  └─────┴───────────────────┴──────────┴───────────┴──────────┴────────┘│
│                                                                         │
│  Showing 1-10 of 24                              [< Prev] [1] [2] [Next>]│
└─────────────────────────────────────────────────────────────────────────┘
```

```
ADD/EDIT PROPERTY PAGE
┌─────────────────────────────────────────────────────────────────────────┐
│  ADD NEW PROPERTY                           [Save Draft] [Publish]      │
│  ───────────────────────────────────────────────────────────────────── │
│                                                                         │
│  [Basic Info] [Details] [Pricing] [Images] [Location] [Amenities]       │
│  ═══════════                                                            │
│                                                                         │
│  Property Name *                                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │ The Grosvenor Suite                                                 ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                         │
│  Tagline                                                                │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │ Elegant living in the heart of Mayfair                              ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                         │
│  Description *                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │ A stunning period property with soaring ceilings and original       ││
│  │ features, just steps from Green Park...                             ││
│  │                                                                     ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                         │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │
│  │ City *          │  │ Listing Type *  │  │ Booking Mode *  │         │
│  │ [London      ▼] │  │ [Short-Term  ▼] │  │ [Instant Book▼] │         │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘         │
│                                                                         │
│  ┌─────────────────┐  ┌─────────────────┐                               │
│  │ Property Type * │  │ Neighborhood *  │                               │
│  │ [Apartment   ▼] │  │ [Mayfair      ] │                               │
│  └─────────────────┘  └─────────────────┘                               │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## DEPLOYMENT CHECKLIST

1. **Database**: Set up PostgreSQL on Supabase/Railway/PlanetScale
2. **Environment Variables**: Add all to Vercel
3. **Stripe**: Set up webhook endpoint
4. **Mapbox**: Get access token
5. **Uploadthing**: Set up for image uploads
6. **Domain**: Connect your domain
7. **Run migrations**: `npx prisma migrate deploy`

---

## PROMPT TO SEND CLAUDE CODE

Copy and paste this entire message:

```
I need you to build a luxury property website called "The Consigliere" for London and Dubai.

I have:
1. A complete HTML/CSS design reference (attached: consigliere-complete-website.html)
2. A hero video file (hero-video.mp4)
3. Comprehensive build instructions (attached: CLAUDE-CODE-BUILD-INSTRUCTIONS.md)

Please:
1. Review the HTML design file - this is your visual reference
2. Follow the build instructions exactly
3. Create the Next.js project structure as specified
4. Build both the public website AND the admin dashboard
5. Make sure the admin can add/edit properties with image uploads

Tech stack: Next.js 14 (App Router), TypeScript, Tailwind CSS, Prisma + PostgreSQL, Stripe, Mapbox, Uploadthing

Start by:
1. Setting up the project
2. Configuring Tailwind with the custom colors and fonts from the design
3. Creating the database schema
4. Building the Header and Footer components (reference the HTML)
5. Building the Homepage with video hero

The design must match the HTML reference exactly - it's a luxury brand, so attention to detail matters.
```

Then attach these files:
- `consigliere-complete-website.html`
- `CLAUDE-CODE-BUILD-INSTRUCTIONS.md`
- `hero-video.mp4`
- `consigliere-spec.md` (the original spec document)
