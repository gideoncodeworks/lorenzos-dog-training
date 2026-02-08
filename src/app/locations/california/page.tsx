import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Dog Training in California - San Diego & San Jose",
  description: "Professional dog training across California with Lorenzo's Dog Training Team. Expert trainers in San Diego and San Jose offering obedience, behavioral modification, and specialty training programs for all breeds.",
  openGraph: {
    title: "Dog Training in California - Lorenzo's Dog Training Team",
    description: "Professional dog training in San Diego and San Jose, California.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const trainers = [
  { name: "René Stephan", city: "San Jose, CA", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/ef1ea8c4-b6b9-46de-a453-696556bd212e/Rene+Stephan+TC+2024+360_x_360.jpg" },
  { name: "Fred Harris", city: "San Diego, CA", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/b2440868-900f-4a53-ab3c-31a4b16f05c4/fred+harris.jpg" },
];

export default function CaliforniaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#091353]" style={{ paddingTop: "calc(var(--header-height) + 48px)", paddingBottom: "48px" }}>
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#C8102E] mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Locations</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Dog Training in <span className="text-[#C8102E]">California</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our California trainers serve families across San Diego and San Jose with Lorenzo&apos;s proven methods and professional, in-home guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <h2 className="section-title mb-4">
            Meet Our California <span className="text-[#C8102E]">Trainers</span>
          </h2>
          <p className="text-gray-600 mb-10">2 professional trainers serving communities across San Diego and San Jose.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            {trainers.map((t) => (
              <div key={t.name} className="card card-elevated overflow-hidden p-0">
                <div className="aspect-square relative">
                  <Image src={t.image} alt={t.name} fill className="object-cover object-top" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#091353] mb-1">{t.name}</h3>
                  <p className="text-sm text-[#C8102E] font-medium mb-2">Professional Trainer</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4" />{t.city}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#C8102E]">
        <div className="container-site text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started in California?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Contact us to connect with a California-based trainer near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-lg bg-white text-[#C8102E] hover:bg-gray-100">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:8664364959" className="btn btn-outline btn-lg text-white border-white/40">
              <Phone className="w-5 h-5" /> (866) 436-4959
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
