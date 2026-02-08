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
];

const stats = [
  { value: "40+", label: "Years Experience" },
  { value: "11", label: "States Served" },
  { value: "1000s", label: "Dogs Trained" },
  { value: "50+", label: "Professional Trainers" },
];

const locations = [
  { state: "Ohio", cities: "Cleveland, Reynoldsburg", href: "/locations/ohio" },
  { state: "California", cities: "San Diego, San Jose", href: "/locations/california" },
  { state: "Florida", cities: "Pensacola, Crestview, Milton", href: "/locations/florida" },
  { state: "Texas", cities: "Houston, San Antonio, Fort Worth", href: "/locations/texas" },
  { state: "Georgia", cities: "Atlanta Metro", href: "/locations/georgia" },
];

const testimonials = [
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

        <div className="relative container-site" style={{ paddingTop: "calc(var(--header-height) + 64px)", paddingBottom: "64px" }}>
          <div className="max-w-2xl">
            <p className="text-[#C8102E] text-sm font-bold uppercase tracking-widest mb-4">
              Trusted Since 1987
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Serious Training,{" "}
              <span className="text-[#C8102E]">Serious Results</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
              Over 40 years of keeping dogs out of shelters and in happy homes.
              We work with canines of any age, size, breed, and temperament.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn btn-primary btn-lg"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:8664364959"
                className="btn btn-outline btn-lg text-white border-white/30"
              >
                <Phone className="w-5 h-5" />
                (866) 436-4959
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#091353] section-padding">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200/60 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="section-title">
                Transforming Lives Through Expert Dog Training
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
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
              <Link href="/about" className="btn btn-secondary">
                Read Our Full Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932027952-3J2P71J0GOPON0S6QVFP/IMG_5532.jpeg"
                  alt="Dog training at Lorenzo's Cleveland facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-[#C8102E] text-white px-6 py-4 rounded-lg">
                <span className="text-sm font-medium">Established</span>
                <span className="block text-2xl font-bold">1987</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title mx-auto">Our Training Programs</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive training solutions tailored to your dog&apos;s unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group card card-elevated hover:shadow-xl transition-shadow overflow-hidden p-0"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#091353] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-[#C8102E] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn btn-secondary">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963602083-136RP1MYDQPX8R354ZZM/A+B74A0221.jpg"
                    alt="Training facility interior"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932025860-72F27QB8B6CVJ2W48A7Q/IMG_5547.jpeg"
                    alt="Training obstacle course"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1558963610622-YZ54V7ZZ4CQVHZA8S9N5/A+B74A0225.jpg"
                    alt="Dog training session"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/5cb9fbd5c2ff6135a509b1a3/1559932028943-ZVBTKUX411JUGPXX0BDJ/IMG_5746.jpeg"
                    alt="Boarding area"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="section-label">Our Headquarters</p>
              <h2 className="section-title">3,700 Sq Ft Training Facility</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Our Cleveland, Ohio headquarters serves as the central hub where all trainers
                  develop their skills before being placed in communities across the country.
                </p>
                <p>
                  Featuring a professional obstacle course, indoor and outdoor boarding areas,
                  and dedicated training spaces — it&apos;s where dogs and trainers are made.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {["Professional obstacle course", "Indoor & outdoor boarding", "Dedicated training spaces", "Trainer development academy"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#C8102E] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/facilities" className="btn btn-secondary">
                Tour Our Facility
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-[#091353]">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-label">Nationwide Coverage</p>
            <h2 className="section-title text-white mx-auto">Find a Trainer Near You</h2>
            <p className="section-subtitle text-blue-200/70 mx-auto">
              With professional trainers across 11 states, expert dog training is closer than you think.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.state}
                href={loc.href}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#C8102E]/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#C8102E]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{loc.state}</h3>
                </div>
                <p className="text-blue-200/60 mb-4">{loc.cities}</p>
                <span className="text-[#C8102E] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Trainers <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center">
              <p className="text-white font-bold text-lg mb-2">+ 6 More States</p>
              <p className="text-blue-200/60 text-sm">Indiana, Kansas, Kentucky, Massachusetts, Michigan, New Hampshire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-label">Testimonials</p>
            <h2 className="section-title mx-auto">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card card-elevated p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C8102E] text-[#C8102E]" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-[#091353]">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#C8102E]">
        <div className="container-site text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Dog&apos;s Behavior?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Take the first step toward a better relationship with your dog.
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn btn-lg bg-white text-[#C8102E] hover:bg-gray-100"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:8664364959"
              className="btn btn-outline btn-lg text-white border-white/40"
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
