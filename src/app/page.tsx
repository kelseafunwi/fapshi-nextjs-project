import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { ImageShowcase } from '@/components/landing/ImageShowcase';
import { Testimonials } from '@/components/landing/Testimonials';
import { Partners } from '@/components/landing/Partners';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-500/10 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-blue-500/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <ImageShowcase />
        <Testimonials />
        <Partners />
        <Footer />
      </div>
    </main>
  );
}
