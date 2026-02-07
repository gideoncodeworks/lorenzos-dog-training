import Link from "next/link";
import { Phone, MapPin, Shield, Heart, Star, Award, Users, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Basic Obedience",
    description: "Build a strong foundation of communication and respect between you and your dog through structured rules, boundaries, and positive reinforcement techniques.",
    icon: "CheckCircle",
    href: "/services#basic-obedience",
  },
  {
    title: "Behavioral Modification",
    description: "Specialized training for dogs with behavioral challenges including aggression, anxiety, fear, and reactivity. We work with dogs that others have given up on.",
    icon: "Shield",
    href: "/services#behavioral-modification",
  },
  {
    title: "Service Dog Training",
    description: "Professional service dog training to help dogs perform specific tasks for individuals with disabilities, ensuring reliability and public access readiness.",
    icon: "Heart",
    href: "/services#service-dog",
  },
  {
    title: "Specialty Training",
    description: "Advanced training programs including off-leash control, confidence building, scent work, and task-specific skills for active families and work environments.",
    icon: "Star",
    href: "/services#specialty",
  },
  {
    title: "Protection Training",
    description: "Professional protection training that develops your dog's natural guarding instincts while maintaining obedience and social reliability in all situations.",
    icon: "Shield",
    href: "/services#protection",
  },
  {
    title: "Group Training",
    description: "Socialize your dog while learning essential commands in a supportive group environment. Perfect for building confidence and reinforcing good behavior around distractions.",
    icon: "Users",
    href: "/services#group",
  },
];

const stats = [
  { value: "40+", label: "Years of Experience" },
  { value: "11", label: "States Served" },
  { value: "1000s", label: "Dogs Trained" },
  { value: "50+", label: "Professional Trainers" },
];

const locations = [
  { state: "Ohio", cities: "Cleveland, Reynoldsburg", href: "/locations/ohio" },
  { state: "California", cities: "San Diego, Sacramento, San Jose", href: "/locations/california" },
  { state: "Florida", cities: "Pensacola, Crestview, Milton", href: "/locations/florida" },
  { state: "Texas", cities: "Houston, San Antonio, Fort Worth", href: "/locations/texas" },
  { state: "Georgia", cities: "Atlanta", href: "/locations/georgia" },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CheckCircle,
  Shield,
  Heart,
  Star,
  Users,
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#1a1a2e] pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#1a1a2e] to-[#2a1a0e] opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 border border-[#B8860B]/30 rounded-full px-4 py-2 mb-8">
                <Award className="w-4 h-4 text-[#B8860B]" />
                <span className="text-[#B8860B] text-sm font-medium">Trusted Since 1987</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Serious Training,{" "}
                <span className="text-[#B8860B]">Serious Results</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Over 40 years of keeping dogs out of shelters and in happy homes.
                We work with canines of any age, size, breed, and temperament to transform
                behavioral challenges into lasting obedience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#DAA520] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg shadow-[#B8860B]/25"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:8664364959"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-[#B8860B] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  (866) 436-4959
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-[500px] bg-gradient-to-br from-[#B8860B]/20 to-[#B8860B]/5 rounded-3xl flex items-center justify-center border border-[#B8860B]/20">
                  <div className="text-center">
                    <svg viewBox="0 0 200 200" className="w-48 h-48 mx-auto fill-[#B8860B]/40">
                      <path d="M60 170 C60 170 50 140 60 110 C70 80 90 70 100 60 C110 50 130 40 140 50 C150 60 160 80 150 100 C140 120 130 110 120 100 C110 90 100 100 100 110 C100 120 110 140 100 160 C90 180 70 180 60 170 Z" />
                      <circle cx="136" cy="64" r="8" />
                      <path d="M50 160 C40 170 30 164 36 154 C42 144 56 150 50 160 Z" />
                    </svg>
                    <p className="text-[#B8860B]/60 text-lg mt-4 font-medium">Professional Dog Training</p>
                    <p className="text-gray-500 text-sm mt-1">Nationwide Since 1987</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#B8860B] py-12" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white" id="about-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-6">
                Transforming Lives Through{" "}
                <span className="text-[#B8860B]">Expert Dog Training</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 1987, Lorenzo&apos;s Dog Training Team has been at the forefront of professional
                dog training for over four decades. What began as one man&apos;s passion for rescuing strays
                in his inner-city neighborhood has grown into a nationwide network of over 50 professional
                trainers serving 11 states.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our founder Lorenzo developed his unique training methodology by studying and synthesizing
                the strongest elements from multiple professional techniques. Rather than adopting one
                approach, he created a distinctive style that has proven effective with thousands of dogs
                of every breed, size, and temperament.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From housebreaking puppies to advanced off-leash obedience, from behavioral modification
                for aggressive dogs to professional service dog training, we have the expertise to help
                every dog and owner build a stronger, happier relationship.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#DAA520] font-semibold transition-colors"
              >
                Read Our Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4e] rounded-3xl p-12 text-center">
              <div className="w-24 h-24 bg-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Since 1987</h3>
              <p className="text-gray-400 leading-relaxed">
                Over 40 years dedicated to keeping dogs out of shelters and in safe, happy homes.
                Our trainers undergo rigorous hands-on training at our 3,700 sq. ft. Cleveland facility
                before being placed nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50" id="services-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
              Our Training <span className="text-[#B8860B]">Programs</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive training solutions tailored to your dog&apos;s unique needs.
              From basic obedience to specialized programs, we have you covered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || CheckCircle;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#B8860B]/20"
                >
                  <div className="w-14 h-14 bg-[#B8860B]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#B8860B] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#B8860B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-3 group-hover:text-[#B8860B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-[#B8860B] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#1a1a2e] hover:bg-[#B8860B] text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-[#1a1a2e]" id="locations-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Find a Trainer <span className="text-[#B8860B]">Near You</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              With professional trainers across 11 states, expert dog training is closer than you think.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.state}
                href={loc.href}
                className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-[#B8860B]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-[#B8860B]" />
                  <h3 className="text-xl font-bold text-white group-hover:text-[#B8860B] transition-colors">
                    {loc.state}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">{loc.cities}</p>
                <span className="text-[#B8860B] text-sm font-medium flex items-center gap-1">
                  View Trainers <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
            <div className="bg-[#B8860B]/10 border border-[#B8860B]/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <p className="text-[#B8860B] font-semibold mb-2">+ 6 More States</p>
              <p className="text-gray-400 text-sm">IN, KS, KY, MA, MI, NH</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
              What Our <span className="text-[#B8860B]">Clients Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from real families who transformed their relationship with their dogs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Lorenzo's team transformed our aggressive rescue into the most loving family dog. We were told he was hopeless, but their behavioral modification program changed everything.",
                name: "Sarah M.",
                location: "Cleveland, OH",
              },
              {
                quote: "The service dog training program was incredible. My daughter now has a reliable, well-trained companion that has changed her daily life completely. Professional and compassionate team.",
                name: "Michael T.",
                location: "San Diego, CA",
              },
              {
                quote: "We tried three other trainers before finding Lorenzo's team. The difference is night and day. Their approach is thorough, patient, and genuinely effective. Highly recommend!",
                name: "Jennifer L.",
                location: "Atlanta, GA",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#B8860B] text-[#B8860B]" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#1a1a2e]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1a1a2e] to-[#2a1a0e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Dog&apos;s Behavior?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Take the first step toward a better relationship with your dog.
            Contact us today for a consultation and let our expert trainers create
            a personalized training plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#DAA520] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg shadow-[#B8860B]/25"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:8664364959"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-[#B8860B] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
