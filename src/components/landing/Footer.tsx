"use client"

import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  Documentation: [
    { name: 'Create an account', href: '#' },
    { name: 'Integrate Payments', href: '#' },
    { name: 'Make Bulk Payments', href: '#' },
    { name: 'How to Payout', href: '#' },
    { name: 'Create Payment Links', href: '#' },
  ],
  Features: [
    { name: 'Payment Aggregator', href: '#' },
    { name: 'Payment Links', href: '#' },
    { name: 'Payouts', href: '#' },
    { name: 'Invoicing', href: '#' },
    { name: 'Products', href: '#' },
  ],
  Resources: [
    { name: 'API Docs', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ],
  Help: [
    { name: 'FAQs', href: '#' },
    { name: 'Help & Support', href: '#' },
    { name: 'Contact us', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-800/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Link href="/" className="relative h-8 w-32">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </Link>
              <div className="text-blue-200">
                <p>Central Market Road,</p>
                <p>Buea - South West Region</p>
                <p>Cameroon</p>
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <a href="mailto:hello@fapshi.com" className="text-blue-200 hover:text-white transition-colors">
                hello@fapshi.com
              </a>
              <a href="tel:+237673669111" className="text-blue-200 hover:text-white transition-colors">
                +237 673 669 111
              </a>
              <p className="text-blue-400 mt-2">©2024 Fapshi Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 