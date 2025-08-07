import { HeroSection } from "@/components/hero-section"
import { FeaturedServices } from "@/components/featured-services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { CTABanner } from "@/components/cta-banner"

export default function HomePage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturedServices />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </div>
  )
}
