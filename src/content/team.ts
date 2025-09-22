export type TeamMember = {
  id: string;
  nome: string;
  cargo: string;
  bioCurta: string;
  registro?: string;      // CRM, CRO, etc.
  foto: string;           // /images/team/...
  instagram?: string;
  portfolioUrl?: string;
};

export const team: TeamMember[] = [
  {
    id: "prof-01",
    nome: "Dra. Débora Câmara",
    cargo: "Biomédica Esteta",
    bioCurta: "Especialista em procedimentos minimamente invasivos para rejuvenescimento e harmonização facial.",
    registro: "",
    foto: "/images/team/ana.jpg",
    instagram: "https://www.instagram.com/dra.deboracamara/",
  },
];
