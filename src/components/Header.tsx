"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const locations = [
  { name: "Ohio", href: "/locations/ohio" },
  { name: "California", href: "/locations/california" },
  { name: "Florida", href: "/locations/florida" },
  { name: "Texas", href: "/locations/texas" },
  { name: "Georgia", href: "/locations/georgia" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Facilities", href: "/facilities" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1555692729179-8Q0ESRP06PEARQEN2Z21/logo_dog_550.png"
              alt="Lorenzo's Dog Training Team"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-contain bg-white/10 p-0.5"
            />
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg leading-tight block">Lorenzo&apos;s Dog</span>
              <span className="text-[#DAA520] text-sm font-medium block">Training Team</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#DAA520] px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                onBlur={() => setTimeout(() => setLocationsOpen(false), 200)}
                className="text-gray-300 hover:text-[#DAA520] px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
              >
                Locations
                <ChevronDown className={`w-4 h-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-[#1a1a2e] border border-[#B8860B]/20 rounded-lg shadow-xl py-2">
                  {locations.map((loc) => (
                    <Link
                      key={loc.name}
                      href={loc.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-[#DAA520] hover:bg-white/5 transition-colors"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:8664364959"
              className="hidden md:flex items-center gap-2 bg-[#B8860B] hover:bg-[#DAA520] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              (866) 436-4959
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1a1a2e] border-t border-[#B8860B]/20 pb-4">
          <div className="px-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-[#DAA520] text-base font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 py-2">
              <span className="text-[#B8860B] text-sm font-semibold uppercase tracking-wider">Locations</span>
            </div>
            {locations.map((loc) => (
              <Link
                key={loc.name}
                href={loc.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-8 py-2 text-gray-400 hover:text-[#DAA520] text-sm transition-colors"
              >
                {loc.name}
              </Link>
            ))}
            <a
              href="tel:8664364959"
              className="flex items-center gap-2 mx-4 mt-4 bg-[#B8860B] hover:bg-[#DAA520] text-white px-5 py-3 rounded-full text-sm font-semibold justify-center transition-colors"
            >
              <Phone className="w-4 h-4" />
              (866) 436-4959
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
