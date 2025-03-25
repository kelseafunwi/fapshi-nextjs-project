"use client"

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import Image from 'next/image';

// Feature sections data
const features = [
  {
    title: "Create Payment Links Instantly",
    description: "Generate secure payment links in seconds. Share them across any platform - WhatsApp, email, or social media. Perfect for businesses of all sizes.",
    image: "/features/payment-links.png", // Add this image
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Real-Time Transaction Tracking",
    description: "Monitor all your transactions in real-time. Get instant notifications, view payment statuses, and access detailed analytics from your dashboard.",
    image: "/features/analytics.png", // Add this image
    color: "from-indigo-400 to-indigo-600"
  },
  {
    title: "Secure Payment Processing",
    description: "Bank-grade security for all transactions. End-to-end encryption ensures your payments are always protected.",
    image: "/features/security.png", // Add this image
    color: "from-purple-400 to-purple-600"
  }
];

// 3D Card component with hover effect
function Feature3DCard({ title, description, index }: { 
  title: string; 
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="group relative perspective-1000"
    >
      <div className="relative transform-style-3d transition-transform duration-500 group-hover:rotate-y-12">
        <div className="bg-blue-900/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-blue-200">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Scroll-triggered section component
function ScrollSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const springScale = useSpring(scale, { mass: 0.5, stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { mass: 0.5, stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{
        scale: springScale,
        opacity: springOpacity
      }}
      className="mb-32"
    >
      {children}
    </motion.div>
  );
}

// Main Features component
export default function Features() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 mb-6">
              Powerful Features for Modern Payments
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Everything you need to manage payments, track transactions, and grow your business
            </p>
          </motion.div>

          {/* 3D Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {[
              {
                title: "Easy Integration",
                description: "Integrate our payment system into your existing workflow with just a few lines of code."
              },
              {
                title: "Multiple Payment Methods",
                description: "Accept payments through various channels including mobile money and bank transfers."
              },
              {
                title: "Detailed Analytics",
                description: "Get insights into your business with comprehensive payment analytics and reports."
              }
            ].map((feature, index) => (
              <Feature3DCard key={index} {...feature} index={index} />
            ))}
          </div>

          {/* Scroll-triggered sections */}
          {features.map((feature, index) => (
            <ScrollSection key={index}>
              <div className="flex flex-col lg:flex-row items-center gap-12 py-16">
                <motion.div 
                  className={`flex-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                    {mounted && (
                      <div className="relative w-full h-full bg-gradient-to-br border border-blue-500/20 rounded-2xl overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                        />
                        {/* Glassmorphic overlay */}
                        <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm" />
                      </div>
                    )}
                  </div>
                </motion.div>
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h2 className={`text-4xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-6`}>
                    {feature.title}
                  </h2>
                  <p className="text-xl text-blue-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollSection>
          ))}

          {/* Final CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center py-20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Join thousands of businesses already using our payment solution
            </p>
            <a
              href="/pricing"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-medium hover:from-blue-600 hover:to-blue-800 transition-all transform hover:scale-105"
            >
              View Pricing
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 