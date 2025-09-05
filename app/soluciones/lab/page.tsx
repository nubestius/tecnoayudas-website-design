import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FlaskConical,
  Search,
  ClipboardCheck,
  Settings,
  FileText,
  Building,
  CheckCircle,
  ArrowRight,
  Target,
  Lightbulb,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function IncluticLabPage() {
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
                  <FlaskConical className="h-4 w-4 mr-2" />
                  INCLUTIC LAB
                </Badge>
                <h1 className="font-heading font-black text-4xl md:text-5xl text-balance text-foreground mb-6">
                  Laboratorio de <span className="text-secondary">Diagnóstico de Accesibilidad</span>
                </h1>
                <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                  Evaluaciones técnicas especializadas y diseño de ajustes razonables para organizaciones, espacios
                  físicos y digitales que buscan ser verdaderamente inclusivos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contacto">
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Solicitar Auditoría
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Ver Metodología
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-secondary/20">
                  <div className="text-center">
                    <div className="bg-secondary/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FlaskConical className="h-12 w-12 text-secondary" />
                    </div>
                    <h3 className="font-heading font-semibold text-2xl mb-4">+200 Auditorías Realizadas</h3>
                    <p className="text-muted-foreground">
                      Experiencia comprobada en diagnósticos de accesibilidad integral
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios del Laboratorio */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Servicios de Diagnóstico
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Evaluaciones integrales que identifican barreras y proponen soluciones efectivas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Auditoría de Accesibilidad Web */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Search className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-xl">Auditoría Web</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Evaluación completa de sitios web y aplicaciones según estándares WCAG 2.1.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Análisis automático y manual
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Pruebas con usuarios reales
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Informe detallado de hallazgos
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Plan de mejoras priorizado
                    </li>
                  </ul>
                  <Badge variant="secondary" className="mb-4">
                    Desde $800.000 COP
                  </Badge>
                </CardContent>
              </Card>

              {/* Evaluación de Espacios Físicos */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl">Espacios Físicos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Diagnóstico de accesibilidad arquitectónica y diseño universal en edificaciones.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Mediciones técnicas especializadas
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Evaluación de rutas accesibles
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Análisis de señalización
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Propuestas de adecuación
                    </li>
                  </ul>
                  <Badge className="mb-4">Desde $1.200.000 COP</Badge>
                </CardContent>
              </Card>

              {/* Diseño de Ajustes Razonables */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Settings className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-xl">Ajustes Razonables</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Diseño personalizado de adaptaciones para puestos de trabajo y procesos.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Evaluación individual de necesidades
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Propuesta de tecnologías asistivas
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Adaptaciones procedimentales
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Seguimiento de implementación
                    </li>
                  </ul>
                  <Badge variant="secondary" className="mb-4">
                    Desde $600.000 COP
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Metodología */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Nuestra Metodología</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Proceso sistemático y riguroso para garantizar diagnósticos precisos y soluciones efectivas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Paso 1 */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">1. Análisis Inicial</h3>
                  <p className="text-muted-foreground text-sm">
                    Identificación de objetivos, alcance y contexto específico del diagnóstico
                  </p>
                </CardContent>
              </Card>

              {/* Paso 2 */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ClipboardCheck className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">2. Evaluación Técnica</h3>
                  <p className="text-muted-foreground text-sm">
                    Aplicación de herramientas especializadas y estándares internacionales
                  </p>
                </CardContent>
              </Card>

              {/* Paso 3 */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">3. Diseño de Soluciones</h3>
                  <p className="text-muted-foreground text-sm">
                    Propuestas personalizadas y viables según recursos disponibles
                  </p>
                </CardContent>
              </Card>

              {/* Paso 4 */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">4. Informe Final</h3>
                  <p className="text-muted-foreground text-sm">
                    Documentación completa con hallazgos, recomendaciones y plan de acción
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sectores Atendidos */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Sectores Especializados
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Experiencia comprobada en diferentes industrias y tipos de organización
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                "Educación",
                "Salud",
                "Gobierno",
                "Financiero",
                "Comercio",
                "Turismo",
                "Cultura",
                "Justicia",
                "Transporte",
                "Empleo",
              ].map((sector) => (
                <Card key={sector} className="text-center p-4 hover:shadow-md transition-shadow">
                  <CardContent className="pt-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-medium text-sm">{sector}</h3>
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
              ¿Necesitas un diagnóstico de accesibilidad?
            </h2>
            <p className="text-lg opacity-90 mb-8 text-balance">
              Nuestro equipo de expertos puede evaluar tu organización y diseñar las mejores soluciones de inclusión
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
                >
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
              >
                Ver Casos de Estudio
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
