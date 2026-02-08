"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Facilities", href: "/facilities" },
  { name: "Locations", href: "/locations/ohio" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm" style={{ height: "var(--header-height)" }}>
      <div className="container-site h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1555692729179-8Q0ESRP06PEARQEN2Z21/logo_dog_550.png"
              alt="Lorenzo's Dog Training Team"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <div className="hidden sm:block">
              <span className="text-[#091353] font-bold text-base leading-tight block">
                Lorenzo&apos;s Dog Training
              </span>
              <span className="text-[#C8102E] text-xs font-semibold tracking-wide">
                Since 1987
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#091353] hover:text-[#C8102E] px-4 py-2 text-[15px] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:8664364959"
              className="flex items-center gap-2 text-[#091353] text-[15px] font-semibold hover:text-[#C8102E] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (866) 436-4959
            </a>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:8664364959"
              className="flex items-center justify-center w-10 h-10 bg-[#091353] text-white rounded-lg"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 text-[#091353] bg-gray-100 rounded-lg"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" style={{ top: "var(--header-height)" }}>
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-xl overflow-y-auto">
            <nav className="p-6">
              <div className="space-y-1">
                {[{ name: "Home", href: "/" }, ...navLinks].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-[#091353] hover:text-[#C8102E] hover:bg-gray-50 rounded-lg text-base font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 space-y-3">
                <a
                  href="tel:8664364959"
                  className="flex items-center justify-center gap-3 w-full border-2 border-[#091353] text-[#091353] px-5 py-3 rounded-lg text-base font-bold transition-colors hover:bg-[#091353] hover:text-white"
                >
                  <Phone className="w-5 h-5" />
                  (866) 436-4959
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-[#C8102E] hover:bg-[#A00D24] text-white px-5 py-3 rounded-lg text-base font-bold transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
