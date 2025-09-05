import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  Package,
  Truck,
  HeadphonesIcon,
  Star,
  Shield,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Heart,
  CreditCard,
} from "lucide-react"
import Link from "next/link"

export default function IncluticMarketPage() {
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
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  INCLUTIC MARKET
                </Badge>
                <h1 className="font-heading font-black text-4xl md:text-5xl text-balance text-foreground mb-6">
                  Marketplace de <span className="text-primary">Productos de Apoyo</span>
                </h1>
                <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                  La plataforma de venta en línea más completa de Colombia para productos de apoyo y tecnologías
                  asistivas. Catálogo especializado con asesoría técnica y envío nacional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contacto">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Explorar Catálogo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Solicitar Asesoría
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
                  <div className="text-center">
                    <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Package className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-2xl mb-4">+2,000 Productos Disponibles</h3>
                    <p className="text-muted-foreground">El catálogo más amplio de tecnologías asistivas en Colombia</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Categorías de Productos */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Categorías Especializadas
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Productos organizados por tipo de necesidad y área de aplicación
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Comunicación Aumentativa */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <HeadphonesIcon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl">Comunicación</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Dispositivos y software para comunicación aumentativa y alternativa (CAA).
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Tablets con software CAA
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Comunicadores por símbolos
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Amplificadores de voz
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Software especializado
                    </li>
                  </ul>
                  <Badge className="mb-4">+300 Productos</Badge>
                </CardContent>
              </Card>

              {/* Movilidad */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Truck className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-xl">Movilidad</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Equipos para mejorar la movilidad y desplazamiento independiente.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Sillas de ruedas especializadas
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Andadores y bastones
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Scooters eléctricos
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Rampas portátiles
                    </li>
                  </ul>
                  <Badge variant="secondary" className="mb-4">
                    +450 Productos
                  </Badge>
                </CardContent>
              </Card>

              {/* Tecnología Asistiva */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl">Tecnología</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Dispositivos tecnológicos avanzados para diferentes tipos de discapacidad.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Lectores de pantalla
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Magnificadores digitales
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Teclados adaptativos
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Sistemas de control ocular
                    </li>
                  </ul>
                  <Badge className="mb-4">+600 Productos</Badge>
                </CardContent>
              </Card>

              {/* Vida Diaria */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Heart className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-xl">Vida Diaria</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Productos para facilitar las actividades de la vida diaria y autonomía personal.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Utensilios adaptativos
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Ayudas para el baño
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Productos para vestirse
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Ayudas para cocinar
                    </li>
                  </ul>
                  <Badge variant="secondary" className="mb-4">
                    +400 Productos
                  </Badge>
                </CardContent>
              </Card>

              {/* Educación */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl">Educación</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Herramientas educativas especializadas para el aprendizaje inclusivo.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Software educativo adaptativo
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Materiales didácticos táctiles
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Pizarras interactivas accesibles
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Juegos terapéuticos
                    </li>
                  </ul>
                  <Badge className="mb-4">+250 Productos</Badge>
                </CardContent>
              </Card>

              {/* Trabajo */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <CreditCard className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-heading text-xl">Trabajo</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Soluciones para la inclusión laboral y adaptación de puestos de trabajo.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Escritorios ajustables
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Sillas ergonómicas especiales
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Iluminación adaptativa
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Herramientas especializadas
                    </li>
                  </ul>
                  <Badge variant="secondary" className="mb-4">
                    +200 Productos
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Características de la Plataforma */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Experiencia de Compra Inclusiva
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Plataforma completamente accesible diseñada para facilitar la búsqueda y compra de productos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Búsqueda Avanzada */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Filter className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Búsqueda Especializada</h3>
                  <p className="text-muted-foreground text-sm">
                    Filtros por tipo de discapacidad, edad, presupuesto y funcionalidad específica
                  </p>
                </CardContent>
              </Card>

              {/* Asesoría Técnica */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HeadphonesIcon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Asesoría Personalizada</h3>
                  <p className="text-muted-foreground text-sm">
                    Expertos disponibles para orientarte en la selección del producto ideal
                  </p>
                </CardContent>
              </Card>

              {/* Envío Especializado */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Envío Nacional</h3>
                  <p className="text-muted-foreground text-sm">
                    Logística especializada para productos delicados con seguro incluido
                  </p>
                </CardContent>
              </Card>

              {/* Soporte Técnico */}
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Soporte Continuo</h3>
                  <p className="text-muted-foreground text-sm">
                    Capacitación en uso, mantenimiento y soporte técnico post-venta
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Productos Destacados */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Productos Más Vendidos
              </h2>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                Los productos más populares y mejor valorados por nuestros clientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Tablet Comunicador CAA Pro",
                  category: "Comunicación",
                  price: "$1.200.000",
                  rating: 4.9,
                  reviews: 127,
                  description: "Tablet especializada con software de comunicación aumentativa preinstalado",
                },
                {
                  name: "Silla de Ruedas Eléctrica Smart",
                  category: "Movilidad",
                  price: "$8.500.000",
                  rating: 4.8,
                  reviews: 89,
                  description: "Silla eléctrica con control inteligente y navegación asistida",
                },
                {
                  name: "Lector de Pantalla Profesional",
                  category: "Tecnología",
                  price: "$450.000",
                  rating: 4.9,
                  reviews: 203,
                  description: "Software avanzado de lectura de pantalla con síntesis de voz natural",
                },
              ].map((product) => (
                <Card key={product.name} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Badge variant="outline" className="mb-3">
                      {product.category}
                    </Badge>
                    <h3 className="font-heading font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews} reseñas)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xl text-primary">{product.price}</span>
                      <Link href="/contacto">
                        <Button size="sm">Ver Detalles</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Encuentra el producto perfecto para tus necesidades
            </h2>
            <p className="text-lg opacity-90 mb-8 text-balance">
              Explora nuestro catálogo completo o solicita asesoría personalizada para encontrar la solución ideal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Explorar Catálogo Completo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Solicitar Asesoría Gratuita
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
