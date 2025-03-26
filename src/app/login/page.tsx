"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {supabase} from "@/utils/supabase";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) {
                console.error("Supabase sign-in error:", error);
                alert(`Login failed: ${error.message}`);
            } else {
                alert("Login successful!");
                router.push("/jobs");
            }
        } catch (error) {
            console.error("Error during sign-in:", error);
            alert("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-purple-300"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-purple-300"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="mr-2" /> Remember me
                        </label>
                        <a href="#" className="text-purple-600 text-sm">Forgot Password?</a>
                    </div>
                    <motion.button
                        type="submit"
                        className="w-full bg-purple-600 text-white p-3 rounded hover:bg-purple-700 transition disabled:bg-purple-400"
                        whileTap={{ scale: 0.98 }}
                        disabled={loading}
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </motion.button>
                </form>
                <p className="text-center text-sm mt-4">
                    Don&#39;t have an account? <a href="#" className="text-purple-600">Sign Up</a>
                </p>
            </motion.div>
        </div>
    );
};

export default Login;
