"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, MapPin, Mail } from "lucide-react";

const locationGroups = [
  {
    region: "East Coast",
    states: [
      { name: "Ohio", href: "/locations/ohio", tag: "HQ" },
      { name: "Georgia", href: "/locations/georgia" },
      { name: "Florida", href: "/locations/florida" },
      { name: "Massachusetts", href: "#" },
      { name: "New Hampshire", href: "#" },
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
      { name: "California", href: "/locations/california", tag: "2 trainers" },
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0F1713] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs">
            <div className="hidden sm:flex items-center gap-5 text-gray-400">
              <a href="tel:8664364959" className="flex items-center gap-1.5 hover:text-[#E6B866] transition-colors">
                <Phone className="w-3 h-3" />
                (866) 436-4959
              </a>
              <a href="mailto:info@lorenzosdogtrainingteam.com" className="flex items-center gap-1.5 hover:text-[#E6B866] transition-colors">
                <Mail className="w-3 h-3" />
                info@lorenzosdogtrainingteam.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-400 ml-auto">
              <span className="hidden md:flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#C76B45]" />
                Serving 11 States Nationwide
              </span>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/lorenzosdogtrainingteam/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E6B866] transition-colors" aria-label="Instagram">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.facebook.com/LorenzosDogTrainingTeam/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E6B866] transition-colors" aria-label="Facebook">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.youtube.com/user/mydogtrainingteam" target="_blank" rel="noopener noreferrer" className="hover:text-[#E6B866] transition-colors" aria-label="YouTube">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`fixed top-9 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#141F19]/98 backdrop-blur-xl shadow-2xl shadow-black/20" : "bg-[#141F19]/90 backdrop-blur-md"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1555692729179-8Q0ESRP06PEARQEN2Z21/logo_dog_550.png"
                alt="Lorenzo's Dog Training Team"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
              />
              <div className="hidden sm:block leading-tight">
                <span className="text-white font-bold text-[15px] block group-hover:text-[#E6B866] transition-colors">Lorenzo&apos;s Dog</span>
                <span className="text-[#E6B866] text-xs font-semibold tracking-wider uppercase block">Training Team</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link href="/" className="text-gray-200 hover:text-white px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#E6B866] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-200 hover:text-white px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#E6B866] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                  {link.name}
                </Link>
              ))}

              {/* Locations Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                <button className="text-gray-200 hover:text-white px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors flex items-center gap-1.5 relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#E6B866] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
                  Locations
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`} />
                </button>
                {locationsOpen && (
                  <div className="absolute top-full right-0 mt-2 w-[420px] bg-[#141F19]/98 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/40 p-6 grid grid-cols-3 gap-6">
                    {locationGroups.map((group) => (
                      <div key={group.region}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#C76B45] mb-3">{group.region}</p>
                        <div className="space-y-1.5">
                          {group.states.map((s) => (
                            <Link
                              key={s.name}
                              href={s.href}
                              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#E6B866] transition-colors py-0.5"
                            >
                              {s.name}
                              {s.tag && (
                                <span className="text-[9px] bg-[#C76B45]/20 text-[#E6B866] px-1.5 py-0.5 rounded font-semibold">{s.tag}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 bg-[#C76B45] hover:bg-[#E6B866] text-white pl-5 pr-6 py-2.5 rounded-2xl text-xs font-bold tracking-wide uppercase transition-all duration-200 shadow-lg shadow-[#C76B45]/20 hover:shadow-[#E6B866]/30"
              >
                <Phone className="w-3.5 h-3.5" />
                Free Consultation
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-2xl transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 w-[300px] h-full bg-[#141F19] border-l border-white/10 overflow-y-auto">
            <div className="pt-24 pb-8 px-6">
              <nav className="space-y-1">
                {[{ name: "Home", href: "/" }, ...navLinks].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3.5 text-gray-200 hover:text-[#E6B866] hover:bg-white/5 rounded-lg text-sm font-medium tracking-wide uppercase transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-[#C76B45] mb-3">Locations</p>
                <div className="space-y-0.5">
                  {locationGroups.flatMap((g) => g.states).map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-gray-400 hover:text-[#E6B866] hover:bg-white/5 rounded-lg text-sm transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      {s.name}
                      {s.tag && <span className="text-[9px] bg-[#C76B45]/20 text-[#E6B866] px-1.5 py-0.5 rounded font-semibold ml-auto">{s.tag}</span>}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <a href="tel:8664364959" className="flex items-center justify-center gap-2 bg-[#C76B45] hover:bg-[#E6B866] text-white px-5 py-3.5 rounded-2xl text-sm font-bold tracking-wide uppercase transition-colors">
                  <Phone className="w-4 h-4" />
                  (866) 436-4959
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 border border-[#C76B45]/40 text-[#E6B866] hover:bg-[#C76B45]/10 px-5 py-3.5 rounded-2xl text-sm font-bold tracking-wide uppercase transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
