import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image src="/logo-tecnoayudas.png" alt="Tecnoayudas" width={180} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Especialistas en tecnologías y estrategias para la inclusión de personas con discapacidad y personas
              mayores. Creamos soluciones que mejoran la calidad de vida y promueven la autonomía.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/soluciones" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Soluciones
                </Link>
              </li>
              <li>
                <Link href="/empresa" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Empresa
                </Link>
              </li>
              <li>
                <Link
                  href="/casos-de-exito"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link
                  href="/experiencia"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Experiencia
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>info@tecnoayudas.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                <a href="tel:+573116368873" className="hover:text-primary transition-colors" aria-label="Llamar a Tecnoayudas">
                  +57 311 6368873
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" aria-hidden="true" />
                <span>Medellín, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Tecnoayudas. Todos los derechos reservados. |
            <Link href="/privacidad" className="hover:text-primary transition-colors ml-1">
              Política de Privacidad
            </Link>{" "}
            |
            <Link href="/terminos" className="hover:text-primary transition-colors ml-1">
              Términos de Uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
