import { HeroSection } from '../components/landing/HeroSection';
import { FeaturesSection } from '../components/landing/FeaturesSection';
import { ImageShowcase } from '@/components/landing/ImageShowcase';
import { PartnersTestimonials } from '@/components/landing/PartnersTestimonials';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '../components/landing/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-l from-cameroon-sun/10 to-transparent" />
        <div className="absolute top-0 left-0 w-1/3 h-screen bg-gradient-to-r from-cameroon-forest/10 to-transparent" />
      </div>

      {/* Content sections */}
      <div className="relative">
        <HeroSection />
        <FeaturesSection />
        <ImageShowcase />
        <PartnersTestimonials />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
