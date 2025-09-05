import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Users,
  Heart,
  Shield,
  Lightbulb,
  Smartphone,
  Headphones,
  Eye,
  Accessibility,
  Star,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-card py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-heading font-black text-4xl md:text-6xl text-balance text-foreground mb-6">
              Tecnologías para la <span className="text-primary">Inclusión</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8 leading-relaxed">
              Especialistas en soluciones tecnológicas que mejoran la calidad de vida de personas con discapacidad y
              personas mayores
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/soluciones">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-3"
                >
                  Conoce Nuestras Soluciones
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-3 bg-transparent"
                >
                  Contactar Ahora
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Nuestros Valores</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Trabajamos con pasión para crear un mundo más inclusivo y accesible para todos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Inclusión</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Creemos que la tecnología debe ser accesible para todas las personas, sin excepciones
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Empatía</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Entendemos las necesidades únicas de cada persona y diseñamos soluciones personalizadas
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Confianza</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Construimos relaciones duraderas basadas en la transparencia y el compromiso
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Innovación</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Exploramos constantemente nuevas tecnologías para mejorar la calidad de vida
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Nuestras Soluciones</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Tecnologías especializadas que transforman la vida de personas con discapacidad y personas mayores
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Smartphone className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">Apps Adaptativas</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Aplicaciones móviles diseñadas específicamente para personas con diferentes capacidades, con
                    interfaces intuitivas y funciones de accesibilidad avanzadas.
                  </p>
                  <Link
                    href="/soluciones"
                    className="text-primary hover:text-primary/80 font-medium text-sm flex items-center"
                  >
                    Conocer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                      <Headphones className="h-6 w-6 text-secondary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">Tecnología Auditiva</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Sistemas de amplificación, bucles magnéticos y soluciones de comunicación para personas con
                    discapacidad auditiva.
                  </p>
                  <Link
                    href="/soluciones"
                    className="text-primary hover:text-primary/80 font-medium text-sm flex items-center"
                  >
                    Conocer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Eye className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">Ayudas Visuales</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Lectores de pantalla, magnificadores y tecnologías de navegación para personas con discapacidad
                    visual.
                  </p>
                  <Link
                    href="/soluciones"
                    className="text-primary hover:text-primary/80 font-medium text-sm flex items-center"
                  >
                    Conocer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Nuestro Impacto</h2>
              <p className="text-lg opacity-90 text-balance max-w-2xl mx-auto">
                Más de una década transformando vidas a través de la tecnología inclusiva
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-black mb-2">500+</div>
                <p className="text-lg opacity-90">Personas Beneficiadas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-black mb-2">50+</div>
                <p className="text-lg opacity-90">Organizaciones</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-black mb-2">15+</div>
                <p className="text-lg opacity-90">Años de Experiencia</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-black mb-2">98%</div>
                <p className="text-lg opacity-90">Satisfacción</p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Carousel Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Confían en Nosotros</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Organizaciones líderes que han transformado sus espacios con nuestras soluciones inclusivas
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll space-x-12 items-center">
                {/* First set of logos */}
                <div className="flex space-x-12 items-center min-w-max">
                  <img
                    src="/placeholder-qtvn8.png"
                    alt="Bancolombia"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/placeholder-ik9nl.png"
                    alt="EPM"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/placeholder-i815y.png"
                    alt="Ecopetrol"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/metro-de-medellin-logo.jpg"
                    alt="Metro de Medellín"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/holcim-logo.jpg"
                    alt="Holcim"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/fundacion-saldarriaga-concha-logo.jpg"
                    alt="Fundación Saldarriaga Concha"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/comfama-logo.jpg"
                    alt="Comfama"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/konecta-logo.jpg"
                    alt="Konecta"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/coofinep-logo.jpg"
                    alt="Coofinep"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/madre-laura-logo.jpg"
                    alt="Madre Laura"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/fundacion-ideal-logo.jpg"
                    alt="Fundación Ideal"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/arl-sura-logo.jpg"
                    alt="ARL Sura"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex space-x-12 items-center min-w-max">
                  <img
                    src="/placeholder-qtvn8.png"
                    alt="Bancolombia"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/placeholder-ik9nl.png"
                    alt="EPM"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/placeholder-i815y.png"
                    alt="Ecopetrol"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/metro-de-medellin-logo.jpg"
                    alt="Metro de Medellín"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/holcim-logo.jpg"
                    alt="Holcim"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/fundacion-saldarriaga-concha-logo.jpg"
                    alt="Fundación Saldarriaga Concha"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/comfama-logo.jpg"
                    alt="Comfama"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/konecta-logo.jpg"
                    alt="Konecta"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/coofinep-logo.jpg"
                    alt="Coofinep"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/madre-laura-logo.jpg"
                    alt="Madre Laura"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/fundacion-ideal-logo.jpg"
                    alt="Fundación Ideal"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="/arl-sura-logo.jpg"
                    alt="ARL Sura"
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Testimonios reales de personas cuyas vidas hemos transformado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-secondary fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "Gracias a Tecnoayudas, mi madre de 85 años puede usar su tablet sin problemas. La aplicación
                    adaptada que nos proporcionaron cambió completamente su calidad de vida."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-foreground font-semibold">MG</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">María González</p>
                      <p className="text-sm text-muted-foreground">Familiar de usuaria</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-secondary fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "Como centro de día, las soluciones de Tecnoayudas nos han permitido ofrecer actividades más
                    inclusivas y mejorar la comunicación con nuestros usuarios."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-3">
                      <span className="text-secondary-foreground font-semibold">AR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Ana Rodríguez</p>
                      <p className="text-sm text-muted-foreground">Directora Centro de Día</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-secondary fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "El sistema de comunicación aumentativa que instalaron en nuestro colegio ha sido fundamental para
                    la integración de nuestros estudiantes."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-foreground font-semibold">JL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">José Luis Martín</p>
                      <p className="text-sm text-muted-foreground">Director Educativo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-primary text-primary-foreground border-primary mb-4">¿Por qué elegirnos?</Badge>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Experiencia que marca la diferencia
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Somos pioneros en tecnologías de inclusión en España, con un equipo multidisciplinar que combina
                  expertise técnico con profundo conocimiento de las necesidades de nuestros usuarios.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Soluciones Personalizadas</h4>
                      <p className="text-sm text-muted-foreground">
                        Cada proyecto se adapta a las necesidades específicas del usuario
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Soporte Continuo</h4>
                      <p className="text-sm text-muted-foreground">
                        Acompañamiento durante todo el proceso de implementación y uso
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Tecnología Avanzada</h4>
                      <p className="text-sm text-muted-foreground">
                        Utilizamos las últimas innovaciones en accesibilidad y usabilidad
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center">
                  <CardContent className="pt-6">
                    <Award className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                    <h4 className="font-heading font-semibold text-foreground mb-2">Certificados</h4>
                    <p className="text-sm text-muted-foreground">ISO 27001 y WCAG 2.1 AAA</p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center">
                  <CardContent className="pt-6">
                    <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-3" aria-hidden="true" />
                    <h4 className="font-heading font-semibold text-foreground mb-2">Innovación</h4>
                    <p className="text-sm text-muted-foreground">I+D+i constante</p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center">
                  <CardContent className="pt-6">
                    <Accessibility className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                    <h4 className="font-heading font-semibold text-foreground mb-2">Accesibilidad</h4>
                    <p className="text-sm text-muted-foreground">100% inclusivo</p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center">
                  <CardContent className="pt-6">
                    <Users className="h-8 w-8 text-secondary mx-auto mb-3" aria-hidden="true" />
                    <h4 className="font-heading font-semibold text-foreground mb-2">Equipo</h4>
                    <p className="text-sm text-muted-foreground">Multidisciplinar</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
