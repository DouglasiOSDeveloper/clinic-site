"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { cases as data } from "@/content/cases";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Cases() {
  // filtra apenas cases com consentimento true (por segurança)
  const cases = data.filter((c) => c.consentimento !== false);

  return (
    <section id="trabalhos" className="container-section">
      <div className="mb-8">
        <h2 className="section-title">Trabalhos (Cases de sucesso)</h2>
        <p className="section-subtitle">
          Resultados reais, publicados com consentimento do paciente/cliente
        </p>
      </div>

      <div className="space-y-10">
        {cases.map((item) => (
          <CaseCarousel key={item.id} item={item} />
        ))}
      </div>

      <p className="mt-10 text-xs text-neutralB">
        *As imagens exibidas possuem autorização de uso e têm finalidade informativa. Resultados
        podem variar conforme avaliação individual.
      </p>
    </section>
  );
}

function CaseCarousel({ item }: { item: (typeof data)[number] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="card overflow-hidden">
      <div className="p-5 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold">{item.titulo}</h3>
          {item.descricao && <p className="text-neutralB">{item.descricao}</p>}
          {item.categoria && (
            <Badge className="mt-2 bg-neutralA/20 text-base-900">{item.categoria}</Badge>
          )}
        </div>
        <div className="flex gap-2">
          <Button size="icon" variant="outline" onClick={scrollPrev} aria-label="Anterior">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="outline" onClick={scrollNext} aria-label="Próximo">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="px-2 pb-6">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {item.imagens.map((img, idx) => (
              <div key={idx} className="embla__slide min-w-0 basis-full sm:basis-1/2 lg:basis-1/3 px-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt || `${item.titulo} - ${img.label || "imagem"}`}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    priority={idx === 0}
                  />
                  {img.label && (
                    <span
                      className={cn(
                        "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium shadow",
                        img.label === "Antes"
                          ? "bg-red-500/80 text-white"
                          : img.label === "Depois"
                          ? "bg-emerald-600/80 text-white"
                          : "bg-neutralA/80 text-base-900"
                      )}
                    >
                      {img.label}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition",
                i === selectedIndex ? "bg-neutralC" : "bg-neutralA/50"
              )}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
