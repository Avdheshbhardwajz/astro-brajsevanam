import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    <section className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Sacred Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our divine offerings rooted in ancient Vedic traditions and blessed by the wisdom of Braj
          </p>
          <div className="mt-4">
            <span className="text-saffron font-medium">सेवाएं</span>
            <span className="text-gray-500 text-sm ml-2">Our Services</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-gold/30 bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="font-cinzel text-xl text-deep-blue mb-2">
                  {service.title}
                </CardTitle>
                <div className="text-center">
                  <span className="text-saffron font-medium text-lg">{service.sanskrit}</span>
                  <p className="text-gray-500 text-xs">{service.translation}</p>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button 
                  className="bg-lotus-pink hover:bg-lotus-pink/90 text-deep-blue font-semibold w-full"
                >
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
