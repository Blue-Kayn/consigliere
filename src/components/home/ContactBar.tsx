import Link from "next/link";

const contacts = [
  {
    label: "London",
    value: "+44 20 7123 4567",
    href: "tel:+442071234567",
  },
  {
    label: "Dubai",
    value: "+971 4 123 4567",
    href: "tel:+97141234567",
  },
  {
    label: "Email",
    value: "advisory@theconsigliere.com",
    href: "mailto:advisory@theconsigliere.com",
  },
];

export function ContactBar() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 py-12 px-8 bg-[var(--charcoal)] text-white">
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
