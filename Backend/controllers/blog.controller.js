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
        const userId = req.user_id;
        const user =  await User.findById({userId});
        if(!user){
            res.status(404).json({error:"user not found"})
        }
        user.blogs.pull(blogId);
        await user.save();
        res.status(200).json({message:"deleted Successfully"});
    } catch (error) {
        res.status(500).json({error:"server is not responding"});
    }
}


export const getblogs = async (req, res) => {
    try {
       
        
        const userid = req.user_id;
        if (!userid) {
            return res.status(400).json({ error: "User ID not found" });
        }

        // Fetch user
        const user = await User.findById(userid);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        
        

        // Fetch blogs
        const blogPromises = user.blogs.map(blogId => Blog.findById(blogId));
        const blogs = await Promise.all(blogPromises);

        // Check if any blog retrieval failed
        const failedBlogs = blogs.filter(blog => !blog);
        if (failedBlogs.length > 0) {
            return res.status(400).json({ error: "Some blogs could not be found" });
        }

        res.status(200).json({ blogs });
    } catch (error) {
        res.status(500).json({ error: "An internal error occurred" });
    }
};


export const interview = async(req,res)=>{
    try {
        const latestPost =  await Blog.find().sort({id:-1}).limit(8).exec();
        res.status(200).json({latestPost});
    } catch (error) {
        res.status(400).json({error:"something went wrong interview"})
    }
}