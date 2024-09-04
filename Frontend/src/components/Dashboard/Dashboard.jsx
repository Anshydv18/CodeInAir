import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Dashboard = () => {
    const [data, setData] = useState(null); // Use null to indicate loading state more clearly

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
                toast.error("Error fetching data");
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);

    // Log the data to see what is being set
    useEffect(() => {
        console.log('Data updated:', data);
    }, [data]);

    return (
        <div>
            <h2>Welcome : {data ? data.username : 'Loading...'}</h2>
        </div>
    );
};

export default Dashboard;
