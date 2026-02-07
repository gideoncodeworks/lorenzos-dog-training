import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Dog Training in Florida - Pensacola, Crestview & Northwest FL",
  description: "Professional dog training in Northwest Florida with Lorenzo's Dog Training Team. Expert trainers in Pensacola, Crestview, Milton, and Navarre offering comprehensive training programs for all breeds and behavioral challenges.",
  openGraph: {
    title: "Dog Training in Florida - Lorenzo's Dog Training Team",
    description: "Professional dog training in Pensacola, Crestview, Milton and Northwest Florida.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const trainers = [
  { name: "Daniel (Deuce) Bainbridge", city: "Crestview, FL", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/a94c73f8-ac36-4a7a-972b-3af1f6990c0d/Daniel+Bainbridge_RD+360_x_360.jpg" },
  { name: "Victoria Bayleigh Morris", city: "Milton, FL", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/c5104eb4-fbf4-4fdc-9753-99d75026a176/Victoria+Morris+ETT.jpg" },
  { name: "Lindsey Sims", city: "Pensacola, FL", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/ca8bd1a2-4f07-4549-85f6-16048685f581/Lindsey+Sims+360_x_360.jpg" },
  { name: "Michael King", city: "Navarre, FL", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/24fbe76d-42bd-46f8-9b5d-6f542af1e2ef/Michael+King_TC+360_x_360.jpg" },
  { name: "Clark Patton", city: "Pensacola, FL", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/35ed4b3e-26d3-4829-b982-95bd80ff0973/Clark+Patton+ETT.jpg" },
];

export default function FloridaPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#DAA520] mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Locations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Dog Training in <span className="text-[#DAA520]">Florida</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">Serving Northwest Florida with professional dog training services in Pensacola, Crestview, Milton, and Navarre. Our trained professionals bring Lorenzo&apos;s proven methods to your home.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-12">Meet Our Florida <span className="text-[#B8860B]">Trainers</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started in Florida?</h2>
          <p className="text-gray-300 mb-8">Contact us to connect with a Florida-based trainer near you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#DAA520] text-white px-8 py-4 rounded-full font-semibold transition-colors">Contact Us <ArrowRight className="w-5 h-5" /></Link>
            <a href="tel:8664364959" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-colors"><Phone className="w-5 h-5" /> (866) 436-4959</a>
          </div>
        </div>
      </section>
    </>
  );
}
