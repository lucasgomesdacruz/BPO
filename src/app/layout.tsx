import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google";

import "./globals.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arqueiro Departamento Pessoal",
  description: "Soluções completas em Departamento Pessoal para empresas com ética, responsabilidade e foco em resultados.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={cn("font-sans", inter.variable)}>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
