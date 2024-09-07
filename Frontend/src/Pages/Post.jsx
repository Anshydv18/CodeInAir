import React from 'react'
import DOMPurify from 'dompurify'
const Post = ({data}) => {
  return (
    <div>
       <div>
        <h2>{data.title}</h2>
        <p>{DOMPurify.sanitize(data.content)}</p>
        <h2>{data.company}</h2>
       </div>
    </div>
  )
}

export default Post
