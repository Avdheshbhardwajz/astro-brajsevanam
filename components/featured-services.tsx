import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: "🎵",
    title: "Horoscope Reading",
    description: "Detailed birth chart analysis revealing your life's cosmic blueprint and divine purpose.",
    sanskrit: "जन्म कुंडली",
    translation: "Birth Chart"
  },
  {
    icon: "🪷",
    title: "Kundli Matching",
    description: "Sacred compatibility analysis for harmonious marriages blessed by divine grace.",
    sanskrit: "मिलान",
    translation: "Matching"
  },
  {
    icon: "🐚",
    title: "Vastu Consultation",
    description: "Align your living spaces with cosmic energies for prosperity and peace.",
    sanskrit: "वास्तु शास्त्र",
    translation: "Vastu Shastra"
  },
  {
    icon: "💎",
    title: "Gemstone Guidance",
    description: "Discover powerful gemstones to enhance your spiritual and material well-being.",
    sanskrit: "रत्न विज्ञान",
    translation: "Gem Science"
  }
]

export function FeaturedServices() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-deep-blue mb-6">
            Sacred Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our divine offerings rooted in ancient Vedic traditions
          </p>
          <div className="mt-6">
            <span className="text-saffron font-medium text-lg tracking-wide">सेवाएं</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="premium-hover border-0 bg-soft-cream/30 rounded-2xl overflow-hidden"
            >
              <CardHeader className="text-center py-12 bg-gradient-to-b from-deep-blue to-deep-blue/90">
                <div className="text-6xl mb-6">
                  {service.icon}
                </div>
                <CardTitle className="font-playfair text-2xl text-white mb-3">
                  {service.title}
                </CardTitle>
                <div className="text-premium-gold font-medium text-lg tracking-wide">
                  {service.sanskrit}
                </div>
              </CardHeader>
              <CardContent className="p-12 text-center">
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                <Button className="btn-premium w-full text-lg py-4">
                  Explore Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
