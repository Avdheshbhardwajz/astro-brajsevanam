import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-deep-blue text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-cinzel text-lg font-bold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/consultations" className="hover:text-gold transition-colors">Consultations</Link></li>
              <li><Link href="/horoscope" className="hover:text-gold transition-colors">Horoscope</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-cinzel text-lg font-bold text-gold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold" />
                <span>info@brajjyotish.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gold" />
                <span>Vrindavan, Uttar Pradesh</span>
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

          {/* Newsletter */}
          <div>
            <h3 className="font-cinzel text-lg font-bold text-gold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe for spiritual insights and cosmic updates</p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-deep-blue/50 border-gold/30 text-cream placeholder:text-cream/70"
              />
              <Button className="bg-saffron hover:bg-saffron/90 text-deep-blue">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-2xl lotus-animation">🪷</span>
            <span className="font-cinzel text-gold">ॐ शांति शांति शांति</span>
            <span className="text-2xl lotus-animation">🪷</span>
          </div>
          <p className="text-cream/80">© 2025 Braj Jyotish. All Rights Reserved. | Guided by Divine Wisdom</p>
        </div>
      </div>
    </footer>
  )
}
