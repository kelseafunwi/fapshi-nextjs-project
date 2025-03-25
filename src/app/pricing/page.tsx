"use client"

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { Button } from '@/components/ui/Button';

const pricingTiers = [
  {
    name: "Starter",
    monthlyPrice: 15000,
    yearlyPrice: 150000, // 2 months free
    description: "Perfect for small businesses just getting started",
    features: [
      "Up to 50 payment links per month",
      "Basic analytics dashboard",
      "Email notifications",
      "Standard support",
      "1 team member",
      "Basic reporting"
    ],
    highlighted: false,
    cta: "Get Started"
  },
  {
    name: "Professional",
    monthlyPrice: 45000,
    yearlyPrice: 450000, // 2 months free
    description: "Ideal for growing businesses with more needs",
    features: [
      "Up to 500 payment links per month",
      "Advanced analytics dashboard",
      "SMS & Email notifications",
      "Priority support",
      "5 team members",
      "Advanced reporting",
      "Custom payment page",
      "API access"
    ],
    highlighted: true,
    cta: "Go Professional"
  },
  {
    name: "Enterprise",
    monthlyPrice: 100000,
    yearlyPrice: 1000000, // 2 months free
    description: "For large organizations requiring maximum flexibility",
    features: [
      "Unlimited payment links",
      "Enterprise analytics suite",
      "All notifications channels",
      "24/7 Dedicated support",
      "Unlimited team members",
      "Custom reporting",
      "White-label solution",
      "Priority API access",
      "Custom integration support",
      "Dedicated account manager"
    ],
    highlighted: false,
    cta: "Contact Sales"
  }
];

function PriceCard({ 
  tier, 
  isYearly, 
  index 
}: { 
  tier: typeof pricingTiers[0], 
  isYearly: boolean,
  index: number 
}) {
  const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
  const yearlyDiscount = ((tier.monthlyPrice * 12 - tier.yearlyPrice) / (tier.monthlyPrice * 12) * 100).toFixed(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={`relative flex flex-col p-8 ${
        tier.highlighted
          ? 'bg-gradient-to-b from-blue-600/20 to-blue-900/20 border-blue-500/50 scale-105'
          : 'bg-blue-950/50 border-blue-800/50'
      } backdrop-blur-xl rounded-3xl border shadow-lg`}
    >
      {tier.highlighted && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
      <p className="text-blue-300 mb-6">{tier.description}</p>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-white">
            {(price).toLocaleString('fr-FR')} CFA
          </span>
          <span className="text-blue-300 ml-2">
            /{isYearly ? 'year' : 'month'}
          </span>
        </div>
        {isYearly && (
          <div className="mt-2">
            <span className="text-green-400 font-medium">
              Save {yearlyDiscount}% yearly
            </span>
          </div>
        )}
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center text-blue-200">
            <svg
              className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0"
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
          </li>
        ))}
      </ul>

      <Button
        variant={tier.highlighted ? "primary" : "outline"}
        size="lg"
        className="w-full"
      >
        {tier.cta}
      </Button>
    </motion.div>
  );
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <Navbar />

      <div className="relative pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 mb-6"
            >
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xl text-blue-200 max-w-2xl mx-auto"
            >
              Choose the perfect plan for your business
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex items-center justify-center gap-4"
            >
              <span className={`text-lg ${!isYearly ? 'text-white' : 'text-blue-300'}`}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-10 w-20 items-center rounded-full transition-colors ${
                  isYearly ? 'bg-blue-600' : 'bg-blue-800'
                }`}
              >
                <span
                  className={`inline-block h-8 w-8 transform rounded-full bg-white transition-transform ${
                    isYearly ? 'translate-x-11' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${isYearly ? 'text-white' : 'text-blue-300'}`}>
                Yearly
                <span className="ml-2 text-sm text-green-400 font-medium">
                  (Save up to 20%)
                </span>
              </span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <PriceCard
                key={tier.name}
                tier={tier}
                isYearly={isYearly}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <p className="text-lg text-blue-200">
              Need a custom plan?{' '}
              <a 
                href="/contact" 
                className="text-blue-400 hover:text-blue-300 underline decoration-2 underline-offset-4 font-medium transition-colors"
              >
                Contact our sales team
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 