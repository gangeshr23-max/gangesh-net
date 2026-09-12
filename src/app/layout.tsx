import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://gangesh.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gangesh Vivekanandan | Manufacturing Transformation Consultant",
    template: "%s | Gangesh Vivekanandan",
  },
  description: "Manufacturing Transformation Consultant helping manufacturers improve reliability, operational performance, cost efficiency, workforce capability, and industrial technology adoption across Mexico and the United States.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Gangesh Vivekanandan | Manufacturing Transformation Consultant",
    description: "Practical manufacturing transformation focused on reliability, performance, cost, capability, and technology adoption.",
    siteName: "Gangesh Vivekanandan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gangesh Vivekanandan | Manufacturing Transformation Consultant",
    description: "Practical manufacturing transformation focused on reliability, performance, cost, capability, and technology adoption.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gangesh Vivekanandan",
  jobTitle: "Manufacturing Transformation Consultant",
  url: siteUrl,
  sameAs: ["https://www.linkedin.com/in/gangeshr23"],
  knowsAbout: [
    "Manufacturing Transformation",
    "Maintenance and Reliability",
    "Operational Performance",
    "Predictive Maintenance",
    "Industrial IoT",
    "Industrial AI",
    "Program Management"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
