"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { AuthService } from '@/services/auth.service';
import { ToastService } from '@/services/toast.service';
import { Button } from '@/components/ui/Button';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';

const authService = new AuthService();
const toastService = new ToastService();

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    profileUrl: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!authService.validateEmail(formData.email)) {
      toastService.show('Please enter a valid email address', 'error');
      return;
    }

    // Validate password
    const passwordValidation = authService.validatePassword(formData.password);
    if (!passwordValidation.valid) {
      toastService.show(passwordValidation.message, 'error');
      return;
    }

    setIsLoading(true);
    const loadingToast = toastService.show('Creating your account...', 'loading');

    const response = await authService.signUpWithEmail(formData);

    if (response.success) {
      toastService.update(loadingToast, response.message, 'success');
      // Redirect to verification page or dashboard
    } else {
      toastService.update(loadingToast, response.error?.message || response.message, 'error');
    }

    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      <Toaster position="top-center" />
      <Navbar />

      <div className="relative pt-40 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse" />
        </div>

        <div className="max-w-md mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-900/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 shadow-xl"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 mb-6 text-center"
            >
              Create Your Account
            </motion.h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-blue-950/50 border border-blue-500/20 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-blue-950/50 border border-blue-500/20 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="you@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Profile URL
                </label>
                <input
                  type="text"
                  name="profileUrl"
                  value={formData.profileUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-blue-950/50 border border-blue-500/20 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="john-doe"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-blue-950/50 border border-blue-500/20 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="••••••••"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </motion.div>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-center"
            >
              <p className="text-blue-200">
                Already have an account?{' '}
                <a
                  href="/login"
                  className="text-blue-400 hover:text-blue-300 underline decoration-2 underline-offset-4"
                >
                  Sign in
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 