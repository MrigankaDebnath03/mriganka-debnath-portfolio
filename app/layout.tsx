import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteOrigin = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: "Mriganka Debnath | Software Engineer — Backend, Systems & Full-Stack",
  description:
    "Portfolio of Mriganka Debnath, Software Engineer with experience at Labcorp, IIT Madras, and Samsung R&D. Specializing in high-performance backends, serverless architectures, and developer tooling.",
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    title: "Mriganka Debnath | Software Engineer",
    description: "Backend systems, cloud architecture, geospatial platforms, and developer tooling.",
    type: "profile",
    url: siteUrl,
    siteName: "Mriganka Debnath",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mriganka Debnath | Software Engineer",
    description: "Backend systems, cloud architecture, and developer tooling.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: `${profile.name} — Software Engineer`,
  mainEntity: {
    "@type": "Person",
    name: profile.name,
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
