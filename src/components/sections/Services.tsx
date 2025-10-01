"use client";

import Image from "next/image";
import { useMemo, useState, useCallback, useEffect } from "react";
import { procedures, type Procedure, type Category } from "@/content/procedures";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { buildWhatsAppLink } from "@/lib/utils";
import { motion, useReducedMotion, easeOut } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES: Array<Category | "Todos"> = [
  "Todos",
  "Facial",
  "Corporal",
  "Capilar",
];

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
};

function Card({ p }: { p: Procedure }) {
  const wa = buildWhatsAppLink(
    process.env.NEXT_PUBLIC_WHATSAPP_URL,
    `Olá! Tenho interesse em ${p.nome}. Podemos conversar?`
  );

  return (
    <motion.div
      variants={itemVariants}
      className="group card h-full overflow-hidden transition will-change-transform"
      whileHover={{ y: -4 }}
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={p.imagem || "/placeholder.svg"}
          alt={p.nome}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
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
          {p.slug && (
            <Button asChild variant="outline">
              <a href={`/procedimentos/${p.slug}`}>Saiba mais</a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ===== helpers do carrossel ===== */
function useChunkSize() {
  // 1 card (mobile), 2 (sm ≥640px), 3 (lg ≥1024px)
  const [size, setSize] = useState(1);
  useEffect(() => {
    const setByWidth = () => {
      const w = window.innerWidth;
      if (w >= 1024) setSize(3);
      else if (w >= 640) setSize(2);
      else setSize(1);
    };
    setByWidth();
    window.addEventListener("resize", setByWidth);
    return () => window.removeEventListener("resize", setByWidth);
  }, []);
  return size;
}
function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function Carousel({ items }: { items: Procedure[] }) {
  const prefersReducedMotion = useReducedMotion();
  const chunkSize = useChunkSize();
  const slides = useMemo(() => chunk(items, chunkSize), [items, chunkSize]);

  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  // (re)inicializa quando o carrossel nasce
  useEffect(() => {
    if (!embla) return;
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  // *** PONTO-CHAVE: quando muda a quantidade de slides (por filtro/aba/busca),
  // reinicia o Embla e volta ao primeiro slide ***
  useEffect(() => {
    if (!embla) return;
    embla.reInit();
    embla.scrollTo(0, true);
    setSelectedIndex(0);
    setScrollSnaps(embla.scrollSnapList());
  }, [embla, slides.length]);

  // Também re-init quando muda o chunkSize (breakpoint)
  useEffect(() => {
    embla?.reInit();
  }, [embla, chunkSize]);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <div className="relative">
      {/* viewport — key força remontagem limpa quando muda #slides/chunk */}
      <motion.div
        key={`${chunkSize}-${slides.length}`}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        className="embla overflow-hidden"
        ref={emblaRef}
      >
        <div className="embla__container -ml-3 flex">
          {slides.map((group, idx) => (
            <div key={idx} className="embla__slide pl-3 basis-full min-w-full shrink-0">
              {/* grid interno do slide: 1/2/3 colunas conforme tela */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.map((p) => (
                  <Card key={p.slug || p.nome} p={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* arrows absolutas (centralizadas nas extremidades) */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                   inline-flex h-10 w-10 items-center justify-center rounded-full border
                   bg-white/70 backdrop-blur hover:bg-white transition"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={next}
        aria-label="Próximo"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                   inline-flex h-10 w-10 items-center justify-center rounded-full border
                   bg-white/70 backdrop-blur hover:bg-white transition"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* dots centralizados no rodapé do carrossel */}
      <div className="mt-6 flex justify-center gap-2">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition",
              i === selectedIndex ? "bg-[var(--color-primary)]" : "bg-[var(--color-secondary)]/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}

/* ===== seção ===== */
export default function Services() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<(typeof CATEGORIES)[number]>("Todos");

  // filtra pelo tab + busca
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return procedures.filter((p) => {
      const inTab = tab === "Todos" ? true : p.categorias.includes(tab);
      const inQuery =
        !q ||
        p.nome.toLowerCase().includes(q) ||
        p.resumo.toLowerCase().includes(q) ||
        p.beneficios?.some((b) => b.toLowerCase().includes(q));
      return inTab && inQuery;
    });
  }, [query, tab]);

  return (
    <section id="servicos" className="container-section scroll-mt-24" aria-label="Serviços e procedimentos">
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
            aria-label="Buscar procedimento"
          />
        </div>
      </div>

      <Tabs value={tab} onValueChange={(v) => setTab(v as any)} className="w-full">
        {/* Tabs com underline animado */}
        <TabsList className="relative flex flex-wrap gap-2 bg-transparent p-0">
          {CATEGORIES.map((c) => (
            <TabsTrigger
              key={c}
              value={c}
              className="relative rounded-md px-3 py-2 text-sm data-[state=active]:text-[var(--color-fg)] text-[var(--color-muted-fg)] hover:text-[var(--color-fg)] transition-colors"
            >
              <span className="relative">
                {c}
                {tab === c && (
                  <motion.span
                    layoutId="tab-underline-services"
                    className="absolute left-0 -bottom-1 block h-[2px] w-full bg-[var(--color-primary)]"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={tab} className="mt-6">
          {filtered.length === 0 ? (
            <p className="text-neutralB">Nenhum procedimento encontrado.</p>
          ) : (
            <Carousel items={filtered} />
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}
