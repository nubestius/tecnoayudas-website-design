import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Montserrat, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { OrganizationSchema, LocalBusinessSchema } from "./json-ld"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Tecnoayudas - Tecnologías para la Inclusión",
    template: "%s | Tecnoayudas",
  },
  description:
    "Especialistas en tecnologías y estrategias para la inclusión de personas con discapacidad y personas mayores en Medellín, Colombia. Soluciones accesibles e innovadoras.",
  keywords: [
    "tecnologías inclusivas",
    "accesibilidad digital",
    "discapacidad",
    "personas mayores",
    "tecnología asistiva",
    "inclusión",
    "Medellín",
    "Colombia",
    "apps adaptativas",
    "ayudas visuales",
    "tecnología auditiva",
  ],
  authors: [{ name: "Tecnoayudas" }],
  creator: "Tecnoayudas",
  publisher: "Tecnoayudas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tecnoayudas.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://tecnoayudas.com",
    siteName: "Tecnoayudas",
    title: "Tecnoayudas - Tecnologías para la Inclusión",
    description:
      "Especialistas en tecnologías y estrategias para la inclusión de personas con discapacidad y personas mayores en Medellín, Colombia.",
    images: [
      {
        url: "/logo-tecnoayudas.png",
        width: 1200,
        height: 630,
        alt: "Tecnoayudas - Tecnologías para la Inclusión",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnoayudas - Tecnologías para la Inclusión",
    description:
      "Especialistas en tecnologías y estrategias para la inclusión de personas con discapacidad y personas mayores.",
    images: ["/logo-tecnoayudas.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Agregar cuando tengas Google Search Console
    // google: "tu-codigo-de-verificacion",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${montserrat.variable} ${openSans.variable}`}
      >
        {/* Structured Data for SEO */}
        <OrganizationSchema />
        <LocalBusinessSchema />
        {/* Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Saltar al contenido principal
        </a>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
