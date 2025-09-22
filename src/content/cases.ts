export type CaseImage = {
  src: string;            // /images/cases/...
  label?: "Antes" | "Depois" | string;
  alt?: string;
};

export type CaseItem = {
  id: string;
  titulo: string;
  descricao?: string;
  categoria?: "Facial" | "Corporal" | "Capilar";
  imagens: CaseImage[];   // pode ser 1 imagem ou pares Antes/Depois
  consentimento?: boolean; // true se autorizado para exibição pública
};

export const cases: CaseItem[] = [
  {
    id: "cf-01",
    titulo: "Harmonização: definição de mandíbula",
    categoria: "Facial",
    descricao: "Ajustes sutis para equilíbrio do terço inferior.",
    imagens: [
      { src: "/images/cases/cf01-antes.jpg", label: "Antes", alt: "Antes - perfil" },
      { src: "/images/cases/cf01-depois.jpg", label: "Depois", alt: "Depois - perfil" }
    ],
    consentimento: true
  },
  {
    id: "corp-01",
    titulo: "Bumbum Uplift",
    categoria: "Corporal",
    imagens: [
      { src: "/images/cases/corp01-depois.jpg", label: "Depois", alt: "Resultado pós-sessões" }
    ],
    consentimento: true
  },
  {
    id: "cap-01",
    titulo: "Bioestimulador capilar",
    categoria: "Capilar",
    descricao: "Fortalecimento e redução de queda.",
    imagens: [
      { src: "/images/cases/cap01-antes.jpg", label: "Antes" },
      { src: "/images/cases/cap01-depois.jpg", label: "Depois" }
    ],
    consentimento: true
  }
];
