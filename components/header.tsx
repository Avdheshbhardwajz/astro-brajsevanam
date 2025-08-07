"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, Globe } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Consultations", href: "/consultations" },
    { name: "Horoscope", href: "/horoscope" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-saffron/90 to-gold/90 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-deep-blue rounded-full flex items-center justify-center">
              <span className="text-gold text-lg">🪷</span>
            </div>
            <span className="font-cinzel text-xl font-bold text-deep-blue">
              Braj Jyotish
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-deep-blue hover:text-gold transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-deep-blue hover:text-gold">
              <User className="h-5 w-5" />
            </Button>
            <Button className="bg-gold hover:bg-gold/90 text-deep-blue font-semibold spiritual-glow">
              Book Consultation
            </Button>
            <Button variant="ghost" size="icon" className="text-deep-blue hover:text-gold">
              <Globe className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-deep-blue">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-cream">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-deep-blue hover:text-saffron transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="bg-gold hover:bg-gold/90 text-deep-blue font-semibold mt-4">
                  Book Consultation
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
