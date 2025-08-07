const features = [
  {
    icon: "📿",
    title: "Vedic Expertise",
    description: "Authentic knowledge passed down through generations of learned astrologers",
    sanskrit: "वैदिक ज्ञान"
  },
  {
    icon: "🙏",
    title: "Personalized Guidance",
    description: "Individual attention and customized solutions for your unique spiritual journey",
    sanskrit: "व्यक्तिगत मार्गदर्शन"
  },
  {
    icon: "✨",
    title: "Divine Insights",
    description: "Revelations blessed by the divine grace of Lord Krishna and Radha Rani",
    sanskrit: "दिव्य दृष्टि"
  },
  {
    icon: "🕉️",
    title: "Trusted Astrologers",
    description: "Experienced practitioners devoted to serving with compassion and wisdom",
    sanskrit: "विश्वसनीय ज्योतिषी"
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-r from-cream via-saffron/10 to-cream mandala-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Why Choose Braj Jyotish
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the divine difference of authentic Vedic astrology rooted in the sacred traditions of Braj
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border-4 border-gold/20 group-hover:border-gold/50">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
              </div>
              <h3 className="font-cinzel text-xl font-bold text-deep-blue mb-2">
                {feature.title}
              </h3>
              <div className="mb-3">
                <span className="text-saffron font-medium">{feature.sanskrit}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
