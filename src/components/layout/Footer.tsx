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
    { label: "Off-Plan", href: "/buy?type=off-plan" },
    { label: "Investment", href: "/buy?type=investment" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
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
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.655c-.467 2.31-2.553 4.16-4.768 4.16h-.002c-.357 0-.686-.063-.983-.178-.394-.152-.74-.395-1.028-.704a4.504 4.504 0 0 1-.758-1.158 12.632 12.632 0 0 1-.457-1.098c-.298-.828-.556-1.678-.793-2.418a27.2 27.2 0 0 0-.248-.77c-.09-.258-.184-.5-.292-.706a2.035 2.035 0 0 0-.342-.462.858.858 0 0 0-.368-.218.703.703 0 0 0-.245-.035c-.485 0-.91.455-1.014 1.088-.038.225-.038.47.008.73.104.6.39 1.264.826 1.92.435.654 1.02 1.3 1.685 1.86a.342.342 0 0 1 .032.482.341.341 0 0 1-.483.032c-.726-.612-1.365-1.318-1.844-2.04-.48-.72-.806-1.464-.934-2.2-.058-.34-.065-.668-.014-.977.068-.41.24-.785.506-1.078.282-.31.66-.498 1.083-.518h.095c.193 0 .38.038.558.113.226.096.422.248.59.443.168.196.308.436.424.707.118.272.215.554.304.808.04.115.082.236.124.362.242.723.505 1.56.8 2.378.14.39.295.77.468 1.102.174.332.36.614.564.82.186.19.382.32.597.393.197.068.41.098.638.098h.002c1.786 0 3.505-1.536 3.885-3.42.185-.92.07-1.836-.312-2.586-.384-.752-1.05-1.314-1.86-1.606a3.502 3.502 0 0 0-1.132-.185 3.45 3.45 0 0 0-1.98.623c-.348.243-.656.54-.914.882a.342.342 0 0 1-.478.073.342.342 0 0 1-.074-.478 4.115 4.115 0 0 1 1.082-1.046 4.13 4.13 0 0 1 2.364-.738c.465 0 .92.076 1.354.222.97.35 1.77 1.022 2.23 1.922.458.9.596 1.98.377 3.06z" />
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
