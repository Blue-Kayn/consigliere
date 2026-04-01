# THE CONSIGLIERE
## Luxury Property Platform - Technical Specification & Design Document

---

# EXECUTIVE SUMMARY

The Consigliere is a luxury property platform serving discerning clients in London and Dubai. The platform offers:
- **Short-term luxury rentals** (serviced apartments)
- **Long-term rentals** (6+ months)
- **Property sales** (off-plan and resale)

Inspired by Plum Guide and OneFineStay's curated, editorial approach — but with a distinct "trusted advisor" brand positioning that emphasizes discretion, insider access, and white-glove service.

---

# PART 1: DESIGN SYSTEM

## 1.1 Brand Identity

### Logo
- The Consigliere stickman figure with "C" head
- Primary: Dark version on light backgrounds
- Secondary: Gold/light version on dark backgrounds

### Color Palette

```
PRIMARY
- Charcoal Black: #1a1a1a (text, headers)
- Pure White: #ffffff (backgrounds)
- Off-White/Cream: #f8f6f3 (secondary backgrounds, cards)

ACCENT
- Gold: #c9a962 (CTAs, highlights, luxury touches)
- Gold Hover: #b8944d

NEUTRALS
- Light Gray: #f5f5f5 (borders, dividers)
- Medium Gray: #888888 (secondary text)
- Dark Gray: #555555 (body text)

STATUS
- Success: #2d5a3d (bookings confirmed)
- Error: #8b2635 (validation errors)
- Info: #1a4a6e (informational)
```

### Typography

```
HEADINGS
- Font: Cinzel (serif) — elegance, establishment
- Weights: 400, 500, 600
- Letter-spacing: 0.05em - 0.15em

BODY
- Font: Montserrat or Inter (sans-serif) — clean, modern, readable
- Weights: 300, 400, 500, 600
- Letter-spacing: 0.01em

HIERARCHY
- H1: 48-64px / Cinzel 500
- H2: 32-40px / Cinzel 500  
- H3: 24-28px / Cinzel 400
- H4: 18-20px / Montserrat 600
- Body: 16px / Montserrat 400
- Small: 14px / Montserrat 400
- Caption: 12px / Montserrat 500 (uppercase, letter-spaced)
```

### Design Principles (Inspired by Plum Guide/OneFineStay)

1. **White Space is Luxury** — generous margins, breathing room
2. **Photography First** — full-bleed hero images, gallery-forward
3. **Minimal UI** — reduce visual noise, let properties shine
4. **Editorial Voice** — descriptions read like magazine copy
5. **Subtle Interactions** — smooth transitions, understated hover states
6. **Trust Signals** — curated badges, hand-picked messaging

---

# PART 2: INFORMATION ARCHITECTURE

## 2.1 Sitemap

```
HOME
├── Search/Browse Properties
│   ├── Map View (Mapbox)
│   ├── List View
│   └── Filters (location, price, bedrooms, type, availability)
│
├── Property Detail Page
│   ├── Gallery (full-screen capable)
│   ├── Description & Amenities
│   ├── Location & Neighborhood
│   ├── Pricing & Availability Calendar
│   ├── Booking Form / Enquiry Form
│   └── Similar Properties
│
├── Locations
│   ├── London
│   │   ├── Mayfair
│   │   ├── Kensington
│   │   ├── Chelsea
│   │   ├── Marylebone
│   │   └── [Other neighborhoods]
│   └── Dubai
│       ├── Downtown Dubai
│       ├── DIFC
│       ├── Palm Jumeirah
│       ├── Dubai Marina
│       └── [Other areas]
│
├── Services
│   ├── Short-Term Rentals
│   ├── Long-Term Rentals
│   └── Property Sales
│
├── About
│   ├── Our Story
│   ├── The Consigliere Standard
│   └── Contact
│
├── Journal/Blog (optional - editorial content)
│
└── Account
    ├── Login/Register
    ├── My Bookings
    ├── Saved Properties
    └── Profile Settings

ADMIN CMS (Separate subdomain: admin.theconsigliere.com)
├── Dashboard
├── Properties
│   ├── Add New Property
│   ├── Edit Property
│   └── Manage Listings
├── Bookings
│   ├── All Bookings
│   ├── Pending Enquiries
│   └── Calendar View
├── Users/Guests
├── Payments
├── Settings
└── Analytics
```

## 2.2 Property Types & Listing Modes

### Property Categories
1. **Rental - Short Term** (1 night - 3 months)
2. **Rental - Long Term** (6+ months)
3. **For Sale** (off-plan or resale)

### Booking Modes
1. **Instant Book** — Guest can book directly with payment
2. **Request to Book** — Guest submits request, admin approves
3. **Enquiry Only** — Contact form, no online booking (for ultra-luxury/sales)

---

# PART 3: PAGE DESIGNS

## 3.1 Homepage

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER (sticky, transparent → white on scroll)                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ [LOGO]     RENT  BUY  LOCATIONS  ABOUT     [SEARCH] [LOGIN]││
│  └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  HERO (Full viewport, stunning property image)                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │                    [Background Image]                       ││
│  │                                                             ││
│  │         "Your Trusted Advisor in                           ││
│  │          Luxury Property"                                   ││
│  │                                                             ││
│  │    ┌─────────────────────────────────────────────┐         ││
│  │    │ WHERE        │ DATES        │ GUESTS │ [SEARCH]│       ││
│  │    │ London ▼     │ Check in/out │  2 ▼   │         │       ││
│  │    └─────────────────────────────────────────────┘         ││
│  │                                                             ││
│  │         ○ Rent Short-Term  ○ Rent Long-Term  ○ Buy         ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CURATED COLLECTIONS (Horizontal scroll or grid)                │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  "Hand-Picked For You"                                      ││
│  │                                                             ││
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       ││
│  │  │  [IMG]   │ │  [IMG]   │ │  [IMG]   │ │  [IMG]   │       ││
│  │  │          │ │          │ │          │ │          │       ││
│  │  │ Mayfair  │ │ Palm     │ │ Chelsea  │ │ Downtown │       ││
│  │  │ Penthouse│ │ Villa    │ │ Townhouse│ │ Loft     │       ││
│  │  │ 4 bed    │ │ 5 bed    │ │ 3 bed    │ │ 2 bed    │       ││
│  │  │ £2,500/nt│ │ $1,800/nt│ │ £8,000/mo│ │ FOR SALE │       ││
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘       ││
│  └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  LOCATIONS (Two columns or tabs)                                │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  ┌─────────────────────┐  ┌─────────────────────┐          ││
│  │  │                     │  │                     │          ││
│  │  │    [London Image]   │  │    [Dubai Image]    │          ││
│  │  │                     │  │                     │          ││
│  │  │       LONDON        │  │       DUBAI         │          ││
│  │  │                     │  │                     │          ││
│  │  │    45 Properties    │  │    32 Properties    │          ││
│  │  │                     │  │                     │          ││
│  │  │   [Explore →]       │  │   [Explore →]       │          ││
│  │  └─────────────────────┘  └─────────────────────┘          ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  THE CONSIGLIERE STANDARD (Trust section)                       │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  "Every Property, Personally Vetted"                        ││
│  │                                                             ││
│  │  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐            ││
│  │  │  [✓]   │  │  [◎]   │  │  [★]   │  │  [☎]   │            ││
│  │  │ Hand-  │  │ Premium│  │ Design │  │ 24/7   │            ││
│  │  │ Picked │  │ Quality│  │ Forward│  │ Support│            ││
│  │  └────────┘  └────────┘  └────────┘  └────────┘            ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SERVICES OVERVIEW                                              │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐││
│  │  │ SHORT-TERM      │ │ LONG-TERM       │ │ SALES           │││
│  │  │ RENTALS         │ │ RENTALS         │ │                 │││
│  │  │                 │ │                 │ │                 │││
│  │  │ From 1 night    │ │ 6+ months       │ │ Investment &    │││
│  │  │ to 3 months     │ │ Corporate lets  │ │ lifestyle       │││
│  │  │                 │ │                 │ │ acquisitions    │││
│  │  │ [Explore →]     │ │ [Explore →]     │ │ [Enquire →]     │││
│  │  └─────────────────┘ └─────────────────┘ └─────────────────┘││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  FOOTER                                                         │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  [LOGO]                                                     ││
│  │                                                             ││
│  │  RENT          BUY           COMPANY        CONTACT         ││
│  │  Short-term    London        About          +44 xxx         ││
│  │  Long-term     Dubai         Standards      +971 xxx        ││
│  │  Corporate     Off-plan      Journal        hello@...       ││
│  │                                                             ││
│  │  ─────────────────────────────────────────────────────────  ││
│  │  © 2025 The Consigliere    Privacy  Terms  Instagram        ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

## 3.2 Search/Browse Page with Map

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SEARCH BAR (Refined)                                           │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ London, UK  │  15 Mar - 22 Mar  │  2 Guests  │  [Search]   ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  FILTERS BAR                                                    │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ [Price ▼] [Bedrooms ▼] [Type ▼] [Amenities ▼] [More ▼]     ││
│  │                                                             ││
│  │ Active: £500-2000/night  ×    2+ bedrooms  ×               ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
├───────────────────────────────┬─────────────────────────────────┤
│                               │                                 │
│  LISTINGS (Scrollable)        │  MAP (Mapbox - sticky)          │
│  ┌───────────────────────────┐│  ┌─────────────────────────────┐│
│  │                           ││  │                             ││
│  │  "24 properties"          ││  │    [Interactive Map]        ││
│  │  Sort: Recommended ▼      ││  │                             ││
│  │                           ││  │      ○ £1,200              ││
│  │  ┌───────────────────────┐││  │           ○ £950           ││
│  │  │ ┌─────────┐           │││  │                ○ £2,100    ││
│  │  │ │         │ Mayfair   │││  │      ○ £1,500              ││
│  │  │ │ [IMAGE] │ Penthouse │││  │                             ││
│  │  │ │         │           │││  │         ○ £800             ││
│  │  │ │         │ 3 bed • 2 │││  │                             ││
│  │  │ └─────────┘ bath      │││  │    ○ £1,850                ││
│  │  │             £1,200/nt │││  │                             ││
│  │  │             ★ 4.9     │││  │                             ││
│  │  │             [♡]       │││  │  [+ / -]  [⛶ Fullscreen]   ││
│  │  └───────────────────────┘││  │                             ││
│  │                           ││  │  □ Search as I move map     ││
│  │  ┌───────────────────────┐││  │                             ││
│  │  │ ┌─────────┐           │││  └─────────────────────────────┘│
│  │  │ │         │ Chelsea   │││                                 │
│  │  │ │ [IMAGE] │ Townhouse │││                                 │
│  │  │ │         │           │││                                 │
│  │  │ │         │ 4 bed • 3 │││                                 │
│  │  │ └─────────┘ bath      │││                                 │
│  │  │             £2,100/nt │││                                 │
│  │  │             ★ 5.0     │││                                 │
│  │  │             [♡]       │││                                 │
│  │  └───────────────────────┘││                                 │
│  │                           ││                                 │
│  │  [Load More]              ││                                 │
│  │                           ││                                 │
│  └───────────────────────────┘│                                 │
│                               │                                 │
└───────────────────────────────┴─────────────────────────────────┘
```

## 3.3 Property Detail Page

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  GALLERY (Full-width, masonry or hero + thumbnails)             │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ ┌─────────────────────────────┐ ┌──────────┐ ┌──────────┐  ││
│  │ │                             │ │          │ │          │  ││
│  │ │                             │ │ [IMG 2]  │ │ [IMG 3]  │  ││
│  │ │      [HERO IMAGE]           │ │          │ │          │  ││
│  │ │                             │ ├──────────┤ ├──────────┤  ││
│  │ │                             │ │          │ │          │  ││
│  │ │                             │ │ [IMG 4]  │ │ [IMG 5]  │  ││
│  │ │                             │ │          │ │          │  ││
│  │ └─────────────────────────────┘ └──────────┘ └──────────┘  ││
│  │                                                             ││
│  │                         [View All 24 Photos]                ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CONTENT + BOOKING SIDEBAR                                      │
│  ┌─────────────────────────────────┬───────────────────────────┐│
│  │                                 │                           ││
│  │  THE WESTBOURNE                 │  ┌───────────────────────┐││
│  │  Notting Hill, London           │  │                       │││
│  │                                 │  │  From £1,200 / night  │││
│  │  3 Bedrooms • 2 Bathrooms       │  │                       │││
│  │  Sleeps 6 • 180 m²              │  │  ┌─────────┬─────────┐│││
│  │                                 │  │  │ CHECK-IN│CHECK-OUT││││
│  │  ─────────────────────────────  │  │  │ 15 Mar  │ 22 Mar  ││││
│  │                                 │  │  └─────────┴─────────┘│││
│  │  "A stunning period property    │  │                       │││
│  │  with soaring ceilings and      │  │  ┌─────────────────┐  │││
│  │  original features, just steps  │  │  │ GUESTS    2 ▼   │  │││
│  │  from Portobello Road..."       │  │  └─────────────────┘  │││
│  │                                 │  │                       │││
│  │  [Read More]                    │  │  ───────────────────  │││
│  │                                 │  │  7 nights   £8,400   │││
│  │  ─────────────────────────────  │  │  Cleaning     £150   │││
│  │                                 │  │  Service fee  £420   │││
│  │  HIGHLIGHTS                     │  │  ───────────────────  │││
│  │  ┌────┐ ┌────┐ ┌────┐ ┌────┐   │  │  Total      £8,970   │││
│  │  │WiFi│ │A/C │ │Lift│ │Park│   │  │                       │││
│  │  └────┘ └────┘ └────┘ └────┘   │  │  [  BOOK NOW  ]       │││
│  │                                 │  │                       │││
│  │  ─────────────────────────────  │  │  or                   │││
│  │                                 │  │                       │││
│  │  AMENITIES                      │  │  [  ENQUIRE  ]        │││
│  │                                 │  │                       │││
│  │  Kitchen & Dining               │  │  No payment yet       │││
│  │  • Fully equipped kitchen       │  │                       │││
│  │  • Dishwasher                   │  └───────────────────────┘││
│  │  • Nespresso machine            │                           ││
│  │  • Wine fridge                  │                           ││
│  │                                 │                           ││
│  │  Living & Entertainment         │                           ││
│  │  • 65" Smart TV                 │                           ││
│  │  • Sonos sound system           │                           ││
│  │  • Netflix, Prime Video         │                           ││
│  │                                 │                           ││
│  │  ─────────────────────────────  │                           ││
│  │                                 │                           ││
│  │  LOCATION                       │                           ││
│  │  ┌───────────────────────────┐  │                           ││
│  │  │                           │  │                           ││
│  │  │     [Map Preview]         │  │                           ││
│  │  │                           │  │                           ││
│  │  └───────────────────────────┘  │                           ││
│  │                                 │                           ││
│  │  Notting Hill, Royal Borough    │                           ││
│  │  of Kensington and Chelsea      │                           ││
│  │                                 │                           ││
│  │  • 5 min walk to Notting Hill   │                           ││
│  │    Gate Station                 │                           ││
│  │  • Portobello Market 2 min      │                           ││
│  │                                 │                           ││
│  │  ─────────────────────────────  │                           ││
│  │                                 │                           ││
│  │  HOUSE RULES                    │                           ││
│  │  • Check-in: 3:00 PM            │                           ││
│  │  • Check-out: 11:00 AM          │                           ││
│  │  • No smoking                   │                           ││
│  │  • No parties                   │                           ││
│  │                                 │                           ││
│  │  ─────────────────────────────  │                           ││
│  │                                 │                           ││
│  │  CANCELLATION POLICY            │                           ││
│  │  Flexible - Full refund if      │                           ││
│  │  cancelled 7+ days before...    │                           ││
│  │                                 │                           ││
│  └─────────────────────────────────┴───────────────────────────┘│
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SIMILAR PROPERTIES                                             │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  "You May Also Like"                                        ││
│  │                                                             ││
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       ││
│  │  │  [IMG]   │ │  [IMG]   │ │  [IMG]   │ │  [IMG]   │       ││
│  │  │ Property │ │ Property │ │ Property │ │ Property │       ││
│  │  │ Name     │ │ Name     │ │ Name     │ │ Name     │       ││
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘       ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                         │
└─────────────────────────────────────────────────────────────────┘
```

---

# PART 4: TECHNICAL ARCHITECTURE

## 4.1 Tech Stack

### Frontend
```
Framework:        Next.js 14+ (App Router)
Styling:          Tailwind CSS
UI Components:    Shadcn/ui (customized)
State Management: Zustand or React Context
Forms:            React Hook Form + Zod validation
Maps:             Mapbox GL JS + react-map-gl
Date Picker:      react-day-picker
Image Gallery:    yet-another-react-lightbox
Animations:       Framer Motion
```

### Backend
```
Runtime:          Node.js
Framework:        Next.js API Routes (or separate Express/Fastify)
Database:         PostgreSQL (via Supabase or PlanetScale)
ORM:              Prisma
Authentication:   NextAuth.js (Auth.js)
File Storage:     Cloudinary or AWS S3
Email:            Resend or SendGrid
```

### Payments
```
Primary:          Stripe
  - Checkout Sessions for bookings
  - Payment Intents for deposits
  - Stripe Connect (future: for property owners)
  
Secondary:        Bank transfer option for high-value/sales
```

### Infrastructure
```
Hosting:          Vercel (frontend) + Railway/Render (if separate backend)
Database:         Supabase (PostgreSQL + Auth + Storage)
CDN:              Vercel Edge / Cloudflare
Maps:             Mapbox
Analytics:        Plausible or Mixpanel
Monitoring:       Sentry
```

## 4.2 Database Schema

```prisma
// prisma/schema.prisma

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  phone         String?
  role          UserRole  @default(GUEST)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  bookings      Booking[]
  enquiries     Enquiry[]
  savedProperties SavedProperty[]
}

enum UserRole {
  GUEST
  ADMIN
  SUPER_ADMIN
}

model Property {
  id              String    @id @default(cuid())
  slug            String    @unique
  name            String
  tagline         String?
  description     String    @db.Text
  
  // Location
  city            City
  neighborhood    String
  address         String?
  latitude        Float
  longitude       Float
  
  // Type & Mode
  propertyType    PropertyType
  listingType     ListingType
  bookingMode     BookingMode
  
  // Details
  bedrooms        Int
  bathrooms       Float
  sleeps          Int
  sizeSqm         Int?
  
  // Pricing
  pricePerNight   Decimal?  @db.Decimal(10, 2)
  pricePerMonth   Decimal?  @db.Decimal(10, 2)
  salePrice       Decimal?  @db.Decimal(12, 2)
  currency        Currency  @default(GBP)
  cleaningFee     Decimal?  @db.Decimal(10, 2)
  
  // Status
  status          PropertyStatus @default(DRAFT)
  featured        Boolean   @default(false)
  
  // Rules
  checkInTime     String    @default("15:00")
  checkOutTime    String    @default("11:00")
  minNights       Int       @default(1)
  maxNights       Int?
  
  // Timestamps
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  publishedAt     DateTime?
  
  // Relations
  images          PropertyImage[]
  amenities       PropertyAmenity[]
  bookings        Booking[]
  enquiries       Enquiry[]
  availability    Availability[]
  savedBy         SavedProperty[]
}

enum City {
  LONDON
  DUBAI
}

enum PropertyType {
  APARTMENT
  PENTHOUSE
  TOWNHOUSE
  VILLA
  HOUSE
}

enum ListingType {
  SHORT_TERM_RENTAL
  LONG_TERM_RENTAL
  FOR_SALE
}

enum BookingMode {
  INSTANT_BOOK
  REQUEST_TO_BOOK
  ENQUIRY_ONLY
}

enum Currency {
  GBP
  AED
  USD
  EUR
}

enum PropertyStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

model PropertyImage {
  id          String    @id @default(cuid())
  propertyId  String
  property    Property  @relation(fields: [propertyId], references: [id], onDelete: Cascade)
  url         String
  alt         String?
  order       Int       @default(0)
  isHero      Boolean   @default(false)
}

model Amenity {
  id          String    @id @default(cuid())
  name        String    @unique
  icon        String?
  category    AmenityCategory
  properties  PropertyAmenity[]
}

enum AmenityCategory {
  ESSENTIALS
  KITCHEN
  BATHROOM
  BEDROOM
  ENTERTAINMENT
  OUTDOOR
  SAFETY
  ACCESSIBILITY
  SERVICES
}

model PropertyAmenity {
  propertyId  String
  amenityId   String
  property    Property  @relation(fields: [propertyId], references: [id], onDelete: Cascade)
  amenity     Amenity   @relation(fields: [amenityId], references: [id])
  
  @@id([propertyId, amenityId])
}

model Availability {
  id          String    @id @default(cuid())
  propertyId  String
  property    Property  @relation(fields: [propertyId], references: [id], onDelete: Cascade)
  date        DateTime  @db.Date
  available   Boolean   @default(true)
  price       Decimal?  @db.Decimal(10, 2)  // Override price for this date
  
  @@unique([propertyId, date])
}

model Booking {
  id              String    @id @default(cuid())
  bookingRef      String    @unique @default(cuid())
  
  propertyId      String
  property        Property  @relation(fields: [propertyId], references: [id])
  userId          String
  user            User      @relation(fields: [userId], references: [id])
  
  checkIn         DateTime  @db.Date
  checkOut        DateTime  @db.Date
  guests          Int
  
  // Pricing
  nightlyRate     Decimal   @db.Decimal(10, 2)
  nights          Int
  subtotal        Decimal   @db.Decimal(10, 2)
  cleaningFee     Decimal   @db.Decimal(10, 2)
  serviceFee      Decimal   @db.Decimal(10, 2)
  total           Decimal   @db.Decimal(10, 2)
  currency        Currency
  
  // Status
  status          BookingStatus @default(PENDING)
  
  // Payment
  stripePaymentIntentId String?
  paidAt          DateTime?
  
  // Guest details
  guestName       String
  guestEmail      String
  guestPhone      String?
  specialRequests String?   @db.Text
  
  // Timestamps
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  confirmedAt     DateTime?
  cancelledAt     DateTime?
}

enum BookingStatus {
  PENDING
  CONFIRMED
  CANCELLED
  COMPLETED
}

model Enquiry {
  id          String    @id @default(cuid())
  
  propertyId  String?
  property    Property? @relation(fields: [propertyId], references: [id])
  userId      String?
  user        User?     @relation(fields: [userId], references: [id])
  
  type        EnquiryType
  
  name        String
  email       String
  phone       String?
  message     String    @db.Text
  
  // Optional booking details
  checkIn     DateTime? @db.Date
  checkOut    DateTime? @db.Date
  guests      Int?
  budget      String?
  
  status      EnquiryStatus @default(NEW)
  
  createdAt   DateTime  @default(now())
  respondedAt DateTime?
  notes       String?   @db.Text  // Admin notes
}

enum EnquiryType {
  RENTAL_ENQUIRY
  SALES_ENQUIRY
  GENERAL
}

enum EnquiryStatus {
  NEW
  IN_PROGRESS
  RESPONDED
  CLOSED
}

model SavedProperty {
  userId      String
  propertyId  String
  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  property    Property  @relation(fields: [propertyId], references: [id], onDelete: Cascade)
  savedAt     DateTime  @default(now())
  
  @@id([userId, propertyId])
}
```

## 4.3 API Routes Structure

```
/api
├── /auth
│   ├── [...nextauth]     # NextAuth handlers
│   
├── /properties
│   ├── GET /             # List properties (with filters)
│   ├── GET /[slug]       # Get single property
│   ├── GET /[slug]/availability  # Get availability calendar
│   ├── POST /            # Create property (admin)
│   ├── PUT /[id]         # Update property (admin)
│   └── DELETE /[id]      # Delete property (admin)
│   
├── /bookings
│   ├── GET /             # List user's bookings
│   ├── POST /            # Create booking
│   ├── GET /[id]         # Get booking details
│   ├── POST /[id]/cancel # Cancel booking
│   
├── /enquiries
│   ├── POST /            # Submit enquiry
│   ├── GET /             # List enquiries (admin)
│   ├── PUT /[id]         # Update enquiry status (admin)
│   
├── /payments
│   ├── POST /create-checkout-session
│   ├── POST /webhook     # Stripe webhook
│   
├── /users
│   ├── GET /me           # Get current user
│   ├── PUT /me           # Update profile
│   ├── GET /me/saved     # Get saved properties
│   ├── POST /me/saved    # Save property
│   └── DELETE /me/saved/[propertyId]  # Unsave property
│   
└── /admin
    ├── /dashboard        # Dashboard stats
    ├── /bookings         # All bookings management
    └── /users            # User management
```

## 4.4 Key Component Structure

```
/src
├── /app
│   ├── /(marketing)
│   │   ├── page.tsx              # Homepage
│   │   ├── /about
│   │   └── /locations
│   │       ├── /london
│   │       └── /dubai
│   │   
│   ├── /(properties)
│   │   ├── /search
│   │   │   └── page.tsx          # Search with map
│   │   └── /property
│   │       └── /[slug]
│   │           └── page.tsx      # Property detail
│   │   
│   ├── /(booking)
│   │   ├── /book/[slug]
│   │   │   └── page.tsx          # Booking flow
│   │   └── /confirmation/[ref]
│   │       └── page.tsx          # Booking confirmation
│   │   
│   ├── /(account)
│   │   ├── /login
│   │   ├── /register
│   │   ├── /dashboard
│   │   │   ├── page.tsx          # My bookings
│   │   │   ├── /saved
│   │   │   └── /settings
│   │   
│   ├── /(admin)
│   │   └── /admin
│   │       ├── page.tsx          # Admin dashboard
│   │       ├── /properties
│   │       │   ├── page.tsx      # List properties
│   │       │   ├── /new
│   │       │   └── /[id]/edit
│   │       ├── /bookings
│   │       ├── /enquiries
│   │       └── /settings
│   │   
│   ├── /api
│   │   └── [...]
│   │   
│   └── layout.tsx
│   
├── /components
│   ├── /ui                       # Shadcn components
│   ├── /layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── /property
│   │   ├── PropertyCard.tsx
│   │   ├── PropertyGallery.tsx
│   │   ├── PropertyMap.tsx
│   │   ├── AmenitiesList.tsx
│   │   └── AvailabilityCalendar.tsx
│   ├── /search
│   │   ├── SearchBar.tsx
│   │   ├── FilterPanel.tsx
│   │   ├── MapView.tsx
│   │   └── PropertyList.tsx
│   ├── /booking
│   │   ├── BookingForm.tsx
│   │   ├── BookingSidebar.tsx
│   │   ├── DateRangePicker.tsx
│   │   └── GuestSelector.tsx
│   └── /admin
│       ├── PropertyForm.tsx
│       ├── BookingTable.tsx
│       └── StatsCards.tsx
│   
├── /lib
│   ├── prisma.ts
│   ├── stripe.ts
│   ├── auth.ts
│   ├── mapbox.ts
│   └── utils.ts
│   
├── /hooks
│   ├── useProperties.ts
│   ├── useBooking.ts
│   └── useMap.ts
│   
└── /types
    └── index.ts
```

---

# PART 5: KEY FEATURES IMPLEMENTATION

## 5.1 Map Integration (Mapbox)

```tsx
// components/search/MapView.tsx
'use client';

import { useCallback, useState } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Property {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  pricePerNight: number;
  image: string;
}

interface MapViewProps {
  properties: Property[];
  onPropertyHover: (id: string | null) => void;
  hoveredPropertyId: string | null;
}

export function MapView({ properties, onPropertyHover, hoveredPropertyId }: MapViewProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [viewState, setViewState] = useState({
    latitude: 51.5074, // London default
    longitude: -0.1278,
    zoom: 12
  });

  return (
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/light-v11"
    >
      <NavigationControl position="bottom-right" />
      
      {properties.map((property) => (
        <Marker
          key={property.id}
          latitude={property.latitude}
          longitude={property.longitude}
        >
          <button
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium
              transition-all duration-200 shadow-md
              ${hoveredPropertyId === property.id 
                ? 'bg-black text-white scale-110' 
                : 'bg-white text-black hover:scale-105'}
            `}
            onClick={() => setSelectedProperty(property)}
            onMouseEnter={() => onPropertyHover(property.id)}
            onMouseLeave={() => onPropertyHover(null)}
          >
            £{property.pricePerNight.toLocaleString()}
          </button>
        </Marker>
      ))}

      {selectedProperty && (
        <Popup
          latitude={selectedProperty.latitude}
          longitude={selectedProperty.longitude}
          onClose={() => setSelectedProperty(null)}
          closeOnClick={false}
          className="property-popup"
        >
          <div className="w-64">
            <img 
              src={selectedProperty.image} 
              alt={selectedProperty.name}
              className="w-full h-32 object-cover rounded-t"
            />
            <div className="p-3">
              <h3 className="font-medium">{selectedProperty.name}</h3>
              <p className="text-sm text-gray-600">
                From £{selectedProperty.pricePerNight}/night
              </p>
            </div>
          </div>
        </Popup>
      )}
    </Map>
  );
}
```

## 5.2 Booking Flow with Stripe

```tsx
// app/api/payments/create-checkout-session/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      propertyId, 
      checkIn, 
      checkOut, 
      guests,
      guestName,
      guestEmail,
      guestPhone 
    } = body;

    // Get property details
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
    });

    if (!property) {
      return NextResponse.json({ error: 'Property not found' }, { status: 404 });
    }

    // Calculate pricing
    const nights = Math.ceil(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)
    );
    const subtotal = Number(property.pricePerNight) * nights;
    const cleaningFee = Number(property.cleaningFee) || 0;
    const serviceFee = subtotal * 0.05; // 5% service fee
    const total = subtotal + cleaningFee + serviceFee;

    // Create pending booking
    const booking = await prisma.booking.create({
      data: {
        propertyId,
        userId: body.userId, // From auth
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        guests,
        nightlyRate: property.pricePerNight!,
        nights,
        subtotal,
        cleaningFee,
        serviceFee,
        total,
        currency: property.currency,
        guestName,
        guestEmail,
        guestPhone,
        status: 'PENDING',
      },
    });

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: property.currency.toLowerCase(),
            product_data: {
              name: `${property.name} - ${nights} night${nights > 1 ? 's' : ''}`,
              description: `${checkIn} to ${checkOut}`,
              images: [property.images?.[0]?.url].filter(Boolean),
            },
            unit_amount: Math.round(total * 100), // Stripe expects cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/confirmation/${booking.bookingRef}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/property/${property.slug}?cancelled=true`,
      metadata: {
        bookingId: booking.id,
        bookingRef: booking.bookingRef,
      },
      customer_email: guestEmail,
    });

    // Update booking with Stripe session ID
    await prisma.booking.update({
      where: { id: booking.id },
      data: { stripePaymentIntentId: session.id },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Failed to create checkout' }, { status: 500 });
  }
}
```

## 5.3 Filter System

```tsx
// components/search/FilterPanel.tsx
'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

const PROPERTY_TYPES = ['apartment', 'penthouse', 'townhouse', 'villa', 'house'];
const AMENITIES = ['wifi', 'ac', 'parking', 'pool', 'gym', 'concierge', 'balcony'];

export function FilterPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [priceRange, setPriceRange] = useState([
    Number(searchParams.get('minPrice')) || 0,
    Number(searchParams.get('maxPrice')) || 5000
  ]);
  const [bedrooms, setBedrooms] = useState(searchParams.get('bedrooms') || 'any');
  const [propertyTypes, setPropertyTypes] = useState<string[]>(
    searchParams.get('types')?.split(',') || []
  );
  const [amenities, setAmenities] = useState<string[]>(
    searchParams.get('amenities')?.split(',') || []
  );

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams);
    
    params.set('minPrice', priceRange[0].toString());
    params.set('maxPrice', priceRange[1].toString());
    
    if (bedrooms !== 'any') params.set('bedrooms', bedrooms);
    else params.delete('bedrooms');
    
    if (propertyTypes.length) params.set('types', propertyTypes.join(','));
    else params.delete('types');
    
    if (amenities.length) params.set('amenities', amenities.join(','));
    else params.delete('amenities');
    
    router.push(`/search?${params.toString()}`);
  };

  const clearFilters = () => {
    setPriceRange([0, 5000]);
    setBedrooms('any');
    setPropertyTypes([]);
    setAmenities([]);
    router.push('/search');
  };

  return (
    <div className="bg-white border rounded-xl p-6 space-y-6">
      {/* Price Range */}
      <div>
        <h4 className="text-sm font-medium mb-4">Price per night</h4>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={10000}
          step={100}
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>£{priceRange[0].toLocaleString()}</span>
          <span>£{priceRange[1].toLocaleString()}+</span>
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <h4 className="text-sm font-medium mb-3">Bedrooms</h4>
        <div className="flex gap-2">
          {['any', '1', '2', '3', '4', '5+'].map((num) => (
            <button
              key={num}
              onClick={() => setBedrooms(num)}
              className={`
                px-4 py-2 rounded-full text-sm border transition
                ${bedrooms === num 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'}
              `}
            >
              {num === 'any' ? 'Any' : num}
            </button>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <h4 className="text-sm font-medium mb-3">Property type</h4>
        <div className="space-y-2">
          {PROPERTY_TYPES.map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={propertyTypes.includes(type)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setPropertyTypes([...propertyTypes, type]);
                  } else {
                    setPropertyTypes(propertyTypes.filter(t => t !== type));
                  }
                }}
              />
              <span className="text-sm capitalize">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h4 className="text-sm font-medium mb-3">Amenities</h4>
        <div className="grid grid-cols-2 gap-2">
          {AMENITIES.map((amenity) => (
            <label key={amenity} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={amenities.includes(amenity)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setAmenities([...amenities, amenity]);
                  } else {
                    setAmenities(amenities.filter(a => a !== amenity));
                  }
                }}
              />
              <span className="text-sm capitalize">{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t">
        <Button variant="outline" onClick={clearFilters} className="flex-1">
          Clear all
        </Button>
        <Button onClick={applyFilters} className="flex-1 bg-black hover:bg-gray-800">
          Apply filters
        </Button>
      </div>
    </div>
  );
}
```

---

# PART 6: ADMIN CMS

## 6.1 Admin Dashboard Overview

```
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ [LOGO] ADMIN                    Search...      [User Menu] ▼││
│  └─────────────────────────────────────────────────────────────┘│
├───────────────┬─────────────────────────────────────────────────┤
│               │                                                 │
│  NAVIGATION   │  DASHBOARD                                      │
│               │                                                 │
│  ○ Dashboard  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐│
│               │  │ £45,200 │ │   12    │ │   5     │ │   77    ││
│  ○ Properties │  │ Revenue │ │ Bookings│ │ Pending │ │ Listed  ││
│    ├ All      │  │ This Mo │ │ This Mo │ │ Enquiry │ │ Props   ││
│    ├ Add New  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘│
│    └ Drafts   │                                                 │
│               │  RECENT BOOKINGS                                │
│  ○ Bookings   │  ┌─────────────────────────────────────────────┐│
│    ├ All      │  │ Ref      │ Property  │ Guest   │ Status    ││
│    ├ Pending  │  ├─────────────────────────────────────────────┤│
│    └ Calendar │  │ #CON-123 │ Westbourne│ J.Smith │ CONFIRMED ││
│               │  │ #CON-124 │ Palm Villa│ A.Khan  │ PENDING   ││
│  ○ Enquiries  │  │ #CON-125 │ Chelsea   │ M.Jones │ CONFIRMED ││
│    ├ New      │  └─────────────────────────────────────────────┘│
│    └ All      │                                                 │
│               │  RECENT ENQUIRIES                               │
│  ○ Guests     │  ┌─────────────────────────────────────────────┐│
│               │  │ From     │ Type      │ Property │ Status   ││
│  ○ Payments   │  ├─────────────────────────────────────────────┤│
│               │  │ J.Doe    │ Rental    │ Mayfair  │ NEW  ●   ││
│  ○ Settings   │  │ S.Ahmed  │ Sales     │ General  │ NEW  ●   ││
│               │  └─────────────────────────────────────────────┘│
│               │                                                 │
└───────────────┴─────────────────────────────────────────────────┘
```

## 6.2 Property Form (Add/Edit)

```
┌─────────────────────────────────────────────────────────────────┐
│  ADD NEW PROPERTY                          [Save Draft] [Publish]│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TABS: [Basic Info] [Location] [Pricing] [Amenities] [Images]   │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  BASIC INFORMATION                                              │
│                                                                 │
│  Property Name *                                                │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ The Westbourne                                              ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  Tagline                                                        │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ A stunning period property in the heart of Notting Hill    ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  Description *                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ [Rich Text Editor]                                          ││
│  │                                                             ││
│  │ Step into this magnificent Victorian townhouse...           ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ Property Type   │  │ Listing Type    │  │ Booking Mode    │ │
│  │ [Townhouse ▼]   │  │ [Short-Term ▼]  │  │ [Instant Book▼] │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                   │
│  │Bedrooms│ │Bathrooms│ │ Sleeps │ │Size m² │                   │
│  │  [3]   │ │  [2]   │ │  [6]   │ │ [180]  │                   │
│  └────────┘ └────────┘ └────────┘ └────────┘                   │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  IMAGES                                                         │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌───────┐ ││
│  │  │ [IMG 1] │ │ [IMG 2] │ │ [IMG 3] │ │ [IMG 4] │ │  +    │ ││
│  │  │  HERO   │ │         │ │         │ │         │ │ ADD   │ ││
│  │  │   ×     │ │   ×     │ │   ×     │ │   ×     │ │       │ ││
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └───────┘ ││
│  │                                                             ││
│  │  Drag to reorder. First image is hero.                      ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

# PART 7: DEPLOYMENT CHECKLIST

## 7.1 Pre-Launch

```
□ Environment variables configured
  - DATABASE_URL
  - NEXTAUTH_SECRET
  - NEXTAUTH_URL
  - STRIPE_SECRET_KEY
  - STRIPE_PUBLISHABLE_KEY
  - STRIPE_WEBHOOK_SECRET
  - MAPBOX_ACCESS_TOKEN
  - CLOUDINARY_URL (or S3 credentials)
  - RESEND_API_KEY

□ Database migrations applied
□ Seed data loaded (amenities, test properties)
□ Stripe webhook configured
□ Email templates set up
□ Error tracking (Sentry) configured
□ Analytics set up
□ SSL certificate active
□ Domain configured
□ Admin user created
```

## 7.2 SEO & Performance

```
□ Meta tags on all pages
□ Open Graph images
□ Sitemap.xml generated
□ robots.txt configured
□ Image optimization (next/image)
□ Core Web Vitals passing
□ Mobile responsive testing
□ Cross-browser testing
```

---

# PART 8: FUTURE ENHANCEMENTS

1. **Multi-language support** (EN/AR for Dubai)
2. **Multi-currency with live rates**
3. **Owner portal** (for property owners to manage listings)
4. **Calendar sync** (iCal integration)
5. **Reviews & ratings system**
6. **Loyalty program**
7. **Mobile app** (React Native)
8. **AI-powered recommendations**
9. **Virtual tours** (360° images)
10. **Dynamic pricing engine**

---

# CONCLUSION

This document provides a comprehensive blueprint for building The Consigliere platform. The design emphasizes:

- **Luxury aesthetic** inspired by Plum Guide and OneFineStay
- **Clean, white-space-forward design** with the Consigliere brand identity
- **Full booking system** with Stripe payments
- **Interactive map** with Mapbox
- **Robust admin CMS** for property management
- **Scalable architecture** using modern tech stack

Ready to build with Claude Code. Start with:
1. Initialize Next.js project
2. Set up Prisma + database
3. Implement auth
4. Build core property listing pages
5. Add search with map
6. Implement booking flow
7. Build admin CMS
8. Deploy

---

*Document Version: 1.0*
*Last Updated: December 2024*
