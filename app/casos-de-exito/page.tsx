"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  Home,
  Eye,
  Briefcase,
  Building,
  Plane,
  Users,
  ChevronUp,
  Menu,
  BookOpen,
  TrendingUp,
  Award,
  Globe,
  Target,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function CasosDeExitoPage() {
  const [activeSection, setActiveSection] = useState("")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showSectionNav, setShowSectionNav] = useState(false)

  const sections = [
    { id: "educacion", title: "Educación", icon: GraduationCap },
    { id: "inclusion-digital", title: "Inclusión Digital", icon: Eye },
    { id: "bibliotecas", title: "Bibliotecas", icon: BookOpen },
    { id: "inclusion-laboral", title: "Inclusión Laboral", icon: Briefcase },
    { id: "transporte", title: "Transporte", icon: Plane },
    { id: "museos", title: "Museos y Cultura", icon: Building },
    { id: "capacitacion", title: "Capacitación", icon: Users },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowBackToTop(scrollY > 500)

      // Detectar sección activa
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setShowSectionNav(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="fixed top-20 right-4 z-40 hidden lg:block">
        <Card className="p-3 shadow-xl backdrop-blur-md bg-background/90 border-primary/20">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-muted-foreground px-2 mb-3">SECTORES</div>
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center w-full px-3 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground shadow-sm scale-105"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground hover:scale-102"
                  }`}
                  title={section.title}
                >
                  <Icon className="h-4 w-4 mr-3" />
                  <span className="truncate font-medium">{section.title}</span>
                </button>
              )
            })}
          </div>
        </Card>
      </div>

      <div className="fixed top-20 right-4 z-40 lg:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowSectionNav(!showSectionNav)}
          className="shadow-xl backdrop-blur-md bg-background/90 border-primary/20"
        >
          <Menu className="h-4 w-4" />
        </Button>

        {showSectionNav && (
          <Card className="absolute top-12 right-0 p-3 shadow-xl backdrop-blur-md bg-background/90 min-w-52 border-primary/20">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted-foreground px-2 mb-3">SECTORES</div>
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      scrollToSection(section.id)
                      setShowSectionNav(false)
                    }}
                    className={`flex items-center w-full px-3 py-2.5 text-sm rounded-lg transition-all ${
                      activeSection === section.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    <span className="font-medium">{section.title}</span>
                  </button>
                )
              })}
            </div>
          </Card>
        )}
      </div>

      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 z-40 rounded-full w-12 h-12 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110"
          size="sm"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-background via-card to-background py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Historias de Transformación
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-balance text-foreground mb-6">
              Casos de{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Éxito
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-4xl mx-auto mb-12 leading-relaxed">
              Historias reales de transformación a través de la tecnología inclusiva. Descubre cómo nuestras soluciones
              han mejorado la vida de personas y organizaciones en toda Latinoamérica
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">200+</div>
                <p className="text-sm text-muted-foreground">Proyectos Exitosos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">5</div>
                <p className="text-sm text-muted-foreground">Países Impactados</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">50K+</div>
                <p className="text-sm text-muted-foreground">Vidas Transformadas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Satisfacción</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-6 font-medium">Explora por sectores:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <Button
                      key={section.id}
                      variant="outline"
                      size="sm"
                      onClick={() => scrollToSection(section.id)}
                      className="text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105 border-primary/20"
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {section.title}
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                <Target className="h-4 w-4 mr-2" />
                Impacto Real
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
                Casos Destacados por Sector
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
                Proyectos que han marcado la diferencia en diferentes sectores de la sociedad
              </p>
            </div>

            <div className="space-y-16">
              <div id="educacion">
                <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-card to-background">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center mb-6">
                        <Badge className="bg-primary/15 text-primary border-primary/30 mr-4 px-3 py-1">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          Educación
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          Implementación continua
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                        Aulas Didácticas y Tecnológicas Accesibles
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Implementación de nuestro modelo "Aulas didácticas y tecnológicas accesibles" en 18
                        instituciones públicas de Cartagena y más de 30 instituciones educativas en Colombia y Panamá.
                      </p>

                      <div className="space-y-6 mb-8">
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Estaciones de Trabajo Accesibles</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Diseño y adecuación de estaciones para inclusión educativa en casa de alumnos con
                              discapacidad
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Mobiliario Accesible</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Diseño y producción de mobiliario accesible para diversas instituciones educativas
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Formación Docente Internacional</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Entrenamiento a docentes del Instituto Panameño de Educación Especial IPHE y Ministerio de
                              Educación de Panamá
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl border-l-4 border-l-primary">
                        <Quote className="h-6 w-6 text-primary mb-3" />
                        <blockquote className="text-muted-foreground italic mb-3 text-lg leading-relaxed">
                          "La implementación de las aulas accesibles ha transformado completamente la experiencia
                          educativa de nuestros estudiantes con discapacidad."
                        </blockquote>
                        <cite className="text-sm font-semibold text-foreground">
                          - Directora Académica, Institución Educativa Cartagena
                        </cite>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-primary/15 w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                          <GraduationCap className="h-14 w-14 text-primary" />
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">48+</div>
                            <p className="text-sm text-muted-foreground font-medium">Instituciones beneficiadas</p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-secondary mb-2">3</div>
                            <p className="text-sm text-muted-foreground font-medium">Países implementados</p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">500+</div>
                            <p className="text-sm text-muted-foreground font-medium">Docentes capacitados</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Case Study 2 - Inclusión Digital */}
              <div id="inclusion-digital">
                <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-card to-background">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 lg:p-12 flex items-center justify-center order-2 lg:order-1">
                      <div className="text-center">
                        <div className="bg-secondary/15 w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                          <Eye className="h-14 w-14 text-secondary" />
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-secondary mb-2">163</div>
                            <p className="text-sm text-muted-foreground font-medium">Telecentros equipados</p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">3</div>
                            <p className="text-sm text-muted-foreground font-medium">Países beneficiados</p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-secondary mb-2">15K+</div>
                            <p className="text-sm text-muted-foreground font-medium">Usuarios impactados</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12 order-1 lg:order-2">
                      <div className="flex items-center mb-6">
                        <Badge className="bg-secondary/15 text-secondary border-secondary/30 mr-4 px-3 py-1">
                          <Eye className="h-4 w-4 mr-2" />
                          Inclusión Digital
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Globe className="h-4 w-4 mr-2" />
                          Alcance internacional
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                        Kit de Inclusión Digital
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Implementación de nuestro modelo "Kit de Inclusión Digital para Personas con Discapacidad" en 63
                        telecentros públicos de Medellín y otros 100 más en entidades públicas y privadas de Colombia,
                        Panamá y Ecuador.
                      </p>

                      <div className="space-y-6 mb-8">
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-secondary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Tecnocentro Accesible de Tunja</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Implementación integral (infraestructura, mobiliario, tecnología y entrenamiento)
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-secondary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Tecnología Adaptativa</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Hardware y software especializado para diferentes tipos de discapacidad
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-secondary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Capacitación Especializada</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Formación a operadores y usuarios en el uso de tecnologías inclusivas
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-secondary/5 to-primary/5 p-6 rounded-xl border-l-4 border-l-secondary">
                        <Quote className="h-6 w-6 text-secondary mb-3" />
                        <blockquote className="text-muted-foreground italic mb-3 text-lg leading-relaxed">
                          "Gracias al kit de inclusión digital, ahora puedo acceder a internet y comunicarme con mi
                          familia. Es increíble lo que la tecnología puede hacer."
                        </blockquote>
                        <cite className="text-sm font-semibold text-foreground">
                          - María Elena, Usuario Telecentro Medellín
                        </cite>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Case Study 3 - Bibliotecas Accesibles */}
              <div id="bibliotecas">
                <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-card to-background">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center mb-6">
                        <Badge className="bg-primary/15 text-primary border-primary/30 mr-4 px-3 py-1">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Cultura y Educación
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          Implementación nacional
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                        Modelo "Bibliotecas Accesibles"
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Implementación de nuestro modelo "Bibliotecas Accesibles" en bibliotecas públicas, privadas y
                        universitarias, garantizando el acceso universal al conocimiento y la información.
                      </p>

                      <div className="space-y-6 mb-8">
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Tecnología de Lectura Adaptada</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Lectores de pantalla, magnificadores y sistemas de audio para diferentes discapacidades
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Espacios Físicos Adaptados</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Mobiliario regulable, señalización táctil y rutas accesibles
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Colecciones Inclusivas</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Libros en Braille, audiolibros y materiales en formatos accesibles
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl border-l-4 border-l-primary">
                        <Quote className="h-6 w-6 text-primary mb-3" />
                        <blockquote className="text-muted-foreground italic mb-3 text-lg leading-relaxed">
                          "Nuestra biblioteca ahora es verdaderamente para todos. Hemos visto un aumento del 200% en
                          usuarios con discapacidad."
                        </blockquote>
                        <cite className="text-sm font-semibold text-foreground">
                          - Directora Biblioteca Pública Central
                        </cite>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-primary/15 w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                          <Home className="h-14 w-14 text-primary" />
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">25+</div>
                            <p className="text-sm text-muted-foreground font-medium">Bibliotecas adaptadas</p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-secondary mb-2">200%</div>
                            <p className="text-sm text-muted-foreground font-medium">Aumento de usuarios</p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
                            <p className="text-sm text-muted-foreground font-medium">Accesibilidad garantizada</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Case Study 4 - Inclusión Laboral */}
              <div id="inclusion-laboral">
                <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-card to-background">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center mb-6">
                        <Badge className="bg-secondary/15 text-secondary border-secondary/30 mr-4 px-3 py-1">
                          <Briefcase className="h-4 w-4 mr-2" />
                          Inclusión Laboral
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          Implementación empresarial
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                        Ajustes Laborales para la Inclusión
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Diagnóstico e implementación de ajustes a puestos laborales para la inclusión de personas con
                        discapacidad en empresas líderes del sector público y privado.
                      </p>

                      <div className="space-y-6 mb-8">
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-secondary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Empresas Públicas de Medellín (EPM)</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Diagnóstico integral y adecuación de puestos laborales para empleados con discapacidad
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-secondary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Bancolombia</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Adecuación de estaciones de trabajo y tecnología adaptativa para el sector financiero
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-secondary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Konecta y Coltabaco</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Implementación de ajustes razonables en centros de contacto e industria tabacalera
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-secondary/5 to-primary/5 p-6 rounded-xl border-l-4 border-l-secondary">
                        <Quote className="h-6 w-6 text-secondary mb-3" />
                        <blockquote className="text-muted-foreground italic mb-3 text-lg leading-relaxed">
                          "Los ajustes implementados no solo beneficiaron a nuestros empleados con discapacidad, sino
                          que mejoraron la productividad de todo el equipo."
                        </blockquote>
                        <cite className="text-sm font-semibold text-foreground">
                          - Gerente de Recursos Humanos, EPM
                        </cite>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 lg:p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-secondary/15 w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                          <Briefcase className="h-14 w-14 text-secondary" />
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-secondary mb-2">50+</div>
                            <p className="text-sm text-muted-foreground font-medium">Puestos adaptados</p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">4</div>
                            <p className="text-sm text-muted-foreground font-medium">Empresas grandes</p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-secondary mb-2">95%</div>
                            <p className="text-sm text-muted-foreground font-medium">Retención laboral</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Case Study 5 - Transporte */}
              <div id="transporte">
                <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-card to-background">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12 flex items-center justify-center order-2 lg:order-1">
                      <div className="text-center">
                        <div className="bg-primary/15 w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                          <Plane className="h-14 w-14 text-primary" />
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">3</div>
                            <p className="text-sm text-muted-foreground font-medium">Aerolíneas asesoradas</p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-secondary mb-2">2</div>
                            <p className="text-sm text-muted-foreground font-medium">Países beneficiados</p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
                            <p className="text-sm text-muted-foreground font-medium">Cumplimiento DOT</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12 order-1 lg:order-2">
                      <div className="flex items-center mb-6">
                        <Badge className="bg-primary/15 text-primary border-primary/30 mr-4 px-3 py-1">
                          <Plane className="h-4 w-4 mr-2" />
                          Transporte
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          Consultoría internacional
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                        Accesibilidad en Transporte Aéreo y Terrestre
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Consultoría especializada para el cumplimiento de normativas de accesibilidad en aeropuertos,
                        aerolíneas y sistemas de transporte masivo.
                      </p>

                      <div className="space-y-6 mb-8">
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Aeropuerto El Dorado - Bogotá</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Consultoría en el diseño del plan de accesibilidad para el aeropuerto más importante de
                              Colombia
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Viva Colombia y Aero Bus México</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Asesoría para cumplimiento de normativa DOT (Departamento de Transporte de Estados Unidos)
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Metro de Medellín</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Capacitación al personal de servicio al cliente en atención adecuada a personas con
                              discapacidad
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl border-l-4 border-l-primary">
                        <Quote className="h-6 w-6 text-primary mb-3" />
                        <blockquote className="text-muted-foreground italic mb-3 text-lg leading-relaxed">
                          "La consultoría de Tecnoayudas nos permitió cumplir con todos los estándares internacionales
                          de accesibilidad y mejorar significativamente la experiencia de nuestros pasajeros."
                        </blockquote>
                        <cite className="text-sm font-semibold text-foreground">
                          - Director de Operaciones, Aeropuerto El Dorado
                        </cite>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Case Study 6 - Museos y Cultura */}
              <div id="museos">
                <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-card to-background">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center mb-6">
                        <Badge className="bg-secondary/15 text-secondary border-secondary/30 mr-4 px-3 py-1">
                          <Building className="h-4 w-4 mr-2" />
                          Cultura
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          Patrimonio accesible
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                        Museos y Espacios Culturales Inclusivos
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Transformación de espacios culturales para garantizar el acceso universal al patrimonio y la
                        memoria histórica.
                      </p>

                      <div className="space-y-6 mb-8">
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-secondary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Museo Casa de la Memoria - Medellín</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Dotación de tecnología adaptada y capacitación en estrategias de inclusión para el centro
                              de documentación
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-secondary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Museos Públicos Nacionales</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Diseño e implementación de estrategias de inclusión en 2 museos públicos adicionales en
                              Colombia
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-secondary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Tecnología Interpretativa</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Sistemas de audio-descripción, guías táctiles y aplicaciones móviles accesibles
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-secondary/5 to-primary/5 p-6 rounded-xl border-l-4 border-l-secondary">
                        <Quote className="h-6 w-6 text-secondary mb-3" />
                        <blockquote className="text-muted-foreground italic mb-3 text-lg leading-relaxed">
                          "Ahora nuestro museo es verdaderamente un espacio para todos. Las personas con discapacidad
                          pueden disfrutar plenamente de nuestras exposiciones y actividades."
                        </blockquote>
                        <cite className="text-sm font-semibold text-foreground">
                          - Directora Museo Casa de la Memoria
                        </cite>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 lg:p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-secondary/15 w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                          <Building className="h-14 w-14 text-secondary" />
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-secondary mb-2">3</div>
                            <p className="text-sm text-muted-foreground font-medium">Museos adaptados</p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">150%</div>
                            <p className="text-sm text-muted-foreground font-medium">Aumento visitantes</p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-secondary mb-2">100%</div>
                            <p className="text-sm text-muted-foreground font-medium">Acceso garantizado</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Case Study 7 - Capacitación */}
              <div id="capacitacion">
                <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-card to-background">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12 flex items-center justify-center order-2 lg:order-1">
                      <div className="text-center">
                        <div className="bg-primary/15 w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                          <Users className="h-14 w-14 text-primary" />
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">10+</div>
                            <p className="text-sm text-muted-foreground font-medium">Sectores capacitados</p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-secondary mb-2">2000+</div>
                            <p className="text-sm text-muted-foreground font-medium">Personas formadas</p>
                          </div>
                          <div className="text-center p-4 bg-background/50 rounded-xl">
                            <div className="text-4xl font-heading font-bold text-primary mb-2">2</div>
                            <p className="text-sm text-muted-foreground font-medium">Países alcanzados</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12 order-1 lg:order-2">
                      <div className="flex items-center mb-6">
                        <Badge className="bg-primary/15 text-primary border-primary/30 mr-4 px-3 py-1">
                          <Users className="h-4 w-4 mr-2" />
                          Capacitación
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          Formación multisectorial
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                        Entrenamiento y Capacitación Nacional e Internacional
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Desarrollo de procesos de capacitación especializados para múltiples sectores, garantizando la
                        inclusión y accesibilidad en todos los niveles organizacionales.
                      </p>

                      <div className="space-y-6 mb-8">
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Sectores Estratégicos</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Aeropuertos, terminales de transporte, notarías, despachos públicos, entidades financieras
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Sector Salud y Justicia</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Capacitación especializada en atención inclusiva para hospitales, clínicas y juzgados
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Comercio y Bibliotecas</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Formación en servicio al cliente inclusivo y gestión de espacios accesibles
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl border-l-4 border-l-primary">
                        <Quote className="h-6 w-6 text-primary mb-3" />
                        <blockquote className="text-muted-foreground italic mb-3 text-lg leading-relaxed">
                          "La capacitación transformó completamente nuestra cultura organizacional. Ahora la inclusión
                          es parte natural de nuestros procesos."
                        </blockquote>
                        <cite className="text-sm font-semibold text-foreground">
                          - Gerente de Calidad, Terminal de Transporte
                        </cite>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Testimoniales */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Videos Testimoniales</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Escucha directamente de nuestros usuarios el impacto real de nuestras soluciones
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/pL7Ldl6IWRs"
                      title="Testimonio Tecnoayudas 1"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      Transformación Educativa
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Testimonio sobre el impacto de nuestras aulas accesibles en instituciones educativas
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/4ZEVPwv5qH8"
                      title="Testimonio Tecnoayudas 2"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Inclusión Digital</h3>
                    <p className="text-muted-foreground text-sm">
                      Experiencias reales con nuestros kits de inclusión digital en telecentros
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Más Testimonios</h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                La satisfacción de nuestros usuarios es nuestra mejor carta de presentación
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "El sistema de comunicación que instalaron en nuestro centro ha revolucionado la forma en que
                    nuestros usuarios se expresan."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-semibold text-sm">LM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Laura Martínez</p>
                      <p className="text-xs text-muted-foreground">Directora Centro APACE</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "Mi hijo ahora puede comunicarse con nosotros gracias a la tablet adaptada. Es un milagro de la
                    tecnología."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-secondary font-semibold text-sm">PG</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Patricia García</p>
                      <p className="text-xs text-muted-foreground">Madre de usuario</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "La formación que recibimos fue excelente. Ahora todo nuestro equipo sabe usar las nuevas
                    tecnologías."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-semibold text-sm">JR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">José Rodríguez</p>
                      <p className="text-xs text-muted-foreground">Coordinador Técnico</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              Tu Próximo Paso
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              ¿Quieres ser nuestro próximo caso de éxito?
            </h2>
            <p className="text-xl opacity-90 mb-10 text-balance max-w-3xl mx-auto leading-relaxed">
              Cuéntanos tu proyecto y descubre cómo podemos ayudarte a transformar vidas a través de la tecnología
              inclusiva
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 px-8 py-4 text-lg"
                asChild
              >
                <Link href="/contacto">
                  Solicitar Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 px-8 py-4 text-lg"
                asChild
              >
                <Link href="/soluciones">Ver Todas las Soluciones</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
