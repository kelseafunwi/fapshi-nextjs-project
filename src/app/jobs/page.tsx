"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {supabase} from "@/utils/supabase";

interface Job {
    id: string;
    client_id: string;
    title: string;
    description: string;
    budget: number;
    category?: string;
    tags?: string[];
    status: string;
    created_at: string;
    deadline?: string;
}

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
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-green-700 mb-4">Available Jobs</h1>
            <input
                type="text"
                placeholder="Search jobs..."
                className="w-full p-2 border rounded mb-4"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {loading ? (
                <p>Loading jobs...</p>
            ) : (
                <div className="grid gap-4">
                    {jobs
                        .filter((job) =>
                            job.title.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((job) => (
                            <motion.div
                                key={job.id}
                                className="p-4 border rounded shadow-md bg-yellow-100"
                                whileHover={{ scale: 1.05 }}
                            >
                                <h2 className="text-xl font-semibold text-green-800">{job.title}</h2>
                                <p className="text-gray-700">{job.description}</p>
                                <p className="text-green-600 font-bold">Budget: ${job.budget}</p>
                                <button
                                    onClick={() => console.log("Apply button clicked")}
                                    className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
                                >
                                    Apply
                                </button>
                            </motion.div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default JobsPage;