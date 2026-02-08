import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Star, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Basic Obedience",
    description: "Build a strong foundation with commands like sit, stay, come, heel, and leash manners.",
    image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/93fe0e01-280e-4341-b9ef-69c5e2560aa0/web+1.jpg",
    href: "/services#basic-obedience",
  },
  {
    title: "Behavioral Modification",
    description: "Specialized training for aggression, anxiety, fear, and reactivity issues.",
    image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/8bb42adb-bafe-4a4a-b5f4-0e9bd5d0aebb/web+2.jpg",
    href: "/services#behavioral-modification",
  },
  {
    title: "Service Dog Training",
    description: "Professional service dog preparation including task training and public access.",
    image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/d711da4e-e2fe-4323-9c7a-d3bf40e15734/web+3.jpg",
    href: "/services#service-dog",
  },
  {
    title: "Specialty Programs",
    description: "Advanced off-leash control, confidence building, and task-specific skills.",
    image: "https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/033b530b-5536-44aa-b001-9be608f84b8d/web+4.jpg",
    href: "/services#specialty",
  },
];

const stats = [
  { value: "40+", label: "Years Experience" },
  { value: "11", label: "States Served" },
  { value: "1000s", label: "Dogs Trained" },
  { value: "50+", label: "Professional Trainers" },
];

const locations = [
  { state: "Ohio", cities: "Cleveland, Reynoldsburg", href: "/locations/ohio", trainers: 4 },
  { state: "California", cities: "San Diego, San Jose", href: "/locations/california", trainers: 2 },
  { state: "Florida", cities: "Pensacola, Crestview, Milton", href: "/locations/florida", trainers: 5 },
  { state: "Texas", cities: "Houston, San Antonio, Fort Worth", href: "/locations/texas", trainers: 4 },
  { state: "Georgia", cities: "Atlanta Metro", href: "/locations/georgia", trainers: 4 },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963623690-8674XMXBFTTAKZ0AFPS9/A+B74A0244.jpg"
            alt="Professional dog training at Lorenzo's facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#091353]/95 via-[#091353]/80 to-[#091353]/40" />
        </div>

        <div className="relative w-full max-w-[1200px] mx-auto px-6 lg:px-8 py-32 pt-40">
          <div className="max-w-2xl">
            <p className="text-[#C8102E] text-sm font-bold uppercase tracking-[0.2em] mb-6">
              Trusted Since 1987
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              Serious Training,{" "}
              <span className="text-[#C8102E]">Serious Results</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed max-w-xl">
              Over 40 years of keeping dogs out of shelters and in happy homes.
              We work with canines of any age, size, breed, and temperament.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#C8102E] hover:bg-[#A00D24] text-white px-10 py-5 rounded-lg text-lg font-bold uppercase tracking-wide transition-all shadow-xl shadow-red-500/30 hover:shadow-red-500/40"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:8664364959"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-10 py-5 rounded-lg text-lg font-bold transition-all"
              >
                <Phone className="w-5 h-5" />
                (866) 436-4959
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#091353] py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200/60 text-sm lg:text-base font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-[#C8102E] font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Our Story
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#091353] mb-8 leading-tight">
                Transforming Lives Through Expert Dog Training
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 1987, Lorenzo&apos;s Dog Training Team has been at the forefront of professional
                  dog training for over four decades. What began as one man&apos;s passion for rescuing strays
                  has grown into a nationwide network of over 50 professional trainers serving 11 states.
                </p>
                <p>
                  Our founder Lorenzo developed his unique training methodology by synthesizing
                  the strongest elements from multiple professional techniques into a distinctive style
                  that has proven effective with thousands of dogs.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-[#091353] hover:bg-[#060D3A] text-white px-8 py-4 rounded-lg text-base font-bold uppercase tracking-wide transition-all mt-10"
              >
                Read Our Full Story
                <ArrowRight className="w-5 h-5" />
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
              <div className="absolute -bottom-8 -left-8 bg-[#C8102E] text-white p-8 rounded-2xl shadow-2xl">
                <div className="text-2xl font-bold">Since</div>
                <div className="text-5xl font-bold">1987</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-[#C8102E] font-bold text-sm uppercase tracking-[0.2em] mb-4">
              What We Offer
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#091353] mb-6">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive training solutions tailored to your dog&apos;s unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-6 left-8 text-2xl lg:text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                  <span className="text-[#C8102E] font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 bg-[#091353] hover:bg-[#060D3A] text-white px-10 py-5 rounded-lg text-base font-bold uppercase tracking-wide transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963602083-136RP1MYDQPX8R354ZZM/A+B74A0221.jpg"
                    alt="Training facility interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932025860-72F27QB8B6CVJ2W48A7Q/IMG_5547.jpeg"
                    alt="Training obstacle course"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963610622-YZ54V7ZZ4CQVHZA8S9N5/A+B74A0225.jpg"
                    alt="Dog training session"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932028943-ZVBTKUX411JUGPXX0BDJ/IMG_5746.jpeg"
                    alt="Boarding area"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#C8102E] font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Our Headquarters
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#091353] mb-8 leading-tight">
                3,700 Sq Ft Training Facility
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
                <p>
                  Our Cleveland, Ohio headquarters serves as the central hub where all trainers
                  develop their skills before being placed in communities across the country.
                </p>
                <p>
                  Featuring a professional obstacle course, indoor and outdoor boarding areas,
                  and dedicated training spaces — it&apos;s where dogs and trainers are made.
                </p>
              </div>
              <ul className="space-y-4 mb-10">
                {["Professional obstacle course", "Indoor & outdoor boarding", "Dedicated training spaces", "Trainer development academy"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-lg text-gray-700">
                    <CheckCircle className="w-6 h-6 text-[#C8102E] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/facilities"
                className="inline-flex items-center gap-3 bg-[#091353] hover:bg-[#060D3A] text-white px-8 py-4 rounded-lg text-base font-bold uppercase tracking-wide transition-all"
              >
                Tour Our Facility
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 lg:py-32 bg-[#091353]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-[#C8102E] font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Nationwide Coverage
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Find a Trainer Near You
            </h2>
            <p className="text-xl text-blue-200/70 max-w-2xl mx-auto">
              With professional trainers across 11 states, expert dog training is closer than you think.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {locations.map((loc) => (
              <Link
                key={loc.state}
                href={loc.href}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#C8102E]/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#C8102E]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {loc.state}
                    </h3>
                  </div>
                  <span className="text-xs bg-white/10 text-blue-200/80 px-4 py-2 rounded-full font-medium">
                    {loc.trainers} trainers
                  </span>
                </div>
                <p className="text-blue-200/60 mb-5">{loc.cities}</p>
                <span className="text-[#C8102E] font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                  View Trainers <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <p className="text-white font-bold text-2xl mb-3">+ 6 More States</p>
              <p className="text-blue-200/60">Indiana, Kansas, Kentucky</p>
              <p className="text-blue-200/60">Massachusetts, Michigan, New Hampshire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-[#C8102E] font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#091353]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                quote: "Lorenzo's team transformed our aggressive rescue into the most loving family dog. We were told he was hopeless, but their behavioral modification program changed everything.",
                name: "Sarah M.",
                location: "Cleveland, OH",
              },
              {
                quote: "The service dog training program was incredible. My daughter now has a reliable, well-trained companion that has changed her daily life completely.",
                name: "Michael T.",
                location: "San Diego, CA",
              },
              {
                quote: "We tried three other trainers before finding Lorenzo's team. The difference is night and day. Their approach is thorough, patient, and genuinely effective.",
                name: "Jennifer L.",
                location: "Atlanta, GA",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#C8102E] text-[#C8102E]" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-[#091353] text-lg">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963621663-EMNMD93NW7NRNZ1YCNH7/A+B74A0235.jpg"
            alt="Dog training session"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#091353]/90" />
        </div>
        <div className="relative max-w-[900px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Dog&apos;s Behavior?
          </h2>
          <p className="text-xl lg:text-2xl text-blue-200/80 mb-12 max-w-2xl mx-auto">
            Take the first step toward a better relationship with your dog.
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#C8102E] hover:bg-[#A00D24] text-white px-12 py-5 rounded-lg text-lg font-bold uppercase tracking-wide transition-all shadow-xl shadow-red-500/30"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:8664364959"
              className="inline-flex items-center justify-center gap-3 bg-white/10 border-2 border-white/30 hover:bg-white/20 text-white px-12 py-5 rounded-lg text-lg font-bold transition-all"
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
