import React, { useEffect, useState } from "react";
import img from '../../assets/Login/login.jpg'
import useLogin from "../../Hooks/useLogin.js";
import { useAuthContext } from "../../Context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function Login() {
  const [inputs,setInputs]=useState({
    email:"",
    password:""
  })
  const navigate= useNavigate();
  const {user, setUser} = useAuthContext();
  const {loading,login}=useLogin();
  const handlesubmit = async(e)=>{
    e.preventDefault();
    const res = await login(inputs);
    if(user){
      navigate("/dashboard")
    }
  }

  return (
  
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
    
        {/* Left side image */}
        <div className="hidden md:flex md:w-1/2">
          <img
            src={img}
            alt="Login"
            className="object-cover w-full h-auto"
          />
        </div>
        
        {/* Right side form */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h2>
          
          <form action="#" className="space-y-6">
            <div>
              <label htmlFor="usernameOrEmail" className="block text-sm font-medium text-gray-700">
                Username or Email
              </label>
              <input
                type="text"
                id="usernameOrEmail"
                value={inputs.email}
                onChange={(e)=>setInputs({...inputs,email:e.target.value})}
                name="usernameOrEmail"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Enter your username or email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={inputs.password}
                onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                name="password"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="rememberMe" className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>

            <div>
              <button
               
                className="w-full flex justify-center bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={handlesubmit}
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?
            <a href="#" className="text-blue-600 hover:underline"> Sign up</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
