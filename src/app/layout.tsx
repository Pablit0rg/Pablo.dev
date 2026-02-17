import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Scanlines } from "@/components/ui/Scanlines"; // <--- Importar
import { ConsoleLogger } from "@/components/layout/ConsoleLogger"; // <--- Importar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pablo.dev | Principal Software Engineer",
  description: "High-performance portfolio focusing on Backend, Database & AI Ops.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-white selection:text-black flex flex-col min-h-screen`}
      >
        {/* Camada de Efeitos Visuais e Logs */}
        <Scanlines />
        <ConsoleLogger />

        <Navbar />
        <div className="pt-16 flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}