"use client"

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';

const faqs = [
  {
    question: "What is Flevo?",
    answer: "Flevo is a payment link generation platform that allows businesses to create secure payment links and collect payments from users in Cameroon. It provides real-time transaction tracking and instant notifications for successful payments."
  },
  {
    question: "How do I create a payment link?",
    answer: "Creating a payment link is simple: log into your account, click on 'Create New Link', fill in the payment details (amount, description, etc.), and click generate. You'll get a unique payment link that you can share with your customers."
  },
  {
    question: "How do I track my transactions?",
    answer: "All transactions are tracked in real-time through your dashboard. You can view payment statuses, transaction history, and download detailed reports. You'll also receive instant notifications for successful payments."
  },
  {
    question: "Is my payment link secure?",
    answer: "Yes, all payment links are generated with bank-grade security. We use encryption for all transactions and follow strict security protocols to protect both merchants and customers."
  },
  {
    question: "How long are payment links valid?",
    answer: "Payment links remain valid until you deactivate them. You can manage all your payment links from your dashboard, including the ability to activate, deactivate, or delete links as needed."
  },
  {
    question: "What happens after a successful payment?",
    answer: "After a successful payment, both you and the customer receive instant confirmation. The transaction is recorded in your dashboard, and the funds are credited to your account immediately."
  },
  {
    question: "Can I customize my payment links?",
    answer: "Yes, you can customize your payment links with specific amounts, descriptions, and reference numbers. You can also create variable amount links for flexible payments."
  },
  {
    question: "How do I share my payment link?",
    answer: "Once created, you can share your payment link through any platform - WhatsApp, email, SMS, or social media. Each link has a copy button for easy sharing."
  }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-blue-800/50 last:border-none"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 px-6 flex justify-between items-center text-left focus:outline-none group hover:bg-blue-900/20 transition-colors"
      >
        <h3 className="text-lg font-medium text-blue-200 pr-8 group-hover:text-blue-100">{question}</h3>
        <svg
          className={`w-6 h-6 text-blue-400 transform transition-transform group-hover:text-blue-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-8 text-blue-300 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <Navbar />

      <div className="relative pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 mb-6"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xl text-blue-200 max-w-2xl mx-auto"
            >
              Everything you need to know about creating and managing payment links
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-blue-950/50 backdrop-blur-sm rounded-3xl shadow-xl shadow-blue-500/20 border border-blue-800/50 overflow-hidden"
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-blue-200">
              Still have questions?{' '}
              <a 
                href="/contact" 
                className="text-blue-400 hover:text-blue-300 underline decoration-2 underline-offset-4 font-medium transition-colors"
              >
                Contact our support team
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 