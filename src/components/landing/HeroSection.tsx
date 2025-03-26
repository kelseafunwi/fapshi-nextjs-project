'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative flex items-center min-h-screen px-4 py-20 md:px-8">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Cameroonian professionals"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl font-display">
            Empowering Cameroonian Freelancers & Businesses
          </h1>
          <p className="mb-8 text-xl text-gray-200">
            Connect with trusted professionals, secure payments, and grow your business
            in Cameroon&apos;s leading freelance marketplace.
          </p>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold rounded-lg bg-cameroon-sun text-cameroon-forest"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold text-white border-2 border-white rounded-lg"
            >
              Post a Job
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 