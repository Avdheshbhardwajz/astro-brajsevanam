"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "The horoscope reading was incredibly accurate and provided deep insights into my life path. The spiritual guidance has transformed my perspective completely.",
    sanskrit: "अत्यंत सटीक",
    translation: "Extremely Accurate"
  },
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5,
    text: "Kundli matching service helped us find the perfect life partner. The astrologer's wisdom and compassionate guidance made all the difference.",
    sanskrit: "दिव्य मार्गदर्शन",
    translation: "Divine Guidance"
  },
  {
    name: "Anita Devi",
    location: "Vrindavan",
    rating: 5,
    text: "The Vastu consultation brought peace and prosperity to our home. We can feel the positive energy flowing through every corner now.",
    sanskrit: "शांति और समृद्धि",
    translation: "Peace and Prosperity"
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 5,
    text: "Gemstone recommendations have brought remarkable positive changes in my career and health. Truly blessed by this divine knowledge.",
    sanskrit: "आशीर्वाद",
    translation: "Blessings"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🪷</div>
        <div className="absolute bottom-10 right-10 text-8xl">🦚</div>
        <div className="absolute top-1/2 left-1/4 text-6xl">ॐ</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Divine Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our blessed devotees who have experienced the transformative power of Vedic wisdom
          </p>
          <div className="mt-4">
            <span className="text-saffron font-medium">प्रशंसापत्र</span>
            <span className="text-gray-500 text-sm ml-2">Testimonials</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-cream border-2 border-lotus-pink/30 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold text-2xl font-bold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-gold text-xl">⭐</span>
                  ))}
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="mb-4">
                <span className="text-saffron font-medium text-lg">
                  {testimonials[currentIndex].sanskrit}
                </span>
                <p className="text-gray-500 text-sm">{testimonials[currentIndex].translation}</p>
              </div>
              
              <div className="text-deep-blue font-semibold">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-gray-500">
                {testimonials[currentIndex].location}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-gold/30"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-gold/30"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-saffron' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
