import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aklile Ansa | Full Stack Developer",
  description: "Ethiopian Full Stack Developer with 3+ years of experience specializing in React, Next.js, Node.js, and modern web technologies. Creating user-friendly, human-centered digital products.",
  keywords: ["Full Stack Developer", "Software Engineer", "React", "Next.js", "Node.js", "TypeScript", "Web Development", "Ethiopia"],
  authors: [{ name: "Aklile Ansa" }],
  openGraph: {
    title: "Aklile Ansa | Full Stack Developer",
    description: "The FullStack Developer you've dreamt of having. Ethiopian developer with 3+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#253137] text-gray-100 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
