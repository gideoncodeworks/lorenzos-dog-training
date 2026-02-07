import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Facilities", href: "/facilities" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Basic Obedience", href: "/services#basic-obedience" },
  { name: "Behavioral Modification", href: "/services#behavioral-modification" },
  { name: "Service Dog Training", href: "/services#service-dog" },
  { name: "Specialty Training", href: "/services#specialty" },
  { name: "Protection Training", href: "/services#protection" },
];

const locationLinks = [
  { name: "Ohio", href: "/locations/ohio" },
  { name: "California", href: "/locations/california" },
  { name: "Florida", href: "/locations/florida" },
  { name: "Texas", href: "/locations/texas" },
  { name: "Georgia", href: "/locations/georgia" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f1a] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#B8860B] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-white">
                  <path d="M30 85 C30 85 25 70 30 55 C35 40 45 35 50 30 C55 25 65 20 70 25 C75 30 80 40 75 50 C70 60 65 55 60 50 C55 45 50 50 50 55 C50 60 55 70 50 80 C45 90 35 90 30 85 Z" />
                  <circle cx="68" cy="32" r="4" />
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-base block">Lorenzo&apos;s Dog</span>
                <span className="text-[#B8860B] text-xs font-medium block">Training Team</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Over 40 years of keeping dogs out of shelters and in happy homes. Serious Training, Serious Results.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/lorenzosdogtrainingteam/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B8860B] transition-colors" aria-label="Follow us on Instagram">
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/LorenzosDogTrainingTeam/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B8860B] transition-colors" aria-label="Follow us on Facebook">
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.youtube.com/user/mydogtrainingteam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#B8860B] transition-colors" aria-label="Follow us on YouTube">
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-[#B8860B] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-[#B8860B] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                <span className="text-sm">4805 Orchard Rd.<br />Garfield Heights, OH 44128</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#B8860B] flex-shrink-0" />
                <a href="tel:8664364959" className="text-sm hover:text-[#B8860B] transition-colors">(866) 436-4959</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#B8860B] flex-shrink-0" />
                <a href="mailto:info@lorenzosdogtrainingteam.com" className="text-sm hover:text-[#B8860B] transition-colors">info@lorenzosdogtrainingteam.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white text-sm font-medium mb-3">Locations</h4>
              <div className="flex flex-wrap gap-2">
                {locationLinks.map((loc) => (
                  <Link key={loc.name} href={loc.href} className="text-xs bg-white/5 hover:bg-[#B8860B]/20 px-3 py-1.5 rounded-full transition-colors hover:text-[#B8860B]">
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Lorenzo&apos;s Dog Training Team. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Serving 11 states nationwide since 1987
          </p>
        </div>
      </div>
    </footer>
  );
}
