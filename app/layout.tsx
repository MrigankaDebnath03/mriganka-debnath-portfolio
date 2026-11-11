import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteOrigin = siteUrl ? new URL(siteUrl) : undefined;
const siteDescription =
  "Software engineer specializing in backend systems, cloud architecture, geospatial platforms, and developer tools. Experience at Labcorp, Samsung R&D, and IIT Madras.";

export const viewport: Viewport = {
  themeColor: "#fdfbf7",
};

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: "Mriganka Debnath | Software Engineer",
  description: siteDescription,
  applicationName: "Mriganka Debnath Portfolio",
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [
    profile.name,
    "software engineer",
    "backend engineer",
    "cloud architecture",
    "distributed systems",
    "geospatial platforms",
    "developer tools",
    "India",
  ],
  category: "technology",
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    title: "Mriganka Debnath | Software Engineer",
    description: siteDescription,
    type: "profile",
    url: siteUrl,
    siteName: "Mriganka Debnath",
    locale: "en_IN",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Mriganka Debnath, Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mriganka Debnath | Software Engineer",
    description: siteDescription,
    images: [{ url: "/opengraph-image", alt: "Mriganka Debnath, Software Engineer" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: `${profile.name} — Software Engineer`,
  url: siteUrl,
  mainEntity: {
    "@type": "Person",
    "@id": siteUrl ? `${siteUrl.replace(/\/$/, "")}/#person` : undefined,
    name: profile.name,
    url: siteUrl,
    jobTitle: profile.role,
    description: profile.summary,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: { "@type": "PostalAddress", addressLocality: "Mumbai / Raiganj", addressCountry: "IN" },
    alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.institution },
    knowsAbout: profile.knowsAbout,
    sameAs: [profile.links.github, profile.links.linkedin],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
