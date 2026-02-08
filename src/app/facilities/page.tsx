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
      {/* Hero */}
      <section className="relative bg-[#091353]" style={{ paddingTop: "calc(var(--header-height) + 48px)", paddingBottom: "48px" }}>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963623690-8674XMXBFTTAKZ0AFPS9/A+B74A0244.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container-site">
          <div className="max-w-2xl">
            <p className="section-label">Our Headquarters</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Facility
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our Cleveland, Ohio headquarters is where the magic happens &mdash; a purpose-built
              training center where dogs and trainers develop their skills.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Info */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="section-title">
                Cleveland Training <span className="text-[#C8102E]">Headquarters</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Our trainers gain hands-on experience in our Cleveland, Ohio based, 3,700 sq. ft.
                  training facility. This purpose-built space serves as the central hub where all of
                  our trainers develop and refine their skills before being placed in communities
                  across the country.
                </p>
                <p>
                  The facility features a professional obstacle course designed to challenge dogs at
                  every level, from basic agility to advanced confidence-building exercises. Our
                  indoor and outdoor boarding areas ensure that dogs in our care receive comfortable,
                  safe accommodation during their training programs.
                </p>
                <p>
                  Beyond dog training, our facility serves as a training academy for aspiring
                  professional dog trainers. Here, recruits learn Lorenzo&apos;s proven methodology
                  through intensive, supervised hands-on work with real dogs and real behavioral
                  challenges.
                </p>
              </div>
              <div className="flex items-center gap-3 text-gray-600 mb-8">
                <MapPin className="w-5 h-5 text-[#C8102E]" />
                <span>4805 Orchard Rd., Garfield Heights, OH 44128</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#091353] rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-[#C8102E]">3,700</div>
                  <div className="text-sm text-blue-200/70">Square Feet</div>
                </div>
                <div className="bg-[#091353] rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-[#C8102E]">Full</div>
                  <div className="text-sm text-blue-200/70">Obstacle Course</div>
                </div>
                <div className="bg-[#091353] rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-[#C8102E]">In/Out</div>
                  <div className="text-sm text-blue-200/70">Boarding Areas</div>
                </div>
                <div className="bg-[#091353] rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-[#C8102E]">Trainer</div>
                  <div className="text-sm text-blue-200/70">Academy</div>
                </div>
              </div>
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963623690-8674XMXBFTTAKZ0AFPS9/A+B74A0244.jpg"
                alt="Lorenzo's Dog Training Team facility"
                width={600}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-label">Gallery</p>
            <h2 className="section-title mx-auto">Inside Our Facility</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {facilityImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#091353]">
        <div className="container-site text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Want to See Our Facility in Action?
          </h2>
          <p className="text-lg text-blue-200/70 mb-8 max-w-2xl mx-auto">
            Schedule a visit to our Cleveland headquarters and see firsthand how we train both dogs and professional trainers.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
