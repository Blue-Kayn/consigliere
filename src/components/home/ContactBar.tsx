import Link from "next/link";

const contacts = [
  {
    label: "London",
    value: "+44 7301 825175",
    href: "tel:+447301825175",
  },
  {
    label: "Dubai",
    value: "+971 50 748 6977",
    href: "tel:+971507486977",
  },
  {
    label: "Email",
    value: "info@consigliere-residences.com",
    href: "mailto:info@consigliere-residences.com",
  },
];

export function ContactBar() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-16 py-8 sm:py-12 px-6 sm:px-8 bg-[var(--charcoal)] text-white">
      {contacts.map((contact) => (
        <div key={contact.label} className="text-center">
          <span className="block text-[0.65rem] tracking-[0.2em] uppercase text-[var(--gold)] mb-2">
            {contact.label}
          </span>
          <Link
            href={contact.href}
            className="text-lg hover:text-[var(--gold)] transition-colors"
          >
            {contact.value}
          </Link>
        </div>
      ))}
    </div>
  );
}
