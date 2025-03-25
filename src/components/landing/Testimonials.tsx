"use client"

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechStart",
    content: "Fapshi has revolutionized how we handle payments. The integration was seamless and the support is exceptional.",
    image: "/testimonials/user1.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "Founder, E-commerce Plus",
    content: "The payment links feature has made it incredibly easy for our customers to pay. Highly recommended!",
    image: "/testimonials/user2.jpg"
  },
  {
    name: "Michael Chen",
    role: "CTO, Digital Solutions",
    content: "The API documentation is clear and the SDKs are well-maintained. Integration was a breeze.",
    image: "/testimonials/user3.jpg"
  },
  {
    name: "Emma Wilson",
    role: "Product Manager, InnovatePay",
    content: "Fapshi's bulk payment feature has saved us countless hours. The platform is reliable and secure.",
    image: "/testimonials/user4.jpg"
  },
  // Add more testimonials as needed
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Trusted by businesses across Cameroon and beyond
          </p>
        </div>

        <div className="relative h-[400px] overflow-hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-blue-950/50 backdrop-blur-sm rounded-2xl shadow-xl shadow-blue-500/20 p-8 max-w-2xl mx-auto border border-blue-800/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-900 overflow-hidden mr-4 relative">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-blue-200">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <p className="text-blue-100 text-lg italic">
                &quot;{testimonials[currentIndex].content}&quot;
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-400' : 'bg-blue-800'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 