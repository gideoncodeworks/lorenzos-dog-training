import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lorenzos-dog-training.vercel.app"),
  title: {
    default: "Lorenzo's Dog Training Team | Professional Dog Training Since 1987",
    template: "%s | Lorenzo's Dog Training Team",
  },
  description:
    "Over 40 years of professional dog training excellence. Lorenzo's Dog Training Team offers basic obedience, behavioral modification, service dog training, and specialty programs across 11 states. Serious Training, Serious Results.",
  keywords: [
    "dog training",
    "professional dog trainer",
    "obedience training",
    "behavioral modification",
    "service dog training",
    "puppy training",
    "Lorenzo dog training",
    "dog training Ohio",
    "dog training California",
    "dog training Florida",
    "dog training Texas",
    "dog training Georgia",
  ],
  authors: [{ name: "Lorenzo's Dog Training Team" }],
  creator: "Lorenzo's Dog Training Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lorenzos-dog-training.vercel.app",
    siteName: "Lorenzo's Dog Training Team",
    title: "Lorenzo's Dog Training Team | Professional Dog Training Since 1987",
    description:
      "Over 40 years of professional dog training excellence. Serious Training, Serious Results. Serving 11 states with expert trainers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lorenzo's Dog Training Team - Serious Training, Serious Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorenzo's Dog Training Team | Professional Dog Training Since 1987",
    description:
      "Over 40 years of professional dog training excellence. Serious Training, Serious Results.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lorenzo's Dog Training Team",
    description:
      "Professional dog training services with over 40 years of experience. Offering basic obedience, behavioral modification, service dog training, and specialty programs.",
    url: "https://www.lorenzosdogtrainingteam.com",
    telephone: "(866) 436-4959",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4805 Orchard Rd.",
      addressLocality: "Garfield Heights",
      addressRegion: "OH",
      postalCode: "44128",
      addressCountry: "US",
    },
    foundingDate: "1987",
    areaServed: [
      "Ohio", "California", "Florida", "Georgia", "Texas",
      "Indiana", "Kansas", "Kentucky", "Massachusetts", "Michigan", "New Hampshire",
    ],
    sameAs: [
      "https://www.instagram.com/lorenzosdogtrainingteam/",
      "https://www.facebook.com/LorenzosDogTrainingTeam/",
      "https://www.youtube.com/user/mydogtrainingteam",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
