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
      {/* Hero */}
      <section className="relative bg-[#091353]" style={{ paddingTop: "calc(var(--header-height) + 48px)", paddingBottom: "48px" }}>
        <div className="absolute inset-0 opacity-20">
          <Image src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963623690-8674XMXBFTTAKZ0AFPS9/A+B74A0244.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 container-site">
          <div className="max-w-2xl">
            <p className="section-label">What We Offer</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Our Training Services</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Comprehensive training programs tailored to every dog and owner. From basic obedience to advanced specialty work, our expert trainers deliver serious results.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-site space-y-16 lg:space-y-20">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#091353] mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="card mb-6">
                  <p className="text-sm font-semibold text-[#091353] mb-1">Who Is This For?</p>
                  <p className="text-gray-600">{service.ideal}</p>
                </div>
                <Link href="/contact" className="btn btn-primary">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className={`aspect-[4/3] rounded-xl overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image src={service.image} alt={service.title} width={800} height={600} className="object-cover w-full h-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#C8102E]">
        <div className="container-site text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Not Sure Which Program Is Right?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation. We&apos;ll assess your dog&apos;s needs and recommend the perfect program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-lg bg-white text-[#C8102E] hover:bg-gray-100">
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
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
