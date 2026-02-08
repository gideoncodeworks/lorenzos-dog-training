import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story - About Lorenzo's Dog Training Team",
  description:
    "Founded in 1987, Lorenzo's Dog Training Team has over 40 years of experience keeping dogs out of shelters and in happy homes. Learn about our founder, our mission, and our nationwide network of professional trainers serving 11 states.",
  openGraph: {
    title: "Our Story - About Lorenzo's Dog Training Team",
    description: "Founded in 1987 with over 40 years of experience keeping dogs out of shelters and in happy homes.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-[#121A15] pt-36 pb-20">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963686115-VQQ2IJS5KLZ05KM1TXXT/A+B74A0234.jpg"
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
            <p className="text-[#E6B866] font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From rescuing strays on inner-city streets to building a nationwide network
              of professional trainers &mdash; this is the story of Lorenzo&apos;s Dog Training Team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[linear-gradient(180deg,#fbf8f3_0%,#f4eee6_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1B2A23] mb-8">
                The Man Behind the <span className="text-[#C76B45]">Mission</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Lorenzo&apos;s passion for dogs began at the age of six, when he started rescuing
                  strays in his inner-city neighborhood. His parents, recognizing his extraordinary
                  dedication and natural ability with animals, made the decision by the time he was
                  ten to send him to train with professional dog trainers.
                </p>
                <p>
                  That early investment paid off. Lorenzo went on to self-fund his college education
                  entirely through in-home dog training services, proving that his skills were not
                  just a hobby but a true calling.
                </p>
                <p>
                  In the late 1970s and 1980s, Lorenzo immersed himself in studying a wide range of
                  dog training techniques and methodologies. Rather than adopting any single approach
                  wholesale, he took a different path &mdash; carefully analyzing the strengths and weaknesses
                  of each method, then synthesizing the most effective elements into his own distinctive
                  training style.
                </p>
                <p>
                  Since founding the company in 1987, Lorenzo has been responsible for training
                  thousands of dogs and dozens of professional trainers in the Cleveland area. His
                  methods have proven effective with every breed, size, age, and temperament &mdash;
                  including dogs that other trainers had given up on.
                </p>
                <p>
                  Today, Lorenzo&apos;s Dog Training Team recruits, boards, trains, and places qualifying
                  trainers across the country, expanding Lorenzo&apos;s proven techniques to families
                  nationwide. Our mission remains the same as it was on day one: keeping dogs out of
                  shelters and in safe, happy homes.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl ring-1 ring-white/60">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/4843ad28-7321-43f3-a4f0-4a33f07ae4a2/Lorenzo-Miller-360.jpg"
                  alt="Lorenzo Miller - Founder"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="bg-[#1B2A23] rounded-[26px] p-8 text-center shadow-[0_20px_50px_-35px_rgba(18,26,21,0.8)]">
                <Heart className="w-10 h-10 text-[#C76B45] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  Keeping dogs out of shelters and in safe, happy homes through professional,
                  compassionate training that transforms both dogs and their owners.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-[24px] p-6 text-center border border-[#eadfce] shadow-[0_14px_40px_-32px_rgba(27,42,35,0.5)]">
                  <div className="text-3xl font-bold text-[#C76B45] mb-1">1987</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="bg-white rounded-[24px] p-6 text-center border border-[#eadfce] shadow-[0_14px_40px_-32px_rgba(27,42,35,0.5)]">
                  <div className="text-3xl font-bold text-[#C76B45] mb-1">11</div>
                  <div className="text-sm text-gray-600">States Served</div>
                </div>
                <div className="bg-white rounded-[24px] p-6 text-center border border-[#eadfce] shadow-[0_14px_40px_-32px_rgba(27,42,35,0.5)]">
                  <div className="text-3xl font-bold text-[#C76B45] mb-1">50+</div>
                  <div className="text-sm text-gray-600">Trainers</div>
                </div>
                <div className="bg-white rounded-[24px] p-6 text-center border border-[#eadfce] shadow-[0_14px_40px_-32px_rgba(27,42,35,0.5)]">
                  <div className="text-3xl font-bold text-[#C76B45] mb-1">1000s</div>
                  <div className="text-sm text-gray-600">Dogs Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[linear-gradient(180deg,#f6f1e8_0%,#f1e9df_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1B2A23] text-center mb-16">
            What Sets Us <span className="text-[#C76B45]">Apart</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 stagger">
            {[
              {
                image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/93fe0e01-280e-4341-b9ef-69c5e2560aa0/web+1.jpg",
                title: "Proven Methodology",
                description: "Our unique training approach synthesizes the best elements from decades of professional techniques, refined over 40+ years of real-world application with every breed and temperament.",
              },
              {
                image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932027952-3J2P71J0GOPON0S6QVFP/IMG_5532.jpeg",
                title: "Expert Trainers",
                description: "Every trainer undergoes rigorous hands-on training at our Cleveland headquarters before being placed. We develop true dog training professionals.",
              },
              {
                image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1728938827157-M9J2LNL5G8QGQW3B365E/unnamed+%286%29.jpg",
                title: "Nationwide Reach",
                description: "With trainers across 11 states, we bring Lorenzo's proven training methods directly to your home. Expert dog training is within reach.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[26px] overflow-hidden shadow-[0_20px_50px_-35px_rgba(27,42,35,0.45)] border border-[#eadfce]">
                <div className="relative h-48">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1B2A23] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
          <div className="absolute inset-0 bg-[#121A15]/90" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(230, 184, 102, 0.2), transparent 45%), radial-gradient(circle at 80% 80%, rgba(199, 107, 69, 0.2), transparent 45%)",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Dog&apos;s Training Journey?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join the thousands of families who have trusted Lorenzo&apos;s Dog Training Team.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C76B45] hover:bg-[#E6B866] text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-colors shadow-[0_18px_40px_-24px_rgba(199,107,69,0.8)]">
            Contact Us Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
