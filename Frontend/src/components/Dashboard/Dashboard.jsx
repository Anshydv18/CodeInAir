import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [data, setData] = useState(''); 
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
                toast.error("Error fetching data , dashboard");
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);

   
    useEffect(() => {
        console.log('Data updated:', data.blogs);
    }, [data]);

    return (
        <div className='px-16 border  border-red-400'>
            <div  className='flex flex-row justify-end items-center '>
            <h2 className=' text-center w-full'>Welcome : {data ? data.username : 'Loading...'}</h2>
            <Link onClick={(e)=>{nav("/editor")}}   className=' px-6 py-3  bg-sky-500 mx-2 my-1 rounded-xl hover:bg-sky-300' >CreatePost</Link>
          
            </div>
           <div>
           <div>
            {/* {data.blogs} */}
           </div>
           <div>
            {  data?.blogs && data?.blogs.map((blog)=>(
                <div>{blog}</div>
            ))}
           </div>

           </div>
        </div>
    );
};

export default Dashboard;
