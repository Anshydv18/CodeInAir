import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DOMPurify from "dompurify";

function PostInterview() {
  const [post, setPost] = useState({});
  const location = useLocation();

  useEffect(() => {
    const data = location.state?.data || {};
    setPost(data);
  }, [location.state]);

 
  if (!post || Object.keys(post).length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="px-16">
      <h1 className="px-16 mb-4 text-4xl font-semibold bg-teal-700 py-6">{post.title}</h1>
      <div class="max-w-full overflow-x-auto bg-white p-4 shadow-md">
    <p
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(post.content),
      }}
      className="break-all"
    />
      </div>
      <h2 className=" inline-block bg-red-500 px-16 py-4 rounded-xl">{post.company}</h2>
    </div>
  );
}

export default PostInterview;
