import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Interview = () => {
    const [post,setpost]=useState([])
    useEffect(()=>{
        // yaha mei 8 bando  ka experience show karaunga
        const data = async()=>{
            try {
                const res = await fetch('http://localhost:3000/api/blog/interview',{
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
    console.log(post)
  return (
    <div>
      { post.length>0 && post.map((post)=>(
        <div key={post._id}>{post.company}</div>
      ))}
    </div>
  )
}

export default Interview
