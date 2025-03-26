'use client';

import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="px-4 py-16 bg-[#0B1121]">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to Find Your Next Job?
          </h2>
          <p className="mb-8 text-lg text-gray-400">
            Join thousands of Cameroonians who have found their dream jobs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Search Jobs Now
            </button>
            <button className="px-8 py-3 font-semibold bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
              Post a Job
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 