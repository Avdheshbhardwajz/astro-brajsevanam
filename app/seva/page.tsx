import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SevaPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-soft-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl font-semibold text-deep-blue mb-6">
              About Our Seva
            </h1>
            <p className="text-text-gray text-xl leading-relaxed">
              Understanding the spirit of free spiritual service
            </p>
            <div className="mt-4">
              <span className="text-gentle-gold font-medium text-lg">सेवा भावना</span>
            </div>
          </div>

          <div className="space-y-12">
            <Card className="seva-card">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-deep-blue text-center">
                  What is Seva?
                </CardTitle>
                <div className="text-center text-gentle-gold font-medium">
                  सेवा क्या है?
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-text-gray text-lg leading-relaxed">
                  Seva means selfless service offered without expectation of return. 
                  In the tradition of Braj, seva is the highest form of devotion, 
                  where we serve others as manifestations of the divine.
                </p>
              </CardContent>
            </Card>

            <Card className="seva-card">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-deep-blue text-center">
                  Why Free Guidance?
                </CardTitle>
                <div className="text-center text-gentle-gold font-medium">
                  निःशुल्क क्यों?
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-text-gray text-lg leading-relaxed">
                  Divine knowledge belongs to all souls. By Radha Rani's grace, 
                  this wisdom flows freely to those who seek it with sincere hearts. 
                  No soul should be denied spiritual guidance due to material constraints.
                </p>
              </CardContent>
            </Card>

            <Card className="seva-card">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-deep-blue text-center">
                  Our Promise
                </CardTitle>
                <div className="text-center text-gentle-gold font-medium">
                  हमारा वादा
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-text-gray text-lg leading-relaxed mb-6">
                  Every consultation is offered with complete sincerity, devotion, and care. 
                  We serve with humility, knowing that all wisdom comes from the divine source.
                </p>
                <div className="bg-gentle-gold/10 rounded-lg p-6">
                  <p className="text-deep-blue font-medium">
                    "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
                  </p>
                  <p className="text-text-gray text-sm mt-2">
                    May all beings be happy, may all beings be free from illness
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button className="seva-button text-lg px-12 py-6">
              Request Free Guidance
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
