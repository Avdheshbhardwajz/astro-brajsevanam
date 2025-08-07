import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Connect With Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Reach out to our divine team for guidance, consultations, or any questions about your spiritual journey
          </p>
          <div className="mt-4">
            <span className="text-saffron font-medium text-lg">संपर्क करें</span>
            <span className="text-gray-500 text-sm ml-2">Contact Us</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-gold/30">
              <CardHeader className="bg-gradient-to-r from-saffron/10 to-gold/10">
                <CardTitle className="font-cinzel text-2xl text-deep-blue">
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
                <div className="mt-2">
                  <span className="text-saffron font-medium">संदेश भेजें</span>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <select 
                      id="subject" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:border-saffron focus:ring-1 focus:ring-saffron"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="consultation">Book a Consultation</option>
                      <option value="horoscope">Horoscope Reading</option>
                      <option value="kundli">Kundli Matching</option>
                      <option value="vastu">Vastu Consultation</option>
                      <option value="gemstone">Gemstone Guidance</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your inquiry or questions in detail..."
                      className="min-h-32"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="birthDetails">Birth Details (Optional)</Label>
                    <Textarea 
                      id="birthDetails" 
                      placeholder="Date, time, and place of birth (if relevant to your inquiry)"
                      className="min-h-20"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gold hover:bg-gold/90 text-deep-blue font-bold py-3 text-lg spiritual-glow"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="font-cinzel text-xl text-deep-blue">
                  Contact Information
                </CardTitle>
                <div className="text-saffron font-medium">संपर्क विवरण</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-saffron" />
                  <div>
                    <p className="font-semibold text-deep-blue">Phone</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-saffron" />
                  <div>
                    <p className="font-semibold text-deep-blue">Email</p>
                    <p className="text-gray-600">info@brajjyotish.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-saffron" />
                  <div>
                    <p className="font-semibold text-deep-blue">WhatsApp</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-saffron" />
                  <div>
                    <p className="font-semibold text-deep-blue">Address</p>
                    <p className="text-gray-600">
                      Vrindavan Dham<br />
                      Mathura, Uttar Pradesh<br />
                      India - 281121
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="font-cinzel text-xl text-deep-blue">
                  Office Hours
                </CardTitle>
                <div className="text-saffron font-medium">कार्यालय समय</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-saffron" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-semibold text-deep-blue">Monday - Friday</span>
                      <span className="text-gray-600">9:00 AM - 7:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-saffron" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-semibold text-deep-blue">Saturday</span>
                      <span className="text-gray-600">10:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-saffron" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-semibold text-deep-blue">Sunday</span>
                      <span className="text-gray-600">11:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-lotus-pink/10 rounded-lg">
                  <p className="text-sm text-deep-blue">
                    <strong>Note:</strong> Emergency consultations available 24/7 for urgent matters.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Live Chat */}
            <Card className="bg-gradient-to-br from-deep-blue to-deep-blue/90 text-cream">
              <CardHeader>
                <CardTitle className="font-cinzel text-xl text-gold">
                  Live Chat Support
                </CardTitle>
                <div className="text-gold font-medium">तत्काल सहायता</div>
              </CardHeader>
              <CardContent>
                <p className="text-cream/90 mb-4">
                  Need immediate assistance? Our spiritual advisors are available for live chat support.
                </p>
                <Button className="w-full bg-gold hover:bg-gold/90 text-deep-blue font-semibold">
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="font-cinzel text-2xl text-deep-blue">
                Visit Our Sacred Location
              </CardTitle>
              <CardDescription>
                Located in the holy city of Vrindavan, where divine energy flows eternally
              </CardDescription>
              <div className="mt-2">
                <span className="text-saffron font-medium">हमारा पवित्र स्थान</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-saffron mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Vrindavan, Mathura, Uttar Pradesh</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
