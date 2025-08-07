import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-premium-gold rounded-full flex items-center justify-center">
                <span className="text-deep-blue text-xl">ॐ</span>
              </div>
              <span className="font-playfair text-3xl font-bold text-white">
                Braj Jyotish
              </span>
            </div>
            <p className="text-soft-cream/80 text-lg leading-relaxed max-w-md">
              Authentic Vedic astrology rooted in the sacred traditions of Braj, 
              guiding souls towards their divine purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-premium-gold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-soft-cream/80 hover:text-premium-gold transition-colors text-lg">Services</Link></li>
              <li><Link href="/consultations" className="text-soft-cream/80 hover:text-premium-gold transition-colors text-lg">Consultations</Link></li>
              <li><Link href="/horoscope" className="text-soft-cream/80 hover:text-premium-gold transition-colors text-lg">Horoscope</Link></li>
              <li><Link href="/about" className="text-soft-cream/80 hover:text-premium-gold transition-colors text-lg">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-premium-gold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-premium-gold" />
                <span className="text-soft-cream/80 text-lg">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-premium-gold" />
                <span className="text-soft-cream/80 text-lg">info@brajjyotish.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-premium-gold" />
                <span className="text-soft-cream/80 text-lg">Vrindavan, Uttar Pradesh</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-cinzel text-lg font-bold text-gold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gold hover:bg-gold/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gold hover:bg-gold/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gold hover:bg-gold/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gold hover:bg-gold/20">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-premium-gold/20 mt-16 pt-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-premium-gold font-playfair text-xl">ॐ शांति शांति शांति</span>
          </div>
          <p className="text-soft-cream/60 text-lg">© 2025 Braj Jyotish. All Rights Reserved. | Guided by Divine Wisdom</p>
        </div>
      </div>
    </footer>
  )
}
