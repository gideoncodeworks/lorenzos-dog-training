import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Dog Training in Ohio - Cleveland & Reynoldsburg Trainers",
  description: "Professional dog training in Ohio with Lorenzo's Dog Training Team. Our expert trainers in Cleveland and Reynoldsburg offer basic obedience, behavioral modification, service dog training, and more. Home of our 3,700 sq ft headquarters facility.",
  openGraph: {
    title: "Dog Training in Ohio - Lorenzo's Dog Training Team",
    description: "Professional dog training in Cleveland and Reynoldsburg, Ohio. Home of our headquarters and training facility.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const trainers = [
  { name: "Lorenzo Miller", city: "Cleveland, OH", role: "Founder & Head Trainer" },
  { name: "Eric Beck", city: "Cleveland, OH", role: "Senior Trainer" },
  { name: "John (JD) DelBane", city: "Cleveland, OH", role: "Professional Trainer" },
  { name: "Shannon Paskins", city: "Reynoldsburg, OH", role: "Professional Trainer" },
];

export default function OhioPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#B8860B] mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Our Locations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Dog Training in <span className="text-[#B8860B]">Ohio</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">Home to our corporate headquarters and 3,700 sq. ft. training facility in Cleveland. Ohio is where Lorenzo&apos;s Dog Training Team began and continues to lead the way in professional dog training.</p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-12">Meet Our Ohio <span className="text-[#B8860B]">Trainers</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#B8860B]/20 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mb-4"><User className="w-8 h-8 text-[#B8860B]" /></div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-1">{t.name}</h3>
                <p className="text-sm text-[#B8860B] font-medium mb-2">{t.role}</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm"><MapPin className="w-4 h-4" />{t.city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started in Ohio?</h2>
          <p className="text-gray-300 mb-8">Contact us to connect with one of our Ohio-based professional trainers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#DAA520] text-white px-8 py-4 rounded-full font-semibold transition-colors">Contact Us <ArrowRight className="w-5 h-5" /></Link>
            <a href="tel:8664364959" className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-[#B8860B] text-white px-8 py-4 rounded-full font-semibold transition-colors"><Phone className="w-5 h-5" /> (866) 436-4959</a>
          </div>
        </div>
      </section>
    </>
  );
}
