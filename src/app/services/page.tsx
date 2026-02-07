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
