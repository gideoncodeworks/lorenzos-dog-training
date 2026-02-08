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

const trainers: { name: string; city: string; image: string }[] = [
  { name: "René Stephan", city: "San Jose, CA", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/ef1ea8c4-b6b9-46de-a453-696556bd212e/Rene+Stephan+TC+2024+360_x_360.jpg" },
  { name: "Fred Harris", city: "San Diego, CA", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/b2440868-900f-4a53-ab3c-31a4b16f05c4/fred+harris.jpg" },
];

export default function CaliforniaPage() {
  return (
    <>
      <section className="relative bg-[#060D3A] pt-36 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#060D3A]/95 via-[#091353]/82 to-[#091353]/55" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 16% 18%, rgba(230, 184, 102, 0.18), transparent 42%), radial-gradient(circle at 78% 14%, rgba(199, 107, 69, 0.18), transparent 45%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#C8102E] mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Locations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Dog Training in <span className="text-[#C8102E]">California</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">Our California trainers serve families across San Diego and San Jose with Lorenzo&apos;s proven methods and professional, in-home guidance.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#091353] mb-4">Meet Our California <span className="text-[#C8102E]">Trainers</span></h2>
          <p className="text-gray-600 mb-12">2 professional trainers serving communities across San Diego and San Jose.</p>
          <div className="grid md:grid-cols-2 gap-8 stagger">
            {trainers.map((t) => (
              <div key={t.name} className="bg-white rounded-lg overflow-hidden border border-[#e5e7eb] shadow-[0_20px_50px_-35px_rgba(27,42,35,0.45)] hover:shadow-[0_28px_70px_-35px_rgba(27,42,35,0.55)] transition-all duration-300">
                <div className="relative aspect-square">
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

      <section className="relative py-20 bg-[#060D3A]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(230, 184, 102, 0.16), transparent 45%), radial-gradient(circle at 80% 80%, rgba(199, 107, 69, 0.16), transparent 45%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started in California?</h2>
          <p className="text-gray-300 mb-8">Contact us to connect with a California-based trainer near you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#C8102E] text-white px-8 py-4 rounded-2xl font-semibold transition-colors shadow-[0_18px_40px_-24px_rgba(199,107,69,0.8)]">Contact Us <ArrowRight className="w-5 h-5" /></Link>
            <a href="tel:8664364959" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/25 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-colors"><Phone className="w-5 h-5" /> (866) 436-4959</a>
          </div>
        </div>
      </section>
    </>
  );
}
