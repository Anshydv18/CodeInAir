import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useLogin = ()=>{
    const [loading,setLoading]=useState(false);
    const {user,setUser} = useAuthContext();
    const login = async({email,password})=>{
        const res = checkValues({email,password});
        if(!res){
            return "CheckInputs returned false";
        }
        try {
            setLoading(true)
            const res = await fetch('http://localhost:3000/api/auth/login',{
                method:"POST",
                headers: { "Content-Type": "application/json" },
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
            localStorage.setItem("user",JSON.stringify(data))
            setUser(data);
            toast.success("Login ho gya")
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