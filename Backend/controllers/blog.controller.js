import { Blog } from "../Models/blog.model.js";
import { User } from "../Models/user.model.js";
export const createPost = async (req, res) => {
  try {
    const { title, content, company } = req.body;
    const userid = req.user_id;
    const blog = new Blog({
      title,
      content,
      company,
      author: userid,
    });
    if (!blog) {
      res.status(404).json({ error: "blog cannot be created" });
    }
    await blog.save();
    await User.updateOne({ _id: userid }, { $push: { blogs: blog?._id } });
    res.status(400).json({ message: "blog  saved user is valid" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server is not  responding" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const blogId = req.params.id;
    const userId = req.user_id;

   
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ error: "No user found while updating" });
    }

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found while updating" });
    }

    if (!user.blogs.includes(blogId)) {
      return res.status(400).json({ error: "Not authorized" });
    }

    const { title, content, company } = req.body;

    await Blog.updateOne(
      { _id: blogId },
      { $set: { title, content, company } }
    );

    res.status(200).json({ message: "Update successful" });
  } catch (error) {
    res.status(400).json({ error: "update error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const blogId = req.params.id;
    const userId = req.user_id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.blogs.pull(blogId);
    await user.save();

    const result = await Blog.deleteOne({ _id: blogId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "server is not responding" });
  }
};

export const getblogs = async (req, res) => {
  try {
    const userid = req.user_id;
    if (!userid) {
      return res.status(400).json({ error: "User ID not found" });
    }
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const blogPromises = user.blogs.map((blogId) => Blog.findById(blogId));
    const blogs = await Promise.all(blogPromises);
    const failedBlogs = blogs.filter((blog) => !blog);
    if (failedBlogs.length > 0) {
      return res.status(400).json({ error: "Some blogs could not be found" });
    }

    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ error: "An internal error occurred" });
  }
};

export const interview = async (req, res) => {
  try {
    const latestPost = await Blog.find().sort({ id: -1 }).limit(8).exec();
    res.status(200).json({ latestPost });
  } catch (error) {
    res.status(400).json({ error: "something went wrong interview" });
  }
};
