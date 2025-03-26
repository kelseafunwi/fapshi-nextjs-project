'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Jean Paul",
    role: "Software Developer",
    company: "Tech Company in Douala",
    text: "Found my dream job through this platform. The process was simple and straightforward.",
  },
  {
    name: "Marie Claire",
    role: "Graphic Designer",
    company: "Creative Agency in Yaoundé",
    text: "As a freelancer, finding local clients was always a challenge. This platform changed that completely.",
  },
  {
    name: "Emmanuel",
    role: "Content Writer",
    company: "Media Firm in Bamenda",
    text: "The local focus of the platform helped me connect with businesses that understand my context.",
  }
];

export function PartnersTestimonials() {
  return (
    <section className="px-4 py-16 bg-[#0B1121]">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-bold text-center text-white"
        >
          Success Stories
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
            >
              <p className="mb-4 text-gray-400">"{testimonial.text}"</p>
              <div className="mt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 