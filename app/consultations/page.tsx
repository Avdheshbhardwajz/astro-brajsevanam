import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video, Phone, MessageCircle, Star } from 'lucide-react'

const astrologers = [
  {
    name: "Pandit Radheshyam Sharma",
    image: "🧙‍♂️",
    expertise: ["Vedic Astrology", "Kundli Matching", "Vastu"],
    experience: "25+ Years",
    rating: 4.9,
    reviews: 1250,
    languages: ["Hindi", "English", "Sanskrit"],
    specialization: "Marriage & Career Guidance",
    price: "₹150/min"
  },
  {
    name: "Mata Vrinda Devi",
    image: "👩‍🦳",
    expertise: ["Spiritual Healing", "Gemstone Therapy", "Remedies"],
    experience: "20+ Years",
    rating: 4.8,
    reviews: 980,
    languages: ["Hindi", "English"],
    specialization: "Health & Spiritual Growth",
    price: "₹120/min"
  },
  {
    name: "Acharya Krishna Das",
    image: "🧔‍♂️",
    expertise: ["Prashna Shastra", "Muhurat", "Numerology"],
    experience: "18+ Years",
    rating: 4.9,
    reviews: 750,
    languages: ["Hindi", "English", "Bengali"],
    specialization: "Business & Finance",
    price: "₹180/min"
  },
  {
    name: "Pandit Govind Sharma",
    image: "👨‍🦲",
    expertise: ["Palmistry", "Face Reading", "Tarot"],
    experience: "15+ Years",
    rating: 4.7,
    reviews: 650,
    languages: ["Hindi", "English"],
    specialization: "Love & Relationships",
    price: "₹100/min"
  }
]

const consultationTypes = [
  {
    icon: <Video className="h-6 w-6" />,
    name: "Video Call",
    description: "Face-to-face consultation with screen sharing",
    duration: "30-60 minutes",
    popular: true
  },
  {
    icon: <Phone className="h-6 w-6" />,
    name: "Voice Call",
    description: "Audio consultation for detailed discussion",
    duration: "30-60 minutes",
    popular: false
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    name: "Chat Session",
    description: "Text-based consultation with instant responses",
    duration: "45 minutes",
    popular: false
  }
]

export default function ConsultationsPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Divine Consultations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Connect with our experienced astrologers for personalized guidance and spiritual insights
          </p>
          <div className="mt-4">
            <span className="text-saffron font-medium text-lg">परामर्श</span>
            <span className="text-gray-500 text-sm ml-2">Consultation</span>
          </div>
        </div>

        {/* Consultation Types */}
        <div className="mb-16">
          <h2 className="font-cinzel text-2xl font-bold text-deep-blue mb-8 text-center">
            Choose Your Consultation Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {consultationTypes.map((type, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-lg transition-all duration-300 ${
                  type.popular ? 'border-2 border-gold' : 'border border-gray-200'
                }`}
              >
                {type.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gold text-deep-blue">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-saffron/10 rounded-full flex items-center justify-center text-saffron">
                    {type.icon}
                  </div>
                  <CardTitle className="font-cinzel text-xl text-deep-blue">
                    {type.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    {type.description}
                  </CardDescription>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{type.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Astrologers Grid */}
        <div className="mb-16">
          <h2 className="font-cinzel text-2xl font-bold text-deep-blue mb-8 text-center">
            Our Divine Astrologers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {astrologers.map((astrologer, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-deep-blue rounded-full flex items-center justify-center text-4xl">
                      {astrologer.image}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-cinzel text-xl text-deep-blue mb-2">
                        {astrologer.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="h-4 w-4 text-gold fill-current" />
                        <span className="font-semibold">{astrologer.rating}</span>
                        <span className="text-gray-500">({astrologer.reviews} reviews)</span>
                      </div>
                      <p className="text-saffron font-medium">{astrologer.specialization}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-deep-blue mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {astrologer.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-lotus-pink/20 text-deep-blue">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>Experience: {astrologer.experience}</span>
                      <span>Languages: {astrologer.languages.join(", ")}</span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-xl font-bold text-deep-blue">{astrologer.price}</span>
                      <Button className="bg-deep-blue hover:bg-deep-blue/90 text-white">
                        Book Session
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Booking Process */}
        <div className="bg-gradient-to-r from-deep-blue to-deep-blue/90 rounded-2xl p-12 text-center">
          <h3 className="font-cinzel text-3xl font-bold text-gold mb-6">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-cream">
            <div>
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-deep-blue text-2xl font-bold">
                1
              </div>
              <h4 className="font-semibold mb-2">Choose Your Astrologer</h4>
              <p className="text-cream/80">Select from our experienced panel of Vedic astrologers</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-deep-blue text-2xl font-bold">
                2
              </div>
              <h4 className="font-semibold mb-2">Book Your Session</h4>
              <p className="text-cream/80">Pick your preferred time and consultation method</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-deep-blue text-2xl font-bold">
                3
              </div>
              <h4 className="font-semibold mb-2">Get Divine Guidance</h4>
              <p className="text-cream/80">Receive personalized insights and spiritual guidance</p>
            </div>
          </div>
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-deep-blue font-bold mt-8">
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  )
}
