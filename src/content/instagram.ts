export type InstaPost = {
  url: string;        // URL completa do post (ex.: https://www.instagram.com/p/Cxyz123/)
  title?: string;     // opcional - legenda curta para acessibilidade
};

export const instagramPosts: InstaPost[] = [
  // EXEMPLOS — substitua pelos seus links de posts:
  { url: "https://www.instagram.com/p/Cxyz123/", title: "Resultado harmonização facial" },
  { url: "https://www.instagram.com/p/Cabc456/", title: "Cuidados pós-procedimento" },
  { url: "https://www.instagram.com/p/Cdef789/", title: "Dica de skincare" }
];
