// src/app/(site)/page.tsx

// 👇 força renderização dinâmica e evita o bug do clientReferenceManifest
export const dynamic = 'force-static';

import Hero from "@/components/sections/Hero";
// import as demais seções assim que criarmos

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Services /> <Benefits /> <Cases /> <Team /> <Testimonials /> <FAQ /> <InstagramFeed /> <Contact /> <Location /> */}
    </>
  );
}
