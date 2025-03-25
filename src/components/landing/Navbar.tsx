"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-blue-950/80 backdrop-blur-lg py-4 border-b border-blue-800/50' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-32">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm rounded-lg text-blue-200 hover:text-white hover:bg-blue-800/50 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Protection Dropdown and Create Account */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <button className="px-4 py-2 text-sm text-blue-200 hover:text-white flex items-center space-x-1">
                <span>Protection</span>
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform"
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
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-48 bg-blue-900/90 backdrop-blur-lg rounded-lg shadow-lg shadow-blue-500/20 py-2 hidden group-hover:block border border-blue-800/50"
              >
                <a href="#" className="block px-4 py-2 text-sm text-blue-200 hover:text-white hover:bg-blue-800/50">
                  Asset Protection
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-blue-200 hover:text-white hover:bg-blue-800/50">
                  Smart Contracts
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-blue-200 hover:text-white hover:bg-blue-800/50">
                  Security Features
                </a>
              </motion.div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
            >
              Create Account
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden rounded-lg p-2 text-blue-200 hover:text-white hover:bg-blue-800/50"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
} 