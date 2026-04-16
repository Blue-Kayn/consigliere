"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/stay", label: "Stay" },
  { href: "/buy", label: "Buy" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

interface HeaderProps {
  variant?: "dark" | "light";
}

export function Header({ variant = "light" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = variant === "dark" && !scrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-400",
        scrolled
          ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)]"
          : isDark
          ? "bg-transparent"
          : "bg-white"
      )}
    >
      <header className="flex justify-between items-center max-w-[1600px] mx-auto px-6 lg:px-16 py-4 lg:py-6">
        <Link href="/">
          <Logo color={isDark ? "light" : "dark"} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link",
                isDark ? "text-white" : "text-charcoal",
                pathname === link.href && "after:w-full"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/contact"
            className={cn(
              "btn",
              isDark ? "btn-outline-light" : "btn-outline"
            )}
          >
            Speak to an Advisor
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={isDark ? "text-white" : "text-charcoal"} size={24} />
          ) : (
            <Menu className={isDark ? "text-white" : "text-charcoal"} size={24} />
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-8 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-sm font-medium tracking-widest uppercase text-charcoal"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary w-full mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Speak to an Advisor
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
