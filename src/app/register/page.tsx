"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulate API request (Replace with actual API call)
            await new Promise((resolve) => setTimeout(resolve, 2000));
            alert("Signup successful");
            router.push("/dashboard");
        } catch (error) {
            console.log(error);
            alert("Signup failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Username</label>
                        <motion.input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-purple-300"
                            required
                            whileFocus={{ scale: 1.02 }}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <motion.input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-purple-300"
                            required
                            whileFocus={{ scale: 1.02 }}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <motion.input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-purple-300"
                            required
                            whileFocus={{ scale: 1.02 }}
                        />
                    </div>
                    <motion.button
                        type="submit"
                        className="w-full bg-purple-600 text-white p-3 rounded hover:bg-purple-700 transition disabled:bg-purple-400"
                        whileTap={{ scale: 0.98 }}
                        disabled={loading}
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </motion.button>
                </form>
                <p className="text-center text-sm mt-4">
                    Already have an account? <a href="#" className="text-purple-600">Sign In</a>
                </p>
            </motion.div>
        </div>
    );
};

export default Signup;
