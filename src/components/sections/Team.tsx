"use client";

import Image from "next/image";
import { team } from "@/content/team";
import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Team() {
  return (
    <section id="equipe" className="container-section">
      <div className="mb-8">
        <h2 className="section-title">Nossa Equipe</h2>
        <p className="section-subtitle">
          Profissionais qualificados para cuidar da sua beleza com segurança
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((m) => (
          <div key={m.id} className="card overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={m.foto}
                alt={m.nome}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{m.nome}</h3>
              <p className="text-sm text-neutralB">{m.cargo}</p>
              {m.registro && (
                <p className="mt-1 text-xs text-neutralB">{m.registro}</p>
              )}
              <p className="mt-3 text-sm text-neutralB">{m.bioCurta}</p>

              <div className="mt-4 flex gap-3">
                {m.instagram && (
                  <a
                    href={m.instagram}
                    target="_blank"
                    className="hover:opacity-80"
                    aria-label={`${m.nome} Instagram`}
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
                {m.portfolioUrl && (
                  <a
                    href={m.portfolioUrl}
                    target="_blank"
                    className="hover:opacity-80"
                    aria-label={`${m.nome} Portfólio`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botão "Ver todos" se no futuro tiver mais membros */}
      <div className="mt-8 flex justify-center">
        <Button variant="outline">Ver todos os colaboradores</Button>
      </div>
    </section>
  );
}
