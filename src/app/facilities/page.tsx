import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Building, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Training Facility - 3,700 Sq Ft Cleveland Headquarters",
  description:
    "Visit Lorenzo's Dog Training Team's 3,700 sq. ft. training facility in Cleveland, Ohio. Features an obstacle course, indoor/outdoor boarding, and hands-on training areas where our professional trainers develop their skills before serving communities nationwide.",
  openGraph: {
    title: "Our Training Facility - Lorenzo's Dog Training Team",
    description: "3,700 sq. ft. training facility in Cleveland, Ohio with obstacle course, indoor/outdoor boarding, and professional training areas.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function FacilitiesPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#B8860B]">Facility</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our Cleveland, Ohio headquarters is where the magic happens &mdash; a purpose-built
              training center where dogs and trainers develop their skills.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8">
                Cleveland Training <span className="text-[#B8860B]">Headquarters</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our trainers gain hands-on experience in our Cleveland, Ohio based, 3,700 sq. ft.
                training facility. This purpose-built space serves as the central hub where all of
                our trainers develop and refine their skills before being placed in communities
                across the country.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The facility features a professional obstacle course designed to challenge dogs at
                every level, from basic agility to advanced confidence-building exercises. Our
                indoor and outdoor boarding areas ensure that dogs in our care receive comfortable,
                safe accommodation during their training programs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Beyond dog training, our facility serves as a training academy for aspiring
                professional dog trainers. Here, recruits learn Lorenzo&apos;s proven methodology
                through intensive, supervised hands-on work with real dogs and real behavioral
                challenges.
              </p>
              <div className="flex items-center gap-3 text-gray-500">
                <MapPin className="w-5 h-5 text-[#B8860B]" />
                <span>4805 Orchard Rd., Garfield Heights, OH 44128</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building, label: "3,700 Sq Ft", desc: "Training Space" },
                  { icon: Award, label: "Obstacle Course", desc: "On-Site" },
                  { icon: Users, label: "Indoor/Outdoor", desc: "Boarding" },
                  { icon: MapPin, label: "Cleveland, OH", desc: "Headquarters" },
                ].map((feature) => (
                  <div key={feature.label} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                    <feature.icon className="w-8 h-8 text-[#B8860B] mx-auto mb-3" />
                    <div className="font-bold text-[#1a1a2e]">{feature.label}</div>
                    <div className="text-sm text-gray-500">{feature.desc}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[#1a1a2e] rounded-2xl p-8">
                <h3 className="text-white font-semibold text-lg mb-4">Trainer Development Center</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Our facility doubles as a professional training academy where future
                  Lorenzo&apos;s trainers undergo intensive preparation before serving
                  communities nationwide.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#DAA520] font-semibold transition-colors text-sm">
                  Schedule a Visit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">Want to See Our Facility in Action?</h2>
          <p className="text-gray-600 mb-8 text-lg">Schedule a visit to our Cleveland headquarters and see firsthand how we train both dogs and professional trainers.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#DAA520] text-white px-8 py-4 rounded-full font-semibold transition-colors">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
