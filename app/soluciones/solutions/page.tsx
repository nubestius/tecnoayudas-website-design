import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Cog,
  Building,
  Smartphone,
  Globe,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Target,
  Settings,
  Lightbulb,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function IncluticSolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary/5 to-secondary/10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                  <Cog className="h-4 w-4 mr-2" />
                  INCLUTIC SOLUTIONS
                </Badge>
                <h1 className="font-heading font-black text-4xl md:text-5xl text-balance text-foreground mb-6">
                  Soluciones <span className="text-secondary">Integrales de Accesibilidad</span>
                </h1>
                <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                  Implementaciones personalizadas y escalables que transforman organizaciones en espacios verdaderamente
                  inclusivos. Soluciones específicas por sector con soporte técnico especializado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contacto">
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Solicitar Propuesta
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Ver Portfolio
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-secondary/20">
                  <div className="text-center">
                    <div className="bg-secondary/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Settings className="h-12 w-12 text-secondary" />
                    </div>
                    <h3 className="font-heading font-semibold text-2xl mb-4">+150 Implementaciones Exitosas</h3>
                    <p className="text-muted-foreground">
                      Soluciones personalizadas que han transformado organizaciones
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Soluciones */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Soluciones Especializadas
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Implementaciones integrales adaptadas a las necesidades específicas de cada sector
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Accesibilidad Digital */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Globe className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-2xl">Accesibilidad Digital</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Transformación completa de sitios web, aplicaciones móviles y sistemas digitales para cumplir con
                    estándares WCAG 2.1 AA.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Auditoría y rediseño completo
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Desarrollo de componentes accesibles
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Pruebas con usuarios reales
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Certificación de conformidad
                    </li>
                  </ul>
                  <Badge variant="secondary" className="mb-4">
                    Desde $3.500.000 COP
                  </Badge>
                </CardContent>
              </Card>

              {/* Espacios Físicos Inclusivos */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-2xl">Espacios Físicos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Adecuación integral de edificaciones, oficinas y espacios públicos con diseño universal y
                    tecnologías asistivas.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Diseño arquitectónico inclusivo
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Señalización accesible
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Tecnologías de apoyo integradas
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Certificación de accesibilidad
                    </li>
                  </ul>
                  <Badge className="mb-4">Desde $5.000.000 COP</Badge>
                </CardContent>
              </Card>

              {/* Aplicaciones Móviles */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Smartphone className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-2xl">Apps Móviles Inclusivas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Desarrollo de aplicaciones móviles nativas con funcionalidades avanzadas de accesibilidad para iOS y
                    Android.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Compatibilidad con lectores de pantalla
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Navegación por voz
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Controles adaptativos
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Personalización de interfaz
                    </li>
                  </ul>
                  <Badge variant="secondary" className="mb-4">
                    Desde $8.000.000 COP
                  </Badge>
                </CardContent>
              </Card>

              {/* Capacitación Organizacional */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-2xl">Capacitación Integral</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Programas de formación personalizados para equipos de trabajo, con enfoque en cultura inclusiva y
                    uso de tecnologías.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Talleres presenciales y virtuales
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Materiales de apoyo personalizados
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Evaluación de competencias
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Certificación de equipos
                    </li>
                  </ul>
                  <Badge className="mb-4">Desde $2.000.000 COP</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Proceso de Implementación */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Proceso de Implementación
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Metodología probada que garantiza resultados exitosos y sostenibles en el tiempo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Fase 1 */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">1. Diagnóstico</h3>
                  <p className="text-muted-foreground text-sm">
                    Evaluación integral de necesidades, recursos disponibles y objetivos organizacionales
                  </p>
                </CardContent>
              </Card>

              {/* Fase 2 */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">2. Diseño</h3>
                  <p className="text-muted-foreground text-sm">
                    Creación de propuesta técnica personalizada con cronograma y presupuesto detallado
                  </p>
                </CardContent>
              </Card>

              {/* Fase 3 */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">3. Implementación</h3>
                  <p className="text-muted-foreground text-sm">
                    Ejecución de la solución con seguimiento continuo y ajustes según necesidades
                  </p>
                </CardContent>
              </Card>

              {/* Fase 4 */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">4. Soporte</h3>
                  <p className="text-muted-foreground text-sm">
                    Mantenimiento, actualizaciones y soporte técnico continuo para garantizar sostenibilidad
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sectores Especializados */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Soluciones por Sector
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Experiencia especializada en diferentes industrias con soluciones adaptadas a cada contexto
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  sector: "Educación",
                  description:
                    "Plataformas educativas inclusivas, aulas digitales accesibles y herramientas pedagógicas adaptativas",
                  price: "Desde $4.000.000",
                },
                {
                  sector: "Salud",
                  description:
                    "Sistemas de información hospitalaria accesibles, telemedicina inclusiva y dispositivos médicos adaptativos",
                  price: "Desde $6.000.000",
                },
                {
                  sector: "Gobierno",
                  description:
                    "Portales ciudadanos accesibles, trámites digitales inclusivos y servicios públicos adaptativos",
                  price: "Desde $8.000.000",
                },
                {
                  sector: "Financiero",
                  description: "Banca digital accesible, cajeros adaptativos y servicios financieros inclusivos",
                  price: "Desde $5.000.000",
                },
                {
                  sector: "Comercio",
                  description: "E-commerce inclusivo, puntos de venta accesibles y experiencias de compra adaptativas",
                  price: "Desde $3.000.000",
                },
                {
                  sector: "Turismo",
                  description:
                    "Plataformas de reservas accesibles, destinos turísticos inclusivos y experiencias adaptativas",
                  price: "Desde $4.500.000",
                },
              ].map((item) => (
                <Card key={item.sector} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-heading font-semibold text-xl mb-3">{item.sector}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.price}</Badge>
                      <Link href="/contacto">
                        <Button size="sm" variant="outline">
                          Consultar
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary text-secondary-foreground py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              ¿Listo para transformar tu organización?
            </h2>
            <p className="text-lg opacity-90 mb-8 text-balance">
              Nuestro equipo de expertos diseñará la solución integral perfecta para tus necesidades específicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
                >
                  Solicitar Propuesta Personalizada
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
              >
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
