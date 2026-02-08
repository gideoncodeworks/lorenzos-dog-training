import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

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

const facilityImages = [
  { src: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963623690-8674XMXBFTTAKZ0AFPS9/A+B74A0244.jpg", alt: "Training session at the facility" },
  { src: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1728938827157-M9J2LNL5G8QGQW3B365E/unnamed+%286%29.jpg", alt: "Facility training area" },
  { src: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963602083-136RP1MYDQPX8R354ZZM/A+B74A0221.jpg", alt: "Indoor training space" },
  { src: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963610622-YZ54V7ZZ4CQVHZA8S9N5/A+B74A0225.jpg", alt: "Training equipment area" },
  { src: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963621663-EMNMD93NW7NRNZ1YCNH7/A+B74A0235.jpg", alt: "Professional training session" },
  { src: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963686115-VQQ2IJS5KLZ05KM1TXXT/A+B74A0234.jpg", alt: "Obstacle course area" },
  { src: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932027952-3J2P71J0GOPON0S6QVFP/IMG_5532.jpeg", alt: "Hands-on training" },
  { src: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932025860-72F27QB8B6CVJ2W48A7Q/IMG_5547.jpeg", alt: "Boarding area" },
  { src: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1560174291606-ZF9J31JUEK66MAKM6NHG/IMG-5555.JPG", alt: "Outdoor training space" },
  { src: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932027932-MBM3MBM3KZHK9YFIWKRA/IMG_5721.jpeg", alt: "Training equipment" },
  { src: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932028943-ZVBTKUX411JUGPXX0BDJ/IMG_5746.jpeg", alt: "Facility exterior" },
];

export default function FacilitiesPage() {
  return (
    <>
      <section className="relative bg-[#121A15] pt-36 pb-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963623690-8674XMXBFTTAKZ0AFPS9/A+B74A0244.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1713]/95 via-[#1B2A23]/82 to-[#1B2A23]/55" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 16% 18%, rgba(230, 184, 102, 0.2), transparent 42%), radial-gradient(circle at 78% 14%, rgba(199, 107, 69, 0.2), transparent 45%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#E6B866] font-semibold text-sm uppercase tracking-wider mb-3">Our Headquarters</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Facility
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our Cleveland, Ohio headquarters is where the magic happens &mdash; a purpose-built
              training center where dogs and trainers develop their skills.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[linear-gradient(180deg,#fbf8f3_0%,#f4eee6_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1B2A23] mb-8">
                Cleveland Training <span className="text-[#C76B45]">Headquarters</span>
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
              <div className="flex items-center gap-3 text-gray-500 mb-8">
                <MapPin className="w-5 h-5 text-[#C76B45]" />
                <span>4805 Orchard Rd., Garfield Heights, OH 44128</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1B2A23] rounded-2xl p-5 text-center shadow-[0_20px_50px_-35px_rgba(18,26,21,0.8)]">
                  <div className="text-2xl font-bold text-[#E6B866]">3,700</div>
                  <div className="text-sm text-gray-400">Square Feet</div>
                </div>
                <div className="bg-[#1B2A23] rounded-2xl p-5 text-center shadow-[0_20px_50px_-35px_rgba(18,26,21,0.8)]">
                  <div className="text-2xl font-bold text-[#E6B866]">Full</div>
                  <div className="text-sm text-gray-400">Obstacle Course</div>
                </div>
                <div className="bg-[#1B2A23] rounded-2xl p-5 text-center shadow-[0_20px_50px_-35px_rgba(18,26,21,0.8)]">
                  <div className="text-2xl font-bold text-[#E6B866]">In/Out</div>
                  <div className="text-sm text-gray-400">Boarding Areas</div>
                </div>
                <div className="bg-[#1B2A23] rounded-2xl p-5 text-center shadow-[0_20px_50px_-35px_rgba(18,26,21,0.8)]">
                  <div className="text-2xl font-bold text-[#E6B866]">Trainer</div>
                  <div className="text-sm text-gray-400">Academy</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden shadow-2xl ring-1 ring-white/60">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963623690-8674XMXBFTTAKZ0AFPS9/A+B74A0244.jpg"
                alt="Lorenzo's Dog Training Team facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-[linear-gradient(180deg,#f6f1e8_0%,#f1e9df_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#C76B45] font-semibold text-sm uppercase tracking-wider mb-3">Gallery</p>
            <h2 className="text-3xl font-bold text-[#1B2A23]">Inside Our Facility</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 stagger">
            {facilityImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-[22px] shadow-[0_18px_45px_-35px_rgba(27,42,35,0.5)] hover:shadow-[0_24px_55px_-35px_rgba(27,42,35,0.6)] transition-shadow ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#121A15]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(230, 184, 102, 0.16), transparent 45%), radial-gradient(circle at 80% 80%, rgba(199, 107, 69, 0.16), transparent 45%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Want to See Our Facility in Action?</h2>
          <p className="text-gray-300 mb-8 text-lg">Schedule a visit to our Cleveland headquarters and see firsthand how we train both dogs and professional trainers.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C76B45] hover:bg-[#E6B866] text-white px-8 py-4 rounded-2xl font-semibold transition-colors shadow-[0_18px_40px_-24px_rgba(199,107,69,0.8)]">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
