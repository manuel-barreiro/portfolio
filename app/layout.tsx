// Global CSS
import './globals.css'

// Metadata
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manuel Barreiro',
  description: 'Manuel Barreiro Portfolio',
}

// NextFonts
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})


// Layout

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
