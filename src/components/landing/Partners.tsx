"use client"

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const partners = [
  {
    name: "MTN Mobile Money",
    logo: "/partners/mtn.png",
    description: "Leading mobile money provider in Cameroon"
  },
  {
    name: "Orange Money",
    logo: "/partners/orange.png",
    description: "Trusted payment partner"
  },
  {
    name: "Express Union",
    logo: "/partners/express-union.png",
    description: "Financial services partner"
  },
  {
    name: "UBA Bank",
    logo: "/partners/uba.png",
    description: "Banking partner"
  },
  {
    name: "Afriland First Bank",
    logo: "/partners/afriland.png",
    description: "Banking partner"
  },
  // Add more partners as needed
];

export function Partners() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (partners.length * 200));
    }, 50); // Adjust speed as needed

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400">
            Our Trusted Partners
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Working with leading financial institutions across Cameroon
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: -scrollPosition,
            }}
            transition={{
              duration: 0.1,
              ease: "linear",
            }}
            className="flex space-x-8"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 bg-blue-950/50 backdrop-blur-sm rounded-lg shadow-lg shadow-blue-500/20 p-6 border border-blue-800/50"
              >
                <div className="h-20 flex items-center justify-center mb-4 relative">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white text-center">
                  {partner.name}
                </h3>
                <p className="text-sm text-blue-200 text-center mt-2">
                  {partner.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 