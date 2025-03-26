'use client';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Seamless Job Connections',
    description: 'Smart matching system connecting freelancers with suitable opportunities based on skills and experience.',
    icon: '🤝'
  },
  {
    title: 'Secure Payments',
    description: 'Fapshi API-powered escrow system ensuring secure and timely payments for all transactions.',
    icon: '🔒'
  },
  {
    title: 'Trust & Verification',
    description: 'National ID and business registry integration for verified user profiles and secure transactions.',
    icon: '✅'
  },
  {
    title: 'Mobile First',
    description: 'Optimized for mobile devices with local payment options and offline capabilities.',
    icon: '📱'
  }
];

export function FeaturesSection() {
  return (
    <section className="px-4 py-20 md:px-8">
      <div className="container mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl font-display">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 