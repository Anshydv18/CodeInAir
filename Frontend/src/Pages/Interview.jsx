import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import img from '../../src/assets/herosection/herosection.jpg'
const Interview = () => {
  const nav = useNavigate();
    const [post,setpost]=useState([])
    useEffect(()=>{
        // yaha mei 8 bando  ka experience show karaunga
        const data = async()=>{
            try {
                const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/api/blog/interview`,{
                    method:"POST",
                    headers:{"Content-Type":"Application/json"},
                    body:JSON.stringify({})
                })
                if(!res.ok){
                    toast.error("something went wrong ,refresh please 👀")
                }
                const dd = await res.json()
                setpost(dd.latestPost)
            } catch (error) {
                toast.error(error.message)
            }
        }
        data();
    },[])
  
  return (
    <div
   
    className='bg-black mx-16'
    >
      <div className='w-full h-full glassmorphism'>
     <div className='flex flex-row flex-wrap gap-x-6 justify-around mt-16'
     >
         {/*  */}

         {post.length>0 && post.map((post)=>(
          <div className="card card-compact bg-base-100 w-96 shadow-xl mb-4">
          <figure>
           
               <div className='bg-custom-gradient flex justify-center items-center  h-[200px] w-full bg-green-500'>
                <h1 className='w-16 text-white font-bold text-4xl text-shadow-lg'>{post.company}</h1>
               </div>
          </figure>
           <div className="card-body">
            <h2 className="card-title">{post.company}</h2>
            <p>{post.title}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-shadow-sm" onClick={(e)=>{nav('/post', { state:{data:post}})}}>Read it</button>
            </div>
          </div>
           </div>
         ))}

         {/*  */}
     </div>
     </div>
    </div>
  )
}

export default Interview
