import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";

const heading = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Clínica • Beleza & Bem-estar",
  description: "Resultados naturais com técnicas seguras.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${heading.variable} ${body.variable} antialiased bg-base-50 text-base-900`}
      >
        {/* Header fixo com links de navegação */}
        <Header />
        
        {/* Conteúdo principal */}
        <main>{children}</main>
      </body>
    </html>
  );
}
