"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/utils/supabase";
import { Job } from "@/utils/types";

const JobsPage = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchJobs = async () => {
            const { data, error } = await supabase.from("jobs").select("*");
            if (error) {
                console.error("Error fetching jobs:", error);
            } else {
                setJobs(data);
            }
            setLoading(false);
        };
        fetchJobs();
    }, []);

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Explore Exciting Opportunities
                </h1>
                <div className="mb-8 flex items-center">
                    <input
                        type="text"
                        placeholder="Search jobs..."
                        className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-green-200 focus:border-green-300"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                {loading ? (
                    <div className="text-center">
                        <p className="text-gray-600">Loading jobs...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs
                            .filter((job) =>
                                job.title.toLowerCase().includes(search.toLowerCase())
                            )
                            .map((job) => (
                                <motion.div
                                    key={job.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h2 className="text-xl font-semibold text-gray-800">
                                                {job.title}
                                            </h2>
                                            {/* Add a Bookmark Icon Here if you want to add it*/}
                                        </div>
                                        <p className="text-gray-600 mb-3 line-clamp-3">
                                            {job.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-4">
                                            <div>
                                                <span className="text-sm text-gray-500">Budget:</span>
                                                <span className="ml-1 font-semibold text-green-600">
                          ${job.budget}/hr
                        </span>
                                            </div>
                                            <button
                                                onClick={() => console.log("Apply button clicked")}
                                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
                                            >
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobsPage;
