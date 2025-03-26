import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0B1121]">
      <Header />
      
      {/* Modern background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121] via-[#0F172A] to-[#1E293B]" />
        
        {/* Animated shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-1/2 left-0 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-1/2 left-1/2 w-96 h-96 bg-cyan-400/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      {/* Content sections with modern spacing */}
      <div className="relative">
        <HeroSection />
        <div className="relative">
          <FeaturesSection />
          {/* <HowItWorks /> */}
          {/* <Testimonials /> */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
