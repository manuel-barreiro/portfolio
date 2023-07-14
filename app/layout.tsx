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


// Components
import Navbar from '@/components/Navbar'
import LeftSide from '@/components/LeftSide'
import RightSide from '@/components/RightSide'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Form from '@/components/Form'



// Layout

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60'>
          <Navbar />
          <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
            <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
              <LeftSide />
            </div>
            <div className='h-[88vh] mx-auto p-4'>
              <Banner />
              <About />
              <Experience />
              <Projects />
              <Form />
              {/* Contact */}
              {/* Footer */}
            </div>
            <div className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
              <RightSide />
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
