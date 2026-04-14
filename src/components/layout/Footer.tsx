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
    { label: "+44 7442 165270", href: "tel:+447442165270" },
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
              className="inline-block mt-4 text-gray-500 hover:text-white transition-colors"
              aria-label="Airbnb"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 18.275c-.457-.86-1.014-1.88-1.636-3.039-.636-1.187-1.327-2.508-1.953-3.844-.592-1.262-1.093-2.47-1.456-3.476-.371-1.03-.573-1.82-.573-2.305 0-1.666.913-3.203 2.4-4.03C9.413 1.17 10.206.91 11 .803V.8h.002c.003 0 .005 0 .008.001L11.999.8c.795.108 1.588.368 2.218.782 1.487.826 2.4 2.363 2.4 4.029 0 .485-.202 1.275-.573 2.305-.363 1.005-.864 2.214-1.456 3.476-.626 1.336-1.317 2.657-1.953 3.844-.622 1.16-1.18 2.179-1.636 3.039h.002zm0 2.181c.16.294.298.548.41.754.153.28.402.28.555 0 .112-.206.25-.46.41-.754.495-.91 1.161-2.118 1.883-3.464.722-1.348 1.5-2.835 2.2-4.33.7-1.494 1.329-2.998 1.795-4.285.467-1.287.747-2.358.747-3.066C20.001 2.47 16.423 0 12.001 0S4 2.47 4 5.611c0 .708.28 1.779.747 3.066.466 1.287 1.095 2.791 1.795 4.284.7 1.496 1.478 2.983 2.2 4.331.722 1.346 1.388 2.554 1.883 3.464h-.624zm0-14.85a2.006 2.006 0 1 0 0-4.012 2.006 2.006 0 0 0 0 4.012z" />
              </svg>
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
