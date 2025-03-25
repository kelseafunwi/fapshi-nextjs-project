"use client"

import { motion } from 'framer-motion';
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Everything you need to manage payments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
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
              className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button size="lg">Create Your First Link</Button>
        </motion.div>
      </div>
    </section>
  );
} 