"use client"

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { TypewriterText } from '../ui/TypewriterText';
import { FloatingShapes } from '../ui/FloatingShapes';

export function Hero() {
  const texts = [
    "Create secure payment links in seconds",
    "Track transactions in real-time",
    "Accept payments from anywhere in Cameroon",
    "Get instant notifications for successful payments",
    "Manage your business payments effortlessly",
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <FloatingShapes />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Flevo
            </motion.span>
          </h1>
          
          <div className="text-xl sm:text-2xl text-blue-200 min-h-[3rem]">
            <TypewriterText texts={texts} />
          </div>

          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-lg mb-6 text-blue-200">
              Flevo is your all-in-one payment solution for businesses in Cameroon. 
              Create payment links, track transactions, and manage your business finances 
              with ease and security.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-400/10"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}