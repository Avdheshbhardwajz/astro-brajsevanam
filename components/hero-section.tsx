import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center vrindavan-section overflow-hidden pt-40">
      {/* Divine Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 text-8xl text-divine-gold/20 animate-pulse">🦚</div>
        <div className="absolute bottom-32 left-16 text-6xl text-cream-gold/30">🪷</div>
        <div className="absolute top-1/3 left-1/4 text-4xl text-divine-gold/15">🎵</div>
        <div className="absolute top-1/2 right-1/3 text-3xl text-cream-gold/20">🪷</div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <span className="sanskrit-text text-4xl block mb-6 animate-pulse">
              राधा रानी की कृपा से
            </span>
            <p className="text-cream-gold text-xl tracking-wide font-light">
              By the Divine Grace of Radha Rani
            </p>
          </div>
          
          <h1 className="divine-heading mb-12 leading-tight">
            Free Spiritual Guidance
            <span className="block mt-4 text-divine-gold">Through Vedic Wisdom</span>
          </h1>
          
          <p className="text-temple-white text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Your humble sevak offers free astrological guidance and spiritual counseling 
            as seva, blessed by the divine grace of Radha Rani from sacred Vrindavan.
          </p>

          {/* Divine Seva Notice */}
          <div className="bg-temple-white/10 backdrop-blur-sm rounded-3xl p-12 mb-20 max-w-3xl mx-auto border-2 border-divine-gold/30 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl mr-3">🪷</span>
              <h3 className="text-divine-gold font-playfair text-2xl font-semibold">Divine Seva Promise</h3>
              <span className="text-4xl ml-3">🪷</span>
            </div>
            <p className="text-temple-white text-xl mb-4 font-medium">
              All services are completely free
            </p>
            <p className="text-cream-gold text-lg mb-6">
              This is divine seva, not a business. No payment or donation required.
            </p>
            <div className="sanskrit-text text-lg">
              सेवा परमो धर्म:
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <Button className="seva-button text-xl px-20 py-8 shadow-2xl">
              🎵 Book Free Guidance Session
            </Button>
            <Button className="seva-button-outline text-xl px-20 py-8">
              🪷 Learn About Seva
            </Button>
          </div>

          {/* Divine Stats */}
          <div className="mt-20 flex items-center justify-center space-x-16 text-temple-white/80">
            <div className="text-center">
              <div className="text-4xl font-bold text-divine-gold mb-2">25+</div>
              <div className="text-lg tracking-wide">Years of Seva</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-divine-gold mb-2">2500+</div>
              <div className="text-lg tracking-wide">Blessed Souls</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-divine-gold mb-2">100%</div>
              <div className="text-lg tracking-wide">Free Seva</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
