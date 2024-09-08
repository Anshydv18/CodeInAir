import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

const Dashboard = () => {
  const [data, setData] = useState(null); // Initialize as null to handle loading state
  const [post, setPost] = useState([]);
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
            body: JSON.stringify({}), 
          }
        );

        if (!response.ok) {
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

        const data = await res.json(); 
        setPost(data.blogs || []); 
      } catch (error) {
       
        toast.error("Blog fetching error"); 
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
        fetchUser()
    } catch (error) {
        toast.error(error.message)
    }
  }

  return (
    <div className="px-16 bg-custom-gradient py-16 ">
      <div className="flex flex-row justify-end items-center">
        <h2 className="text-center w-full text-shadow-lg text-2xl font-bold bg-white py-3 rounded-xl mr-4">
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
      <div className="flex flex-row justify-evenly mt-12 mb-12">
        <div className="w-1/2 border-l-4 border-b-4">
          {/* Placeholder for potential future content */}
           <div className=" flex flex-row justify-around items-center">
            <div>
            <img src={`https://api.multiavatar.com/${data?.fullname}.svg`} 
            className="w-48"/>
            </div>
            <div className="flex flex-col gap-y-2  ">
              {/* for details of user */}
              <h1>Name : <span className="font-semibold underline text-md px-4">{data?.fullname }</span></h1>
              <h2>username: <span className="font-semibold underline text-md px-4"> {data?.username}</span></h2>
              <h2>email : <span className="font-semibold underline text-md px-4">{data?.email}</span> </h2>
              <h2>position : <span className="font-semibold underline text-md px-4"> {data?.position}</span></h2>
              <h2>Blog Count : <span className="font-semibold underline text-md px-4">{data?.blogs.length}</span></h2>
            </div>
           </div>
        </div>
        <div className="w-1/2 flex justify-center items-center px-4 pb-8  ml-4 border-l-4 border-b-4 ">
          <div className="pt-16 ">
            {post.length > 0 ? (
              post.map((post) => (
                <div className="flex items-center justify-between p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-md">
                  <span className="text-md font-medium">{post.title}</span>
                  <div className="mx-4 space-x-2">
                   <button
                      className=" mx-2 px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={(e)=>{nav('/post',{state:{data:post}})}}
                    >
                      View
                    </button>
                    <button
                      className=" mx-2 px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={(e)=>{nav('/updateeditor',{state:{data:post}})}}
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
