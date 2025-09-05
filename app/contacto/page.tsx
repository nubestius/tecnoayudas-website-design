"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    sector: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Error al enviar el mensaje")
      }

      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          empresa: "",
          sector: "",
          mensaje: "",
        })
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Contáctanos</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Estamos aquí para ayudarte a implementar tecnologías inclusivas que transformen vidas. Conversemos sobre
              tu proyecto.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">Envíanos un mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">¡Mensaje enviado exitosamente!</h3>
                      <p className="text-muted-foreground">Nos pondremos en contacto contigo pronto.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">{error}</div>
                      )}

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                            Nombre completo *
                          </label>
                          <Input
                            id="nombre"
                            name="nombre"
                            type="text"
                            required
                            value={formData.nombre}
                            onChange={handleInputChange}
                            placeholder="Tu nombre completo"
                            aria-describedby="nombre-help"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Correo electrónico *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="tu@email.com"
                            aria-describedby="email-help"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                            Teléfono
                          </label>
                          <Input
                            id="telefono"
                            name="telefono"
                            type="tel"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            placeholder="+57 300 123 4567"
                          />
                        </div>
                        <div>
                          <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
                            Empresa/Organización
                          </label>
                          <Input
                            id="empresa"
                            name="empresa"
                            type="text"
                            value={formData.empresa}
                            onChange={handleInputChange}
                            placeholder="Nombre de tu empresa"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="sector" className="block text-sm font-medium text-foreground mb-2">
                          Sector de interés
                        </label>
                        <select
                          id="sector"
                          name="sector"
                          value={formData.sector}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Selecciona un sector</option>
                          <option value="educacion">Educación</option>
                          <option value="turismo-ocio">Turismo - Ocio</option>
                          <option value="cultura">Cultura</option>
                          <option value="justicia">Justicia</option>
                          <option value="salud">Salud</option>
                          <option value="transporte">Transporte</option>
                          <option value="financiero">Financiero</option>
                          <option value="empleo">Empleo</option>
                          <option value="comercio">Comercio</option>
                          <option value="gobierno">Gobierno</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                          Mensaje *
                        </label>
                        <Textarea
                          id="mensaje"
                          name="mensaje"
                          required
                          rows={5}
                          value={formData.mensaje}
                          onChange={handleInputChange}
                          placeholder="Cuéntanos sobre tu proyecto o necesidades específicas..."
                          aria-describedby="mensaje-help"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Enviar mensaje
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">Información de contacto</CardTitle>
                  <CardDescription>Múltiples formas de conectar con nuestro equipo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                      <p className="text-muted-foreground">
                        Medellín, Colombia
                        <br />
                        Antioquia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                      <a
                        href="tel:+573116368873"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label="Llamar a Tecnoayudas"
                      >
                        +57 311 6368873
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Correo electrónico</h3>
                      <a
                        href="mailto:gerencia@tecnoayudas.com"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label="Enviar correo a Tecnoayudas"
                      >
                        gerencia@tecnoayudas.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horario de atención</h3>
                      <p className="text-muted-foreground">
                        Lunes a Viernes: 8:00 AM - 6:00 PM
                        <br />
                        Sábados: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">¿Por qué elegirnos?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Respuesta en menos de 24 horas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Consultoría gratuita inicial</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Soluciones personalizadas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Soporte técnico especializado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
