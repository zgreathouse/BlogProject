import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post }) => {
  return (
    <div
      className="container left"
      style={{
        border: "solid black 1px",
        margin: "0 10px 10px 10px",
        padding: "10px"
      }}
    >
      <p className="right">{post.date}</p>
      <Link to={`posts/${post._id}`}>
        {post.title}
      </Link>
    </div>
  )
}

export default PostIndexItem;
