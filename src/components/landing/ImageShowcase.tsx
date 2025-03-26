'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const showcases = [
  {
    title: 'Easy Registration',
    description: 'Quick and secure registration process with national ID verification.',
    image: '/images/registration.jpg',
    alt: 'Registration process'
  },
  {
    title: 'Smart Job Matching',
    description: 'Our intelligent system matches you with the perfect opportunities.',
    image: '/images/job-matching.jpg',
    alt: 'Job matching interface'
  },
  {
    title: 'Secure Payments',
    description: 'Fapshi-powered secure payment system with escrow protection.',
    image: '/images/payments.jpg',
    alt: 'Payment security'
  }
];

export function ImageShowcase() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl font-display">
          How It Works
        </h2>
        <div className="space-y-16">
          {showcases.map((showcase, index) => (
            <motion.div
              key={showcase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={showcase.image}
                    alt={showcase.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">{showcase.title}</h3>
                <p className="text-gray-600">{showcase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 