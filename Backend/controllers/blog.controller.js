import { Blog } from "../Models/blog.model.js";
import { User } from "../Models/user.model.js";
export const createPost = async(req,res)=>{
    try {
        
        
        const {title, content,company} = req.body;
        const userid = req.user_id;
        const blog =  new Blog({
            title,
            content,
            company,
            author:userid
        })
        if(!blog){
            res.status(404).json({error:"blog cannot be created"})
        }
        await blog.save();
        await User.updateOne({_id:userid},{$push:{blogs:blog?._id}})
        res.status(400).json({message:"blog  saved user is valid"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:"server is not  responding"});
    }
}

export const updatePost = async(req,res)=>{
   try {
     const blogId = req.params.id;
     const {title,content} = req.body;
     await Blog.updateOne({
        _id:blogId
     },
     {
        $set:{
            title:title,
            content:content
        }
     }
    )
    res.status(200).json({message:"update "})
   } catch (error) {
     res.status(400).json({error:"update error"})
   }
}

export const deletePost = async(req,res)=>{
    try {
        const blogId = req.params.id;
        await Blog.deleteOne({_id:blogId});
        res.status(200).json({message:"deleted Successfully"});
    } catch (error) {
        res.status(500).json({error:"server is not responding"});
    }
}