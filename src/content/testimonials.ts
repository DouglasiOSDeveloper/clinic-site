export type Testimonial = {
  id: string;
  nome: string;
  cidade?: string;
  texto: string;
  rating?: number; // 1..5
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    nome: "Maria F.",
    cidade: "Brasília – DF",
    texto: "Atendimento maravilhoso, me senti super segura e o resultado ficou incrível!",
    rating: 5
  },
  {
    id: "t2",
    nome: "Carla S.",
    texto: "Equipe atenciosa e ambiente acolhedor. Recomendo demais!",
    rating: 4
  },
  {
    id: "t3",
    nome: "Juliana R.",
    cidade: "Águas Claras – DF",
    texto: "Minha pele nunca esteve tão bonita, amei o cuidado em cada detalhe.",
    rating: 5
  }
];
