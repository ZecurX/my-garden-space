import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

// Inter as the main body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Playfair Display for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "My Garden Space | Professional Gardening & Landscaping Services",
    template: "%s | My Garden Space",
  },
  description:
    "Transform your outdoor space with My Garden Space. We offer professional gardening, landscaping, plant rental, and maintenance services in Bangalore.",
  keywords: [
    "gardening services",
    "landscaping",
    "plant rental",
    "garden maintenance",
    "Bangalore landscaping",
    "vertical garden",
    "pergola installation",
    "lawn development",
  ],
  authors: [{ name: "My Garden Space" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mygardenspace.com",
    siteName: "My Garden Space",
    title: "My Garden Space | Professional Gardening & Landscaping Services",
    description:
      "Transform your outdoor space with professional gardening and landscaping services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Garden Space - Beautiful Gardens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Garden Space | Gardening & Landscaping",
    description:
      "Transform your outdoor space with professional gardening and landscaping services.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
