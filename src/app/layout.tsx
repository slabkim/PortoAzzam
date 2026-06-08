import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import MouseEffect from "@/components/MouseEffect";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Azzam Aziz Dzakwan | Personal Portfolio",
  description: "Personal portfolio of Azzam Aziz Dzakwan - Sociology Student, Organizational Leader, and Multimedia Creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#1A1A1A]">
        <MouseEffect />
        {children}
      </body>
    </html>
  );
}

