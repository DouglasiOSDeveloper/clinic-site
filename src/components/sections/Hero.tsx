"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="container-section">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">
            Resultados naturais com técnicas seguras
          </h1>
          <p className="section-subtitle mt-3">
            Procedimentos personalizados para realçar sua beleza com segurança e estética.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild size="lg" className="bg-neutralC hover:opacity-90">
              <a href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "#contato"} target="_blank">
                Agendar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#servicos">Ver procedimentos</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card aspect-[4/3]"
        />
      </div>
    </section>
  );
}
