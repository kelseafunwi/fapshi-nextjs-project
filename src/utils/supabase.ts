import { createBrowserClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

/**
 * Create a single Supabase client for interacting with your database
 * This client is used for server-side operations
 */
export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

/**
 * Create a browser client for client-side operations
 * This client is specifically designed for browser environment and handles:
 * - Real-time subscriptions
 * - User authentication flows
 * - Client-side data fetching
 * - File storage operations
 */
export const createBrowserSupabaseClient = () => {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
} 