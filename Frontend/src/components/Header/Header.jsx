import React, { useState } from 'react'
import logo from '../../assets/Navbar/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';
import { useLogout } from '../../Hooks/useLogout';
import toast from 'react-hot-toast';
function Header() {
  const { user,setUser } = useAuthContext();
  const nav = useNavigate();

  const handleLogout = async (e) => {
      e.preventDefault(); // Prevent default form behavior if used within a form
      try {
        const res = await fetch('http://localhost:3000/api/auth/logout', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({})
        });

        if (!res.ok) {
            // Throw an error if the response is not ok
            throw new Error(`Logout failed: ${res.statusText}`);
        }

        // Clear user state
        setUser(null);
        localStorage.removeItem("user");
        toast.success("Logout successful 👋");
        nav("/");
    } catch (error) {
        toast.error("Unable to logout ❌"); // Use toast.error for errors
    } finally {
        //setLoading(false); // Set loading to false after process is complete
    }
  };





  return (
    <>
      <div className="flex justify-around items-center -mb-">
        {/* logo */}

        <div className=" w-24">
          <img src={logo} alt="logo" srcset="" />
        </div>
        {/* services */}
        <div className="flex gap-4">
          <Link to={"/"}>Home</Link>
          <a href="#">Interview</a>
          <Link to={"dsa"}>DSA sheet</Link>
          <Link to={"contactus"}>Contact Us</Link>
        </div>
        {/* login and register */}
        {
          user ? <Link
          class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          //to={"/"}
          onClick={handleLogout}
        >
          Logout
        </Link>:<div className="flex justify-between gap-2">
          <Link
          to={"login"}
            className="group inline-block rounded-full bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            
          >
            <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
              Login
            </span>
          </Link>

          <Link to={"signup"}
            className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
          >
            Register
          </Link>
        </div>
        }
      </div>
    </>
  );
}

export default Header
