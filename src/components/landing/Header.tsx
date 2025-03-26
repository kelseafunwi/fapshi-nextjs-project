'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-cameroon-primary">Flevo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            <Link href="#features" className="transition-colors text-cameroon-text-secondary hover:text-cameroon-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="transition-colors text-cameroon-text-secondary hover:text-cameroon-primary">
              How It Works
            </Link>
            <Link href="#testimonials" className="transition-colors text-cameroon-text-secondary hover:text-cameroon-primary">
              Testimonials
            </Link>
            <Link href="#pricing" className="transition-colors text-cameroon-text-secondary hover:text-cameroon-primary">
              Pricing
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="items-center hidden space-x-4 md:flex">
            <Link 
              href="/login"
              className="px-4 py-2 transition-colors text-cameroon-primary hover:text-cameroon-dark"
            >
              Log in
            </Link>
            <Link 
              href="/signup"
              className="px-4 py-2 text-white transition-colors rounded-lg bg-cameroon-primary hover:bg-cameroon-dark"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          className="overflow-hidden md:hidden"
        >
          <div className="py-4 space-y-4">
            <Link href="#features" className="block transition-colors text-cameroon-text-secondary hover:text-cameroon-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="block transition-colors text-cameroon-text-secondary hover:text-cameroon-primary">
              How It Works
            </Link>
            <Link href="#testimonials" className="block transition-colors text-cameroon-text-secondary hover:text-cameroon-primary">
              Testimonials
            </Link>
            <Link href="#pricing" className="block transition-colors text-cameroon-text-secondary hover:text-cameroon-primary">
              Pricing
            </Link>
            <div className="pt-4 space-y-2">
              <Link 
                href="/login"
                className="block px-4 py-2 transition-colors text-cameroon-primary hover:text-cameroon-dark"
              >
                Log in
              </Link>
              <Link 
                href="/signup"
                className="block px-4 py-2 text-center text-white transition-colors rounded-lg bg-cameroon-primary hover:bg-cameroon-dark"
              >
                Sign up
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
} 