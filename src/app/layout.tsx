import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IntroAnimation } from "@/components/IntroAnimation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#D4FF00",
};

export const metadata: Metadata = {
  title: "Satyam Shukla — Brutalist Developer Portfolio",
  description:
    "Official personal portfolio of Satyam Shukla: Full Stack Web Developer, Python Engineer & Computer Science student at SRMCEM Lucknow. Brutalism UI design.",
  keywords: [
    "Satyam Shukla",
    "Portfolio",
    "Full Stack Developer",
    "Python Developer",
    "Software Engineer",
    "SRMCEM",
    "Brutalist Portfolio",
    "Next.js Developer"
  ],
  authors: [{ name: "Satyam Shukla" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Satyam Shukla — Brutalist Developer Portfolio",
    description:
      "Full Stack Developer & Python Engineer. Bridging mathematical rigor, full-stack web applications, and bold visual design.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F8F5EE] text-[#0A0A0A] selection:bg-[#D4FF00] selection:text-black">
        <IntroAnimation />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
