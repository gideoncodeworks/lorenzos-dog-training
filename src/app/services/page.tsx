import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Dog Training Services - Basic Obedience, Behavioral Modification & More",
  description:
    "Lorenzo's Dog Training Team offers comprehensive dog training services including basic obedience, behavioral modification, service dog training, specialty programs, protection training, and group classes. Professional trainers across 11 states.",
  openGraph: {
    title: "Dog Training Services - Lorenzo's Dog Training Team",
    description: "Comprehensive dog training services including basic obedience, behavioral modification, service dog training, and more.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const services = [
  {
    id: "basic-obedience",
    title: "Basic Obedience Training",
    image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/93fe0e01-280e-4341-b9ef-69c5e2560aa0/web+1.jpg",
    description: "Build a strong foundation of communication and respect between you and your dog.",
    details: ["Structured training sessions for clear communication", "Core commands: sit, stay, come, heel, down, place", "Leash manners and walking etiquette", "Housebreaking and crate training", "Impulse control and patience building", "Door manners and household etiquette"],
    ideal: "Perfect for puppies and dogs of any age who need foundational training.",
  },
  {
    id: "behavioral-modification",
    title: "Behavioral Modification",
    image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/8bb42adb-bafe-4a4a-b5f4-0e9bd5d0aebb/web+2.jpg",
    description: "Specialized training for dogs with behavioral challenges beyond basic obedience.",
    details: ["Aggression assessment and treatment", "Anxiety and separation anxiety management", "Reactivity reduction for all environments", "Excessive barking and destructive behavior", "Custom behavior plans for specific triggers", "Follow-up support for lasting change"],
    ideal: "For dogs with behavioral issues. We work with dogs others have given up on.",
  },
  {
    id: "service-dog",
    title: "Service Dog Training",
    image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/d711da4e-e2fe-4323-9c7a-d3bf40e15734/web+3.jpg",
    description: "Professional training to prepare dogs for service work and public access.",
    details: ["Task-specific training for handler needs", "Public access training in all environments", "Advanced obedience with distraction tolerance", "Diverse environment socialization", "ADA rights education for handlers", "Ongoing support and refresher training"],
    ideal: "For individuals who need a trained service dog to perform specific tasks.",
  },
  {
    id: "specialty",
    title: "Specialty Training",
    image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/033b530b-5536-44aa-b001-9be608f84b8d/web+4.jpg",
    description: "Advanced programs for the highest level of training and control.",
    details: ["Advanced off-leash obedience and recall", "Confidence building for timid dogs", "Scent work and nose work training", "Therapy dog preparation", "Agility foundations", "Custom programs for your lifestyle"],
    ideal: "For dogs and owners who want to go beyond basic training.",
  },
  {
    id: "protection",
    title: "Protection Training",
    image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963610622-YZ54V7ZZ4CQVHZA8S9N5/A+B74A0225.jpg",
    description: "Develop natural guarding instincts while maintaining obedience.",
    details: ["Controlled alert and deterrent training", "Advanced obedience foundation first", "On/off switch for social reliability", "Property and personal protection", "Handler protection and escort training", "Ongoing maintenance and refreshers"],
    ideal: "For owners seeking a reliable guardian and well-mannered family companion.",
  },
  {
    id: "group",
    title: "Group Training Classes",
    image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932025860-72F27QB8B6CVJ2W48A7Q/IMG_5547.jpeg",
    description: "Learn alongside other dogs in a supportive, structured environment.",
    details: ["Controlled group socialization", "Real-world distraction training", "Body language and timing education", "Small class sizes for attention", "Beginner to advanced levels", "Affordable alternative to private sessions"],
    ideal: "Great for socialization and owners who learn best in a group.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-[#060D3A] pt-36 pb-20">
        <div className="absolute inset-0 opacity-25">
          <Image src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963623690-8674XMXBFTTAKZ0AFPS9/A+B74A0244.jpg" alt="" fill className="object-cover" />
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
            <p className="text-[#C8102E] font-semibold text-sm uppercase tracking-wider mb-3">What We Offer</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Training Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">Comprehensive training programs tailored to every dog and owner. From basic obedience to advanced specialty work, our expert trainers deliver serious results.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#091353] mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white rounded-2xl p-5 border border-[#e5e7eb] shadow-[0_16px_40px_-32px_rgba(27,42,35,0.5)] mb-6">
                  <p className="text-sm font-semibold text-[#091353] mb-1">Who Is This For?</p>
                  <p className="text-gray-600 text-sm">{service.ideal}</p>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#C8102E] text-white px-6 py-3 rounded-2xl text-sm font-semibold transition-colors shadow-[0_16px_36px_-26px_rgba(199,107,69,0.7)]">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={`relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/60 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/969046be-c3f0-4eb5-96c8-42d43c0c6986/vet+recon.png" alt="" fill className="object-cover" />
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
          <h2 className="text-3xl font-bold text-white mb-6">Not Sure Which Program Is Right?</h2>
          <p className="text-gray-300 mb-8 text-lg">Contact us for a free consultation. We&apos;ll assess your dog&apos;s needs and recommend the perfect program.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#C8102E] text-white px-8 py-4 rounded-2xl font-semibold transition-colors shadow-[0_18px_40px_-24px_rgba(199,107,69,0.8)]">Schedule a Consultation <ArrowRight className="w-5 h-5" /></Link>
            <a href="tel:8664364959" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/25 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-colors"><Phone className="w-5 h-5" /> (866) 436-4959</a>
          </div>
        </div>
      </section>
    </>
  );
}
