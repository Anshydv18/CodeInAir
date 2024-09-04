import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Dashboard = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/auth/getdetail', {
                    method: 'POST'
                });

                if (!res.ok) {
                    // Handle non-2xx responses
                    throw new Error('Error fetching data 1');
                }

                const dd = await res.json();
                setData(dd);
            } catch (error) {
                toast.error("Error fetching data");
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Welcome Main: {data ? data : 'Loading...'}</h2>
        </div>
    );
};

export default Dashboard;
