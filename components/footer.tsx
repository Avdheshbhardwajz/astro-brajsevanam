import Link from "next/link"

export function Footer() {
  return (
    <footer className="vrindavan-section relative">
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="text-center">
          {/* Divine Logo */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="relative">
              <div className="w-16 h-16 bg-divine-gold rounded-full flex items-center justify-center">
                <span className="text-vrindavan-blue text-2xl">🪷</span>
              </div>
              <div className="absolute -top-2 -right-2 text-2xl">🦚</div>
            </div>
            <div>
              <span className="font-playfair text-3xl font-bold text-divine-gold">
                राधा रानी सेवा
              </span>
              <div className="text-cream-gold text-sm">Radha Rani Seva</div>
            </div>
          </div>
          
          <p className="text-temple-white text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            With the divine grace of Radha Rani, from sacred Vrindavan. 
            All services are seva, offered with pure love and devotion.
          </p>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-12 mb-12">
            <Link href="/seva" className="text-cream-gold hover:text-divine-gold transition-colors text-lg font-medium">
              Seva
            </Link>
            <Link href="/book" className="text-cream-gold hover:text-divine-gold transition-colors text-lg font-medium">
              Book Session
            </Link>
            <Link href="/about" className="text-cream-gold hover:text-divine-gold transition-colors text-lg font-medium">
              About
            </Link>
            <Link href="/contact" className="text-cream-gold hover:text-divine-gold transition-colors text-lg font-medium">
              Contact
            </Link>
          </div>

          {/* Divine Blessing */}
          <div className="border-t-2 border-divine-gold/30 pt-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-4xl">🪷</span>
              <span className="sanskrit-text text-divine-gold text-2xl">राधे राधे</span>
              <span className="text-4xl">🪷</span>
            </div>
            
            <div className="sanskrit-text text-cream-gold text-lg mb-4">
              सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः
            </div>
            
            <p className="text-temple-white/80 text-lg mb-6">
              "May all beings be happy, may all beings be free from suffering"
            </p>
            
            <p className="text-cream-gold/80">
              © 2025 Radha Rani Seva. Free spiritual guidance as divine seva from Vrindavan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
