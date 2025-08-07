import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/vrindavan-dusk-temple.png"
          alt="Vrindavan Temple at Dusk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/60 via-deep-blue/40 to-deep-blue/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-6xl om-animation opacity-30">
        ॐ
      </div>
      <div className="absolute bottom-20 right-10 text-4xl lotus-animation opacity-40">
        🪷
      </div>
      <div className="absolute top-1/3 right-20 text-3xl opacity-20">
        🦚
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <span className="text-gold text-lg font-medium">श्री कृष्ण की कृपा से</span>
          <p className="text-cream/80 text-sm mt-1">By the Grace of Lord Krishna</p>
        </div>
        
        <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold text-gold mb-6 leading-tight">
          Discover Your Cosmic Path
          <span className="block text-cream mt-2">with Braj Jyotish</span>
        </h1>
        
        <p className="text-cream text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Guided by Vedic wisdom and divine spirituality, unlock the secrets of your destiny 
          through authentic astrological insights rooted in the sacred traditions of Braj.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-saffron hover:bg-saffron/90 text-deep-blue font-semibold px-8 py-3 text-lg spiritual-glow"
          >
            Get Your Horoscope
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-deep-blue px-8 py-3 text-lg"
          >
            Book a Consultation
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-cream/60 text-sm mb-2">Trusted by thousands of devotees worldwide</p>
          <div className="flex justify-center items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-gold text-lg">⭐</span>
            ))}
            <span className="text-cream/80 ml-2">4.9/5 from 2,500+ readings</span>
          </div>
        </div>
      </div>
    </section>
  )
}
