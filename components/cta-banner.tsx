import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-gold text-lg font-medium">आपका भाग्य आपका इंतज़ार कर रहा है</span>
            <p className="text-cream/80 text-sm mt-1">Your Destiny Awaits You</p>
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-gold mb-6">
            Unlock Your Destiny Today
          </h2>
          
          <p className="text-cream text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards understanding your cosmic purpose. 
            Let the divine wisdom of Braj guide you to a life of fulfillment and spiritual growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-deep-blue font-bold px-12 py-4 text-lg spiritual-glow"
            >
              Book Your Reading Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-deep-blue px-12 py-4 text-lg"
            >
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
