// src/app/components/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#feedbacks", label: "Feedbacks" },
  { href: "#faq", label: "FAQ" },
  { href: "#postagens", label: "Postagens" },
  { href: "#contato", label: "Contato" },
  { href: "#localizacao", label: "Localização" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        scrolled ? "backdrop-blur bg-base-50/80 border-b border-neutralA/30" : ""
      )}
    >
      <nav className="container flex items-center justify-between py-3">
        <Link href="#home" className="font-semibold">Clínica</Link>
        <ul className="hidden md:flex gap-5 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="hover:opacity-80">{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
