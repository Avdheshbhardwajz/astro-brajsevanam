"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Seva", href: "/seva" },
    { name: "Book Session", href: "/book" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-temple-white/98 backdrop-blur-md border-b-4 border-divine-gold shadow-lg">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-28">
          {/* Divine Logo */}
          <Link href="/" className="flex items-center space-x-5">
            <div className="relative">
              <div className="w-16 h-16 bg-vrindavan-gradient rounded-full flex items-center justify-center animate-divine-glow shadow-lg">
                <span className="text-divine-gold text-3xl">🪷</span>
              </div>
              <div className="absolute -top-2 -right-2 text-2xl">🦚</div>
            </div>
            <div>
              <span className="font-playfair text-3xl font-bold text-vrindavan-blue">
                राधा रानी सेवा
              </span>
              <div className="text-sm text-peacock-green font-medium tracking-wide">Radha Rani Seva</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-14">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-vrindavan-blue hover:text-marigold transition-colors font-semibold text-lg relative group py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-marigold transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center">
            <Button className="seva-button text-lg px-8 py-4">
              🎵 Book Free Session
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-vrindavan-blue">
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-temple-white">
              <div className="flex flex-col space-y-8 mt-20">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-vrindavan-blue hover:text-marigold transition-colors font-semibold text-2xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="seva-button mt-8 text-lg">
                  🎵 Book Free Session
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
