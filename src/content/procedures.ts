export type Procedure = {
  slug: string;
  nome: string;
  categoria: "Facial" | "Corporal" | "Capilar";
  resumo: string;
  beneficios: string[];
  imagem: string; // caminho em /public/images/... ou URL
  destaque?: boolean;
  cta?: { label: string; href: string };
};

export const procedures: Procedure[] = [
  {
    slug: "harmonizacao-facial",
    nome: "Harmonização Facial",
    categoria: "Facial",
    resumo: "Equilíbrio e definição com técnicas seguras e personalizadas.",
    beneficios: [
      "Resultados naturais",
      "Melhora de simetria",
      "Procedimento ambulatorial",
    ],
    imagem: "/images/proc-harmonizacao.jpg",
  },
  {
    slug: "skinbooster",
    nome: "Skinbooster",
    categoria: "Facial",
    resumo: "Hidratação injetável para viço e firmeza da pele.",
    beneficios: [
      "Hidratação profunda",
      "Melhora de textura",
      "Brilho saudável",
    ],
    imagem: "/images/proc-skinbooster.jpg",
  },
  {
    slug: "bumbum-up",
    nome: "Bumbum Uplift",
    categoria: "Corporal",
    resumo: "Técnicas para sustentação e contorno da região glútea.",
    beneficios: ["Efeito lifting", "Contorno valorizado"],
    imagem: "/images/proc-bumbum.jpg",
  },
  {
    slug: "capilar-bioestimulador",
    nome: "Bioestimulador Capilar",
    categoria: "Capilar",
    resumo: "Estimula crescimento e fortalecimento dos fios.",
    beneficios: ["Redução da queda", "Fortalecimento do fio"],
    imagem: "/images/proc-capilar.jpg",
  },
  {
    slug: "limpeza-pele-premium",
    nome: "Limpeza de Pele Premium",
    categoria: "Facial",
    resumo: "Remove impurezas, oleosidade e células mortas, devolvendo viço imediato.",
    beneficios: [
      "Desobstrui os poros, prevenindo cravos e acne",
      "Devolve luminosidade à pele",
      "Promove aspecto saudável e renovado",
    ],
    imagem: "/images/proc-limpeza-pele.jpg",
  },
  {
    slug: "microagulhamento",
    nome: "Microagulhamento",
    categoria: "Facial",
    resumo: "Estimula colágeno para melhora de textura e cicatrizes.",
    beneficios: [
      "Estimula a produção natural de colágeno",
      "Melhora cicatrizes de acne e linhas finas",
      "Aumenta absorção de ativos rejuvenescedores",
    ],
    imagem: "/images/proc-microagulhamento.jpg",
  },
  {
    slug: "botox",
    nome: "Botox (Toxina Botulínica)",
    categoria: "Facial",
    resumo: "Suaviza rugas e previne o envelhecimento precoce.",
    beneficios: [
      "Suaviza linhas de expressão",
      "Previne envelhecimento precoce",
      "Proporciona aparência natural e descansada",
    ],
    imagem: "/images/proc-botox.jpg",
  },
  {
    slug: "bioestimuladores-colageno",
    nome: "Bioestimuladores de Colágeno (Ellansé, Sculptra, Radiesse)",
    categoria: "Facial",
    resumo: "Estimulam colágeno gradual e duradouro, com resultados progressivos.",
    beneficios: [
      "Melhoram firmeza e contorno da pele",
      "Qualidade da pele renovada",
      "Resultados naturais e sem exageros",
    ],
    imagem: "/images/proc-bioestimuladores.jpg",
  },
  {
    slug: "ultrassom-microfocado",
    nome: "Ultrassom Microfocado",
    categoria: "Facial",
    resumo: "Efeito lifting sem cortes ou cirurgia, estimulando colágeno profundo.",
    beneficios: [
      "Efeito lifting não cirúrgico",
      "Trata flacidez em rosto, pescoço e corpo",
      "Resultados visíveis e duradouros",
    ],
    imagem: "/images/proc-ultrassom.jpg",
  },
  {
    slug: "clareamento-manchas-cicatrizes",
    nome: "Clareamento de Manchas e Cicatrizes",
    categoria: "Facial",
    resumo: "Uniformiza o tom e suaviza manchas e cicatrizes.",
    beneficios: [
      "Uniformiza tom da pele",
      "Suaviza melasma e manchas pós-acne",
      "Pele mais iluminada e rejuvenescida",
    ],
    imagem: "/images/proc-clareamento.jpg",
  },
  {
    slug: "tratamentos-flacidez",
    nome: "Tratamentos para Flacidez de Pele",
    categoria: "Corporal",
    resumo: "Recuperam firmeza e sustentação da pele em diferentes áreas.",
    beneficios: [
      "Estimulam colágeno e elastina naturalmente",
      "Indicados para rosto, pescoço, abdômen, braços e coxas",
      "Melhora geral de firmeza",
    ],
    imagem: "/images/proc-flacidez.jpg",
  },
  {
    slug: "gordura-localizada",
    nome: "Gordura Localizada",
    categoria: "Corporal",
    resumo: "Reduz acúmulos resistentes, melhorando contorno e definição.",
    beneficios: [
      "Redução de gordura localizada",
      "Melhora do contorno corporal",
      "Pode ser associado a radiofrequência/bioestimuladores",
    ],
    imagem: "/images/proc-gordura.jpg",
  },
];
