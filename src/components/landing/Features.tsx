"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/Button';

const features = [
  {
    title: 'Create Payment Links',
    description: 'Generate secure payment links in seconds with our simple interface.',
    icon: '🔗',
  },
  {
    title: 'Real-time Monitoring',
    description: 'Track your transactions in real-time with our intuitive dashboard.',
    icon: '📊',
  },
  {
    title: 'Secure Payments',
    description: 'Your transactions are protected with industry-standard security.',
    icon: '🔒',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400"
          >
            Everything you need to manage payments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-blue-200"
          >
            Simple, secure, and efficient payment management for your business
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative p-8 bg-blue-900/30 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-blue-200 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link href="/signup" passHref>
            <Button 
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all"
            >
              Create Your First Link
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 