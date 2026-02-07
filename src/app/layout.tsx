import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Providers } from "@/components/Providers";
import { getSiteData, fallbackSiteData } from "@/lib/cms";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteData = await getSiteData();
  const data = siteData || fallbackSiteData;

  return {
    metadataBase: new URL("https://lorenzos-dog-training.vercel.app"),
    title: {
      default: data.seo.defaultMetaTitle || data.brand.name,
      template: `%s | ${data.brand.name}`,
    },
    description: data.seo.defaultMetaDescription,
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
    authors: [{ name: data.brand.name }],
    creator: data.brand.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://lorenzos-dog-training.vercel.app",
      siteName: data.brand.name,
      title: data.seo.defaultMetaTitle || data.brand.name,
      description:
        data.seo.defaultMetaDescription ||
        "Over 40 years of professional dog training excellence.",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${data.brand.name} - Serious Training, Serious Results`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.seo.defaultMetaTitle || data.brand.name,
      description: data.seo.defaultMetaDescription || "",
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
    icons: data.seo.favicon
      ? { icon: data.seo.favicon }
      : { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteData = await getSiteData();
  const data = siteData || fallbackSiteData;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.brand.name,
    description: data.seo.defaultMetaDescription,
    url: "https://www.lorenzosdogtrainingteam.com",
    telephone: data.contact.phone,
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
    sameAs: Object.values(data.socialMedia),
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          '--primary-color': data.brand.primaryColor || '#B8860B',
          '--secondary-color': data.brand.secondaryColor || '#1a1a2e',
          '--accent-color': data.brand.accentColor || '#DAA520',
        } as React.CSSProperties}
      >
        <Providers siteData={data}>
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatBot />
        </Providers>
      </body>
    </html>
  );
}
