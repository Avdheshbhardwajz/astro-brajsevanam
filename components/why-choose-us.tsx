const features = [
  {
    icon: "📿",
    title: "Vedic Expertise",
    description: "Authentic knowledge passed down through generations of learned astrologers",
    sanskrit: "वैदिक ज्ञान"
  },
  {
    icon: "✨",
    title: "Divine Insights",
    description: "Revelations blessed by the divine grace of Lord Krishna and Radha Rani",
    sanskrit: "दिव्य दृष्टि"
  },
  {
    icon: "🕉️",
    title: "Trusted Guidance",
    description: "Experienced practitioners devoted to serving with compassion and wisdom",
    sanskrit: "विश्वसनीय मार्गदर्शन"
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-soft-cream/50 subtle-pattern">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-deep-blue mb-6">
            Why Choose Braj Jyotish
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the divine difference of authentic Vedic astrology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-8 bg-white rounded-full flex items-center justify-center border-4 border-premium-gold/20">
                <span className="text-5xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-deep-blue mb-4">
                {feature.title}
              </h3>
              <div className="mb-4">
                <span className="text-saffron font-medium text-lg tracking-wide">{feature.sanskrit}</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
