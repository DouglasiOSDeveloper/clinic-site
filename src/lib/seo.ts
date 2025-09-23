export function LocalBusinessJSONLD() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness", // ou BeautySalon se preferir
    name: "Clínica Transformação",
    image: "https://seudominio.com.br/logo.png",
    url: "https://seudominio.com.br",
    telephone: "+55 61 99999-9999",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Exemplo, 123 - Bairro",
      addressLocality: "Brasília",
      addressRegion: "DF",
      postalCode: "70000-000",
      addressCountry: "BR"
    },
    openingHours: "Mo-Fr 09:00-19:00",
    sameAs: [
      "https://www.instagram.com/seuperfil",
      "https://www.facebook.com/seuperfil"
    ]
  };
}
