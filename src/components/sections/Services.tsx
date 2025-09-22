"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { procedures, type Procedure } from "@/content/procedures";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { buildWhatsAppLink } from "@/lib/utils";

const CATEGORIES = ["Todos", "Facial", "Corporal", "Capilar"] as const;
type Tab = typeof CATEGORIES[number];

function Card({ p }: { p: Procedure }) {
  const wa = buildWhatsAppLink(
    process.env.NEXT_PUBLIC_WHATSAPP_URL,
    `Olá! Tenho interesse em ${p.nome}. Podemos conversar?`
  );

  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-[4/3]">
        {/* Se usar imagem local, coloque em /public/images/... */}
        <Image
          src={p.imagem || "/placeholder.svg"}
          alt={p.nome}
          fill
          className="object-cover"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{p.nome}</h3>
        <p className="mt-1 text-sm text-neutralB">{p.resumo}</p>

        {p.beneficios?.length > 0 && (
          <ul className="mt-3 text-sm text-neutralB list-disc pl-5 space-y-1">
            {p.beneficios.slice(0, 3).map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex gap-2">
          {p.cta?.href ? (
            <Button asChild className="bg-neutralC hover:opacity-90">
              <a href={p.cta.href} target="_blank" rel="noreferrer">
                {p.cta.label || "Agendar"}
              </a>
            </Button>
          ) : (
            <Button asChild className="bg-neutralC hover:opacity-90">
              <a href={wa} target="_blank" rel="noreferrer">
                Agendar no WhatsApp
              </a>
            </Button>
          )}

          {/* Opcional: rota de detalhes quando criarmos /procedimentos/[slug] */}
          {p.slug && (
            <Button asChild variant="outline">
              <a href={`/procedimentos/${p.slug}`}>Saiba mais</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<Tab>("Todos");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return procedures.filter((p) => {
      const inTab = tab === "Todos" ? true : p.categoria === tab;
      const inQuery =
        !q ||
        p.nome.toLowerCase().includes(q) ||
        p.resumo.toLowerCase().includes(q) ||
        p.beneficios?.some((b) => b.toLowerCase().includes(q));
      return inTab && inQuery;
    });
  }, [query, tab]);

  return (
    <section id="servicos" className="container-section scroll-mt-24">
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="section-title">Serviços (Procedimentos)</h2>
          <p className="section-subtitle">
            Escolha por categoria ou pesquise pelo nome do procedimento
          </p>
        </div>
        <div className="w-full md:w-80">
          <Input
            placeholder="Buscar procedimento…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs value={tab} onValueChange={(v: string) => setTab(v as Tab)} className="w-full">
        <TabsList className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <TabsTrigger key={c} value={c} className="px-3">
              {c}
            </TabsTrigger>
          ))}
        </TabsList>

        {CATEGORIES.map((c) => (
          <TabsContent key={c} value={c} className="mt-6">
            {filtered.length === 0 ? (
              <p className="text-neutralB">Nenhum procedimento encontrado.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p) => (
                  <Card key={p.slug || p.nome} p={p} />
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
