import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Clock, Award, CheckCircle, ArrowRight, Calendar, Globe, MapPin } from "lucide-react"
import Link from "next/link"

export default function IncluticAcademyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  INCLUTIC ACADEMY
                </Badge>
                <h1 className="font-heading font-black text-4xl md:text-5xl text-balance text-foreground mb-6">
                  Academia de Formación en <span className="text-primary">Accesibilidad e Inclusión</span>
                </h1>
                <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                  Formación especializada para profesionales que trabajan con personas con discapacidad y personas
                  mayores. Modalidades virtual y presencial con certificaciones reconocidas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contacto">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Inscribirse Ahora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Ver Catálogo de Cursos
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
                  <div className="text-center">
                    <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                      <GraduationCap className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-2xl mb-4">+500 Profesionales Certificados</h3>
                    <p className="text-muted-foreground">
                      Únete a nuestra comunidad de expertos en inclusión y accesibilidad
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Modalidades de Formación */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Modalidades de Formación
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Adaptamos nuestros programas a tus necesidades y disponibilidad
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Formación Virtual */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-2xl">Formación Virtual</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Cursos en línea con acceso 24/7, contenido interactivo y seguimiento personalizado.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Acceso desde cualquier lugar
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Horarios flexibles
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Plataforma accesible
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Tutorías en línea
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Desde $150.000 COP</Badge>
                    <Link href="/contacto">
                      <Button variant="outline" size="sm">
                        Más Información
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Formación Presencial */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-2xl">Formación Presencial</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Talleres prácticos en Medellín con equipos especializados y experiencias inmersivas.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Práctica con tecnologías reales
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Networking profesional
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Instructores especializados
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Certificado presencial
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Desde $300.000 COP</Badge>
                    <Link href="/contacto">
                      <Button variant="outline" size="sm">
                        Más Información
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programas de Certificación */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Programas de Certificación
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Especialízate en las áreas más demandadas de la inclusión y accesibilidad
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Certificación en Accesibilidad Web */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Accesibilidad Web</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    WCAG 2.1, desarrollo inclusivo y auditorías de accesibilidad
                  </p>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">40 horas</span>
                  </div>
                  <Badge className="mb-4">Certificación Internacional</Badge>
                </CardContent>
              </Card>

              {/* Certificación en Tecnologías Asistivas */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Tecnologías Asistivas</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Evaluación, selección e implementación de productos de apoyo
                  </p>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">60 horas</span>
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    Certificación Profesional
                  </Badge>
                </CardContent>
              </Card>

              {/* Certificación en Inclusión Laboral */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Inclusión Laboral</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Estrategias para la inclusión de PCD en el ámbito laboral
                  </p>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">30 horas</span>
                  </div>
                  <Badge className="mb-4">Certificación Empresarial</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Próximos Cursos */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Próximos Cursos</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Inscríbete en nuestros próximos programas de formación
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-heading text-xl">Fundamentos de Accesibilidad Digital</CardTitle>
                    <Badge>Virtual</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">15 de Febrero</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">20 horas</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Introducción a los principios de accesibilidad web y móvil para desarrolladores y diseñadores.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">$180.000 COP</span>
                    <Link href="/contacto">
                      <Button size="sm">Inscribirse</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-heading text-xl">Evaluación de Productos de Apoyo</CardTitle>
                    <Badge variant="secondary">Presencial</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">22 de Febrero</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">16 horas</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Metodologías para evaluar y seleccionar tecnologías asistivas según las necesidades del usuario.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-secondary">$350.000 COP</span>
                    <Link href="/contacto">
                      <Button size="sm" variant="secondary">
                        Inscribirse
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              ¿Listo para convertirte en un experto en inclusión?
            </h2>
            <p className="text-lg opacity-90 mb-8 text-balance">
              Únete a INCLUTIC Academy y transforma tu carrera profesional con conocimientos especializados en
              accesibilidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Solicitar Información
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Descargar Catálogo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
