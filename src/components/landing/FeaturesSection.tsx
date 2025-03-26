'use client';
import { motion } from 'framer-motion';

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature cards will go here */}
        </div>
      </div>
    </section>
  );
} 