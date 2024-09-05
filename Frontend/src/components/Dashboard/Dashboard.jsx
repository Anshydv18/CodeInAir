import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [data, setData] = useState(null); 
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
                toast.error("Error fetching data");
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);

   
    useEffect(() => {
        console.log('Data updated:', data);
    }, [data]);

    return (
        <div className='px-16'>

            <h2 className=' text-center'>Welcome : {data ? data.username : 'Loading...'}</h2>
           <Link onClick={(e)=>{nav("/editor")}}>Create Post</Link>
           <div>
            2*divs

           </div>
        </div>
    );
};

export default Dashboard;
