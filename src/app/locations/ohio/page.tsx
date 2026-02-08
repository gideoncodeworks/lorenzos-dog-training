import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Phone } from "lucide-react";

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
  { name: "Lorenzo Miller", city: "Cleveland, OH", role: "Founder & Head Trainer", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/4843ad28-7321-43f3-a4f0-4a33f07ae4a2/Lorenzo-Miller-360.jpg" },
  { name: "Eric Beck", city: "Cleveland, OH", role: "Senior Trainer", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/083a4340-649f-4266-a18d-7f5e584e8981/Eric+Beck+ETT+360_x_360.jpg" },
  { name: "John (JD) DelBane", city: "Cleveland, OH", role: "Professional Trainer", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1556634940264-BB46T22YS7XGVAZTRZRL/John+Delbane.jpg" },
  { name: "Shannon Paskins", city: "Reynoldsburg, OH", role: "Professional Trainer", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/bb9b8625-3fca-45eb-8641-d64a343f2d9e/Shannon+Paskins.jpg" },
];

export default function OhioPage() {
  return (
    <>
      <section className="relative bg-[#060D3A] pt-36 pb-20">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932027952-3J2P71J0GOPON0S6QVFP/IMG_5532.jpeg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#060D3A]/95 via-[#091353]/82 to-[#091353]/55" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 16% 18%, rgba(230, 184, 102, 0.2), transparent 42%), radial-gradient(circle at 78% 14%, rgba(199, 107, 69, 0.2), transparent 45%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#C8102E] mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Locations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Dog Training in <span className="text-[#C8102E]">Ohio</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">Home to our corporate headquarters and 3,700 sq. ft. training facility in Cleveland. Ohio is where Lorenzo&apos;s Dog Training Team began and continues to lead the way in professional dog training.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#091353] mb-12">Meet Our Ohio <span className="text-[#C8102E]">Trainers</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger">
            {trainers.map((t) => (
              <div key={t.name} className="bg-white rounded-lg overflow-hidden border border-[#e5e7eb] shadow-[0_20px_50px_-35px_rgba(27,42,35,0.45)] hover:shadow-[0_28px_70px_-35px_rgba(27,42,35,0.55)] transition-all duration-300">
                <div className="relative aspect-square">
                  <Image src={t.image} alt={t.name} fill className="object-cover object-top" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#091353] mb-1">{t.name}</h3>
                  <p className="text-sm text-[#C8102E] font-medium mb-2">{t.role}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4" />{t.city}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963621663-EMNMD93NW7NRNZ1YCNH7/A+B74A0235.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#060D3A]/90" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(230, 184, 102, 0.2), transparent 45%), radial-gradient(circle at 80% 80%, rgba(199, 107, 69, 0.2), transparent 45%)",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started in Ohio?</h2>
          <p className="text-gray-300 mb-8">Contact us to connect with one of our Ohio-based professional trainers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#C8102E] text-white px-8 py-4 rounded-2xl font-semibold transition-colors shadow-[0_18px_40px_-24px_rgba(199,107,69,0.8)]">Contact Us <ArrowRight className="w-5 h-5" /></Link>
            <a href="tel:8664364959" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/25 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-colors"><Phone className="w-5 h-5" /> (866) 436-4959</a>
          </div>
        </div>
      </section>
    </>
  );
}
