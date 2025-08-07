import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

const services = [
  {
    category: "Horoscope Services",
    icon: "🎵",
    items: [
      {
        name: "Birth Chart Reading",
        description: "Complete analysis of your natal chart revealing life purpose and karmic patterns",
        price: "₹2,500",
        sanskrit: "जन्म कुंडली विश्लेषण"
      },
      {
        name: "Annual Predictions",
        description: "Yearly forecast covering all aspects of life with remedial measures",
        price: "₹3,500",
        sanskrit: "वार्षिक भविष्यवाणी"
      },
      {
        name: "Career Guidance",
        description: "Professional path analysis with timing for career changes and growth",
        price: "₹2,000",
        sanskrit: "करियर मार्गदर्शन"
      }
    ]
  },
  {
    category: "Marriage & Relationships",
    icon: "🪷",
    items: [
      {
        name: "Kundli Matching",
        description: "Comprehensive compatibility analysis for marriage with Guna Milan",
        price: "₹1,500",
        sanskrit: "कुंडली मिलान"
      },
      {
        name: "Relationship Counseling",
        description: "Astrological guidance for improving existing relationships",
        price: "₹2,000",
        sanskrit: "संबंध परामर्श"
      },
      {
        name: "Marriage Timing",
        description: "Auspicious timing prediction for marriage and engagement",
        price: "₹1,800",
        sanskrit: "विवाह मुहूर्त"
      }
    ]
  },
  {
    category: "Spiritual & Remedial",
    icon: "🐚",
    items: [
      {
        name: "Vastu Consultation",
        description: "Home and office Vastu analysis with correction suggestions",
        price: "₹3,000",
        sanskrit: "वास्तु परामर्श"
      },
      {
        name: "Gemstone Recommendation",
        description: "Personalized gemstone selection for planetary strengthening",
        price: "₹1,200",
        sanskrit: "रत्न सुझाव"
      },
      {
        name: "Puja & Remedies",
        description: "Customized spiritual remedies and puja recommendations",
        price: "₹2,500",
        sanskrit: "पूजा और उपाय"
      }
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Sacred Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our comprehensive range of Vedic astrology services, each blessed with divine wisdom
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search services..." 
              className="pl-10 border-saffron/30 focus:border-saffron"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-deep-blue">
                  {category.category}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service, serviceIndex) => (
                  <Card 
                    key={serviceIndex}
                    className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-gold/30"
                  >
                    <CardHeader>
                      <CardTitle className="font-cinzel text-xl text-deep-blue mb-2">
                        {service.name}
                      </CardTitle>
                      <div className="text-center mb-2">
                        <span className="text-saffron font-medium">{service.sanskrit}</span>
                      </div>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-deep-blue">{service.price}</span>
                        <Button className="bg-saffron hover:bg-saffron/90 text-deep-blue font-semibold">
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-deep-blue to-deep-blue/90 rounded-2xl p-12">
          <h3 className="font-cinzel text-3xl font-bold text-gold mb-4">
            Need Custom Guidance?
          </h3>
          <p className="text-cream mb-6 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? Our experienced astrologers can create a personalized consultation plan just for you.
          </p>
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-deep-blue font-bold">
            Contact Our Astrologers
          </Button>
        </div>
      </div>
    </div>
  )
}
