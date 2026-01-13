export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tecnoayudas",
    description:
      "Especialistas en tecnologías y estrategias para la inclusión de personas con discapacidad y personas mayores",
    url: "https://tecnoayudas.com",
    logo: "https://tecnoayudas.com/logo-tecnoayudas.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57-311-6368873",
      contactType: "customer service",
      areaServed: "CO",
      availableLanguage: "Spanish",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
    sameAs: [
      // Agregar cuando tengas redes sociales
      // "https://www.facebook.com/tecnoayudas",
      // "https://www.linkedin.com/company/tecnoayudas",
      // "https://twitter.com/tecnoayudas",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tecnoayudas.com/#organization",
    name: "Tecnoayudas",
    image: "https://tecnoayudas.com/logo-tecnoayudas.png",
    description:
      "Especialistas en tecnologías y estrategias para la inclusión de personas con discapacidad y personas mayores",
    address: {
      "@type": "PostalAddress",
      streetAddress: "", // Agregar dirección completa cuando la tengas
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      postalCode: "", // Agregar código postal
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "", // Agregar coordenadas si las tienes
      longitude: "",
    },
    url: "https://tecnoayudas.com",
    telephone: "+57-311-6368873",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
