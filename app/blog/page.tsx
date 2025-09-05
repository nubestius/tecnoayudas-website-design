import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User, Tag, Search } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Las Nuevas Tendencias en Tecnología Asistiva para 2024",
      excerpt:
        "Descubre las innovaciones más prometedoras que están transformando la vida de personas con discapacidad este año.",
      author: "Dr. María González",
      date: "15 de Marzo, 2024",
      readTime: "5 min",
      category: "Innovación",
      featured: true,
      image: "/tecnologia-asistiva-moderna.jpg",
    },
    {
      id: 2,
      title: "Cómo Elegir el Mejor Lector de Pantalla para tu Necesidad",
      excerpt:
        "Guía completa para seleccionar el software de lectura de pantalla más adecuado según tu perfil y actividades.",
      author: "Carlos Martín",
      date: "8 de Marzo, 2024",
      readTime: "7 min",
      category: "Guías",
      featured: false,
      image: "/lector-de-pantalla-accesibilidad.jpg",
    },
    {
      id: 3,
      title: "Domótica Accesible: Transformando Hogares para la Independencia",
      excerpt:
        "Casos reales de cómo la domótica adaptada está mejorando la calidad de vida de personas mayores y con discapacidad.",
      author: "Ana Rodríguez",
      date: "1 de Marzo, 2024",
      readTime: "6 min",
      category: "Casos de Éxito",
      featured: false,
      image: "/casa-inteligente-accesible-domotica.jpg",
    },
    {
      id: 4,
      title: "Apps Móviles Inclusivas: Diseño para Todos",
      excerpt:
        "Principios fundamentales del diseño universal aplicados al desarrollo de aplicaciones móviles accesibles.",
      author: "José Luis Pérez",
      date: "22 de Febrero, 2024",
      readTime: "4 min",
      category: "Desarrollo",
      featured: false,
      image: "/aplicacion-movil-accesible-dise-o-inclusivo.jpg",
    },
    {
      id: 5,
      title: "Comunicación Aumentativa: Dando Voz a Quien No Puede Hablar",
      excerpt:
        "Exploramos las últimas tecnologías en comunicación aumentativa y alternativa (CAA) y su impacto transformador.",
      author: "Laura Fernández",
      date: "15 de Febrero, 2024",
      readTime: "8 min",
      category: "Tecnología",
      featured: false,
      image: "/comunicacion-aumentativa-tablet-simbolos.jpg",
    },
    {
      id: 6,
      title: "Accesibilidad Web: Más Allá del Cumplimiento Legal",
      excerpt: "Por qué la accesibilidad web debe ser una prioridad estratégica y no solo un requisito normativo.",
      author: "Roberto Silva",
      date: "8 de Febrero, 2024",
      readTime: "5 min",
      category: "Web",
      featured: false,
      image: "/accesibilidad-web-wcag-desarrollo.jpg",
    },
  ]

  const categories = ["Todos", "Innovación", "Guías", "Casos de Éxito", "Desarrollo", "Tecnología", "Web"]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-card py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-heading font-black text-4xl md:text-5xl text-balance text-foreground mb-6">
              Blog de <span className="text-primary">Tecnoayudas</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8 leading-relaxed">
              Artículos, guías y noticias sobre tecnologías de inclusión, accesibilidad y innovación para personas con
              discapacidad
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                aria-label="Buscar artículos en el blog"
              />
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  size="sm"
                  className={
                    category === "Todos"
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "border-border text-muted-foreground hover:bg-muted hover:text-foreground bg-transparent"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-2">Artículo Destacado</h2>
              <p className="text-muted-foreground">Lo más relevante en tecnologías de inclusión</p>
            </div>

            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Destacado</Badge>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge className="bg-secondary/20 text-secondary border-secondary/20">{post.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <User className="h-4 w-4 text-muted-foreground mr-2" />
                          <span className="text-sm text-muted-foreground">{post.author}</span>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          Leer Artículo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-2">Últimos Artículos</h2>
              <p className="text-muted-foreground">Mantente al día con las últimas novedades</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-card/90 text-foreground border">{post.category}</Badge>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="font-heading font-semibold text-lg text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <User className="h-3 w-3 text-muted-foreground mr-1" />
                          <span className="text-xs text-muted-foreground">{post.author}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary-foreground hover:bg-primary p-2"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Cargar Más Artículos
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Mantente Informado</h2>
            <p className="text-lg opacity-90 mb-8 text-balance">
              Suscríbete a nuestro boletín y recibe las últimas novedades en tecnologías de inclusión directamente en tu
              correo
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
                  aria-label="Correo electrónico para suscripción"
                />
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 whitespace-nowrap"
                >
                  Suscribirse
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-3">No spam. Puedes darte de baja en cualquier momento.</p>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Recursos Relacionados
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Explora más contenido que puede interesarte
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Tag className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Guías Técnicas</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Documentación detallada sobre implementación y uso de tecnologías asistivas
                  </p>
                  <Link href="/soluciones">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      Ver Guías
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Casos de Éxito</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Historias reales de transformación a través de la tecnología inclusiva
                  </p>
                  <Link href="/casos-de-exito">
                    <Button
                      variant="outline"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                    >
                      Ver Casos
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Consultoría</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Asesoramiento personalizado para tu proyecto de tecnología inclusiva
                  </p>
                  <Link href="/contacto">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Contactar</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
