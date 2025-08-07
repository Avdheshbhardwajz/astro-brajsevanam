import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AstrologerSection() {
  return (
    <section className="py-24 marigold-section">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-vrindavan-blue mb-8">
              Your Humble Sevak
            </h2>
            <div className="sanskrit-text text-vrindavan-blue mb-4">
              आपका विनम्र सेवक
            </div>
            <p className="text-vrindavan-blue/80 text-xl leading-relaxed max-w-3xl mx-auto">
              Guided by the divine grace of Radha Rani from the sacred land of Vrindavan
            </p>
          </div>

          <Card className="seva-card max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-4 right-4 text-3xl opacity-60">🦚</div>
            <CardContent className="p-16">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="relative">
                  <div className="w-48 h-48 bg-vrindavan-gradient rounded-full flex items-center justify-center text-8xl animate-divine-glow">
                    🧙‍♂️
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-marigold rounded-full flex items-center justify-center text-2xl">
                    🪷
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="font-playfair text-3xl font-bold text-vrindavan-blue mb-4">
                    Pandit Radheshyam Sharma
                  </h3>
                  <div className="sanskrit-text text-vrindavan-blue mb-6">
                    पंडित राधेश्याम शर्मा
                  </div>
                  
                  <p className="text-vrindavan-blue/80 text-lg leading-relaxed mb-8">
                    With 25+ years of devotion to Vedic astrology, I offer free spiritual guidance 
                    as seva to all souls seeking divine direction. Every consultation is blessed 
                    by Radha Rani's grace and offered with complete humility and love.
                  </p>

                  {/* Divine Quote */}
                  <div className="bg-vrindavan-blue/5 rounded-2xl p-6 mb-8 border-l-4 border-divine-gold">
                    <p className="sanskrit-text text-vrindavan-blue text-lg mb-2">
                      "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
                    </p>
                    <p className="text-vrindavan-blue/70 text-sm italic">
                      "May all beings be happy, may all beings be free from suffering"
                    </p>
                  </div>

                  <Button className="seva-button text-xl">
                    🎵 Book Free Session with Panditji
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="lotus-divider"></div>
    </section>
  )
}
