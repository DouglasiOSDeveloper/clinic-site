"use client";

import { benefits } from "@/content/benefits";

export default function Benefits() {
  return (
    <section id="beneficios" className="container-section">
      <div className="mb-8">
        <h2 className="section-title">Benefícios</h2>
        <p className="section-subtitle">Por que escolher nossos procedimentos</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="card p-6">
            {b.icon && <div className="mb-3 text-2xl">{b.icon}</div>}
            <h3 className="text-xl font-semibold">{b.titulo}</h3>
            <p className="mt-2 text-neutralB">{b.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
