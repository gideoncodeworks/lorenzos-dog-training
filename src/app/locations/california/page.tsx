import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Phone, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Dog Training in California - San Diego, Sacramento & More",
  description: "Professional dog training across California with Lorenzo's Dog Training Team. Expert trainers in San Diego, Sacramento, San Jose, and surrounding areas offering obedience, behavioral modification, and specialty training programs for all breeds.",
  openGraph: {
    title: "Dog Training in California - Lorenzo's Dog Training Team",
    description: "Professional dog training in San Diego, Sacramento, San Jose and across California.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const trainers: { name: string; city: string; image?: string }[] = [
  { name: "René Stephan", city: "San Jose, CA", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/ef1ea8c4-b6b9-46de-a453-696556bd212e/Rene+Stephan+TC+2024+360_x_360.jpg" },
  { name: "Fred Harris", city: "San Diego, CA", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/b2440868-900f-4a53-ab3c-31a4b16f05c4/fred+harris.jpg" },
  { name: "Ascia Hancock", city: "Southern California" },
  { name: "Nai Saechao", city: "Sacramento, CA" },
  { name: "Anthony Powers", city: "San Diego, CA" },
  { name: "Colleen Boyer", city: "San Diego, CA" },
  { name: "Luis Garcia", city: "Oak Hills, CA" },
  { name: "Jacob Perez", city: "Lemon Grove, CA" },
  { name: "Carolina Don", city: "San Diego, CA" },
  { name: "Madison Cope", city: "Imperial Beach, CA" },
  { name: "Janice Saechao", city: "Sacramento, CA" },
  { name: "Daniella Zamudio", city: "San Diego, CA" },
  { name: "Xavier Martinez", city: "San Diego, CA" },
  { name: "Bryant Andre Nanez", city: "San Diego, CA" },
  { name: "Tony Hudgins", city: "Santee, CA" },
];

export default function CaliforniaPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#DAA520] mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Locations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Dog Training in <span className="text-[#DAA520]">California</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">Our largest team of trainers serves families across California, from San Diego to Sacramento. Professional dog training with Lorenzo&apos;s proven methods is never far away.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Meet Our California <span className="text-[#B8860B]">Trainers</span></h2>
          <p className="text-gray-600 mb-12">15 professional trainers serving communities across the Golden State.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {trainers.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                {t.image ? (
                  <div className="relative aspect-square">
                    <Image src={t.image} alt={t.name} fill className="object-cover object-top" />
                  </div>
                ) : (
                  <div className="aspect-square bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4e] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-[#B8860B]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <User className="w-10 h-10 text-[#B8860B]" />
                      </div>
                      <p className="text-white/60 text-xs">Professional Trainer</p>
                    </div>
                  </div>
                )}
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started in California?</h2>
          <p className="text-gray-300 mb-8">Contact us to connect with a California-based trainer near you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#DAA520] text-white px-8 py-4 rounded-full font-semibold transition-colors">Contact Us <ArrowRight className="w-5 h-5" /></Link>
            <a href="tel:8664364959" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-colors"><Phone className="w-5 h-5" /> (866) 436-4959</a>
          </div>
        </div>
      </section>
    </>
  );
}
