import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone, User } from "lucide-react";

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
  { name: "Emmanuel Kangah", city: "Houston, TX" },
  { name: "Jacob Perez", city: "San Antonio, TX" },
  { name: "Eric Hardaway", city: "Fort Worth, TX" },
  { name: "Carolina Don", city: "San Antonio, TX" },
];

export default function TexasPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#B8860B] mb-4"><MapPin className="w-5 h-5" /><span className="text-sm font-medium uppercase tracking-wider">Our Locations</span></div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Dog Training in <span className="text-[#B8860B]">Texas</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">Professional dog training across Texas, serving Houston, San Antonio, and Fort Worth with Lorenzo&apos;s proven training methods and expert professional trainers.</p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-12">Meet Our Texas <span className="text-[#B8860B]">Trainers</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#B8860B]/20 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mb-4"><User className="w-8 h-8 text-[#B8860B]" /></div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-1">{t.name}</h3>
                <p className="text-sm text-[#B8860B] font-medium mb-2">Professional Trainer</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm"><MapPin className="w-4 h-4" />{t.city}</div>
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
            <a href="tel:8664364959" className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-[#B8860B] text-white px-8 py-4 rounded-full font-semibold transition-colors"><Phone className="w-5 h-5" /> (866) 436-4959</a>
          </div>
        </div>
      </section>
    </>
  );
}
