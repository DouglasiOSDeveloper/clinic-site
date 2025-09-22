"use client";

import { contact } from "@/content/contact";

export default function Location() {
  return (
    <section id="localizacao" className="container-section">
      <div className="mb-8">
        <h2 className="section-title">Localização</h2>
        <p className="section-subtitle">Estamos te esperando</p>
      </div>

      <div className="card p-2">
        {contact.mapsEmbedUrl ? (
          <iframe
            src={contact.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[480px] rounded-2xl"
          />
        ) : (
          <div className="h-[480px] grid place-items-center text-neutralB">Informe a URL do Google Maps</div>
        )}
      </div>
    </section>
  );
}
