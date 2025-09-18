export type Procedure = {
  slug: string;
  nome: string;
  categoria: "Facial" | "Corporal" | "Capilar";
  resumo: string;
  beneficios: string[];
  imagem: string; // /images/...
  destaque?: boolean;
  cta?: { label: string; href: string }; // WhatsApp
};

export const procedures: Procedure[] = [
  // exemplo:
  // {
  //   slug: "harmonizacao-facial",
  //   nome: "Harmonização Facial",
  //   categoria: "Facial",
  //   resumo: "Equilíbrio e definição com técnicas seguras.",
  //   beneficios: ["Resultados naturais", "Procedimento personalizado"],
  //   imagem: "/images/proc-harmonizacao.jpg",
  //   cta: { label: "Agendar no WhatsApp", href: "https://wa.me/55SEUNUMERO" }
  // }
];
