import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, empresa, sector, mensaje } = body

    // Validar campos requeridos
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Nombre, email y mensaje son campos requeridos" }, { status: 400 })
    }

    // Crear el contenido del email
    const emailContent = `
      Nueva consulta desde el sitio web de Tecnoayudas
      
      Datos del contacto:
      - Nombre: ${nombre}
      - Email: ${email}
      - Teléfono: ${telefono || "No proporcionado"}
      - Empresa: ${empresa || "No proporcionada"}
      - Sector: ${sector || "No especificado"}
      
      Mensaje:
      ${mensaje}
      
      ---
      Este mensaje fue enviado desde el formulario de contacto de tecnoayudas.com
    `

    // En un entorno de producción, aquí integrarías con un servicio de email
    // como SendGrid, Resend, Nodemailer, etc.
    console.log("[v0] Email que se enviaría a gerencia@tecnoayudas.com:", emailContent)

    // Simular envío exitoso
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado exitosamente",
    })
  } catch (error) {
    console.error("[v0] Error al procesar el formulario:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
