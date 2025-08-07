import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-deep-blue overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 geometric-bg opacity-30" />
      
      {/* Single spiritual icon - minimal Om */}
      <div className="absolute top-32 right-20 text-premium-gold/20 text-8xl font-light">
        ॐ
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-8">
            <span className="text-luxury-gold text-xl font-medium tracking-wide">
              श्री कृष्ण की कृपा से
            </span>
            <p className="text-soft-cream/80 text-sm mt-2 tracking-wide">
              By the Grace of Lord Krishna
            </p>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Discover Your
            <span className="block text-premium-gold mt-2">Cosmic Path</span>
          </h1>
          
          <p className="text-soft-cream text-xl md:text-2xl mb-12 max-w-3xl leading-relaxed font-light">
            Guided by authentic Vedic wisdom and divine spirituality, 
            unlock the secrets of your destiny through sacred astrological insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button className="btn-premium text-xl px-12 py-6">
              Get Your Horoscope
            </Button>
            <Button className="btn-outline-premium text-xl px-12 py-6">
              Book Consultation
            </Button>
          </div>

          <div className="mt-16 flex items-center space-x-12 text-soft-cream/60">
            <div className="text-center">
              <div className="text-3xl font-bold text-premium-gold">2500+</div>
              <div className="text-sm tracking-wide">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-premium-gold">15+</div>
              <div className="text-sm tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-premium-gold">4.9★</div>
              <div className="text-sm tracking-wide">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
