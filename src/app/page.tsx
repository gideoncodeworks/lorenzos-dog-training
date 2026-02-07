import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Star, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Basic Obedience",
    description: "Build a strong foundation with commands like sit, stay, come, heel, and leash manners through positive reinforcement.",
    image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/93fe0e01-280e-4341-b9ef-69c5e2560aa0/web+1.jpg",
    href: "/services#basic-obedience",
  },
  {
    title: "Behavioral Modification",
    description: "Specialized training for aggression, anxiety, fear, and reactivity. We work with dogs others have given up on.",
    image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/8bb42adb-bafe-4a4a-b5f4-0e9bd5d0aebb/web+2.jpg",
    href: "/services#behavioral-modification",
  },
  {
    title: "Service Dog Training",
    description: "Professional service dog preparation including task training and public access readiness for individuals with disabilities.",
    image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/d711da4e-e2fe-4323-9c7a-d3bf40e15734/web+3.jpg",
    href: "/services#service-dog",
  },
  {
    title: "Specialty Training",
    description: "Advanced off-leash control, confidence building, scent work, and task-specific skills for active families.",
    image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/033b530b-5536-44aa-b001-9be608f84b8d/web+4.jpg",
    href: "/services#specialty",
  },
];

const stats = [
  { value: "40+", label: "Years of Experience" },
  { value: "11", label: "States Served" },
  { value: "1000s", label: "Dogs Trained" },
  { value: "50+", label: "Professional Trainers" },
];

const locations = [
  { state: "Ohio", cities: "Cleveland, Reynoldsburg", href: "/locations/ohio", trainers: 4 },
  { state: "California", cities: "San Diego, Sacramento, San Jose", href: "/locations/california", trainers: 15 },
  { state: "Florida", cities: "Pensacola, Crestview, Milton", href: "/locations/florida", trainers: 5 },
  { state: "Texas", cities: "Houston, San Antonio, Fort Worth", href: "/locations/texas", trainers: 4 },
  { state: "Georgia", cities: "Atlanta Metro", href: "/locations/georgia", trainers: 4 },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963623690-8674XMXBFTTAKZ0AFPS9/A+B74A0244.jpg"
            alt="Professional dog training at Lorenzo's facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#1a1a2e]/80 to-[#1a1a2e]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#B8860B]/20 border border-[#B8860B]/40 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#B8860B] rounded-full animate-pulse" />
              <span className="text-[#DAA520] text-sm font-semibold tracking-wide">Trusted Since 1987</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Serious Training,{" "}
              <span className="text-[#DAA520]">Serious Results</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
              Over 40 years of keeping dogs out of shelters and in happy homes.
              We work with canines of any age, size, breed, and temperament to transform
              behavioral challenges into lasting obedience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#DAA520] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg shadow-[#B8860B]/30 hover:shadow-[#DAA520]/40 hover:-translate-y-0.5"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:8664364959"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                (866) 436-4959
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#B8860B] py-10" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white" id="about-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#B8860B] font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-6 leading-tight">
                Transforming Lives Through Expert Dog Training
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Founded in 1987, Lorenzo&apos;s Dog Training Team has been at the forefront of professional
                dog training for over four decades. What began as one man&apos;s passion for rescuing strays
                has grown into a nationwide network of over 50 professional trainers serving 11 states.
              </p>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Our founder Lorenzo developed his unique training methodology by synthesizing
                the strongest elements from multiple professional techniques into a distinctive style
                that has proven effective with thousands of dogs of every breed, size, and temperament.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From housebreaking puppies to advanced off-leash obedience, from behavioral modification
                for aggressive dogs to professional service dog training, we have the expertise to help
                every dog and owner build a stronger, happier relationship.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#1a1a2e] hover:bg-[#B8860B] text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Read Our Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932027952-3J2P71J0GOPON0S6QVFP/IMG_5532.jpeg"
                  alt="Dog training at Lorenzo's Cleveland facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#B8860B] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">Since</div>
                <div className="text-4xl font-bold">1987</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50" id="services-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#B8860B] font-semibold text-sm uppercase tracking-wider mb-3">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
              Our Training Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive training solutions tailored to your dog&apos;s unique needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <span className="text-[#B8860B] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
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

      {/* Facility Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963602083-136RP1MYDQPX8R354ZZM/A+B74A0221.jpg"
                  alt="Training facility interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden mt-8">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963610622-YZ54V7ZZ4CQVHZA8S9N5/A+B74A0225.jpg"
                  alt="Dog training session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932025860-72F27QB8B6CVJ2W48A7Q/IMG_5547.jpeg"
                  alt="Training obstacle course"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden mt-8">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932028943-ZVBTKUX411JUGPXX0BDJ/IMG_5746.jpeg"
                  alt="Boarding area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#B8860B] font-semibold text-sm uppercase tracking-wider mb-3">Our Headquarters</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-6 leading-tight">
                3,700 Sq Ft Training Facility
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Our Cleveland, Ohio headquarters serves as the central hub where all trainers
                develop their skills before being placed in communities across the country.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Featuring a professional obstacle course, indoor and outdoor boarding areas,
                and dedicated training spaces — it&apos;s where dogs and trainers are made.
              </p>
              <Link
                href="/facilities"
                className="inline-flex items-center gap-2 bg-[#1a1a2e] hover:bg-[#B8860B] text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Tour Our Facility
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-[#1a1a2e]" id="locations-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#B8860B] font-semibold text-sm uppercase tracking-wider mb-3">Nationwide Coverage</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Find a Trainer Near You
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
                className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-[#B8860B]/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#B8860B]/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#B8860B]" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#DAA520] transition-colors">
                      {loc.state}
                    </h3>
                  </div>
                  <span className="text-xs bg-[#B8860B]/20 text-[#DAA520] px-3 py-1 rounded-full font-medium">
                    {loc.trainers} trainers
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{loc.cities}</p>
                <span className="text-[#B8860B] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Trainers <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
            <div className="bg-[#B8860B]/10 border border-[#B8860B]/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <p className="text-[#DAA520] font-bold text-lg mb-2">+ 6 More States</p>
              <p className="text-gray-400 text-sm mb-1">Indiana, Kansas, Kentucky</p>
              <p className="text-gray-400 text-sm">Massachusetts, Michigan, New Hampshire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#B8860B] font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
              What Our Clients Say
            </h2>
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
              <div key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
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
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963621663-EMNMD93NW7NRNZ1YCNH7/A+B74A0235.jpg"
            alt="Dog training session"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1a1a2e]/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Dog&apos;s Behavior?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Take the first step toward a better relationship with your dog.
            Contact us today for a free consultation and let our expert trainers create
            a personalized training plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#DAA520] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg shadow-[#B8860B]/30"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:8664364959"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-200"
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
