import Link from "next/link";
import Image from "next/image";

const services = [
  {
    label: "Short & Long-Term",
    title: "Residences",
    description:
      "From a week to a year, our curated portfolio of luxury residences offers the privacy of home with the service of a five-star hotel. Each property is hand-selected and personally inspected by our team.",
    features: [
      "Fully serviced apartments and townhouses",
      "Corporate relocation specialists",
      "Flexible terms, discreet arrangements",
      "24/7 concierge support",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    href: "/stay",
    cta: "Browse Residences",
    reverse: false,
  },
  {
    label: "Acquisitions & Investment",
    title: "Property Sales",
    description:
      "Whether you're acquiring a trophy asset, diversifying into Dubai's tax-efficient market, or seeking off-market opportunities — we source, negotiate, and secure properties others can't access.",
    features: [
      "Off-market and pre-launch access",
      "Investment analysis and projections",
      "End-to-end transaction management",
      "Post-purchase property management",
    ],
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    href: "/buy",
    cta: "Explore Opportunities",
    reverse: true,
  },
  {
    label: "Bespoke Service",
    title: "Advisory",
    description:
      "Sometimes you need more than a property — you need a strategy. Portfolio restructuring, market timing, visa considerations, tax optimization. We work with your advisors to deliver comprehensive solutions.",
    features: [
      "Golden Visa property structuring",
      "Portfolio diversification strategy",
      "Market intelligence and timing",
      "Complete confidentiality",
    ],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    href: "/contact",
    cta: "Request Consultation",
    reverse: false,
  },
];

export function ServicesSection() {
  return (
    <section>
      {services.map((service, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] ${
            service.reverse ? "lg:direction-rtl" : ""
          }`}
          style={{ direction: service.reverse ? "rtl" : "ltr" }}
        >
          {/* Image */}
          <div
            className="relative h-[280px] sm:h-[400px] lg:h-auto bg-cover bg-center"
            style={{ direction: "ltr" }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="flex flex-col justify-center p-6 sm:p-8 lg:p-24 bg-[var(--cream)]"
            style={{ direction: "ltr" }}
          >
            <div className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--gold)] mb-6">
              {service.label}
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-[2.5rem] mb-6">{service.title}</h3>

            <p className="font-editorial text-lg lg:text-xl text-[var(--gray-600)] mb-8 leading-relaxed">
              {service.description}
            </p>

            <ul className="mb-10 space-y-4">
              {service.features.map((feature, i) => (
                <li
                  key={i}
                  className="py-3 border-b border-black/10 text-[0.95rem] flex items-center gap-4"
                >
                  <span className="text-[var(--gold)]">—</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link href={service.href} className="btn btn-primary self-start">
              {service.cta}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
