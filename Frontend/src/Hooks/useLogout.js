import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

export const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { user, setUser } = useAuthContext();

    const logout = async () => {
        setLoading(true); // Set loading to true when starting logout
        try {
            const res = await fetch('http://localhost:3000/api/auth/logout', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                credentials:"include",
                body: JSON.stringify({})
            });

            if (!res.ok) {
                // Throw an error if the response is not ok
                throw new Error(`Logout failed: ${res.statusText}`);
            }

            // Clear user state
            setUser(null);
            toast.success("Logout successful 👋");
        } catch (error) {
            toast.error("Unable to logout ❌"); // Use toast.error for errors
        } finally {
            setLoading(false); // Set loading to false after process is complete
        }
    };

    return { loading, logout };
};
