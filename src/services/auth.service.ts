import { createBrowserSupabaseClient } from '@/utils/supabase';
import { AuthError } from '@supabase/supabase-js';

/**
 * Interface for user signup data
 */
export interface SignUpData {
  email: string;
  password: string;
  name: string;
  profileUrl?: string;
}

/**
 * Response type for authentication operations
 */
export interface AuthResponse {
  success: boolean;
  message: string;
  error?: AuthError | null;
}

/**
 * Authentication service for handling user signup and related operations
 */
export class AuthService {
  private supabase = createBrowserSupabaseClient();

  /**
   * Signs up a new user with email and password
   * 
   * @param signUpData - User signup information
   * @returns Promise<AuthResponse>
   * 
   * @example
   * ```typescript
   * const authService = new AuthService();
   * const response = await authService.signUpWithEmail({
   *   email: 'user@example.com',
   *   password: 'securepassword',
   *   name: 'John Doe',
   *   profileUrl: 'john-doe'
   * });
   * 
   * if (response.success) {
   *   console.log('Signup successful:', response.message);
   * } else {
   *   console.error('Signup failed:', response.error);
   * }
   * ```
   */
  async signUpWithEmail(signUpData: SignUpData): Promise<AuthResponse> {
    try {
      // First, create the user account
      const { data: authData, error: signUpError } = await this.supabase.auth.signUp({
        email: signUpData.email,
        password: signUpData.password,
      });

      if (signUpError) {
        throw signUpError;
      }

      if (!authData.user) {
        throw new Error('User creation failed');
      }

      // Then, create the user profile
      const { error: profileError } = await this.supabase
        .from('profiles')
        .insert({
          id: authData.user.id,
          name: signUpData.name,
          profile_url: signUpData.profileUrl,
          email: signUpData.email,
          created_at: new Date().toISOString(),
        });

      if (profileError) {
        // If profile creation fails, we should clean up the auth user
        await this.supabase.auth.signOut();
        throw profileError;
      }

      return {
        success: true,
        message: 'Account created successfully! Please check your email for verification.',
      };

    } catch (error) {
      return {
        success: false,
        message: 'Failed to create account',
        error: error as AuthError,
      };
    }
  }

  /**
   * Validates an email address format
   * 
   * @param email - Email address to validate
   * @returns boolean
   * 
   * @example
   * ```typescript
   * const authService = new AuthService();
   * const isValid = authService.validateEmail('user@example.com');
   * console.log('Email is valid:', isValid);
   * ```
   */
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validates password strength
   * 
   * @param password - Password to validate
   * @returns { valid: boolean, message: string }
   * 
   * @example
   * ```typescript
   * const authService = new AuthService();
   * const { valid, message } = authService.validatePassword('password123');
   * if (!valid) {
   *   console.log('Password validation failed:', message);
   * }
   * ```
   */
  validatePassword(password: string): { valid: boolean; message: string } {
    if (password.length < 8) {
      return {
        valid: false,
        message: 'Password must be at least 8 characters long',
      };
    }

    if (!/[A-Z]/.test(password)) {
      return {
        valid: false,
        message: 'Password must contain at least one uppercase letter',
      };
    }

    if (!/[a-z]/.test(password)) {
      return {
        valid: false,
        message: 'Password must contain at least one lowercase letter',
      };
    }

    if (!/[0-9]/.test(password)) {
      return {
        valid: false,
        message: 'Password must contain at least one number',
      };
    }

    return {
      valid: true,
      message: 'Password is strong',
    };
  }
} 