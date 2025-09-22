export type PaymentMethod =
  | "pix" | "credito" | "debito" | "dinheiro";

export type ContactInfo = {
  nomeClinica?: string;
  whatsapp: string;           // ex.: "https://wa.me/5561XXXXXXX?text=Quero%20agendar"
  telefone?: string;
  email?: string;
  horario: string;            // ex.: "Seg a Sex, 9h–19h • Sáb, 9h–13h"
  enderecoLinha1: string;     // rua, número
  enderecoLinha2?: string;    // bairro
  cidadeUF: string;           // "Brasília – DF"
  formsPagamento: PaymentMethod[];
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  mapsEmbedUrl: string;       // iframe URL (ou use .env se preferir)
};

export const contact: ContactInfo = {
  // PREENCHA COM OS SEUS DADOS
  nomeClinica: "Dra. Débora Câmara",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "61996426440",
  telefone: "61996426440",
  email: "",
  horario: "Seg a Sex, 8h–19h. Sábado, 8h–14h",
  enderecoLinha1: "Avenida Pau Brasil Lote, 6 - Sul, Aguas Claras",
  enderecoLinha2: "Sala 303 - Ed. E-Business",
  cidadeUF: "Brasília – DF",
  formsPagamento: ["pix","credito","debito","dinheiro"],
  instagram: "https://www.instagram.com/dra.deboracamara/",
  facebook: "",
  tiktok: "",
  mapsEmbedUrl: process.env.NEXT_PUBLIC_MAPS_EMBED || "https://maps.app.goo.gl/xcZTqh67mpwZ7NuA6"
};
