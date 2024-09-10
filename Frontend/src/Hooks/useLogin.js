import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const useLogin = ()=>{
    const naviagte = useNavigate();
    const [loading,setLoading]=useState(false);
    const {user,setUser} = useAuthContext();
    const login = async({email,password})=>{
        const res = checkValues({email,password});
        if(!res){
            return "CheckInputs returned false";
        }
        try {
            setLoading(true)
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/api/auth/login`,{
                method:"POST",
                headers: { "Content-Type": "application/json" },
                credentials:"include",
                body: JSON.stringify({email,password})
            });
            //console.log(res.ok);
            if(!res.ok){
                throw new Error(res.statusText);   
            }
            const data = await res.json();
            if(!data){
                toast.error("use do not exit")
            }
            setUser(data);
            localStorage.setItem("user",JSON.stringify(data))

            toast.success("Login ho gya")
            naviagte("/dashboard")
        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false)
        }
    }
    return {loading,login}
}

function checkValues({email,password}){
    if(!email || !password){
        toast.error('All fields are required 🖊️')
        return false;
    }
    return true;
}

export default useLogin;