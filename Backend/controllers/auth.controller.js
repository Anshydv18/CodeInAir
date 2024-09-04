import { User } from "../Models/user.model.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/jsontoken.js";
export const Signup= async(req,res)=>{
    try {
        const {fullname,email,username,password,confirmpassword,position} = req.body;
       
      
        
        
        if(password!=confirmpassword){
            return res.status(400).json({error:"password do not match"});
        }
    
       
        const user = await User.findOne({email});
        
        if(user){ res.status(400).json({error:"email already in Use"})};
        const  checkuser = await User.findOne({username});
       
         if(checkuser){res.status(400).json({error:"username already in use"})};
        
         const salt = await bcrypt.genSalt(10);
        //  when we add salting it generates random 10 charcter string and add to the original string 
       
        
        const hassPassword = await bcrypt.hash(password,salt);
     
        
        
        const newUser = new User({
            fullname,
            email,
            username,
            password:hassPassword,
            position
        })
        
        
        if(!newUser){
            res.status(400).json({error:"Not able to create new User , please retry"});
        }
       await newUser.save();
        return res.status(200).json({message:"User Created Sucessfully 😍"})
    } catch (error) {
        return res.status(500).json({error:"Server is not responding"});
    }
};


export const Login = async (req, res) => {
  try {
      const { email, password } = req.body;

      // Use await to get the user
      const user = await User.findOne({ email });

      // Check if user exists
      if (!user) {
          return res.status(404).json({ error: "User doesn't exist with this email" });
      }

      // Check if password is correct
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
          return res.status(400).json({ error: "Password is incorrect" });
      }

      // Generate token and set cookie
      generateTokenAndSetCookie(user._id, res);

      // Respond with success
      return res.status(200).json({ message: "Login successful" });
  } catch (error) {
      // Handle any unexpected errors
      return res.status(500).json({ error: "Login unable, server issue" });
  }
};
  

  export const logout = async(req,res)=>{
    try {
        res.clearCookie("jwt",{maxage:0});
        res.status(200).json({
            message:"Logged out successfully"
        })
    } catch (error) {
        res.status(400).json({error:"unable to login",message:error.message});
    }
}

export const getDetail = async(req,res)=>{
    try {
        const name = req.body;
        
        const userid = req.user_id;
       const user = await User.findById(userid).select("-password");
       if(!user){
        res.status(400).json({error:"user not found"})
       }
    
       
       res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error:"Message mila nahi"})
    }

}