import { NextRequest, NextResponse } from "next/server"
import { readFile } from 'fs/promises'
import path from 'path'

export async function GET() {
  try {
    // Serve the actual PDF file from the public directory
    const pdfPath = path.join(process.cwd(), 'public', 'Rushikesh_Resume.pdf')
    const pdfBuffer = await readFile(pdfPath)

    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Rushikesh_Resume.pdf"',
        "Cache-Control": "public, max-age=31536000",
      },
    })
  } catch (error) {
    console.error('Error serving resume PDF:', error)
    return new NextResponse('Resume not found', { status: 404 })
  }
}
