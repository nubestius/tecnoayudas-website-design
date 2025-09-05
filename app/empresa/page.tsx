import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, Heart, Lightbulb, Shield, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EmpresaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-card py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-heading font-black text-4xl md:text-5xl text-balance text-foreground mb-6">
              Sobre <span className="text-primary">Tecnoayudas</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8 leading-relaxed">
              Más de 15 años transformando vidas a través de la tecnología inclusiva, con el compromiso de crear un
              mundo más accesible para todos
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Nuestra Misión</Badge>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Tecnología que transforma vidas
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  En Tecnoayudas creemos que la tecnología debe ser un puente hacia la inclusión, no una barrera.
                  Nuestra misión es desarrollar y proporcionar soluciones tecnológicas que mejoren la calidad de vida de
                  personas con discapacidad y personas mayores.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Trabajamos cada día para eliminar las barreras digitales y crear un mundo donde la tecnología sea
                  verdaderamente accesible para todos, independientemente de sus capacidades o edad.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Target className="h-6 w-6 text-primary mr-3" />
                      <h3 className="font-heading font-semibold text-xl text-foreground">Visión</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Ser la empresa líder en España en tecnologías de inclusión, reconocida por la calidad de nuestras
                      soluciones y nuestro compromiso con la accesibilidad universal.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 border-l-4 border-l-secondary">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Heart className="h-6 w-6 text-secondary mr-3" />
                      <h3 className="font-heading font-semibold text-xl text-foreground">Valores</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Inclusión, empatía, innovación y compromiso social guían cada una de nuestras decisiones y
                      proyectos, siempre poniendo a las personas en el centro.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Nuestra Historia</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Un recorrido de más de una década innovando en tecnologías de inclusión
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="bg-primary text-primary-foreground rounded-full px-4 py-2 font-semibold text-sm whitespace-nowrap">
                  2009
                </div>
                <Card className="flex-1 p-6">
                  <CardContent className="pt-6">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Fundación</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nace Tecnoayudas con el objetivo de acercar la tecnología a personas con discapacidad. Comenzamos
                      con un pequeño equipo de ingenieros y terapeutas ocupacionales.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="bg-secondary text-secondary-foreground rounded-full px-4 py-2 font-semibold text-sm whitespace-nowrap">
                  2012
                </div>
                <Card className="flex-1 p-6">
                  <CardContent className="pt-6">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Expansión</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ampliamos nuestros servicios a centros educativos y organizaciones. Desarrollamos nuestras
                      primeras aplicaciones móviles adaptadas.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="bg-primary text-primary-foreground rounded-full px-4 py-2 font-semibold text-sm whitespace-nowrap">
                  2018
                </div>
                <Card className="flex-1 p-6">
                  <CardContent className="pt-6">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Reconocimiento</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Recibimos el Premio Nacional de Accesibilidad. Alcanzamos los 300 clientes y expandimos nuestro
                      equipo multidisciplinar.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="bg-secondary text-secondary-foreground rounded-full px-4 py-2 font-semibold text-sm whitespace-nowrap">
                  2024
                </div>
                <Card className="flex-1 p-6">
                  <CardContent className="pt-6">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Presente</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Más de 500 personas beneficiadas, 50+ organizaciones colaboradoras y un equipo de 20 profesionales
                      especializados en tecnologías de inclusión.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Nuestro Equipo</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Un equipo multidisciplinar de profesionales comprometidos con la inclusión
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Ingenieros</h3>
                  <p className="text-muted-foreground text-sm">Especialistas en desarrollo de software accesible</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Terapeutas</h3>
                  <p className="text-muted-foreground text-sm">
                    Terapeutas ocupacionales y especialistas en rehabilitación
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Diseñadores UX</h3>
                  <p className="text-muted-foreground text-sm">Expertos en experiencia de usuario accesible</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Consultores</h3>
                  <p className="text-muted-foreground text-sm">Especialistas en accesibilidad y normativas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Certificaciones y Reconocimientos
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Nuestro compromiso con la calidad y la excelencia está respaldado por certificaciones oficiales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">ISO 27001</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Certificación en Gestión de Seguridad de la Información
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">WCAG 2.1 AAA</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Cumplimiento del máximo nivel de accesibilidad web
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Premio Nacional</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Premio Nacional de Accesibilidad 2018</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">¿Quieres conocer más sobre nosotros?</h2>
            <p className="text-lg opacity-90 mb-8 text-balance">
              Estaremos encantados de contarte más sobre nuestro trabajo y cómo podemos ayudarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Contactar con Nosotros
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/casos-de-exito">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Ver Casos de Éxito
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
