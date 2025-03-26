'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-lg border-b border-white/10">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <span className="relative text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Flevo
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-1 md:flex">
            {['Features', 'How It Works', 'Testimonials', 'Pricing'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative px-4 py-2 group"
              >
                <span className="relative z-10 text-gray-600 transition-colors group-hover:text-blue-600">
                  {item}
                </span>
                <motion.div
                  className="absolute inset-0 w-full h-full bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                />
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="items-center hidden space-x-4 md:flex">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/login"
                className="px-4 py-2 text-gray-600 transition-colors hover:text-blue-600"
              >
                Log in
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/signup"
                className="px-6 py-2.5 text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg hover:shadow-blue-500/25"
              >
                Sign up
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 md:hidden text-gray-600 hover:text-blue-600 transition-colors"
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
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto", marginBottom: 16 },
            closed: { opacity: 0, height: 0, marginBottom: 0 }
          }}
          className="overflow-hidden md:hidden"
        >
          <div className="py-4 space-y-4">
            {['Features', 'How It Works', 'Testimonials', 'Pricing'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {item}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link 
                href="/login"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Log in
              </Link>
              <Link 
                href="/signup"
                className="block px-4 py-2 text-center text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg transition-all shadow-lg hover:shadow-blue-500/25"
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