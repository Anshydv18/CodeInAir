import React, { useState } from 'react'
import logo from '../../assets/Navbar/logo.png'
import { Link } from 'react-router-dom';
function Header() {
  const [popup,setpop] = useState(false);
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
        <div className="flex justify-between gap-2">
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
      </div>
    </>
  );
}

export default Header
