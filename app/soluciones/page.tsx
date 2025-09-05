import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  FlaskConical,
  BookOpen,
  Cog,
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Users,
  Building,
  School,
} from "lucide-react"
import Link from "next/link"

export default function SolucionesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-card py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-heading font-black text-4xl md:text-5xl text-balance text-foreground mb-6">
              Soluciones <span className="text-primary">INCLUTIC</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8 leading-relaxed">
              Plataforma integral de tecnologías y estrategias para la inclusión de personas con discapacidad y personas
              mayores
            </p>
          </div>
        </section>

        {/* INCLUTIC Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Ecosistema INCLUTIC</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Cinco soluciones integradas que cubren todas las necesidades de accesibilidad e inclusión
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* INCLUTIC ACADEMY */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <GraduationCap className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-2xl">INCLUTIC - ACADEMY</CardTitle>
                      <p className="text-sm text-muted-foreground">Academia de formación especializada</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Academia de formación en accesibilidad e inclusión de PCD-PM. Oferta virtual y presencial con
                    certificaciones reconocidas.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Cursos virtuales y presenciales
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Certificaciones profesionales
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Formación especializada en inclusión
                    </li>
                  </ul>
                  <Link href="/soluciones/academy">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Conocer ACADEMY
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* INCLUTIC LAB */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <FlaskConical className="h-8 w-8 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-2xl">INCLUTIC - LAB</CardTitle>
                      <p className="text-sm text-muted-foreground">Laboratorio de diagnóstico</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Laboratorio de diagnóstico de accesibilidad y diseño de ajustes razonables para organizaciones y
                    espacios.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Auditorías de accesibilidad
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Diseño de ajustes razonables
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Evaluaciones técnicas especializadas
                    </li>
                  </ul>
                  <Link href="/soluciones/lab">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Conocer LAB
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* INCLUTIC SUPPORT */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <BookOpen className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-2xl">INCLUTIC - SUPPORT</CardTitle>
                      <p className="text-sm text-muted-foreground">Banco de conocimiento</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Plataforma de contenidos de apoyo a la inclusión. Banco de conocimiento especializado y recursos
                    técnicos.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Biblioteca digital especializada
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Recursos técnicos actualizados
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Guías y manuales prácticos
                    </li>
                  </ul>
                  <Link href="/soluciones/support">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Conocer SUPPORT
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* INCLUTIC SOLUTIONS */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Cog className="h-8 w-8 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-2xl">INCLUTIC - SOLUTIONS</CardTitle>
                      <p className="text-sm text-muted-foreground">Soluciones integrales</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Soluciones integrales de accesibilidad específicas por oferta. Implementaciones personalizadas y
                    escalables.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Soluciones personalizadas
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Implementación integral
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Soporte técnico especializado
                    </li>
                  </ul>
                  <Link href="/soluciones/solutions">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Conocer SOLUTIONS
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* INCLUTIC MARKET - Full Width */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <ShoppingCart className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-2xl">INCLUTIC - MARKET</CardTitle>
                    <p className="text-sm text-muted-foreground">Plataforma de venta especializada</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Plataforma de venta en línea de productos de apoyo. Marketplace especializado en tecnologías de
                      inclusión con envío nacional.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Catálogo especializado de productos
                      </li>
                      <li className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Asesoría técnica personalizada
                      </li>
                      <li className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Envío y soporte técnico nacional
                      </li>
                    </ul>
                  </div>
                  <div className="text-center lg:text-right">
                    <Link href="/soluciones/market">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Visitar MARKET
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Target Audiences */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Sectores que Atendemos
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Nuestras soluciones INCLUTIC se adaptan a diferentes entornos y necesidades
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-10 w-10 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">Particulares</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Soluciones INCLUTIC personalizadas para el hogar que mejoran la autonomía y calidad de vida.
                  </p>
                  <Link href="/contacto">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Consultar Soluciones
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="h-10 w-10 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">Organizaciones</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Implementación de tecnologías INCLUTIC en centros, residencias, asociaciones y empresas.
                  </p>
                  <Link href="/casos-de-exito">
                    <Button
                      variant="outline"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                    >
                      Ver Casos de Éxito
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <School className="h-10 w-10 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">Centros Educativos</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Tecnologías INCLUTIC educativas que facilitan el aprendizaje y la participación inclusiva.
                  </p>
                  <Link href="/contacto">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Conocer Más</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              ¿Necesitas una solución INCLUTIC específica?
            </h2>
            <p className="text-lg opacity-90 mb-8 text-balance">
              Nuestro equipo de expertos puede desarrollar soluciones INCLUTIC personalizadas para tus necesidades
              únicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Solicitar Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/soluciones/market">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Ver Catálogo MARKET
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
