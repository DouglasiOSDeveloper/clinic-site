"use client";

import { motion, useReducedMotion, easeOut } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, duration: 0.4, ease: easeOut }
  }
};

const itemUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } }
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden" >
      {/* === Background (vídeo ou imagem) === */}
      {!prefersReducedMotion ? (
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg" // coloque o poster em /public
          aria-hidden="true"
        >
          {/* forneça os dois formatos se possível */}
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        <Image
          src="/hero-poster.jpg"
          alt=""
          fill
          priority
          className="absolute inset-0 object-cover"
          aria-hidden
        />
      )}

      {/* Scrim/overlay para garantir contraste sobre o vídeo */}
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />

      {/* === Conteúdo === */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex min-h-[100svh] items-center"
        >
          <div className="max-w-2xl text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)]">
            <motion.h1 variants={itemUp} className="text-4xl md:text-5xl font-semibold tracking-tight">
              Resultados naturais com técnicas seguras
            </motion.h1>

            <motion.p variants={itemUp} className="mt-4 text-base md:text-lg opacity-95">
              Procedimentos personalizados para realçar sua beleza com segurança e estética.
            </motion.p>

            <motion.div variants={itemUp} className="mt-6 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "#contato"}
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm md:text-base
                           bg-[var(--color-primary)] text-[var(--color-primary-fg)] hover:opacity-90 transition"
              >
                Agendar no WhatsApp
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#servicos"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm md:text-base
                           bg-white/10 ring-1 ring-white/40 text-white hover:bg-white/15 transition"
              >
                Ver procedimentos
              </motion.a>
            </motion.div>

            {/* “Provas” rápidas (opcional) */}
            <motion.div variants={itemUp} className="mt-6 flex flex-wrap gap-4 text-sm text-white/90">
              <span>+1.500 atendimentos</span>
              <span className="opacity-60">•</span>
              <span>Profissionais certificados</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
