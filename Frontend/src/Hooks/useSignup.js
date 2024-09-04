import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAuthContext();

  const dosignup = async ({ fullname, username, email, password, confirmpassword, position }) => {
    const checkValue = CheckInputs({ fullname, username, email, password, confirmpassword, position });
    if (!checkValue) {
      return "CheckInputs returned false";
    }
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, username, email, password, confirmpassword, position }),
      });
      const data = await res.json(); 
     // console.log(data);
       // Ensure you await the json parsing
      if (res.error) {
        throw new Error(res.error);
      }
      localStorage.setItem("user", JSON.stringify(data));
      if (data) toast.success("You have successfully signed up 👀");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { dosignup, loading };
};

function CheckInputs({ fullname, username, email, password, confirmpassword, position }) {
  if (!fullname || !username || !email || !password || !confirmpassword || !position) {
    toast.error("All fields are required 🖊️");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("Password and confirm password must match");
    return false;
  }
  return true;
}

export default useSignup;
