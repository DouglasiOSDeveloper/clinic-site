// src/app/(site)/page.tsx

export const dynamic = 'force-static';

import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Location from "@/components/sections/Location";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Serviços e outras seções virão em seguida */}
      <Benefits />
      <FAQ />
      <Contact />
      <Location />
    </>
  );
}
