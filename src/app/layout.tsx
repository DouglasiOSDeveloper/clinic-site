import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import { LocalBusinessJSONLD } from "@/lib/seo";

const heading = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "X • Beleza & Bem-estar",
  description: "Procedimentos faciais, corporais e capilares com segurança e resultados naturais.",
  keywords: ["harmonização facial", "skinbooster", "estética corporal", "beleza df"],
  openGraph: {
    title: "X • Beleza & Bem-estar",
    description: "Segurança, naturalidade e profissionais qualificados em estética.",
    url: "https://seudominio.com.br",
    siteName: "X",
    images: [
      {
        url: "https://seudominio.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "X"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  alternates: {
    canonical: "https://seudominio.com.br"
  }
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

        {/* JSON-LD para SEO (LocalBusiness) */}
        <script
          type="application/ld+json"
          // se preferir, troque LocalBusinessJSONLD() por uma versão que lê dos seus dados de contato
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LocalBusinessJSONLD()),
          }}
        />
      </body>
    </html>
  );
}
