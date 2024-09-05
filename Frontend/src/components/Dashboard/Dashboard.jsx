import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';

const Dashboard = () => {
    const [data, setData] = useState(null); // Initialize as null to handle loading state
    const [post, setPost] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/auth/getdetail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: "include",
                    body: JSON.stringify({}) // Send an empty object if the backend expects a body
                });

                if (!response.ok) {
                    // Handle non-2xx responses
                    throw new Error('Error fetching data');
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                toast.error("Error fetching data, dashboard");
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const blogs = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/blog/getblog', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify({})
                });

                if (!res.ok) {
                    throw new Error('Error fetching data of blog');
                }

                const data = await res.json(); // Correctly parse the JSON response
                setPost(data.blogs || []); // Set post to empty array if data.blogs is undefined

            } catch (error) {
                console.error('Blog fetching error:', error); // Log the error for debugging
                toast.error("Blog fetching error"); // Display a user-friendly message
            }
        };

        blogs();
    }, []);

    return (
        <div className='px-16 border border-red-400'>
            <div className='flex flex-row justify-end items-center'>
                <h2 className='text-center w-full'>
                    Welcome: {data ? data.username : 'Loading...'}
                </h2>
                <Link
                    onClick={(e) => { nav("/editor") }}
                    className='px-6 py-3 bg-sky-500 mx-2 my-1 rounded-xl hover:bg-sky-300'
                >
                    Create Post
                </Link>
            </div>
            <div>
                <div>
                    {/* Placeholder for potential future content */}
                </div>
                <div>
                    {post.length > 0 ? (
                        post.map((post) => (
                            <div key={post._id}>
                                <h3>{post.title} ... {post.company}</h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(post.content),
                                    }}
                                />
                            </div>
                        ))
                    ) : (
                        <p>No blog posts available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
