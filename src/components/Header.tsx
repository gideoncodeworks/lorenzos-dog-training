"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const locationGroups = [
  {
    region: "East Coast",
    states: [
      { name: "Ohio (HQ)", href: "/locations/ohio" },
      { name: "Georgia", href: "/locations/georgia" },
      { name: "Florida", href: "/locations/florida" },
    ],
  },
  {
    region: "Central",
    states: [
      { name: "Texas", href: "/locations/texas" },
      { name: "Indiana", href: "#" },
      { name: "Kansas", href: "#" },
      { name: "Kentucky", href: "#" },
      { name: "Michigan", href: "#" },
    ],
  },
  {
    region: "West Coast",
    states: [
      { name: "California", href: "/locations/california" },
    ],
  },
];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Facilities", href: "/facilities" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1555692729179-8Q0ESRP06PEARQEN2Z21/logo_dog_550.png"
              alt="Lorenzo's Dog Training Team"
              width={56}
              height={56}
              className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
            />
            <div className="hidden sm:block">
              <span className="text-[#091353] font-bold text-base lg:text-lg block leading-tight">
                Lorenzo&apos;s Dog Training
              </span>
              <span className="text-[#C8102E] text-xs font-semibold tracking-wider uppercase">
                Serious Results Since 1987
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#091353] hover:text-[#C8102E] px-5 py-3 text-[15px] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button className="text-[#091353] hover:text-[#C8102E] px-5 py-3 text-[15px] font-medium transition-colors flex items-center gap-1.5">
                Locations
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`} />
              </button>
              {locationsOpen && (
                <div className="absolute top-full right-0 mt-2 w-[420px] bg-white border border-gray-100 rounded-xl shadow-2xl p-6 grid grid-cols-3 gap-6">
                  {locationGroups.map((group) => (
                    <div key={group.region}>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#C8102E] mb-3">
                        {group.region}
                      </p>
                      <div className="space-y-2">
                        {group.states.map((s) => (
                          <Link
                            key={s.name}
                            href={s.href}
                            className="block text-sm text-gray-600 hover:text-[#091353] hover:translate-x-1 transition-all"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:8664364959"
              className="flex items-center gap-2 text-[#091353] text-[15px] font-semibold hover:text-[#C8102E] transition-colors"
            >
              <Phone className="w-5 h-5" />
              (866) 436-4959
            </a>
            <Link
              href="/contact"
              className="bg-[#C8102E] hover:bg-[#A00D24] text-white px-7 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wide transition-colors shadow-lg shadow-red-500/20"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:8664364959"
              className="flex items-center justify-center w-11 h-11 bg-[#091353] text-white rounded-lg"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-11 h-11 text-[#091353] bg-gray-100 rounded-lg"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 w-[320px] h-full bg-white overflow-y-auto shadow-2xl">
            <div className="pt-24 pb-8 px-6">
              <nav className="space-y-1">
                {[{ name: "Home", href: "/" }, ...navLinks].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-4 text-[#091353] hover:text-[#C8102E] hover:bg-gray-50 rounded-lg text-base font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="px-4 text-xs font-bold uppercase tracking-widest text-[#C8102E] mb-4">
                  Our Locations
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {locationGroups.flatMap((g) => g.states).slice(0, 6).map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 text-gray-600 hover:text-[#091353] hover:bg-gray-50 rounded-lg text-sm transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href="tel:8664364959"
                  className="flex items-center justify-center gap-3 w-full border-2 border-[#091353] text-[#091353] px-6 py-4 rounded-lg text-base font-bold transition-colors hover:bg-[#091353] hover:text-white"
                >
                  <Phone className="w-5 h-5" />
                  (866) 436-4959
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-[#C8102E] hover:bg-[#A00D24] text-white px-6 py-4 rounded-lg text-base font-bold transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
