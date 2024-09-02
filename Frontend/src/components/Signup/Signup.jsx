import React, { useState } from "react";
import signup from '../../assets/Signup/signup.jpg';
import useSignup from "../../Hooks/useSignup.js";

function Signup() {
  const {loading,dosignup} = useSignup();

  const [input, setInput] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
    confirmpassword: '',
    position: '',
  });

  const submit = async(e) => {
    e.preventDefault();
    console.log(input);
   const res= await dosignup(input);
   console.log(res);
   
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left side image */}
        <div className="hidden md:flex md:w-1/2">
          <img
            src={signup}
            alt="Signup"
            className="object-cover w-full h-auto"
          />
        </div>
        
        {/* Right side form */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign Up</h2>
          
          <form onSubmit={submit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={input.fullname}
                onChange={(e) => setInput({ ...input, fullname: e.target.value })}
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={input.username}
                onChange={(e) => setInput({ ...input, username: e.target.value })}
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={input.password}
                onChange={(e) => setInput({ ...input, password: e.target.value })}
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={input.confirmpassword}
                onChange={(e) => setInput({ ...input, confirmpassword: e.target.value })}
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Confirm your password"
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                Position
              </label>
              <select
                id="position"
                name="position"
                value={input.position}
                onChange={(e) => setInput({ ...input, position: e.target.value })}
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="">Select your position</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Intern">Intern</option>
                <option value="Tech Lead">Tech Lead</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?
            <a href="#" className="text-blue-600 hover:underline"> Login</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
