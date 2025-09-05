import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  GraduationCap,
  Plane,
  Palette,
  Scale,
  Heart,
  Car,
  CreditCard,
  Briefcase,
  ShoppingCart,
  Building,
} from "lucide-react"

const sectores = [
  {
    name: "Educación",
    icon: GraduationCap,
    description: "Tecnologías inclusivas para centros educativos, universidades y formación especializada.",
    features: [
      "Aulas accesibles",
      "Software educativo adaptado",
      "Herramientas de comunicación",
      "Evaluación inclusiva",
    ],
  },
  {
    name: "Turismo - Ocio",
    icon: Plane,
    description: "Soluciones para hacer el turismo y ocio accesible para todas las personas.",
    features: [
      "Guías turísticas accesibles",
      "Reservas inclusivas",
      "Información adaptada",
      "Experiencias sensoriales",
    ],
  },
  {
    name: "Cultura",
    icon: Palette,
    description: "Tecnologías para museos, teatros y espacios culturales inclusivos.",
    features: ["Audioguías adaptadas", "Exposiciones táctiles", "Subtitulado en vivo", "Realidad aumentada"],
  },
  {
    name: "Justicia",
    icon: Scale,
    description: "Herramientas tecnológicas para garantizar el acceso a la justicia.",
    features: ["Comunicación asistida", "Documentos accesibles", "Interpretación digital", "Procesos inclusivos"],
  },
  {
    name: "Salud",
    icon: Heart,
    description: "Tecnologías sanitarias que mejoran la atención y autonomía de los pacientes.",
    features: [
      "Telemedicina accesible",
      "Historiales adaptados",
      "Comunicación médico-paciente",
      "Dispositivos asistivos",
    ],
  },
  {
    name: "Transporte",
    icon: Car,
    description: "Soluciones de movilidad inclusiva y transporte accesible.",
    features: ["Apps de transporte adaptadas", "Información en tiempo real", "Rutas accesibles", "Asistencia digital"],
  },
  {
    name: "Financiero",
    icon: CreditCard,
    description: "Servicios bancarios y financieros accesibles para todos.",
    features: ["Banca digital inclusiva", "Cajeros accesibles", "Asesoramiento adaptado", "Seguridad reforzada"],
  },
  {
    name: "Empleo",
    icon: Briefcase,
    description: "Tecnologías que facilitan la inclusión laboral y el desarrollo profesional.",
    features: ["Plataformas de empleo", "Adaptaciones del puesto", "Formación inclusiva", "Evaluación de competencias"],
  },
  {
    name: "Comercio",
    icon: ShoppingCart,
    description: "E-commerce y comercio físico accesible para una experiencia de compra inclusiva.",
    features: ["Tiendas online accesibles", "Sistemas de pago adaptados", "Asistencia virtual", "Experiencia táctil"],
  },
  {
    name: "Gobierno",
    icon: Building,
    description: "Administración pública digital e inclusiva para todos los ciudadanos.",
    features: ["Trámites accesibles", "Información clara", "Participación ciudadana", "Servicios digitales"],
  },
]

export default function SectoresPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Sectores de Aplicación</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Nuestras soluciones tecnológicas se adaptan a las necesidades específicas de cada sector, garantizando la
              inclusión y accesibilidad en todos los ámbitos de la sociedad.
            </p>
          </div>
        </section>

        {/* Sectores Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectores.map((sector, index) => {
                const IconComponent = sector.icon
                return (
                  <Card
                    key={sector.name}
                    className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">{sector.name}</CardTitle>
                      <CardDescription className="text-muted-foreground text-pretty">
                        {sector.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {sector.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                        aria-label={`Conocer más sobre soluciones para ${sector.name}`}
                      >
                        Conocer Más
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">¿Tu sector no está listado?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Trabajamos con organizaciones de todos los sectores para crear soluciones personalizadas. Contáctanos y
              descubre cómo podemos ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  aria-label="Contactar para consulta personalizada"
                >
                  Consulta Personalizada
                </Button>
              </Link>
              <Button variant="outline" size="lg" aria-label="Ver todos nuestros casos de éxito">
                Ver Casos de Éxito
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
