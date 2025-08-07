import { HeroSection } from "@/components/hero-section"
import { AstrologerSection } from "@/components/astrologer-section"
import { SevaServices } from "@/components/seva-services"
import { BookingSection } from "@/components/booking-section"

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <AstrologerSection />
      <SevaServices />
      <BookingSection />
    </div>
  )
}
