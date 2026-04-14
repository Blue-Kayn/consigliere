import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const footerLinks = {
  stay: [
    { label: "Short-Term", href: "/stay?type=short-term" },
    { label: "Long-Term", href: "/stay?type=long-term" },
    { label: "Corporate", href: "/stay?type=corporate" },
  ],
  buy: [
    { label: "London", href: "/buy?city=london" },
    { label: "Dubai", href: "/buy?city=dubai" },
{ label: "Investment", href: "/buy?type=investment" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  contact: [
    { label: "+44 7301 825175", href: "tel:+447301825175" },
    { label: "+971 50 748 6977", href: "tel:+971507486977" },
    { label: "info@consigliere-residences.com", href: "mailto:info@consigliere-residences.com" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white pt-20 pb-8 px-8 lg:px-16">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo color="light" showText={false} />
            <a
              href="https://www.airbnb.ae/users/profile/1470668248408517733"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-2.5 bg-[#ff5a5f] text-white text-sm font-bold rounded-lg hover:bg-[#e04a4f] transition-colors"
            >
              Book on Airbnb
            </a>
            <p className="text-gray-500 text-sm mt-4 max-w-[280px] leading-relaxed">
              Your trusted advisor in luxury property. Connecting discerning
              clients with exceptional homes in London and Dubai.
            </p>
          </div>

          {/* Stay */}
          <div>
            <h4 className="font-serif text-xs tracking-[0.15em] mb-6 text-gold">
              STAY
            </h4>
            <ul className="space-y-3">
              {footerLinks.stay.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Buy */}
          <div>
            <h4 className="font-serif text-xs tracking-[0.15em] mb-6 text-gold">
              BUY
            </h4>
            <ul className="space-y-3">
              {footerLinks.buy.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="font-serif text-xs tracking-[0.15em] mb-6 text-gold">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-serif text-xs tracking-[0.15em] mt-8 mb-6 text-gold">
              CONTACT
            </h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <span>&copy; 2025 The Consigliere. All rights reserved.</span>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
