import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CTABanner() {
  return (
    <section className="relative py-32 overflow-hidden bg-deep-blue">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-deep-blue" />
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/glowing-lotus-mandala.png"
            alt="Glowing Lotus Mandala"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 text-6xl text-gold/30 lotus-animation">
        🪷
      </div>
      <div className="absolute bottom-10 right-10 text-6xl text-gold/30 lotus-animation">
        🪷
      </div>
      <div className="absolute top-1/2 left-20 text-4xl text-gold/20 om-animation">
        ॐ
      </div>
      <div className="absolute top-1/3 right-20 text-4xl text-gold/20 om-animation">
        ॐ
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="text-luxury-gold text-xl font-medium tracking-wide">
              आपका भाग्य आपका इंतज़ार कर रहा है
            </span>
            <p className="text-soft-cream/80 text-sm mt-2 tracking-wide">
              Your Destiny Awaits You
            </p>
          </div>
          
          <h2 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-8">
            Unlock Your Destiny
          </h2>
          
          <p className="text-soft-cream text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Take the first step towards understanding your cosmic purpose. 
            Let the divine wisdom of Braj guide you to a life of fulfillment.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="btn-premium text-xl px-16 py-6">
              Book Your Reading
            </Button>
            <Button className="btn-outline-premium text-xl px-16 py-6">
              Explore Services
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8 text-cream/60">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">2500+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">4.9★</div>
              <div className="text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
