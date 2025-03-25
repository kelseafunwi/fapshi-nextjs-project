"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ImageShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-950 to-blue-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
              Seamless Payment Integration
            </h2>
            <p className="text-lg text-blue-200">
              Experience the power of modern payment solutions with our easy-to-use APIs
              and developer-friendly tools. Build the future of digital payments in Cameroon.
            </p>
            <ul className="space-y-4">
              {[
                'Quick and easy integration',
                'Comprehensive documentation',
                'Robust security measures',
                'Real-time payment tracking',
                '24/7 technical support',
              ].map((feature) => (
                <motion.li
                  key={feature}
                  className="flex items-center text-blue-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <svg
                    className="h-6 w-6 text-blue-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            <Image
              src="/dashboard-preview.jpg"
              alt="Dashboard Preview"
              fill
              className="object-cover"
              priority
            />
            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 right-1/4 bg-blue-950/50 backdrop-blur-sm p-4 rounded-lg border border-blue-800/50 shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <p className="text-white text-sm">Payment Successful</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 