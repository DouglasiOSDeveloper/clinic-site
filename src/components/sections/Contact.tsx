"use client";

import { contact } from "@/content/contact";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const labels: Record<string, string> = {
  pix: "PIX",
  credito: "Crédito",
  debito: "Débito",
  dinheiro: "Dinheiro",
  boleto: "Boleto",
  transferencia: "Transferência",
  link: "Link de Pagamento"
};

export default function Contact() {
  return (
    <section id="contato" className="container-section">
      <div className="mb-8">
        <h2 className="section-title">Contato & Funcionamento</h2>
        <p className="section-subtitle">Fale com a gente e agende seu horário</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-6 space-y-4">
          {contact.nomeClinica && <p className="text-lg font-semibold">{contact.nomeClinica}</p>}

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5" />
            <a href={`tel:${contact.telefone ?? ""}`} className="hover:underline">
              {contact.telefone || "—"}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MessageCircle className="h-5 w-5" />
            <a href={contact.whatsapp} className="hover:underline" target="_blank">
              WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5" />
            <a href={`mailto:${contact.email ?? ""}`} className="hover:underline">
              {contact.email || "—"}
            </a>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 mt-1" />
            <p>{contact.horario}</p>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 mt-1" />
            <p>
              {contact.enderecoLinha1}
              {contact.enderecoLinha2 ? `, ${contact.enderecoLinha2}` : ""}
              <br />
              {contact.cidadeUF}
            </p>
          </div>

          <div className="pt-2">
            <p className="font-medium mb-2">Formas de pagamento</p>
            <div className="flex flex-wrap gap-2">
              {contact.formsPagamento.map((p) => (
                <Badge key={p} variant="secondary" className="bg-neutralA/20">
                  {labels[p]}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            {contact.instagram && (
              <a href={contact.instagram} target="_blank" className="hover:opacity-80" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            )}
            {contact.facebook && (
              <a href={contact.facebook} target="_blank" className="hover:opacity-80" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            )}
          </div>

          <div className="pt-2">
            <Button asChild size="lg" className="bg-neutralC hover:opacity-90">
              <a href={contact.whatsapp} target="_blank">Agendar no WhatsApp</a>
            </Button>
          </div>
        </div>

        <div className="card p-2">
          {/* Preview do mapa também na seção de contato */}
          {contact.mapsEmbedUrl ? (
            <iframe
              src={contact.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[360px] rounded-2xl"
            />
          ) : (
            <div className="h-[360px] grid place-items-center text-neutralB">Mapa indisponível</div>
          )}
        </div>
      </div>
    </section>
  );
}
