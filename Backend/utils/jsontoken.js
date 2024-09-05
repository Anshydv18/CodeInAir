import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{expiresIn:"10d"});

    res.cookie(
        "jwt",token,{
            httpOnly:true,
            maxAge:1*24*60*60*1000,
           // secure:true,
            sameSite:"strict",
        }
    )
}

export default generateTokenAndSetCookie