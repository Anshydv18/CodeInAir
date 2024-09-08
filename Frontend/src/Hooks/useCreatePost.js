import { useState } from "react";
import toast from "react-hot-toast";

export const useCreatePost = () => {
    const [loading, setLoading] = useState(false);

    const create = async ({ title, content, company }) => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3000/api/blog/create', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ title, content, company })
            });

            if (!res.ok) {
                const errorText = await res.text(); // Read the response body
            } 
            toast.success("Post Created ✌️");
            
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return { loading, create };
}
