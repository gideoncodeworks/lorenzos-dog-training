"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { submitForm } from "@/lib/cms";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const result = await submitForm({
      formType: "contact",
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      data: {
        service: formData.get("service") as string,
      },
    });

    if (result.success) {
      setStatus("success");
    } else {
      setErrorMsg(result.error || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center shadow-[0_18px_45px_-35px_rgba(27,42,35,0.45)]">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-[#091353] mb-2">Message Sent!</h3>
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
          <label htmlFor="name" className="block text-sm font-medium text-[#091353] mb-2">Full Name *</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-[#e5e7eb] bg-white/80 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 outline-none transition-all text-[#091353] shadow-[0_14px_35px_-30px_rgba(27,42,35,0.35)]" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#091353] mb-2">Email Address *</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-[#e5e7eb] bg-white/80 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 outline-none transition-all text-[#091353] shadow-[0_14px_35px_-30px_rgba(27,42,35,0.35)]" placeholder="your@email.com" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#091353] mb-2">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-md border border-[#e5e7eb] bg-white/80 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 outline-none transition-all text-[#091353] shadow-[0_14px_35px_-30px_rgba(27,42,35,0.35)]" placeholder="(555) 555-5555" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-[#091353] mb-2">Service Interested In</label>
          <select id="service" name="service" className="w-full px-4 py-3 rounded-md border border-[#e5e7eb] bg-white/80 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 outline-none transition-all text-[#091353] shadow-[0_14px_35px_-30px_rgba(27,42,35,0.35)]">
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
        <label htmlFor="message" className="block text-sm font-medium text-[#091353] mb-2">Tell Us About Your Dog *</label>
        <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-md border border-[#e5e7eb] bg-white/80 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 outline-none transition-all text-[#091353] resize-none shadow-[0_14px_35px_-30px_rgba(27,42,35,0.35)]" placeholder="Tell us about your dog's breed, age, and any behavioral concerns..." />
      </div>
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">{errorMsg}</p>
      )}
      <button type="submit" disabled={status === "loading"} className="w-full flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#A00D24] disabled:opacity-60 text-white px-8 py-4 rounded-md font-semibold transition-colors duration-200 text-lg shadow-lg">
        <Send className="w-5 h-5" />
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      <p className="text-sm text-gray-500 text-center">
        We typically respond within 24 hours. For immediate assistance, call{" "}
        <a href="tel:8664364959" className="text-[#C8102E] font-medium">(866) 436-4959</a>.
      </p>
    </form>
  );
}
