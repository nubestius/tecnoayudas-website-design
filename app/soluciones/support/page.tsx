import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Database,
  FileText,
  Video,
  Download,
  Search,
  CheckCircle,
  ArrowRight,
  Users,
  Globe,
  Bookmark,
} from "lucide-react"
import Link from "next/link"

export default function IncluticSupportPage() {
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
                  <BookOpen className="h-4 w-4 mr-2" />
                  INCLUTIC SUPPORT
                </Badge>
                <h1 className="font-heading font-black text-4xl md:text-5xl text-balance text-foreground mb-6">
                  Plataforma de <span className="text-primary">Contenidos de Apoyo</span> a la Inclusión
                </h1>
                <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                  Banco de conocimiento especializado con recursos técnicos, guías prácticas y herramientas para
                  profesionales que trabajan en inclusión y accesibilidad.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contacto">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Acceder a la Plataforma
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Ver Demo Gratuito
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
                  <div className="text-center">
                    <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Database className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-2xl mb-4">+1,000 Recursos Disponibles</h3>
                    <p className="text-muted-foreground">
                      La biblioteca más completa de contenidos especializados en inclusión
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Contenido */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Biblioteca Digital Especializada
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Contenidos organizados por categorías para facilitar tu trabajo diario
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Guías Técnicas */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl">Guías Técnicas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Manuales detallados sobre implementación de tecnologías asistivas y ajustes razonables.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Protocolos de evaluación
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Procedimientos paso a paso
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Casos prácticos reales
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Actualizaciones regulares
                    </li>
                  </ul>
                  <Badge className="mb-4">+200 Guías Disponibles</Badge>
                </CardContent>
              </Card>

              {/* Videos Formativos */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Video className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-xl">Videos Formativos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Contenido audiovisual accesible con demostraciones prácticas y testimonios de usuarios.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Tutoriales interactivos
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Subtítulos y audiodescripción
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Casos de éxito documentados
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Webinars especializados
                    </li>
                  </ul>
                  <Badge variant="secondary" className="mb-4">
                    +150 Videos HD
                  </Badge>
                </CardContent>
              </Card>

              {/* Herramientas Descargables */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl">Herramientas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Plantillas, checklists y software especializado para facilitar tu trabajo profesional.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Plantillas de evaluación
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Checklists de accesibilidad
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Software de diagnóstico
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Calculadoras especializadas
                    </li>
                  </ul>
                  <Badge className="mb-4">+100 Herramientas</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Funcionalidades de la Plataforma */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Funcionalidades Avanzadas
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Plataforma diseñada para optimizar tu productividad y facilitar el acceso al conocimiento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl">Búsqueda Inteligente</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Motor de búsqueda avanzado con filtros por tipo de discapacidad, sector, tecnología y nivel de
                    complejidad.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Búsqueda por palabras clave
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Filtros especializados
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Recomendaciones personalizadas
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Bookmark className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl">Biblioteca Personal</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Organiza y guarda tus recursos favoritos en colecciones personalizadas para acceso rápido.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Favoritos organizados
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Notas personales
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Historial de consultas
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl">Comunidad de Expertos</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Conecta con otros profesionales, comparte experiencias y accede a foros especializados.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Foros de discusión
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Consultas a expertos
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Casos colaborativos
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Globe className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl">Acceso Multiplataforma</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Disponible en web, móvil y tablet con sincronización automática entre dispositivos.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Acceso sin conexión
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Sincronización automática
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Interfaz completamente accesible
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Planes de Suscripción */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Planes de Acceso</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Elige el plan que mejor se adapte a tus necesidades profesionales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Plan Básico */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl mb-2">Plan Básico</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-4">$50.000 COP/mes</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Acceso a guías básicas
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      50 descargas mensuales
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Búsqueda estándar
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Soporte por email
                    </li>
                  </ul>
                  <Link href="/contacto">
                    <Button className="w-full">Comenzar Prueba</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Plan Profesional */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 border-primary">
                <CardHeader>
                  <Badge className="mb-2">Más Popular</Badge>
                  <CardTitle className="font-heading text-2xl mb-2">Plan Profesional</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-4">$120.000 COP/mes</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Acceso completo a contenidos
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Descargas ilimitadas
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Búsqueda avanzada
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Biblioteca personal
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Acceso a comunidad
                    </li>
                  </ul>
                  <Link href="/contacto">
                    <Button className="w-full bg-primary">Suscribirse</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Plan Empresarial */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl mb-2">Plan Empresarial</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-4">$300.000 COP/mes</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Todo lo del plan profesional
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Hasta 10 usuarios
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Contenidos personalizados
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Soporte prioritario
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Capacitación incluida
                    </li>
                  </ul>
                  <Link href="/contacto">
                    <Button variant="outline" className="w-full bg-transparent">
                      Contactar Ventas
                    </Button>
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
              Accede al conocimiento especializado que necesitas
            </h2>
            <p className="text-lg opacity-90 mb-8 text-balance">
              Únete a cientos de profesionales que ya utilizan INCLUTIC Support para mejorar sus servicios de inclusión
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Comenzar Prueba Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Ver Demo en Vivo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
