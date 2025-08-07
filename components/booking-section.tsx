import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function BookingSection() {
  return (
    <section className="py-20 bg-clean-cream/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-semibold text-deep-blue mb-6">
              Request Free Guidance
            </h2>
            <p className="text-text-gray text-lg leading-relaxed">
              Share your query and we'll arrange a free spiritual guidance session
            </p>
            <div className="mt-4">
              <span className="text-gentle-gold font-medium">निःशुल्क मार्गदर्शन</span>
            </div>
          </div>

          <Card className="seva-card">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="query">Your Query or Concern *</Label>
                  <Textarea 
                    id="query" 
                    placeholder="Please share what guidance you're seeking..."
                    className="min-h-32"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthDetails">Birth Details (Optional)</Label>
                  <Textarea 
                    id="birthDetails" 
                    placeholder="Date, time, and place of birth (if relevant)"
                    className="min-h-20"
                  />
                </div>

                <div className="bg-gentle-gold/10 rounded-lg p-4">
                  <p className="text-deep-blue font-medium text-sm mb-1">
                    Free Seva Notice:
                  </p>
                  <p className="text-text-gray text-sm">
                    All appointments are offered freely as seva. No payment or donation required. 
                    This is divine service blessed by Radha Rani's grace.
                  </p>
                </div>

                <Button className="seva-button w-full text-lg py-4">
                  Request Free Session
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
