import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Shield, Heart, Star, Users, Zap, ArrowRight, Phone } from "lucide-react";

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
    icon: CheckCircle,
    description: "Build a strong foundation of communication and respect between you and your dog.",
    details: [
      "Establish clear communication through structured training sessions",
      "Develop mutual respect through consistent rules and boundaries",
      "Core commands including sit, stay, come, heel, down, and place",
      "Leash manners and walking etiquette for stress-free outings",
      "Housebreaking and crate training fundamentals",
      "Impulse control exercises to build patience and self-discipline",
      "Door manners, greeting guests, and household etiquette",
      "Foundation for advanced training programs",
    ],
    ideal: "Perfect for puppies and dogs of any age who need foundational training. This program is the starting point for building a well-mannered, responsive companion.",
  },
  {
    id: "behavioral-modification",
    title: "Behavioral Modification",
    icon: Shield,
    description: "Specialized training for dogs with behavioral challenges that go beyond basic obedience.",
    details: [
      "Assessment and treatment of aggression toward people or other animals",
      "Anxiety and fear-based behavior management including separation anxiety",
      "Reactivity reduction for on-leash and off-leash environments",
      "Resource guarding prevention and correction",
      "Excessive barking, jumping, and destructive behavior solutions",
      "Customized behavior plans tailored to your dog's specific triggers",
      "Owner education on recognizing and managing behavioral signals",
      "Follow-up support to ensure lasting behavioral change",
    ],
    ideal: "Designed for dogs who have an obedience foundation but continue to struggle with behavioral issues. We work with dogs that other trainers have given up on.",
  },
  {
    id: "service-dog",
    title: "Service Dog Training",
    icon: Heart,
    description: "Professional training to prepare dogs for service work and public access.",
    details: [
      "Task-specific training tailored to the handler's individual needs",
      "Public access training ensuring reliable behavior in all environments",
      "Advanced obedience with high distraction tolerance",
      "Handler-focused training to build a strong working partnership",
      "Socialization in diverse environments including stores and transport",
      "Emergency response and alert training as needed",
      "ADA rights education for handlers",
      "Ongoing support and refresher training availability",
    ],
    ideal: "For individuals who need a trained service dog to perform specific tasks. Our program ensures your dog is reliable, well-behaved, and ready for public access.",
  },
  {
    id: "specialty",
    title: "Specialty Training",
    icon: Star,
    description: "Advanced programs for families seeking the highest level of training and control.",
    details: [
      "Advanced off-leash obedience and recall in high-distraction environments",
      "Confidence building for timid or shy dogs",
      "Scent work and nose work training for mental stimulation",
      "Task-specific skills for active families and working environments",
      "Therapy dog preparation and certification readiness",
      "Trick training and canine enrichment activities",
      "Sport-specific training including agility foundations",
      "Customized programs based on your lifestyle and goals",
    ],
    ideal: "Ideal for dogs and owners who want to go beyond basic training. Whether you need advanced control, confidence building, or specialized skills, this program delivers.",
  },
  {
    id: "protection",
    title: "Protection Training",
    icon: Zap,
    description: "Develop your dog's natural guarding instincts while maintaining obedience and control.",
    details: [
      "Controlled alert and deterrent training using natural protective instincts",
      "Advanced obedience foundation required before protection work begins",
      "Bite work development with professional equipment and handlers",
      "On/off switch training ensuring reliability in social situations",
      "Property and personal protection scenarios",
      "Handler protection and escort training",
      "Socialization alongside protection work for balanced behavior",
      "Ongoing maintenance and skill refreshers",
    ],
    ideal: "For owners seeking a well-trained protection dog that is both a reliable guardian and a well-mannered family companion. Requires completion of obedience training first.",
  },
  {
    id: "group",
    title: "Group Training Classes",
    icon: Users,
    description: "Learn alongside other dogs and owners in a supportive, structured environment.",
    details: [
      "Socialization in a controlled group setting with professional guidance",
      "Core obedience commands practiced with real-world distractions",
      "Confidence building through positive group interactions",
      "Owner education on body language, timing, and consistency",
      "Small class sizes to ensure individual attention",
      "Multiple skill levels from beginner to advanced",
      "Fun, engaging environment that strengthens your bond",
      "Affordable alternative to private training sessions",
    ],
    ideal: "Great for dogs who need socialization and owners who benefit from learning in a group setting. A supportive environment where you and your dog can grow together.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Training <span className="text-[#B8860B]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive training programs tailored to every dog and owner. From basic
              obedience to advanced specialty work, our expert trainers deliver serious results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="grid lg:grid-cols-2 gap-12 items-start">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#B8860B]/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-[#B8860B]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e]">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gray-50 rounded-2xl p-8 border border-gray-100 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-semibold text-[#1a1a2e] mb-3">Who Is This For?</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.ideal}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#DAA520] text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Not Sure Which Program Is Right for Your Dog?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Contact us for a free consultation. Our team will assess your dog&apos;s needs and recommend the perfect training program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#DAA520] text-white px-8 py-4 rounded-full font-semibold transition-colors">
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:8664364959" className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-[#B8860B] text-white px-8 py-4 rounded-full font-semibold transition-colors">
              <Phone className="w-5 h-5" /> (866) 436-4959
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
