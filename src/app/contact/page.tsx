import type { Metadata } from "next";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Dog Training Consultation",
  description:
    "Contact Lorenzo's Dog Training Team for a free consultation. Call (866) 436-4959 or fill out our contact form. Headquarters at 4805 Orchard Rd., Garfield Heights, OH 44128. Professional dog trainers across 11 states ready to help.",
  openGraph: {
    title: "Contact Lorenzo's Dog Training Team",
    description: "Get a free dog training consultation. Call (866) 436-4959 or visit us at 4805 Orchard Rd., Garfield Heights, OH 44128.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-[#060D3A] pt-36 pb-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get in <span className="text-[#C8102E]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to start your dog&apos;s training journey? Contact us today for a free
              consultation. Our team is here to help you find the perfect training solution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-[#091353] mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and one of our team members will get back to you
                to discuss your dog&apos;s training needs.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#091353] mb-6">Contact Information</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-5 bg-white rounded-md border border-[#e5e7eb] shadow-sm">
                  <div className="w-12 h-12 bg-[#C8102E]/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#C8102E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#091353] mb-1">Phone</h3>
                    <a href="tel:8664364959" className="text-[#C8102E] font-medium transition-colors">(866) 436-4959</a>
                    <p className="text-sm text-gray-500 mt-1">Call us for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-md border border-[#e5e7eb] shadow-sm">
                  <div className="w-12 h-12 bg-[#C8102E]/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#C8102E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#091353] mb-1">Headquarters</h3>
                    <p className="text-gray-600">4805 Orchard Rd.</p>
                    <p className="text-gray-600">Garfield Heights, OH 44128</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-md border border-[#e5e7eb] shadow-sm">
                  <div className="w-12 h-12 bg-[#C8102E]/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#C8102E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#091353] mb-1">Email</h3>
                    <a href="mailto:info@lorenzosdogtrainingteam.com" className="text-[#C8102E] font-medium transition-colors">info@lorenzosdogtrainingteam.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-md border border-[#e5e7eb] shadow-sm">
                  <div className="w-12 h-12 bg-[#C8102E]/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#C8102E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#091353] mb-1">Service Areas</h3>
                    <p className="text-gray-600 text-sm">OH, CA, FL, TX, GA, IN, KS, KY, MA, MI, NH</p>
                    <p className="text-sm text-gray-500 mt-1">Trainers available across 11 states</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#091353] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/lorenzosdogtrainingteam/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#091353] rounded-md flex items-center justify-center hover:bg-[#C8102E] transition-colors" aria-label="Follow us on Instagram">
                    <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/LorenzosDogTrainingTeam/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#091353] rounded-md flex items-center justify-center hover:bg-[#C8102E] transition-colors" aria-label="Follow us on Facebook">
                    <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://www.youtube.com/user/mydogtrainingteam" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#091353] rounded-md flex items-center justify-center hover:bg-[#C8102E] transition-colors" aria-label="Follow us on YouTube">
                    <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
