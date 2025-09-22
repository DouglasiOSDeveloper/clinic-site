// src/app/(site)/page.tsx

export const dynamic = 'force-static';

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import Cases from "@/components/sections/Cases";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Location from "@/components/sections/Location";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Benefits />
      <Cases />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Location />
    </>
  );
}
