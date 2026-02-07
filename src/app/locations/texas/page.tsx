import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Dog Training in Texas - Houston, San Antonio & Fort Worth",
  description: "Professional dog training in Texas with Lorenzo's Dog Training Team. Expert trainers in Houston, San Antonio, and Fort Worth offering obedience, behavioral modification, and specialty training for all breeds and temperaments.",
  openGraph: {
    title: "Dog Training in Texas - Lorenzo's Dog Training Team",
    description: "Professional dog training in Houston, San Antonio, and Fort Worth, Texas.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const trainers = [
  { name: "Emmanuel Kangah", city: "Houston, TX", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/2771f220-7464-41d0-9e1c-e39bebd5aac3/Emmanuel-Kanga.jpg" },
  { name: "Jacob Perez", city: "San Antonio, TX", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/79a486b2-7c90-47cd-9caf-847b52e57d03/Jacob+Perez_TC+360_x_360.jpg" },
  { name: "Eric Hardaway", city: "Fort Worth, TX", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1556635933443-8ITQA7O2PHZI622WQQYM/Eric-Hardaway-360.jpg" },
  { name: "Carolina Don", city: "San Antonio, TX", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/3dfd5ce0-31e5-4039-aa01-b8f78f2b6ab5/Carolina+Don+tc+360_x_360.jpg" },
];

export default function TexasPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#DAA520] mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Locations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Dog Training in <span className="text-[#DAA520]">Texas</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">Professional dog training across Texas, serving Houston, San Antonio, and Fort Worth with Lorenzo&apos;s proven training methods and expert professional trainers.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-12">Meet Our Texas <span className="text-[#B8860B]">Trainers</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square">
                  <Image src={t.image} alt={t.name} fill className="object-cover object-top" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-1">{t.name}</h3>
                  <p className="text-sm text-[#B8860B] font-medium mb-2">Professional Trainer</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4" />{t.city}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started in Texas?</h2>
          <p className="text-gray-300 mb-8">Contact us to connect with a Texas-based trainer near you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#DAA520] text-white px-8 py-4 rounded-full font-semibold transition-colors">Contact Us <ArrowRight className="w-5 h-5" /></Link>
            <a href="tel:8664364959" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-colors"><Phone className="w-5 h-5" /> (866) 436-4959</a>
          </div>
        </div>
      </section>
    </>
  );
}
