"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const zodiacSigns = [
  { name: "Aries", sanskrit: "मेष", symbol: "♈", dates: "Mar 21 - Apr 19", element: "Fire" },
  { name: "Taurus", sanskrit: "वृषभ", symbol: "♉", dates: "Apr 20 - May 20", element: "Earth" },
  { name: "Gemini", sanskrit: "मिथुन", symbol: "♊", dates: "May 21 - Jun 20", element: "Air" },
  { name: "Cancer", sanskrit: "कर्क", symbol: "♋", dates: "Jun 21 - Jul 22", element: "Water" },
  { name: "Leo", sanskrit: "सिंह", symbol: "♌", dates: "Jul 23 - Aug 22", element: "Fire" },
  { name: "Virgo", sanskrit: "कन्या", symbol: "♍", dates: "Aug 23 - Sep 22", element: "Earth" },
  { name: "Libra", sanskrit: "तुला", symbol: "♎", dates: "Sep 23 - Oct 22", element: "Air" },
  { name: "Scorpio", sanskrit: "वृश्चिक", symbol: "♏", dates: "Oct 23 - Nov 21", element: "Water" },
  { name: "Sagittarius", sanskrit: "धनु", symbol: "♐", dates: "Nov 22 - Dec 21", element: "Fire" },
  { name: "Capricorn", sanskrit: "मकर", symbol: "♑", dates: "Dec 22 - Jan 19", element: "Earth" },
  { name: "Aquarius", sanskrit: "कुंभ", symbol: "♒", dates: "Jan 20 - Feb 18", element: "Air" },
  { name: "Pisces", sanskrit: "मीन", symbol: "♓", dates: "Feb 19 - Mar 20", element: "Water" }
]

const horoscopeContent = {
  love: "Venus blesses your romantic endeavors this month. Single souls may find their divine counterpart, while couples experience deeper spiritual connection.",
  career: "Jupiter's favorable position brings opportunities for growth. Trust your intuition and take calculated risks in professional matters.",
  health: "Mars energizes your physical body. Focus on yoga and meditation to balance your spiritual and physical well-being.",
  wealth: "Mercury enhances your financial wisdom. Investments made with proper consultation will yield positive results."
}

export default function HoroscopePage() {
  const [selectedSign, setSelectedSign] = useState(zodiacSigns[0])

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Divine Horoscope
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Discover what the stars have in store for you with our authentic Vedic horoscope readings
          </p>
          <div className="mt-4">
            <span className="text-saffron font-medium text-lg">राशिफल</span>
            <span className="text-gray-500 text-sm ml-2">Horoscope</span>
          </div>
        </div>

        {/* Zodiac Selector */}
        <div className="mb-12">
          <h2 className="font-cinzel text-2xl font-bold text-deep-blue mb-6 text-center">
            Select Your Zodiac Sign
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {zodiacSigns.map((sign, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedSign.name === sign.name 
                    ? 'border-2 border-saffron bg-saffron/10' 
                    : 'border border-gray-200 hover:border-saffron/50'
                }`}
                onClick={() => setSelectedSign(sign)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{sign.symbol}</div>
                  <div className="font-semibold text-deep-blue">{sign.name}</div>
                  <div className="text-saffron text-sm font-medium">{sign.sanskrit}</div>
                  <div className="text-xs text-gray-500 mt-1">{sign.dates}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Horoscope Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="border-2 border-gold/30">
              <CardHeader className="text-center bg-gradient-to-r from-saffron/10 to-gold/10">
                <div className="text-6xl mb-4">{selectedSign.symbol}</div>
                <CardTitle className="font-cinzel text-3xl text-deep-blue">
                  {selectedSign.name}
                </CardTitle>
                <div className="text-saffron font-medium text-lg">{selectedSign.sanskrit}</div>
                <CardDescription className="text-gray-600">
                  {selectedSign.dates} • {selectedSign.element} Element
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="love" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="love" className="text-sm">💕 Love</TabsTrigger>
                    <TabsTrigger value="career" className="text-sm">💼 Career</TabsTrigger>
                    <TabsTrigger value="health" className="text-sm">🌿 Health</TabsTrigger>
                    <TabsTrigger value="wealth" className="text-sm">💰 Wealth</TabsTrigger>
                  </TabsList>
                  <TabsContent value="love" className="mt-6">
                    <div className="space-y-4">
                      <h3 className="font-cinzel text-xl font-bold text-deep-blue flex items-center">
                        💕 Love & Relationships
                        <span className="ml-2 text-saffron text-sm">प्रेम</span>
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{horoscopeContent.love}</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="career" className="mt-6">
                    <div className="space-y-4">
                      <h3 className="font-cinzel text-xl font-bold text-deep-blue flex items-center">
                        💼 Career & Success
                        <span className="ml-2 text-saffron text-sm">करियर</span>
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{horoscopeContent.career}</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="health" className="mt-6">
                    <div className="space-y-4">
                      <h3 className="font-cinzel text-xl font-bold text-deep-blue flex items-center">
                        🌿 Health & Wellness
                        <span className="ml-2 text-saffron text-sm">स्वास्थ्य</span>
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{horoscopeContent.health}</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="wealth" className="mt-6">
                    <div className="space-y-4">
                      <h3 className="font-cinzel text-xl font-bold text-deep-blue flex items-center">
                        💰 Wealth & Finance
                        <span className="ml-2 text-saffron text-sm">धन</span>
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{horoscopeContent.wealth}</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-b from-deep-blue to-deep-blue/90 text-cream">
              <CardHeader>
                <CardTitle className="font-cinzel text-xl text-gold">
                  Today's Cosmic Energy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Lucky Number:</span>
                    <span className="text-gold font-bold">7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lucky Color:</span>
                    <span className="text-gold font-bold">Saffron</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lucky Direction:</span>
                    <span className="text-gold font-bold">East</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Favorable Time:</span>
                    <span className="text-gold font-bold">6-8 AM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-cinzel text-xl text-deep-blue">
                  Planetary Positions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Sun (सूर्य):</span>
                    <span className="text-saffron">Favorable</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moon (चंद्र):</span>
                    <span className="text-emerald-500">Strong</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mars (मंगल):</span>
                    <span className="text-yellow-500">Neutral</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mercury (बुध):</span>
                    <span className="text-saffron">Favorable</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jupiter (गुरु):</span>
                    <span className="text-emerald-500">Excellent</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Personalized Horoscope Form */}
        <Card className="border-2 border-gold/30">
          <CardHeader className="text-center bg-gradient-to-r from-saffron/10 to-gold/10">
            <CardTitle className="font-cinzel text-2xl text-deep-blue">
              Get Your Personalized Horoscope
            </CardTitle>
            <CardDescription>
              Enter your birth details for a detailed Vedic astrology reading
            </CardDescription>
            <div className="mt-2">
              <span className="text-saffron font-medium">व्यक्तिगत कुंडली</span>
              <span className="text-gray-500 text-sm ml-2">Personal Horoscope</span>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date of Birth</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Time of Birth</Label>
                <Input id="time" type="time" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="place">Place of Birth</Label>
                <Input id="place" placeholder="City, State, Country" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <select id="gender" className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-gold hover:bg-gold/90 text-deep-blue font-bold spiritual-glow">
                  Generate Horoscope
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
