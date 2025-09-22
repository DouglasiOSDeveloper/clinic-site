"use client";

import { testimonials } from "@/content/testimonials";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="feedbacks" className="container-section">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="section-title">O que dizem nossos clientes</h2>
          <p className="section-subtitle">Feedbacks reais de quem confiou na gente</p>
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

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {testimonials.map((t) => {
            const safeRating = Math.max(0, Math.min(5, t.rating ?? 0));
            return (
              <div
                key={t.id}
                className="embla__slide min-w-0 basis-full sm:basis-1/2 lg:basis-1/3 px-2"
              >
                <div className="card p-6 h-full flex flex-col justify-between">
                  <p className="text-neutralB text-sm flex-1">“{t.texto}”</p>

                  <div className="mt-4">
                    <div className="font-semibold">{t.nome}</div>
                    {t.cidade && <div className="text-xs text-neutralB">{t.cidade}</div>}

                    <div className="mt-1 flex gap-1" aria-label={`Avaliação: ${safeRating} de 5`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < safeRating ? "fill-yellow-500 text-yellow-500" : "text-neutralA"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition",
              i === selectedIndex ? "bg-neutralC" : "bg-neutralA/50"
            )}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
