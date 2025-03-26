"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { ToastService } from '@/services/toast.service';

const toastService = new ToastService();

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement login logic
      toastService.show('Login successful!', 'success');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed. Please try again.';
      toastService.show(errorMessage, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-red-950 via-red-900 to-red-950">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-red-400 rounded-full top-1/4 left-1/4 w-96 h-96 filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bg-red-600 rounded-full bottom-1/4 right-1/4 w-96 h-96 filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <Navbar />

      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-red-400"
            >
              Welcome back
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-red-200"
            >
              Sign in to your account to continue
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 border shadow-xl bg-red-900/30 backdrop-blur-xl rounded-2xl border-red-500/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-red-200">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 text-white border rounded-lg shadow-sm appearance-none border-red-500/20 placeholder-red-400/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-900/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-red-200">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 text-white border rounded-lg shadow-sm appearance-none border-red-500/20 placeholder-red-400/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-900/50"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-red-500 rounded focus:ring-red-500 border-red-500/20 bg-red-900/50"
                  />
                  <label htmlFor="remember-me" className="block ml-2 text-sm text-red-200">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password" className="font-medium text-red-400 hover:text-red-300">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isLoading}
                  className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800"
                >
                  Sign in
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-red-500/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-red-200 bg-red-900/30">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-red-200 border-red-500/20 hover:bg-red-500/10"
                >
                  Google
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-red-200 border-red-500/20 hover:bg-red-500/10"
                >
                  GitHub
                </Button>
              </div>
            </div>

            <p className="mt-8 text-sm text-center text-red-200">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-medium text-red-400 hover:text-red-300">
                Sign up
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
} 