import type { Metadata } from "next"
import { Inter, Playfair_Display } from 'next/font/google'
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ['300', '400', '500', '600', '700']
})

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "Braj Jyotish - Vedic Astrology & Spiritual Guidance",
  description: "Discover your cosmic path with authentic Vedic astrology, guided by divine wisdom and Braj spirituality.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-inter`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
