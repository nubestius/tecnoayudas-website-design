"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"

const navigationItems = [
  { name: "Inicio", href: "/" },
  { name: "Empresa", href: "/empresa" },
  { name: "Casos de Éxito", href: "/casos-de-exito" },
  { name: "Sectores", href: "/sectores" },
  { name: "Blog", href: "/blog" },
]

const solucionesSubmenu = [
  { name: "INCLUTIC - ACADEMY", href: "/soluciones/academy", description: "Academia de formación en accesibilidad" },
  { name: "INCLUTIC - LAB", href: "/soluciones/lab", description: "Laboratorio de diagnóstico" },
  { name: "INCLUTIC - SUPPORT", href: "/soluciones/support", description: "Plataforma de contenidos de apoyo" },
  { name: "INCLUTIC - SOLUTIONS", href: "/soluciones/solutions", description: "Soluciones integrales" },
  { name: "INCLUTIC - MARKET", href: "/soluciones/market", description: "Plataforma de venta en línea" },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSolucionesOpen, setIsSolucionesOpen] = useState(false)

  return (
    <nav
      className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" aria-label="Tecnoayudas - Inicio">
            <Image
              src="/logo-tecnoayudas.png"
              alt="Tecnoayudas - Tecnologías para la inclusión"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-base px-4 py-2 rounded-md hover:bg-muted/50"
              aria-label="Ir a Inicio"
            >
              Inicio
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsSolucionesOpen(true)}
              onMouseLeave={() => setIsSolucionesOpen(false)}
            >
              <Link
                href="/soluciones"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-base px-4 py-2 rounded-md hover:bg-muted/50 flex items-center"
                aria-label="Ir a Soluciones"
              >
                Soluciones
                <ChevronDown className="h-4 w-4 ml-1" aria-hidden="true" />
              </Link>

              {/* Submenu dropdown */}
              {isSolucionesOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg z-50">
                  <div className="p-2">
                    <Link
                      href="/soluciones"
                      className="block px-4 py-3 text-sm font-semibold text-primary hover:bg-muted rounded-md transition-colors duration-200 border-b border-border mb-2"
                    >
                      Ver todas las soluciones
                    </Link>
                    {solucionesSubmenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 hover:bg-muted rounded-md transition-colors duration-200"
                      >
                        <div className="font-medium text-foreground text-sm">{item.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navigationItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-base px-4 py-2 rounded-md hover:bg-muted/50"
                aria-label={`Ir a ${item.name}`}
              >
                {item.name}
              </Link>
            ))}

            <Link href="/contacto" className="ml-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 shadow-sm"
                aria-label="Contactar con Tecnoayudas"
              >
                <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                Contacto
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="hover:bg-muted"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-sm border-t border-border rounded-b-lg shadow-lg">
              <Link
                href="/"
                className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Ir a Inicio"
              >
                Inicio
              </Link>

              <div className="border-t border-border pt-2 mt-2">
                <Link
                  href="/soluciones"
                  className="block px-4 py-3 text-base font-semibold text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Soluciones
                </Link>
                <div className="ml-4 space-y-1">
                  {solucionesSubmenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navigationItems.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Ir a ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-2 border-t border-border mt-2">
                <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                    aria-label="Contactar con Tecnoayudas"
                  >
                    <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                    Contacto
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
