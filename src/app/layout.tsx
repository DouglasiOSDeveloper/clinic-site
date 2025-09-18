import "@/styles/globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const heading = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Clínica • Beleza & Bem-estar",
  description: "Resultados naturais com técnicas seguras.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      {/* bg/text agora vêm das CSS vars em globals.css */}
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
