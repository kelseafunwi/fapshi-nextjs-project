'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';
import {supabase} from "@/utils/supabase";

export interface Job {
    id: string; // UUID
    client_id: string; // UUID
    title: string;
    description: string;
    budget: number;
    category?: string;
    tags?: string[];
    status: string;
    created_at: string;
    deadline?: string;
}

export default function CreateJobPage() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [budget, setBudget] = useState<number>(0);
    const [category, setCategory] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);
    const [deadline, setDeadline] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) {
                throw new Error('User not authenticated');
            }

            const { error } = await supabase
                .from('jobs')
                .insert({
                    client_id: user.id,
                    title,
                    description,
                    budget,
                    category: category || null,
                    tags: tags.length > 0 ? tags : null,
                    status: 'open',
                    created_at: new Date().toISOString(),
                    deadline: deadline || null,
                });

            if (error) {
                throw error;
            }

            alert('Job created successfully!');
            router.push('/jobs'); // Redirect to the jobs listing page
        } catch (err) {
            console.error('Error creating job:', err);
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Create a New Job</h1>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Budget</label>
                    <input
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(parseFloat(e.target.value))}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
                    <input
                        type="text"
                        value={tags.join(',')}
                        onChange={(e) => setTags(e.target.value.split(','))}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Deadline</label>
                    <input
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                >
                    {loading ? 'Creating...' : 'Create Job'}
                </button>
            </form>
        </div>
    );
}
