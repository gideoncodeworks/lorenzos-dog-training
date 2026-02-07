"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">Message Sent!</h3>
        <p className="text-gray-600">
          Thank you for reaching out. One of our team members will contact you shortly
          to discuss your dog&apos;s training needs.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#1a1a2e] mb-2">Full Name *</label>
          <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 outline-none transition-all text-[#1a1a2e]" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1a1a2e] mb-2">Email Address *</label>
          <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 outline-none transition-all text-[#1a1a2e]" placeholder="your@email.com" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a2e] mb-2">Phone Number</label>
          <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 outline-none transition-all text-[#1a1a2e]" placeholder="(555) 555-5555" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-[#1a1a2e] mb-2">Service Interested In</label>
          <select id="service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 outline-none transition-all text-[#1a1a2e] bg-white">
            <option value="">Select a service</option>
            <option value="basic">Basic Obedience</option>
            <option value="behavioral">Behavioral Modification</option>
            <option value="service-dog">Service Dog Training</option>
            <option value="specialty">Specialty Training</option>
            <option value="protection">Protection Training</option>
            <option value="group">Group Classes</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1a1a2e] mb-2">Tell Us About Your Dog *</label>
        <textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 outline-none transition-all text-[#1a1a2e] resize-none" placeholder="Tell us about your dog's breed, age, and any behavioral concerns..." />
      </div>
      <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#DAA520] text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 text-lg">
        <Send className="w-5 h-5" />
        Send Message
      </button>
      <p className="text-sm text-gray-500 text-center">
        We typically respond within 24 hours. For immediate assistance, call{" "}
        <a href="tel:8664364959" className="text-[#B8860B] font-medium">(866) 436-4959</a>.
      </p>
    </form>
  );
}
