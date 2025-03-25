/**
 * Type definitions for Supabase database tables
 * These types are used to ensure type safety when interacting with the Supabase database
 */

/**
 * Base user type containing all common fields
 * This represents the structure of a user in the database
 */
export interface User {
  id: number;              // Unique identifier for the user
  email: string;           // User's email address
  password_hash: string;   // Hashed password for security
  phone_number: string;    // User's phone number
  full_name: string;       // User's full name
  profile_picture: string; // URL to user's profile picture
}

/**
 * Type for creating a new user
 * Omits the id field as it's auto-generated
 * Makes certain fields optional for flexible user creation
 */
export type CreateUser = Omit<User, 'id'> & {
  profile_picture?: string; // Profile picture is optional when creating a user
};

/**
 * Type for updating an existing user
 * Makes all fields optional to allow partial updates
 */
export type UpdateUser = Partial<Omit<User, 'id'>>;

/**
 * Database type definitions for Supabase
 * This type is used in the Supabase client configuration
 */
export type Database = {
  public: {
    Tables: {
      users: {
        Row: User;               // Type returned by queries
        Insert: CreateUser;      // Type for inserting new users
        Update: UpdateUser;      // Type for updating existing users
      };
      // Add other table definitions here as needed
    };
  };
}; 