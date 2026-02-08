import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Dog Training in Georgia - Atlanta Metro Area Trainers",
  description: "Professional dog training in Atlanta, Georgia with Lorenzo's Dog Training Team. Expert trainers serving the Atlanta metro area with obedience, behavioral modification, service dog training, and specialty programs for all breeds.",
  openGraph: {
    title: "Dog Training in Georgia - Lorenzo's Dog Training Team",
    description: "Professional dog training in Atlanta and the Georgia metro area.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const trainers = [
  { name: "Shavon Striggles", city: "Atlanta, GA", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/ee94954b-e835-4719-adac-583fda68bd6d/Shavon+Striggles+RD+360_x_360.jpg" },
  { name: "Christopher Almonte", city: "Atlanta, GA", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/6b9d4633-f21b-474b-b9df-d40853e25ae3/Christopher+Almonte+360_x_360.jpg" },
  { name: "Robert Wesling", city: "Atlanta, GA", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/a1c227c8-8556-44ed-9286-50809121cc19/Robert+Wesling++TC+360_x_360.jpg" },
  { name: "Chloe Chislom", city: "Atlanta, GA", image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/9c69ef2c-816d-4e28-ab9c-c89ebeacbd5e/chloechisolm.jpg" },
];

export default function GeorgiaPage() {
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
              Dog Training in <span className="text-[#C8102E]">Georgia</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Serving the Atlanta metro area with professional dog training from Lorenzo&apos;s proven team of expert trainers. Comprehensive programs for every breed and behavioral challenge.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <h2 className="section-title mb-10">
            Meet Our Georgia <span className="text-[#C8102E]">Trainers</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            Ready to Get Started in Georgia?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Contact us to connect with an Atlanta-based trainer near you.
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
