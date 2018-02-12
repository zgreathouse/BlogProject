import React from 'react';

const PostIndexItem = ({ post }) => {
  return (
    <div
      className="container left"
      style={{
        border: "solid black 1px",
        margin: "0 5px 5px 5px",
        padding: "10px"
      }}
    >
      <p className="right">{post.date}</p>
      <h5 style={{fontWeight: "bold"}}>{post.title}</h5>
      <p style={{marginLeft: "1em"}}>{post.body}</p>
    </div>
  )
}

export default PostIndexItem;
