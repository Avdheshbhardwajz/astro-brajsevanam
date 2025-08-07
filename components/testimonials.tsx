"use client"

import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-deep-blue mb-6">
            Client Experience
          </h2>
          <div className="mt-6">
            <span className="text-saffron font-medium text-lg tracking-wide">प्रशंसापत्र</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-deep-blue rounded-3xl overflow-hidden">
            <CardContent className="p-16 text-center">
              <div className="mb-8">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-premium-gold text-2xl">★</span>
                  ))}
                </div>
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-white mb-12 leading-relaxed font-light">
                "The horoscope reading was incredibly accurate and provided deep insights into my life path. 
                The spiritual guidance has transformed my perspective completely."
              </blockquote>
              
              <div className="mb-6">
                <span className="text-premium-gold font-medium text-xl tracking-wide">
                  अत्यंत सटीक
                </span>
                <p className="text-soft-cream/80 text-sm mt-1">Extremely Accurate</p>
              </div>
              
              <div className="text-white font-semibold text-xl">
                Priya Sharma
              </div>
              <div className="text-soft-cream/80 text-lg">
                Delhi
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
