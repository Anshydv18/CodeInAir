import React, { useEffect, useState } from "react";
import logo from "../../assets/Navbar/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";

function Header() {
  const { user, setUser } = useAuthContext();
  const nav = useNavigate();
  const [data, setdata] = useState(null);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/api/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({}),
      });

      if (!res.ok) {
        throw new Error(`Logout failed: ${res.statusText}`);
      }

      setUser(null);
      localStorage.removeItem("user");
      toast.success("Logout successful 👋");
      nav("/");
    } catch (error) {
      toast.error("Unable to logout ❌");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/api/auth/getdetail`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({}),
        });

        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
       //toast.error("Error fetching data header");
        console.error("Fetch error:", error);
      }
    };

    const fetchblogs = async()=>{
      
    }
    fetchData();
  },[]);

  return (
    <div className="flex justify-around items-center -mb-">
      {/* logo */}
      <div className="w-24">
        <img src={logo} alt="logo" />
      </div>
      {/* services */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/interview">Interview</Link>
        <Link to="dsa">DSA sheet</Link>
        <Link to="contactus">Contact Us</Link>
      </div>
      {/* login and register */}
      {user ? (
        <div className="flex gap-x-2 justify-center items-center">
          <Link
            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            onClick={handleLogout}
          >
            Logout
          </Link>

         <Link to={"/dashboard"}>Dashboard</Link>
         
          
        </div>
      ) : (
        <div className="flex justify-between gap-2">
          <Link
            to="login"
            className="group inline-block rounded-full bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
          >
            <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
              Login
            </span>
          </Link>
          <Link
            to="signup"
            className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
