"use client";

import { instagramPosts } from "@/content/instagram";

function toEmbed(url: string) {
  // Converte https://www.instagram.com/p/Cxyz123/ -> https://www.instagram.com/p/Cxyz123/embed
  try {
    const u = new URL(url);
    if (!u.pathname.endsWith("/")) u.pathname += "/";
    return `https://www.instagram.com${u.pathname}embed`;
  } catch {
    return "";
  }
}

export default function InstagramFeed() {
  return (
    <section id="postagens" className="container-section">
      <div className="mb-8">
        <h2 className="section-title">Postagens (Instagram)</h2>
        <p className="section-subtitle">
          Acompanhe nossos conteúdos e resultados pelo Instagram
        </p>
      </div>

      {instagramPosts.length === 0 ? (
        <p className="text-neutralB">Nenhuma postagem configurada ainda.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((p, i) => {
            const src = toEmbed(p.url);
            return (
              <div key={i} className="card p-2">
                {src ? (
                  <iframe
                    title={p.title || `Post Instagram ${i + 1}`}
                    src={src}
                    loading="lazy"
                    className="w-full aspect-[4/5] rounded-2xl"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                ) : (
                  <div className="aspect-[4/5] grid place-items-center text-neutralB">
                    Post inválido
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
