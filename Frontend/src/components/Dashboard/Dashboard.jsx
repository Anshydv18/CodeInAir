import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

const Dashboard = () => {
  const [data, setData] = useState(null); // Initialize as null to handle loading state
  const [post, setPost] = useState([]);
  const [update,setupdate] =useState(0)
  const nav = useNavigate();

  
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/auth/getdetail",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({}), // Send an empty object if the backend expects a body
          }
        );

        if (!response.ok) {
          // Handle non-2xx responses
          throw new Error("Error fetching data");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        toast.error("Error fetching data, dashboard");
        console.error("Fetch error:", error);
      }
    };


    const blogs = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/blog/getblog", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({}),
        });

        if (!res.ok) {
          throw new Error("Error fetching data of blog");
        }

        const data = await res.json(); // Correctly parse the JSON response
        setPost(data.blogs || []); // Set post to empty array if data.blogs is undefined
      } catch (error) {
        console.error("Blog fetching error:", error); // Log the error for debugging
        toast.error("Blog fetching error"); // Display a user-friendly message
      }
    };

   useEffect(()=>{
    fetchUser();
    blogs();
   },[])

  const deletePost =  async(obj)=>{
    try {
        const response = await fetch(`http://localhost:3000/api/blog/delete/${obj}`,{
          method:"POST",
          headers:{"Content-Type":"Application/json"},
          credentials:"include",
          body:JSON.stringify({})
        })
        if(!response.ok){
          toast.error(response.statusText)
        }
        toast.success('post deleted 🤷‍♀️')
        blogs()
    } catch (error) {
        toast.error(error.message)
    }
  }

  return (
    <div className="px-16 border border-red-400">
      <div className="flex flex-row justify-end items-center">
        <h2 className="text-center w-full">
          Welcome: {data ? data.username : "Loading..."}
        </h2>
        <Link
          onClick={(e) => {
            nav("/editor");
          }}
          className="px-6 py-3 bg-sky-500 mr-16 my-1 rounded-xl hover:bg-sky-300"
        >
          CreatePost
        </Link>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2">
          {/* Placeholder for potential future content */}
        </div>
        <div className="flex justify-center items-center border shadow-lg px-4 pb-8">
          <div className="pt-16 ">
            {post.length > 0 ? (
              post.map((post) => (
                <div className="flex items-center justify-between p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-md">
                  <span className="text-md font-medium">{post.title}</span>
                  <div className="space-x-2">
                    <button
                      
                      className=" mx-2 px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Update
                    </button>
                    <button
                    onClick={() => deletePost(post._id)}
                      className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No blog posts available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
