import type { Metadata } from "next"
import { Inter, Cinzel } from 'next/font/google'
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })

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
      <body className={`${inter.variable} ${cinzel.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
