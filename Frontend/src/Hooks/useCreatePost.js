import { useState } from "react"
import toast from "react-hot-toast";

export const useCreatePost = ()=>{
    const [loading,setLoading]=useState(false);
    const create = async({title,content,company})=>{
        setLoading(true);
        try {
            const res =  await fetch('http://localhost:3000/api/blog/create',{
                method:'POST',
                headers:{"Content-Type": "application/json"},
                credentials:"include",
                body:JSON.stringify({title,content,company})
            })
            if(!res.ok){
                toast.error(res.statusText)
            }
            toast.success("Post Created ✌️")
        } catch (error) {
            toast.error(error.message)
        }
    }
    return {loading,create}
}