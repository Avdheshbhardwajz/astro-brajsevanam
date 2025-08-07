import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const teamMembers = [
  {
    name: "Pandit Radheshyam Sharma",
    role: "Chief Astrologer & Founder",
    image: "🧙‍♂️",
    bio: "With over 25 years of experience in Vedic astrology, Pandit Sharma has guided thousands on their spiritual journey.",
    specialization: "Vedic Astrology, Kundli Matching",
    sanskrit: "मुख्य ज्योतिषी"
  },
  {
    name: "Mata Vrinda Devi",
    role: "Spiritual Healer",
    image: "👩‍🦳",
    bio: "A devoted practitioner of ancient healing arts, specializing in gemstone therapy and spiritual remedies.",
    specialization: "Gemstone Therapy, Spiritual Healing",
    sanskrit: "आध्यात्मिक चिकित्सक"
  },
  {
    name: "Acharya Krishna Das",
    role: "Vastu Consultant",
    image: "🧔‍♂️",
    bio: "Expert in Vastu Shastra and sacred architecture, helping create harmonious living spaces.",
    specialization: "Vastu Shastra, Sacred Architecture",
    sanskrit: "वास्तु सलाहकार"
  },
  {
    name: "Pandit Govind Sharma",
    role: "Remedial Astrologer",
    image: "👨‍🦲",
    bio: "Specializes in planetary remedies and mantras, providing practical solutions for life's challenges.",
    specialization: "Remedial Astrology, Mantras",
    sanskrit: "उपचारात्मक ज्योतिषी"
  }
]

const values = [
  {
    icon: "🕉️",
    title: "Authenticity",
    description: "We preserve and practice the pure traditions of Vedic astrology as passed down through generations.",
    sanskrit: "प्रामाणिकता"
  },
  {
    icon: "✨",
    title: "Divinity",
    description: "Every consultation is blessed with divine grace, connecting you to the cosmic consciousness.",
    sanskrit: "दिव्यता"
  },
  {
    icon: "🙏",
    title: "Compassion",
    description: "We serve with love and understanding, treating each soul as a divine manifestation.",
    sanskrit: "करुणा"
  },
  {
    icon: "📿",
    title: "Wisdom",
    description: "Ancient knowledge combined with intuitive insights to provide meaningful guidance.",
    sanskrit: "ज्ञान"
  }
]

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            About Braj Jyotish
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Rooted in the sacred traditions of Braj, we bring authentic Vedic wisdom to guide your spiritual journey
          </p>
          <div className="mt-4">
            <span className="text-saffron font-medium text-lg">हमारे बारे में</span>
            <span className="text-gray-500 text-sm ml-2">About Us</span>
          </div>
        </div>

        {/* Our Story */}
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/vrindavan-radha-krishna-divine.png"
              alt="Vrindavan Divine Atmosphere"
              width={1200}
              height={500}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/80 to-deep-blue/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gold mb-6">
                  Our Divine Story
                </h2>
                <div className="mb-4">
                  <span className="text-gold font-medium text-lg">हमारी दिव्य कहानी</span>
                </div>
                <p className="text-cream text-lg leading-relaxed">
                  Born in the sacred land of Braj, where Lord Krishna played his divine leela, 
                  Braj Jyotish was founded with the vision of bringing authentic Vedic wisdom to seekers worldwide. 
                  Our journey began in the holy city of Vrindavan, where ancient sages first received 
                  the divine knowledge of Jyotish Shastra through meditation and devotion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-saffron/30 bg-gradient-to-br from-saffron/5 to-gold/5">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle className="font-cinzel text-2xl text-deep-blue">Our Mission</CardTitle>
                <div className="text-saffron font-medium">हमारा मिशन</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-center">
                  To illuminate the path of every soul through authentic Vedic astrology, 
                  helping individuals discover their divine purpose and navigate life's journey 
                  with wisdom, compassion, and spiritual insight.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-lotus-pink/30 bg-gradient-to-br from-lotus-pink/5 to-cream/5">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">👁️</div>
                <CardTitle className="font-cinzel text-2xl text-deep-blue">Our Vision</CardTitle>
                <div className="text-saffron font-medium">हमारा दृष्टिकोण</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-center">
                  To create a world where ancient wisdom meets modern understanding, 
                  where every individual can access the transformative power of Vedic knowledge 
                  and live in harmony with cosmic consciousness.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              Our Sacred Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our service and devotion to the divine science of astrology
            </p>
            <div className="mt-4">
              <span className="text-saffron font-medium">हमारे मूल्य</span>
              <span className="text-gray-500 text-sm ml-2">Our Values</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <CardTitle className="font-cinzel text-xl text-deep-blue">
                    {value.title}
                  </CardTitle>
                  <div className="text-saffron font-medium">{value.sanskrit}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              Our Divine Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our experienced astrologers and spiritual guides dedicated to serving with wisdom and compassion
            </p>
            <div className="mt-4">
              <span className="text-saffron font-medium">हमारी टीम</span>
              <span className="text-gray-500 text-sm ml-2">Our Team</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-deep-blue rounded-full flex items-center justify-center text-4xl">
                      {member.image}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-cinzel text-xl text-deep-blue mb-1">
                        {member.name}
                      </CardTitle>
                      <p className="text-saffron font-medium mb-1">{member.role}</p>
                      <p className="text-gray-500 text-sm">{member.sanskrit}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 leading-relaxed mb-4">
                    {member.bio}
                  </CardDescription>
                  <div className="bg-cream/50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-deep-blue mb-1">Specialization:</p>
                    <p className="text-sm text-gray-600">{member.specialization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-deep-blue to-deep-blue/90 rounded-2xl p-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-cinzel text-3xl font-bold text-gold mb-4">
              Begin Your Spiritual Journey
            </h3>
            <div className="mb-4">
              <span className="text-gold font-medium">अपनी आध्यात्मिक यात्रा शुरू करें</span>
            </div>
            <p className="text-cream text-lg mb-8 leading-relaxed">
              Let the divine wisdom of Braj guide you towards a life of purpose, prosperity, and spiritual fulfillment. 
              Our experienced astrologers are here to illuminate your path with authentic Vedic insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold hover:bg-gold/90 text-deep-blue font-bold px-8 py-3 rounded-lg text-lg spiritual-glow">
                Book Your Consultation
              </button>
              <button className="border-2 border-gold text-gold hover:bg-gold hover:text-deep-blue px-8 py-3 rounded-lg text-lg transition-colors">
                Explore Our Services
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
