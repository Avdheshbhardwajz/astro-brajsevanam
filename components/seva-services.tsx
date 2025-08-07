import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sevaServices = [
  {
    title: "Vedic Astrology Guidance",
    description: "Free birth chart reading and life guidance based on ancient Vedic principles, offered with devotion and care for your spiritual journey.",
    sanskrit: "ज्योतिष मार्गदर्शन",
    icon: "🎵",
    cardType: "seva-card-peacock",
    accent: "flute-accent"
  },
  {
    title: "Spiritual Counseling",
    description: "Heart-to-heart spiritual discussions to help navigate life's challenges with divine wisdom, inner peace, and Radha Rani's blessings.",
    sanskrit: "आध्यात्मिक परामर्श",
    icon: "🪷",
    cardType: "seva-card-marigold",
    accent: "lotus-accent"
  },
  {
    title: "Life Direction Seva",
    description: "Compassionate guidance for important life decisions, career choices, and spiritual growth through divine insight and Krishna consciousness.",
    sanskrit: "जीवन दिशा सेवा",
    icon: "🦚",
    cardType: "seva-card-radha",
    accent: "peacock-accent"
  }
]

export function SevaServices() {
  return (
    <section className="py-24 bg-temple-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-vrindavan-blue mb-8">
            Free Seva Offerings
          </h2>
          <div className="sanskrit-text text-vrindavan-blue mb-6">
            निःशुल्क सेवा प्रसाद
          </div>
          <p className="text-vrindavan-blue/80 text-xl max-w-3xl mx-auto leading-relaxed">
            All guidance is offered freely as seva, blessed by Radha Rani's divine grace from sacred Vrindavan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {sevaServices.map((service, index) => (
            <Card key={index} className={`seva-card ${service.cardType} text-center relative ${service.accent}`}>
              <CardHeader className="pb-6">
                <div className="text-7xl mb-6">
                  {service.icon}
                </div>
                <CardTitle className="font-playfair text-2xl text-vrindavan-blue mb-4">
                  {service.title}
                </CardTitle>
                <div className="sanskrit-text text-vrindavan-blue">
                  {service.sanskrit}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-vrindavan-blue/80 leading-relaxed text-lg">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Divine Seva Reminder */}
        <div className="text-center mt-16">
          <div className="bg-vrindavan-gradient rounded-3xl p-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <span className="text-5xl mr-4">🪷</span>
              <h3 className="text-divine-gold font-playfair text-3xl font-bold">Divine Seva</h3>
              <span className="text-5xl ml-4">🪷</span>
            </div>
            <p className="text-temple-white text-xl mb-4 font-medium">
              Remember: All services are completely free
            </p>
            <p className="text-cream-gold text-lg">
              This is seva offered with love and devotion. No payment, donation, or exchange expected.
            </p>
            <div className="sanskrit-text text-divine-gold text-xl mt-6">
              राधे राधे 🙏
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
